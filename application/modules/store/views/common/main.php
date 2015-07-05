<!DOCTYPE html>
<html lang="en">
<head>
	<title>Home / Magic fashion </title>
	<meta charset="UTF-8">
	<meta name="author" content="Christian Siriano">
	<meta name="description" content="Designer clothing, accessories, and gift items.">
	<meta name="keywords" content="Tops, Skirts, Dresses, Accessories, Limited Edition, Outerwear, Bottoms, Jewelry, Shoes, Sketches, Gifts, Under $150">
	<meta name="generator" content="Big Cartel">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<!-- include jquery -->
	<script type="text/javascript" src="<?php echo base_url(); ?>public/plugins/jQuery/jQuery-2.1.4.min.js"></script>
	<!-- end include jquery -->
	<!-- include bootstrap -->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>public/bootstrap/css/bootstrap.css">
	<script type="text/javascript" src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.js"></script>
	<!-- end include bootstrap -->
	<!-- custom css stylesheet -->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>public/store/stylesheet.css">
	<!-- end -->
</head>
<body id="home_page" class="theme">
<!-- Header -->
<?php $this->load->view("common/header"); ?>
<!-- End Header -->
<!-- Main -->
<div id="content" class="strip">
      <div class="canvas fade_in">
      		<?php $this->load->view('home'); ?>
      </div>
</div>      
<!-- End Main -->
<!-- Footer -->
<?php $this->load->view("common/footer"); ?>
<!-- End Footer -->
</body>
</html>
