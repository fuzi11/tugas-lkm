import faza from "../assets/faza.jpg";

function Members() {
  const members = [
    {
      id: 1,
      name: "Muhammad Nibras Zahran Irawan",
      npm: "0000000001",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 2,
      name: "Nazwa Nurul Aulia",
      npm: "0000000002",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 3,
      name: "Fariz Alwasi",
      npm: "0000000003",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 4,
      name: "Desvitasari",
      npm: "0000000004",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 5,
      name: "Muhammad Ikhsan Al Rizal",
      npm: "0000000005",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 6,
      name: "Taufik Sabillah",
      npm: "0000000006",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 7,
      name: "Ilham Syarif Hidayat",
      npm: "0000000007",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 8,
      name: "Viola Diva Ananda",
      npm: "0000000008",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 9,
      name: "Fauzi Firmansyah",
      npm: "0000000009",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 10,
      name: "Danar Yusuf Gantika Putra",
      npm: "0000000010",
      linkedin: "https://www.linkedin.com/",
      img: "",
    },
    {
      id: 11,
      name: "Mochammad Faza Fauzan Adhima",
      npm: "257006111180",
      linkedin: "https://www.linkedin.com/in/mochammad-faza-fauzan-adhima-95b3b7381",
      img: faza,
    }
  ];
  
  const getLinkedInUrl = (url) =>
    url.startsWith("http") ? url : `https://${url}`;

  const getInitials = (name) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("");

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-white mb-12">
        👥 Profil Anggota Tim
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div
            key={member.id}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-white shadow-md shadow-blue-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-950/40 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
          >
            {/* Header Card / Background Cover */}
            <div className="relative h-28 overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,_rgba(255,255,255,0.45),_transparent_28%),linear-gradient(135deg,_rgba(37,99,235,0.92),_rgba(15,23,42,0.15),_rgba(34,211,238,0.62))]"></div>
            </div>

            {/* Foto Profil */}
            <div className="relative z-10 flex justify-center -mt-14">
              {member.img ? (
                <div className="w-28 h-28 overflow-hidden rounded-full border-4 border-slate-950/80 bg-white shadow-xl shadow-blue-950/40 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full scale-125 object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex w-28 h-28 items-center justify-center rounded-full border-4 border-slate-950/80 bg-slate-900 text-3xl font-extrabold text-cyan-200 shadow-xl shadow-blue-950/40 transition-transform duration-300 group-hover:scale-110">
                  {getInitials(member.name)}
                </div>
              )}
            </div>

            {/* Informasi Anggota */}
            <div className="relative z-10 p-6 pt-5 text-center">
              <h3 className="text-2xl font-bold text-white">
                {member.name}
              </h3>
              <p className="text-cyan-200 font-semibold mt-1 mb-4">
                NPM: {member.npm}
              </p>
              <a
                href={getLinkedInUrl(member.linkedin)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-200 hover:text-slate-950"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
