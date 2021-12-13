const gravatarEmail = 'cheran.v.senthil@gmail.com'

const userIds = {
  codeforces: 'c1729',
  email: 'cheran.v.senthil@gmail.com',
  github: 'cheran-senthil',
  linkedin: 'cheran-senthil',
}

const link = {
  codeforces: `https://codeforces.com/profile/${userIds.codeforces}`,
  email: `mailto:${userIds.email}`,
  github: `https://github.com/${userIds.github}`,
  linkedin: `https://www.linkedin.com/in/${userIds.linkedin}`,
  resume: `./resume.pdf`,
}

const linksOrder = ['email', 'github', 'linkedin', 'codeforces', 'resume']

const gravatarHash = CryptoJS.MD5(gravatarEmail.toLowerCase())
const profileImage = document.createElement('img')
profileImage.src = `https://gravatar.com/avatar/${gravatarHash}?s=200`
profileImage.className = 'profile-image'

let links = document.createElement('div')
links.className = 'links'

linksOrder.forEach(type => {
  const linkElement = document.createElement('a')
  linkElement.className = 'link'
  linkElement.href = link[type]

  const image = document.createElement('img')
  image.src = `./images/${type}.png`

  linkElement.appendChild(image)

  links.appendChild(linkElement)
})

document.body.appendChild(profileImage)
document.body.appendChild(document.createElement('br'))
document.body.appendChild(links)
