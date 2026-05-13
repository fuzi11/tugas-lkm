import faza from "../assets/faza.jpg";
import danar from "../assets/Danar.jpg";
import fariz from "../assets/fariz.jpeg";
import viola from "../assets/viola.JPG";

function Members() {
  const mentor = [
    {
      id: 1,
      name: "fassad",
      linkId: "",
      img: "",
    },
    {
      id: 2,
      name: "",
      linkId: "",
      img: "",
    },
  ];

  const members = [
    {
      id: 1,
      name: "Muhammad Nibras Zahran Irawan",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 2,
      name: "Nazwa Nurul Aulia",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 3,
      name: "Fariz Alwasi",
      npm: "257006111117",
      linkId:
        "https://www.linkedin.com/in/fariz-alwasi-2a89a5404?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: fariz,
    },
    {
      id: 4,
      name: "Desvitasari",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 5,
      name: "Muhammad Ikhsan Al Rizal",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 6,
      name: "Taufik Sabillah",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 7,
      name: "Ilham Syarif Hidayat",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 8,
      name: "Viola Diva Ananda",
      npm: "",
      linkId: "tes",
      img: viola,
    },
    {
      id: 9,
      name: "Fauzi Firmansyah",
      npm: "",
      linkId: "tes",
      img: "",
    },
    {
      id: 10,
      name: "Danar Yusuf Gantika Putra",
      npm: "",
      linkId: "tes",
      img: danar,
    },
    {
      id: 11,
      name: "Mochammad Faza Fauzan Adhima",
      npm: "",
      linkId: "tes",
      img: faza,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">
        👥 Profil Kelompok 18
      </h2>
      <div>
        {mentor.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Header Card / Background Cover */}
            <div className="h-28 bg-linear-to-r from-blue-500 to-indigo-600"></div>

            {/* Foto Profil */}
            <div className="flex justify-center -mt-14">
              <img
                src={i.img}
                alt={i.name}
                className="w-28 h-28 bg-white rounded-full border-4 border-white object-top object-cover group-hover:scale-110 transition-transform duration-300 shadow-sm"
              />
            </div>

            {/* Informasi Anggota */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-800">{i.name}</h3>
              <a
                href={i.linkId}
                className="text-slate-600 w-full block text-sm leading-relaxed truncate"
              >
                {i.linkId}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Header Card / Background Cover */}
            <div className="h-28 bg-linear-to-r from-blue-500 to-indigo-600"></div>

            {/* Foto Profil */}
            <div className="flex justify-center -mt-14">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 bg-white rounded-full border-4 border-white object-top object-cover group-hover:scale-110 transition-transform duration-300 shadow-sm"
              />
            </div>

            {/* Informasi Anggota */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-slate-800">
                {member.name}
              </h3>
              <h4>{member.npm}</h4>
              <a
                href={member.linkId}
                className="text-slate-600 w-full block text-sm leading-relaxed truncate"
              >
                {member.linkId}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
