<?php

/**
 * CSSやJSなど外部ファイルを読み込む
 */
function add_link_files()
{
  // CSS読み込み
  wp_enqueue_style(
    'main',
    get_template_directory_uri() . '/styles/main.min.css',
    array(),
    filemtime(get_template_directory() . '/styles/main.min.css')
  );

  // JavaScript読み込み
  wp_enqueue_script(
    'main',
    get_template_directory_uri() . '/scripts/main.bundle.js',
    array(),
    filemtime(get_template_directory() . '/scripts/main.bundle.js')
  );
}

add_action('wp_enqueue_scripts', 'add_link_files');


/**
 * 生成されたscriptタグにtype=module属性をつける
 */
function add_type_attribute($tag, $handle, $src)
{
  // importを使用しないJSには適用しない
  if ('main' !== $handle) {
    return $tag;
  }
  // scriptタグにtype="module"を追加
  $tag = '<script type="module" src="' . esc_url($src) . '"></script>';

  return $tag;
}

add_filter('script_loader_tag', 'add_type_attribute', 10, 3);
