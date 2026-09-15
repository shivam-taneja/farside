use tauri::menu::{Menu, MenuItem, PredefinedMenuItem};
use tauri::tray::TrayIconBuilder;
use tauri::{App, Emitter, Manager};

pub fn create_tray(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let show_i = MenuItem::with_id(app, "show", "Show Farside", true, None::<&str>)?;
    let separator1 = PredefinedMenuItem::separator(app)?;
    let version_i = MenuItem::with_id(app, "version", "Version 1.0.0", false, None::<&str>)?;
    let updates_i = MenuItem::with_id(app, "updates", "Check for Updates...", true, None::<&str>)?;
    let calibrate_i = MenuItem::with_id(
        app,
        "calibrate",
        "Calibrate...",
        true,
        Some("CmdOrControl+,"),
    )?;
    let separator2 = PredefinedMenuItem::separator(app)?;
    let quit_i = MenuItem::with_id(app, "quit", "Quit Farside", true, Some("CmdOrControl+Q"))?;

    let menu = Menu::with_items(
        app,
        &[
            &show_i,
            &separator1,
            &version_i,
            &updates_i,
            &calibrate_i,
            &separator2,
            &quit_i,
        ],
    )?;

    #[cfg(not(target_os = "macos"))]
    let tray_icon = tauri::image::Image::from_bytes(include_bytes!("../icons/32x32.png"))?;
    #[cfg(target_os = "macos")]
    let tray_icon = tauri::image::Image::from_bytes(include_bytes!("../icons/trayTemplate.png"))?;

    let mut tray_builder = TrayIconBuilder::new().icon(tray_icon).menu(&menu);

    #[cfg(target_os = "macos")]
    {
        tray_builder = tray_builder.icon_as_template(true);
    }

    tray_builder
        .on_menu_event(|app, event| match event.id.as_ref() {
            "show" => {
                if let Some(window) = app.get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                }
            }
            "updates" => {
                if let Some(window) = app.get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                    let _ = window.emit("navigate", "/about");
                }
            }
            "calibrate" => {
                if let Some(window) = app.get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                    let _ = window.emit("navigate", "/calibration");
                }
            }
            "quit" => {
                app.exit(0);
            }
            _ => {}
        })
        .on_tray_icon_event(|tray, event| {
            use tauri::tray::{MouseButton, MouseButtonState, TrayIconEvent};
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                if let Some(window) = tray.app_handle().get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                }
            }
        })
        .build(app)?;

    Ok(())
}
