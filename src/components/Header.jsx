import profileImg from '../assets/profile.jpeg'

export default function Header() {
  return (
    <header className="mb-8 flex flex-col items-center text-center">
      <img
        src={profileImg}
        alt="Nova Nurachman"
        className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md mb-4 hover:scale-105 transition-transform duration-300 profile-img"
      />
      <h1 className="text-3xl font-bold">Nova Nurachman</h1>
      <p className="text-gray-600">IT Support & Web Developer Enthusiast</p>
      <p className="text-sm mt-1">Bekasi, Indonesia | <a
          href="https://wa.me/628983342429"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700"
        >
          +62-898-3342-429
        </a></p>
      <a
        href="mailto:nv.nrchmn@gmail.com"
        className="text-blue-600 hover:underline"
      >
        nv.nrchmn@gmail.com
      </a>
      <div className="mt-2">
        <a
          href="https://linkedin.com/in/nvnrchmn"
          target="_blank"
          className="text-blue-500 underline hover:text-blue-700"
        >
          LinkedIn
        </a>
      </div>
    </header>
  )
}
