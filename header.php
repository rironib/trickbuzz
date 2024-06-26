<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?php wp_title(''); ?></title>
   <link href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" type="text/css">

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Atomic+Age&family=Lexend:wght@100..900&display=swap" rel="stylesheet">

   <link rel="preconnect" href="https://cdn.jsdelivr.net">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" />

   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2274017621360737" data-overlays="bottom" crossorigin="anonymous"></script>

   <?php wp_head(); ?>

</head>


<body>
   <!-- navbar -->
   <nav class="navbar">
      <h1 class="logo_item">
         <i class="bx bx-menu" id="sidebarOpen"></i>
         TrickBuzz
      </h1>

      <div class="navbar_content">
         <form class="search_bar" action="<?php echo esc_url(home_url('/')); ?>">
            <input name="s" type="text" placeholder="Search" />
         </form>
         <?php
         if (is_user_logged_in()) {
            $current_user = wp_get_current_user();
            $avatar = get_avatar($current_user->ID, 40);
            echo $avatar;
            echo '<a href="' . esc_url(home_url()) . '/wp-admin/" title="Dashboard">
                     <i class="ri-apps-line"></i>
                  </a>
                  <a href="' . wp_logout_url(home_url()) . '" title="Logout">
                     <i class="ri-logout-circle-r-line"></i>
                  </a>';
         } else {
            echo '<a href="' . esc_url(home_url()) . '/wp-login.php" title="Login">
                     <i class="ri-login-circle-line"></i>
                  </a>';
         }
         ?>
      </div>
   </nav>