<?php
$data = array (
		'name' => '',
		'firstname' => '',
		'email' => '',
		'message' => '');
$emptyField = array(
			'name' => '',
			'Fname' => '',
			'mail' => '',
			'message' => '');
$confirmMail='';
$to = "g.leclercq@iesanetwork.com";
$subject = "Message de mon portfolio";
$mailheaders = "From: Portfolio \n";
$mailheaders .= "Reply-To: ".$data['email'];
if (isset($_POST['contact']))
{
	$data=$_POST['contact'];
	$cleanData=array_map('strip_tags', $data);
	$error=false;
	if (empty($data['name']))
	{
		$error=true;
		$emptyField['name']='class="empty"';
	}
	if (empty($data['firstname']))
	{
		$error=true;
		$emptyField['Fname']='class="empty"';
	}
	if (empty($data['email']))
	{
		$error=true;
		$emptyField['mail']='class="empty"';
	}
	if (empty($data['message']))
	{
		$error=true;
		$emptyField['message']='class="empty"';
	}
	if (!$error)
	{
		$msg="Message de ".$cleanData['firstname']." ".$cleanData['name']."\n Adresse e-mail : ".$cleanData['email']."\n Message :".$cleanData['message'];
		mail($to, $subject, $msg, $mailheaders);
		$confirmMail = '<h3>Message envoyé !</h3>';
	}
}

?>


<?php echo $confirmMail;?>
<FORM method="POST" action="index.php#form">
	<input type="text" name="contact[name]" value="<?php echo $data['name'];?>" placeholder="Entrez votre nom" onfocus="if (this.placeholder=='Entrez votre nom') this.placeholder='';" onBlur="if (this.placeholder=='') this.placeholder='Entrez votre nom';" <?php echo $emptyField['name'];?> > 
	<input type="text" name="contact[firstname]" value="<?php echo $data['firstname'];?>" placeholder="Entrez votre prénom" onfocus="if (this.placeholder=='Entrez votre prénom') this.placeholder='';" onBlur="if (this.placeholder=='') this.placeholder='Entrez votre prénom';" <?php echo $emptyField['Fname'];?>> 
	<input type="email" name="contact[email]" value="<?php  echo $data['email'];?>" placeholder="Votre.mail@exemple.com" onfocus="if (this.placeholder=='Votre.mail@exemple.com') this.placeholder='';" onBlur="if (this.placeholder=='') this.placeholder='Votre.mail@exemple.com';" <?php echo $emptyField['mail'];?>> 
	<textarea rows="5" cols="30" name ="contact[message]"  placeholder="Entrez votre message ..." onfocus="if (this.placeholder=='Entrez votre message ...') this.placeholder='';" onBlur="if (this.placeholder=='') this.placeholder='Entrez votre message ...';" <?php echo $emptyField['message'];?>><?php echo $data['message'];?></textarea> 
	<input type="submit" name="validation" value="Valider" class="valid">
</FORM>