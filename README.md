# hearsitter

<p align="center">
<img src="https://user-images.githubusercontent.com/88659167/229131308-d658434a-cc34-46d0-a3da-4f2cb86272d0.png" width="140px" alt="HearSitter Logo" />
</p>

Hi! **hearsitter** is an app that assists deaf parents who are raising young children that helps them address problems they might face during childcare. The app listens to the surroundings and alerts parents about potential risks during parenting.

This is introduction page, you can click below links to see our cool project code.

**ML>>** https://github.com/kimdj98/hearsitter-ML
**Mobile>>** https://github.com/gdsc-ys/hearsitter-flutter
**Server>>** https://github.com/jimmy0006/hearsitter-server-main

## <img src="https://user-images.githubusercontent.com/88659167/229186972-d278f732-c164-4bb9-af27-f157d68303d0.png" width= "40" height="20"> GDSC 2023 Solution Challenge

Google Solution Challenge is an annual contest that invites students from GDSC communities to create solutions for local community problems using Google technologies.

You can select the sounds you want the app to recognize.

You can also use a table that gives relative descriptions about how loud certain decibels are, since deaf people may struggle to understand what certain sounds mean solely based on the decibel numbers.

The app is able to recognize several different types of sounds, such as an infant crying, glass breaking, car horn honking, fire alarms and much more.

You can also receive notifications through smart watches.

> [Click to watch demo video on Youtube](https://www.youtube.com/watch?v=pZBiAt61sQo)

|                                                            Preview                                                            |                                                    Home screen                                                    |                                                        History Screen                                                         |                                                     Decibel Scale Screen                                                      |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/88659167/229133364-a701ac23-aea2-409a-9da2-9779c75bbaf2.gif" width='95%'> | <img src="https://user-images.githubusercontent.com/88659167/229136140-da524ef0-1077-4825-bdfd-f0a708de4377.jpg"> | <img src="https://user-images.githubusercontent.com/88659167/229135997-da398cfa-0041-447e-b955-cff420323fb6.jpg" width='95%'> | <img src="https://user-images.githubusercontent.com/88659167/229136318-85a5a405-0f1f-41f0-807e-f24a1e4014a3.jpg" width='95%'> |

## 🌐 Sustainable Development Goals (SDGs)

<table>
<tr>
<th>Goal 4</th>
<th>Goal 10</th>
<th>Goal 11</th>
</tr>
<tr>
<td align="center">Quality Education</td>
<td align="center">Reduced Inequalities</td>
<td align="center">Sustainable Cities</td>
</tr>
<tr>
<td align="center"><image src="https://user-images.githubusercontent.com/88659167/229183112-bf747fd6-0d2c-444c-b1c5-b2056d5f56f9.png"  width="100" height="100" ></td>
<td align="center"><image src="https://user-images.githubusercontent.com/88659167/229183050-c9550c55-9325-4906-b925-ce447253b165.png"  width="100" height="100"></td>
<td align="center"><image src="https://user-images.githubusercontent.com/88659167/229182972-35b04347-ff8c-4525-b837-34deda17a370.png"  width="100" height="100" ></td>
</tr>
</table>

## 📐 Application Architecture

<img src="https://user-images.githubusercontent.com/88659167/229185945-4c81ce5d-2742-48a5-9392-212e1008565c.png" width=75%>

We use Flutter to make mobile application, go Fiber to make main server, python Tensorflow to make ML server. Servers run on the Google Cloud Platform.

The mobile app sends the sound to server, received from the real-time audio stream in seconds.

The main server sends requests to series of ML server, balancing requests appropriately. Main server and ml sever connect via gRPC. And ml server made into a docker image, so easy to increase the number of ml servers.

The ml server analyzes this and delivers the results to the main server.

For classification task we used EfficientAT model. When choosing model the aspects we have focused on was speed and performance. Transformer has been a good choice for audio tagging performance, however it lacks in inference time. Instead, EfficientAT uses Knowledge Distillation from Transformers with lightweight CNN for fast inference time and high performance.

App store recieved result data in local DB using SQLite. App show data and display notifications.

## 🧑‍💻 Members

<table>
  <tr>
     <td align="center">
        <a href="https://github.com/kimdj98">
          <img src="https://avatars.githubusercontent.com/u/81472155?v=4" width="100px" alt=""/><br />
          <sub><b>DongJae Kim</b></sub>
        </a><br/>
        <a href="https://github.com/kimdj98/hearsitter-ML">        
            ML
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/watchstep">
          <img src="https://avatars.githubusercontent.com/u/88659167?v=4" width="100px" alt=""/><br />
          <sub><b>Juii Kim</b></sub>
        </a><br/>
        <a href="https://github.com/gdsc-ys/hearsitter-flutter">        
           Mobile
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/jimmy0006">
          <img src="https://avatars.githubusercontent.com/u/45549879?v=4" width="100px" style="border-radius:70%" alt=""/><br />
          <sub><b>YoungMin Jin</b></sub><br/>
        <a href="https://github.com/jimmy0006/hearsitter-server-main">        
            Server
        </a>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mumwa">
          <img src="https://avatars.githubusercontent.com/u/13832137?v=4" width="100px" alt=""/><br />
          <sub><b>HyoJeong Park</b></sub>
        </a><br/>
        <a href="https://github.com/mumwa/hearsitter-landingpage">        
            Web Frontend
        </a>
    </td>
  </tr>
</table>

## 📧 Contact Us

Please email <gdsc.yonsei.hearsitter@gmail.com>
