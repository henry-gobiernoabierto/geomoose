<?php
  session_start(); //to ensure you are using same session
  $error = false;

  if( isset($_POST['username']) ) {
    $db = pg_connect( "host=127.0.0.1 port=5432 dbname=mapserver user=postgres"  );
    if(!$db){
      $error = true;
      $message = "No se pudo conectar a la base de datos";
      echo $message;
      exit;
    } else {

      $sql = "SELECT * FROM users WHERE username = '" . $_POST['username'] . "' AND password = '" . md5($_POST['password']) . "'";

      $ret = pg_query($db, $sql);
      if(!$ret){
        $error = true;
        $message = pg_last_error($db);
        exit;
      } 
      while($row = pg_fetch_row($ret)){
        $user['id'] = $row[0];
        $user['username'] = $row[1];
      }
      pg_close($db);
      if( isset($user) ) {
        $_SESSION['settings'] = 'internal_settings.ini';
        $_SESSION['user'] = $user;
        header('Location: /geomoose.php');
        die();
      } else {
        $_SESSION['settings'] = null;
        $_SESSION['user'] = null;
        $error = true;
        $message = 'Usuario o contraseña incorrecta';
      }
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Autenticación</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
      <br />
      <div class="jumbotron">
        <?php 
          if( $error ) {
        ?>
          <div class="alert alert-danger" role="alert">
            <p><?= $message ?></p>
          </div>          
        <?php
          }
        ?>
        <form method="post">
          <div class="form-group">
            <label for="inputEmail">Usuario</label>
            <input type="text" name="username" class="form-control" id="inputEmail" placeholder="Ingrese su usuario" value="<?= isset($_POST['username']) ? $_POST['username'] : '' ?>">
          </div>
          <div class="form-group">
            <label for="inputPassword">Contraseña</label>
            <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Contraseña">
          </div>
          <button type="submit" class="btn btn-primary">Acceder</button>
          <a href="../geomoose.php" class="btn btn-default">Cancelar</a>
        </form>
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  </body>
</html>
