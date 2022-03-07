let blogs = []

function addBlog(){

    let Name = document.getElementById('Name').value
    let Date = document.getElementById('Date').value
    let Date2 = document.getElementById('Date2').value
    let Desc = document.getElementById('Desc').value
    let Tech = document.getElementById('Tech').value
    let Image = document.getElementById('Image').files[0]

    Image = URL.createObjectURL(Image)

    let blog = {
        name: Name,
        date: Date,
        date2: Date2,
        desc: Desc,
        tech: Tech,
        image: Image,
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog(){
    let blogContainer = document.getElementById('Card')

    blogContainer.innerHTML = `<div class="card">
    <div class="img">
        <img src="assets/blog-img.png" alt="">
    </div>

    <div class="tittle">
        <h2>Hallo</h2>
    </div>

    <div class="duration">
        <h3>3 Month</h3>
    </div>

    <div class="card-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, necessitatibus.</p>
    </div>

    <div class="after-content">
        <div class="ps">
            <img src="assets/ps.png" alt="" style="width: 50px;">
        </div>

        <div class="andro">
            <img src="image/android.png" alt="" style="width: 50px;">
        </div>

        <div class="java">
            <img src="image/java2.jpg" alt="" style="width: 50px;">
        </div>

        <div class="nodejs">
            <img src="image/git.png" alt="" style="width: 50px;">
        </div>
    </div>

    <div class="button">
        <div class="button1">
            <a href="">Edit</a>
        </div>

        <div class="button2">
            <a href="">Delete</a>
        </div>
    </div>
</div>
`

    for( i = 0; i < blogs.length; i++ ){
        blogContainer.innerHTML += `<div class="card">
        <div class="img">
            <img src="${blogs[i].image}" alt="">
        </div>

        <div class="tittle">
            <h2>${blogs[i].name}</h2>
        </div>

        <div class="duration">
            <h3>${blogs[i].date} - ${blogs[i].date2} </h3>
        </div>

        <div class="card-content">
            <p>${blogs[i].desc}</p>
        </div>

        <div class="after-content">
            <div class="ps">
                <img src="assets/ps.png" alt="" style="width: 50px;">
            </div>

            <div class="andro">
                <img src="image/android.png" alt="" style="width: 50px;">
            </div>

            <div class="java">
                <img src="image/java2.jpg" alt="" style="width: 50px;">
            </div>

            <div class="nodejs">
                <img src="image/git.png" alt="" style="width: 50px;">
            </div>
        </div>

        <div class="button">
            <div class="button1">
                <a href="">Edit</a>
            </div>

            <div class="button2">
                <a href="">Delete</a>
            </div>
        </div>
    </div>`
    }
    
    
}

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

]

function getFullTime(){
    let time = new Date()

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let minutes = time.getMinutes()


    comsole.log(date)
    console.log(month[monthIndex])
    console.log(year)
    console.log(minutes)
    console.log()
}

getFullTime()
