import faza from "../assets/faza.jpg";
import danar from "../assets/Danar.jpg";
import fariz from "../assets/fariz.jpeg";
import viola from "../assets/viola.JPG";
import fauzi from "../assets/fauzi.png";
import desvitasari from "../assets/Desvitasari.jpg";
import taufik from "../assets/Taufik Sabillah.jpg";
import ikhsan from "../assets/ikhsan.jpg";
import ilham from "../assets/ilham.jpeg";
import nibras from "../assets/nibras.jpg";
import nazu from "../assets/nazu.jpeg";


function Members() {
  const members = [
    {
      id: 1,
      name: "Muhammad Nibras Zahran Irawan",
      npm: "257006111187",
      linkedin: "https://www.linkedin.com/in/nibras-zahran-787bb5405?trk=contact-info",
      img: nibras,
    },
    {
      id: 2,
      name: "Nazwa Nurul Aulia",
      npm: "257006111094",
      linkedin: "https://www.linkedin.com/in/nazwa-nurul-aulia-07857937b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: nazu,
    },
    {
      id: 3,
      name: "Fariz Alwasi",
      npm: "257006111117",
      linkedin:
        "https://www.linkedin.com/in/fariz-alwasi-2a89a5404?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: fariz,
    },
    {
      id: 4,
      name: "Desvitasari",
      npm: "257006111148",
      linkedin: "https://www.linkedin.com/in/desvitasari-42b8a6405?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: desvitasari,
    },
    {
      id: 5,
      name: "Muhammad Ikhsan Alrizal",
      npm: "257006111086",
      linkedin: "https://www.linkedin.com/in/ikhsan-alrizal-445a67405",
      img: ikhsan,
    },
    {
      id: 6,
      name: "Taufik Sabillah",
      npm: "257006111221",
      linkedin: "https://www.linkedin.com/in/taufik-sabillah?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: taufik,
    },
    {
      id: 7,
      name: "Ilham Syarif Hidayat",
      npm: "257006111187",
      linkedin: "https://www.linkedin.com/in/ilham-syarif-hidayat-34bba7405",
      img: ilham,
    },
    {
      id: 8,
      name: "Viola Diva Ananda",
      npm: "257006111037",
      linkedin: "https://www.linkedin.com/in/viola-diva-8801b538b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      img: viola,
    },
    {
      id: 9,
      name: "Fauzi Firmansyah",
      npm: "257006111109",
      linkedin:
        "https://id.linkedin.com/in/fauzi-firmansyah-2918392b5?trk=people-guest_people_search-card",
      img: fauzi,
    },
    {
      id: 10,
      name: "Danar Yusuf Gantika Putra",
      npm: "257006111190",
      linkedin: "https://www.linkedin.com/in/danar-yusuf-5647443ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      img: danar,
    },
    {
      id: 11,
      name: "Mochammad Faza Fauzan Adhima",
      npm: "257006111180",
      linkedin:
        "https://www.linkedin.com/in/mochammad-faza-fauzan-adhima-95b3b7381",
      img: faza,
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("");

  const getPhotoPosition = (name) =>
    name === "Desvitasari" ||
    name === "Viola Diva Ananda" ||
    name === "Fariz Alwasi"
      ? "object-[center_8%]"
      : "object-[center_25%]";

  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-white">
        Profil Anggota Tim
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-8">
        {members.map((member, index) => {
          const isFirstOfLastThreeOnDesktop =
            members.length % 4 === 3 && index === members.length - 3;
          const cardSpanClass = [
            "lg:col-span-2",
            isFirstOfLastThreeOnDesktop ? "lg:col-start-2" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div
              key={member.id}
              className={`angled-panel member-parallelogram-panel group text-white transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/50 hover:shadow-2xl hover:shadow-cyan-950/40 ${cardSpanClass}`}
            >
              <div className="angled-frame relative mx-4 mt-4 h-64 overflow-hidden border border-cyan-200/20 bg-slate-900 shadow-xl shadow-blue-950/40">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`h-full w-full scale-105 object-cover ${getPhotoPosition(
                      member.name
                    )} transition-transform duration-500 group-hover:scale-115`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.28),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(8,47,73,0.9))] text-5xl font-extrabold text-cyan-200 transition-transform duration-500 group-hover:scale-110">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>

              <div className="relative z-10 px-4 pb-5 pt-4">
                <div className="angled-nameplate px-5 py-3 shadow-lg shadow-cyan-950/30">
                  <h3 className="text-sm font-extrabold uppercase leading-tight tracking-wide text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-cyan-50">
                    Anggota Kelompok 18
                  </p>
                </div>

                <p className="mt-4 font-semibold text-cyan-200">
                  NPM: {member.npm}
                </p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-cyan-200/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-200 hover:text-slate-950"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-400">
                    LinkedIn belum tersedia
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Members;
