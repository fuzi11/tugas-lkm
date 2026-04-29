cara install web nya
yang dibutuhkan
1. node js (install aja di internet)
2. git (ini juga ada di internet)

set up aplikasi
1. git clone https://github.com/fuzi11/tugas-lkm.git (ini cuman sekali guyssss)
2. cd tugas-lkm
3. npm install
4. buka http://localhost:5173/ di browser

sekarang cara push atau pull github 
push = masukin program yang udah di coding ke repository
pull = masukin program terbaru dari repository github ke file yang di coding

pertama-tama
masuk dlu ke direktori di cmd atau terminal dengan perintah --> cd tugas lkm
contoh : dari awalnya misal 
C:\Users\ASUS> harus jadi C:\Users\ASUS\tugas-lkm>
nah itu tuh pake perintah cd tugas-lkm
 terus untuk konfigurasi awal itu
 git config --global user.email emailkalianyangdipakebuatdaftargithub
 git config --global user.name usernamegithubkalian

sekarang untuk cara pull (di terminal atau cmd)
git pull origin main

sekarang untuk push (di terminal atau cmd)
git add .
git commit -m "nama commit"
git push -u origin main
