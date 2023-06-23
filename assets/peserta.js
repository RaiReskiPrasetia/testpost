$(document).ready(function() {
	// tampil_peserta();

	// function tampil_peserta() {
	// 	$.ajax({
  //           type  : 'POST',
  //           // url   : 'http://192.168.71.254:8080/api_magang/peserta/tampil',
  //           url : 'http://localhost:80/api_magang/peserta/tampil',
  //           success : function(result){
  //               var tampilan = '';
  //               var no = 1;
  //               var objResult = JSON.parse(result);
  //               $.each(objResult, function(row, item){
  //                   tampilan += '<tr>';
  //                   tampilan += '   <td class="text-center">'+ no++ +'</td>';
  //                   tampilan += '   <td class="text-center">'+ item.nama +'</td>';
  //                   tampilan += '   <td class="text-center">'+ item.asal_sekolah +'</td>';
  //                   tampilan += '   <td class="text-center">'+ item.jurusan +'</td>';
  //                   tampilan += '   <td class="text-center">'+ item.tgl_input +'</td>';
  //                   tampilan += '   <td class="align-middle"><div class="text-center m-lg-3"><i class="bi bi-check-circle-fill" style="color: green;">Terkonfirmasi</i></div></td>';
  //                   // tampilan += '   <td><div class="text-center "><a class="btn btn-outline-primary mt-1" href="VAdmDetail.html"><i class="bi bi-eye-fill"></i></a>|<a class="btn btn-outline-danger mt-1" href="#"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></a></div></td>';
  //                   // tampilan += '   <td class="col-md-2 align-middle"><div class="text-center "><a class="btn btn-outline-primary mt-1 btn-detail" href="VAdmDetail.html?param_id='+item.id_peserta+'"><i class="bi bi-eye-fill"></i></a>|<a class="btn btn-outline-danger mt-1" href="#"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></a></div></td>';
  //                   tampilan += '   <td class="col-md-2 align-middle"><div class="text-center "><a class="btn btn-outline-primary mt-1 btn-detail" href="VAdmDetail.html?param_id='+item.id_peserta+'"><i class="bi bi-eye-fill"></i></a>|<a class="btn btn-outline-danger mt-1 btn-delete" href="#" data-id="'+item.id_peserta+'"><i class="bi bi-trash3-fill"></i></a></div></td>';
  //                   // tampilan += '      <button type="button" class="btn btn-info btn-icon btn-icon-circle" data-toggle="tooltip" data-placement="top" title="Detail Data" id="btn_detail" data-id="'+item.id_pekerjaan+'">';
  //                   // tampilan += '          <i class="fa fa-eye"></i>';
  //                   // tampilan += '      </button>';
  //                   // tampilan += '      <button type="button" class="btn btn-success btn-icon btn-icon-circle" data-toggle="tooltip" data-placement="top" title="Edit Data" id="btn_edit" data-id="'+item.id_pekerjaan+'">';
  //                   // tampilan += '          <i class="fa fa-edit"></i>';
  //                   // tampilan += '      </button>';
  //                   // tampilan += '   </td>';
  //                   tampilan += '</tr>';
  //               });
  //               $('#data_peserta').html(tampilan);
  //           }
  //       });
	// }

  //   function reset() {
  //       $('#text_nama').val("");
  //       $('#text_nik').val("");
  //       $('#text_telp').val("");
  //       $('#text_email').val("");
  //       $('#text_sekolah').val("");
  //       $('#text_jurusan').val("");
  //       $('#text_tglAwal').val("");
  //       $('#text_tglAkhir').val("");
  //       $('#text_ktp').val("");
  //       $('#text_filePermohonan').val("");
  //       $('#text_alamatSekolah').val("");
  //       $('#text_peserta').val("");
  //   }

    // $(document).on("click", "#btn_simpan", function() {
    //     var text_nama           = $('#text_nama').val();
    //     var text_nik            = $('#text_nik').val();
    //     var text_telp           = $('#text_telp').val();
    //     var text_email          = $('#text_email').val();
    //     var text_sekolah        = $('#text_sekolah').val();
    //     var text_jurusan        = $('#text_jurusan').val();
    //     var text_tglAwal        = $('#text_tglAwal').val();
    //     var text_tglAkhir       = $('#text_tglAkhir').val();
    //     var text_ktp            = $('#text_ktp').val();
    //     var text_filePermohonan = $('#text_filePermohonan').val();
    //     var text_alamatSekolah  = $('#text_alamatSekolah').val();
    //     var text_peserta        = $('#text_peserta').val();

    //     $.ajax({
    //         type : 'POST',
    //         // url  : 'http://192.168.71.254:8080/api_magang/peserta/simpan',
    //         url : 'http://localhost:80/api_magang/peserta/simpan',
    //         // url : '../peserta/simpan',
    //         data : {
    //             'param_nama'            : text_nama,
    //             'param_nik'             : text_nik,
    //             'param_noTelp'          : text_telp,
    //             'param_email'           : text_email,
    //             'param_asal'            : text_sekolah,
    //             'param_jurusan'         : text_jurusan,
    //             'param_magangAwal'      : text_tglAwal,
    //             'param_magangAkhir'     : text_tglAkhir,
    //             'param_Filektp'         : text_ktp,
    //             'param_FilePermohonan'  : text_filePermohonan,
    //             'param_alamatSekolah'   : text_alamatSekolah,
    //             'param_jumlah'          : text_peserta,
    //         },
    //         success:function(result) {
    //             var objResult = JSON.parse(result);
    //             if (objResult == 'Berhasil') {
    //                 tampil_peserta();
    //                 reset();
    //                 alert("Berhasil");
    //             }else{
    //                 alert("Gagal");
    //             }
    //         }
    //     })
    // })

    // $(document).on("click", "#btn_simpan", function() {
    //     var formData = new FormData();
    //     formData.append('param_nama', $('#text_nama').val());
    //     formData.append('param_nik', $('#text_nik').val());
    //     formData.append('param_noTelp', $('#text_telp').val());
    //     formData.append('param_email', $('#text_email').val());
    //     formData.append('param_asal', $('#text_sekolah').val());
    //     formData.append('param_jurusan', $('#text_jurusan').val());
    //     formData.append('param_magangAwal', $('#text_tglAwal').val());
    //     formData.append('param_magangAkhir', $('#text_tglAkhir').val());
    //     formData.append('param_Filektp', $('#file_ktp')[0].files[0]);
    //     formData.append('param_FilePermohonan', $('#file_permohonan')[0].files[0]);
    //     formData.append('param_alamatSekolah', $('#text_alamatSekolah').val());
    //     formData.append('param_jumlah', $('#text_peserta').val());
    
    //     $.ajax({
    //         type: 'POST',
    //         // url: 'http://192.168.71.254:8080/api_magang/peserta/simpan',
    //         url : 'http://localhost:80/api_magang/peserta/simpan',
    //         data: formData,
    //         processData: false,
    //         contentType: false,
    //         success: function(result) {
    //             var objResult = JSON.parse(result);
    //             if (objResult == 'Berhasil') {
    //                 tampil_peserta();
    //                 reset(); 
    //                 alert("Berhasil");
    //                 window.location.href = "index2.html"; // Pindah ke halaman pemberitahuan
    //             } else {
    //                 alert("Gagal");
    //             }
    //         }
    //     });
    // });
    
    $(document).on("click", "#btn_simpan", function() {
      // Mendapatkan nilai inputan
      var nama_pembimbing = $("[name='nama_pembimbing']").val();
      var nik_pembimbing = $("[name='nik_pembimbing']").val();
      var email = $("[name='email']").val();
      var no_telp = $("[name='no_telp']").val();
      var asal_sekolah = $("[name='asal_sekolah']").val();
      var alamat_sekolah = $("[name='alamat_sekolah']").val();
      // var nama_peserta = $("[name='nama_peserta']").val();
      // var nik = $("[name='nik']").val();
      var nama_pembimbing = $("[name='nama_pembimbing']").val();
      var jurusan = $("[name='jurusan']").val();
      var tgl_awalmagang = $("[name='tgl_awalmagang']").val();
      var tgl_akhirmagang = $("[name='tgl_akhirmagang']").val();
      var file_ktp = $("[name='file_ktp']")[0].files[0];
      var file_permohonan = $("[name='file_permohonan']")[0].files[0];
  
      // Memeriksa apakah ada inputan yang kosong
      // if (!nama || !nik || !noTelp || !email || !asal ||
      //     !jurusan || !magangAwal || !magangAkhir ||
      //     !fileKTP || !filePermohonan ||
      //     !alamatSekolah || !jumlah) {
      //     alert("Mohon lengkapi semua data sebelum menyimpan.");
      //     return; // Menghentikan eksekusi jika ada inputan kosong
      // } else if (nik.length < 16) {
      //     alert("Nilai harus memiliki setidaknya 16 karakter");
      //     return; // Menghentikan eksekusi jika NIK tidak memenuhi syarat
      // } else if (!isValidEmail(email)) {
      //     alert("Email tidak valid");
      //     return; // Menghentikan eksekusi jika email tidak valid
      // } else if (!isValidPhoneNumber(noTelp)) {
      //     alert("Nomor telepon tidak valid");
      //     return; // Menghentikan eksekusi jika nomor telepon tidak valid
      // }
  
      // Melanjutkan proses jika semua inputan terisi
      // var formData = new FormData();
      // formData.append('param_nama', nama);
      // formData.append('param_nik', nik);
      // formData.append('param_noTelp', noTelp);
      // formData.append('param_email', email);
      // formData.append('param_asal', asal);
      // formData.append('param_jurusan', jurusan);
      // formData.append('param_magangAwal', magangAwal);
      // formData.append('param_magangAkhir', magangAkhir);
      // formData.append('param_Filektp', fileKTP);
      // formData.append('param_FilePermohonan', filePermohonan);
      // formData.append('param_alamatSekolah', alamatSekolah);
      // formData.append('param_jumlah', jumlah);
  
      $.ajax({
        type : 'POST',
        // url  : 'http://192.168.71.254:8080/api_magang/peserta/simpan',
        url : 'http://localhost:80/api_magang/permohonan/simpan',
        data : {
            'param_nama'            : nama_pembimbing,
            'param_nik'             : nik_pembimbing,
            'param_noTelp'          : no_telp,
            'param_email'           : email,
            'param_asal'            : asal_sekolah,
            'param_alamatSekolah'   : alamat_sekolah,
            'param_jurusan'         : jurusan,
            'param_magangAwal'      : tgl_awalmagang,
            'param_magangAkhir'     : tgl_akhirmagang,
            'param_Filektp'         : file_ktp,
            'param_FilePermohonan'  : file_permohonan,
            // 'param_jumlah'          : text_peserta,
        },
        success:function(result) {
          console.log(result);
            var objResult = JSON.parse(result);
            if (objResult == 'Berhasil') {
                tampil_peserta();
                reset();
                alert("Berhasil");
            }else{
                alert("Gagal");
            }
        }
    })
  });
  
//   $(document).on("click", "#btn_simpan", function() {
//     // Mendapatkan nilai inputan
//     var nama = $('#text_nama').val();
//     var nik = $('#text_nik').val();
//     var noTelp = $('#text_telp').val();
//     var email = $('#text_email').val();
//     var asal = $('#text_sekolah').val();
//     var jurusan = $('#text_jurusan').val();
//     var magangAwal = $('#text_tglAwal').val();
//     var magangAkhir = $('#text_tglAkhir').val();
//     var fileKTP = $('#file_ktp')[0].files[0];
//     var filePermohonan = $('#file_permohonan')[0].files[0];
//     var alamatSekolah = $('#text_alamatSekolah').val();
//     var jumlah = $('#text_peserta').val();

//     // Memeriksa apakah ada inputan yang kosong
//     if (!nama || !nik || !noTelp || !email || !asal ||
//         !jurusan || !magangAwal || !magangAkhir ||
//         !fileKTP || !filePermohonan ||
//         !alamatSekolah || !jumlah) {
//         alert("Mohon lengkapi semua data sebelum menyimpan.");
//         return; // Menghentikan eksekusi jika ada inputan kosong
//     } else if (nik.length < 16) {
//         alert("Nilai harus memiliki setidaknya 16 karakter");
//         return; // Menghentikan eksekusi jika NIK tidak memenuhi syarat
//     } else if (!isValidEmail(email)) {
//         alert("Email tidak valid");
//         return; // Menghentikan eksekusi jika email tidak valid
//     } else if (!isValidPhoneNumber(noTelp)) {
//         alert("Nomor telepon tidak valid");
//         return; // Menghentikan eksekusi jika nomor telepon tidak valid
//     }

//     // Melanjutkan proses jika semua inputan terisi
//     var formData = new FormData();
//     formData.append('param_nama', nama);
//     formData.append('param_nik', nik);
//     formData.append('param_noTelp', noTelp);
//     formData.append('param_email', email);
//     formData.append('param_asal', asal);
//     formData.append('param_jurusan', jurusan);
//     formData.append('param_magangAwal', magangAwal);
//     formData.append('param_magangAkhir', magangAkhir);
//     formData.append('param_Filektp', fileKTP);
//     formData.append('param_FilePermohonan', filePermohonan);
//     formData.append('param_alamatSekolah', alamatSekolah);
//     formData.append('param_jumlah', jumlah);

//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:80/api_magang/permohonan/simpan',
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: function(result) {
//             var objResult = JSON.parse(result);
//             if (objResult === 'Berhasil') {
//                 tampil_peserta();
//                 reset();
//                 alert("Berhasil");
//                 window.location.href = "index2.html"; // Pindah ke halaman "index2.html"
//             } else {
//                 alert("Gagal");
//             }
//         },
//         error: function(xhr, status, error) {
//             alert("Terjadi kesalahan dalam melakukan AJAX request");
//             console.log(xhr.responseText);
//         }
//     });
// });
  

    $(document).on('click', '.btn-delete', function(e) {
        e.preventDefault();
        var idPeserta = $(this).data('id');
        if (confirm('Apakah Anda yakin ingin menghapus peserta?')) {
          $.ajax({
            // url: 'http://192.168.71.254:8080/api_magang/peserta/hapus',
            url : 'http://localhost:80/api_magang/peserta/hapus',
            method: 'POST',
            dataType: 'json',
            data: {
              param_id: idPeserta
            },
            success: function(response) {
              console.log(response);
              if (response === 'Berhasil') {
                // Peserta berhasil dihapus
                alert('Peserta berhasil dihapus.');
              } else {
                // Gagal menghapus peserta
                alert('Gagal menghapus peserta.');
              }
            },
            error: function(xhr, status, error) {
              console.error(xhr, status, error);
              alert('Terjadi kesalahan saat menghubungi API.');
            }
          });
        }
      });
})