<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>Messenger - Incredible Design</title>
</head>
<body>
    <div class="left">
        <div class="head">
            <h1>Messanger</h1>
        </div>
        <div class="profile">
            <div class="navsetmenu">
                <div class="pos">
                    <img src="logout.png" alt="">
                    <p>Log out</p>
                </div>
            </div>
                <div class="back">
                    <div class="logobackground">
                        {{Auth::user()->name[0]}}
                    </div>
                    <p class="username">{{Auth::user()->name}}</p>
                    <img class="imgsett" src="setting.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="messages">
            <div class="msg">
            </div>
        </div>
        <div class="message">
            <form action="" method="post">
                <input type="text" name="text" placeholder="Введите ваше сообщение" autocomplete="off">
                <div class="btn">
                    <button type="sumbit" class="btndisabled" name="btn">Отправить</button>
                </div>
            </form>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>