<?php
	$ua = $_SERVER['HTTP_USER_AGENT'];
    if (strpos($ua,'MSIE') != false && strpos($ua,'Opera') === false)
    {
		if (strpos($ua,'Windows NT 5.2') != false)
		{
			if(strpos($ua,'.NET CLR') === false) return;
		}
		if (substr($ua,strpos($ua,'MSIE')+5,1) < 9)
		{
			$ifIe = 'Vous utilisez un navigateur trop ancien. <a href="http://browsehappy.com/">Mettez le à jour</a> pour améliorer la navigation.';
        }
	}
	
	//calculate my age -> add this on serveur change
	//$tz  = new DateTimeZone('Europe/Paris');
	//$age = DateTime::createFromFormat('d/m/Y', '12/05/1988', $tz)->diff(new DateTime('now', $tz))->y;
	?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Portfolio de Guillaume Leclercq | Intégrateur - Développeur</title>
	<meta name="description" content="Intégration - Développement de site web | Nouvelles technologies - Paris - France">
	<meta name="keywords" content="intégration, développement, site, internet, paris, web, html5, php, responsive design" />
	<meta name="Author" content="Guillaume Leclercq">
	<link type="text/plain" rel="author" href="http://www.iesanetwork.com/g.leclercq/humans.txt" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<!-- Mobile viewport optimized -->
	<meta name="viewport" content="width=device-width">
	<link href='http://fonts.googleapis.com/css?family=Advent+Pro:500' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
	<link href="css/style.css" rel="stylesheet" type="text/css" media="screen"/>
	<script type="text/javascript" src="js/modernizr.custom.84859.js"></script>
</head>

<body>
<!-- Facebook SDK -->
<div id="fb-root"></div>
<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>           
<!-- if ie6/7/8 -->
<?php if (isset($ifIe)):?>
	<?php echo $ifIe;?>
<?php endif;?>
<div id="container">
	<div id="main">
		<header>
			<h1 id="intro">Intégrateur | Développeur</h1>
			<nav>
				<ul id="nav">
					<li><a href="#intro" title="Haut de la page" id="lien1" class="active icon">Ç</a></li>
					<li><a href="#second" title="Mes réalisations" id="lien2" class="btn-gris icon">A</a></li>
					<li><a href="#third" title="CV et compétences" id="lien3" class="btn-gris icon">D</a></li>
					<li><a href="#fourth" title="Me contacter" id="lien4" class="btn-gris icon">É</a></li>
				</ul>
			</nav>
		</header>
		<div id="second">
			<h2>Mes réalisations</h2>
			<?php include 'slider.php';?>
		</div> <!--#second-->
		<div id="third" class="clearfix">
			<h2>CV et compétences</h2>
				<article id="competences">
					<div id="animBar">
						<p>Langages</p>
						<div class="skill clearfix">
							<p>HTML5, CSS3</p>
							<div class="anim">
								<div class="skillbar progress"></div>
							</div>
						</div>
						
						<div class="skill clearfix">
							<p>responsive design</p>
							<div class="anim">
								<div class="skillbar2 progress"></div>
							</div>
						</div>
						
						<div class="skill clearfix">
							<p>Php</p>
							<div class="anim">
								<div class="skillbar3 progress"></div>
							</div>
						</div>
						
						<div class="skill clearfix">
							<p>Jquery - Javascript</p>
							<div class="anim">
								<div class="skillbar4 progress"></div>
							</div>
						</div>
						
						<div class="skill clearfix">
							<p>drupal</p>
							<div class="anim">
								<div class="skillbar5 progress"></div>
							</div>
						</div>
						
						<div class="skill clearfix">
							<p>wordpress</p>
							<div class="anim">
								<div class="skillbar6 progress"></div>
							</div>
						</div>
					</div>
					<div class="presentation">
						<p>Je m'appelle Guillaume, j'ai <?php //add this on serveur changeecho $age;?>25 ans et ce site est mon portfolio.</p>
						<p>J'ai suivi une formation de chef de projet multimédia à l'IESA Multimédia. Je me suis ensuite spécialisé dans l'intégration puis le développement.</p>
						<p>J'ai d'autant plus été séduit par le responsive design. J'aime le défi d'adapter un seul site sur tous les supports.</p>
						<a href="images/cv.pdf" id="cv" class="btn">Télécharger mon cv</a>
					</div>
				</article>
			
		</div> <!--#third-->
		<div id="fourth">
			<h2>Contact</h2>
			<div id="centrecontact">
				<p>Guillaume</p>
				<p>Leclercq</p>
				<p class="tel">06.86.25.07.03</p>
				<p class="call"><a href="tel:+33686250703" class="btn">M'appeler</a></p>
				
				<div class="separate"></div><p class="inlineBlock">ou</p><div class="separate"></div>
				
				<p>M'envoyer un message :</p>
				<div id="form">
				<?php include 'form.php';?>
				</div>
			</div>
		</div> <!--#fourth-->
		<footer class="clearfix">
			<p>Guillaume Leclercq ©2013. Français (France). Tous droits réservés.</p>
			<section class="social fb">
				<div class="fb-like" data-href="http://www.iesanetwork.com/g.leclercq" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-font="segoe ui" data-colorscheme="dark"></div>
			</section>
			<section class="social tweet">
				<a href="https://twitter.com/share" class="twitter-share-button" data-via="g_leclercq" data-lang="fr">Tweeter</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
			</section>
			<section class="social">
				<script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
				<script type="IN/Share" data-url="http://www.iesanetwork.com/g.leclercq"></script>
			</section>
		</footer>
	</div><!--#main-->
</div><!--#container-->
<script defer src="js/jquery.flexslider.js"></script>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>-->
<script src="js/jquery.1.9.1.js"></script>
<script src="js/jquery.inview.js"></script>
<script type="text/javascript" src="js/nav.js"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38585758-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>
