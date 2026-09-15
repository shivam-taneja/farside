// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            #[cfg(desktop)]
            {
                use tauri::menu::{Menu, MenuItem};
                use tauri::tray::TrayIconBuilder;

                let quit_i = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
                let menu = Menu::with_items(app, &[&quit_i])?;

                #[cfg(not(target_os = "macos"))]
                let tray_icon =
                    tauri::image::Image::from_bytes(include_bytes!("../icons/32x32.png"))?;
                #[cfg(target_os = "macos")]
                let tray_icon =
                    tauri::image::Image::from_bytes(include_bytes!("../icons/trayTemplate.png"))?;

                let mut tray_builder = TrayIconBuilder::new().icon(tray_icon).menu(&menu);

                #[cfg(target_os = "macos")]
                {
                    tray_builder = tray_builder.icon_as_template(true);
                }

                let _tray = tray_builder
                    .on_menu_event(|app, event| match event.id.as_ref() {
                        "quit" => {
                            app.exit(0);
                        }
                        _ => {}
                    })
                    .build(app)?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
