$(function() {

	var master_url = 'https://https://prosperidhoy.com/?utm_medium=quiz-luiz';
	var master_nome = '';
	var master_sexo = '';
	var master_idade = '';
	var master_foco = '';
	var master_desejo = '';
	var master_porquenaofunciona = '';
	var master_visao = '';
	var master_atit = '';
	var master_bloq = '';
	
	/*cont_1*/
		$('#cont_1').find('.btn_next_page').on('click', function() {
			
			f_cont_1();
		});

		$(document).on('keyup', function(e) {
			
			if($("#cont_1").css('display') == 'block' && e.keyCode == 13) {

				f_cont_1();
			}
		});

		function f_cont_1() {

			$('#cont_1').hide();
			$('#cont_2').css({"bottom":"0"});

			if($(document).width() <= 768) {

                $("#cont_2").find('.cont_btn_next').removeClass('d-none').addClass('d-flex');
            }

			setTimeout(function() {
				
				$("#cont_porcentagem").removeClass('d-nome').addClass('d-flex');
			}, 400);
		}
	/*fim cont_1*/

	$('.check_box').on('click', function() {
                
	    var this_ = $(this);

	    if(this_.find('.cont_checked').find('svg').css('opacity') == '1') {

	    	this_.closest('.cont_questao').find('.check_box').removeClass('active_');

	    	return false;
	    }

	    this_.closest('.cont_questao').find('.check_box').removeClass('active_');
	    
	    this_.addClass('active_ animated flash');

	    setTimeout(function() {
	        
	        this_.removeClass('flash')
	    }, 400);
	});

	$('#btn_next').on('click', function() {
		
		if($("#cont_2").css('bottom') == '0px') {

			f_cont_2();
		} else if($("#questao_1").css('bottom') == '0px') {

			f_questao_1();
		} else if($("#questao_2").css('bottom') == '0px') {

			f_questao_2(0);
		} else if($("#questao_3").css('bottom') == '0px') {

			f_questao_3(0);
		} else if($("#questao_4").css('bottom') == '0px') {

			f_questao_4(0);
		} else if($("#questao_5").css('bottom') == '0px') {

			f_questao_5(0);
		} else if($("#questao_6").css('bottom') == '0px') {

			f_questao_6(0);
		} else if($("#questao_7").css('bottom') == '0px') {

			f_questao_7(0);
		} else if($("#questao_8").css('bottom') == '0px') {

			f_questao_8(0);
		} else if($("#questao_9").css('bottom') == '0px') {

			f_questao_9(0);
		} else if($("#questao_10").css('bottom') == '0px') {

			f_questao_10();
		} else if($("#questao_11").css('bottom') == '0px') {

			f_questao_11();
		} else if($("#questao_12").css('bottom') == '0px') {

			f_questao_12();
		} else if($("#questao_13").css('bottom') == '0px') {

			f_questao_13();
		}
	});

	$('#btn_prev').on('click', function() {
		
		if($("#questao_1").css('bottom') == '0px') {

			$('#questao_1').hide();
			$('#cont_2').show().css({"bottom":"0"});
			$("#btn_prev").addClass('desativado');

			setTimeout(function() {
				
				$('#questao_1').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_2").css('bottom') == '0px') {

			$('#questao_2').hide();
			$('#questao_1').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_2').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_3").css('bottom') == '0px') {

			$('#questao_3').hide();
			$('#questao_2').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_3').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_4").css('bottom') == '0px') {

			$('#questao_4').hide();
			$('#questao_3').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_4').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_5").css('bottom') == '0px') {

			$('#questao_5').hide();
			$('#questao_4').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_5').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_6").css('bottom') == '0px') {

			$('#questao_6').hide();
			$('#questao_5').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_6').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_7").css('bottom') == '0px') {

			$('#questao_7').hide();
			$('#questao_6').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_7').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_8").css('bottom') == '0px') {

			$('#questao_8').hide();
			$('#questao_7').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_8').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_9").css('bottom') == '0px') {

			$('#questao_9').hide();
			$('#questao_8').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_9').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_10").css('bottom') == '0px') {

			$('#questao_10').hide();
			$('#questao_9').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_10').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_11").css('bottom') == '0px') {

			$('#questao_11').hide();
			$('#questao_10').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_11').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_12").css('bottom') == '0px') {

			$('#questao_12').hide();
			$('#questao_11').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_12').css({"bottom":"-110%"}).show();
			}, 100);
		} else if($("#questao_13").css('bottom') == '0px') {

			$('#questao_13').hide();
			$('#questao_12').show().css({"bottom":"0"});

			setTimeout(function() {
				
				$('#questao_13').css({"bottom":"-110%"}).show();
			}, 100);
		}
	});

	/*cont_2*/
		$('#cont_2').find('.btn_next_page').on('click', function() {
			
			f_cont_2();
		});

		$(document).on('keyup', function(e) {
			
			if($("#cont_2").css('bottom') == '0px' && e.keyCode == 13) {

				f_cont_2();
			}
		});

		function f_cont_2() {

			$('#cont_2').hide();

			setTimeout(function() {
				
				$('#cont_2').css({"bottom":"-110%"});
			}, 100);

			$('#questao_1').css({"bottom":"0"});
			$("#btn_prev").removeClass('desativado');
			$("#cont_porcentagem").find('.bg_percent').css({"width":"9%"});
			$("#cont_porcentagem").find('.porcentagem').text('9%');
		}
	/*fim cont_2*/

	/*questao_1*/
		$('#questao_1').find('.btn_next_page').on('click', function() {
			
			f_questao_1();
		});

		$(document).on('keyup', function(e) {
			
			if($("#questao_1").css('bottom') == '0px' && e.keyCode == 13) {

				f_questao_1();
			}
		});

		function f_questao_1() {

			var cont = $('#questao_1');

			cont.find('input[name="nome"]').on('keyup', function() {
				
				cont.find('.cont_btn').show();
				cont.find('.alert').hide();
			});

			var nome = $.trim(cont.find('input[name="nome"]').val());

			if(nome == '') {

				cont.find('.cont_btn').hide();
				cont.find('.alert').show();
				return;
			}

			cont.hide();

			setTimeout(function() {
				
				cont.css({"bottom":"-110%"});
			}, 100);

			$(".nome").text(nome);
			master_nome = nome;

			$("#questao_2").css({"bottom":"0"});
			$("#cont_porcentagem").find('.bg_percent').css({"width":"18%"});
			$("#cont_porcentagem").find('.porcentagem').text('18%');
		}
	/*fim questao_1*/

	/*questao_2*/
		$("#questao_2").find('.check_box').on("click", function() {

			f_questao_2(400);
		});

		function f_questao_2(time) {

			var cont = $("#questao_2");
			
			setTimeout(function() {

				if($("#questao_2").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_sexo = $.trim($("#questao_2").find('.check_box.active_').find('.text_').text());

				$('#questao_3').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"27%"});
				$("#cont_porcentagem").find('.porcentagem').text('27%');
			}, time);
		}
	/*fim questao_2*/

	/*questao_3*/
		$("#questao_3").find('.check_box').on("click", function() {

			f_questao_3(400);
		});

		function f_questao_3(time) {

			var cont = $("#questao_3");
			
			setTimeout(function() {

				console.log($("#questao_3").find('.check_box.active_').length);

				if($("#questao_3").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_idade = $.trim($("#questao_3").find('.check_box.active_').find('.text_').text());

				$('#questao_4').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"36%"});
				$("#cont_porcentagem").find('.porcentagem').text('36%');
			}, time);
		}
	/*fim questao_3*/

	/*questao_4*/
		$("#questao_4").find('.check_box').on("click", function() {

			f_questao_4(400);
		});

		function f_questao_4(time) {

			var cont = $("#questao_4");
			
			setTimeout(function() {

				if($("#questao_4").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_foco = $.trim($("#questao_4").find('.check_box.active_').find('.text_').text());

				$(".master_foco").text(master_foco);

				$('#questao_5').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"45%"});
				$("#cont_porcentagem").find('.porcentagem').text('45%');
			}, time);
		}
	/*fim questao_4*/

	/*questao_5*/
		$("#questao_5").find('.check_box').on("click", function() {

			f_questao_5(400);
		});

		function f_questao_5(time) {

			var cont = $("#questao_5");
			
			setTimeout(function() {

				if($("#questao_5").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_desejo = $.trim($("#questao_5").find('.check_box.active_').find('.text_').text());

				$('#questao_6').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"55%"});
				$("#cont_porcentagem").find('.porcentagem').text('55%');
			}, time);
		}
	/*fim questao_5*/

	/*questao_6*/
		$("#questao_6").find('.check_box').on("click", function() {

			f_questao_6(400);
		});

		function f_questao_6(time) {

			var cont = $("#questao_6");
			
			setTimeout(function() {

				if($("#questao_6").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_porquenaofunciona = $.trim($("#questao_6").find('.check_box.active_').find('.text_').text());

				$('#questao_7').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"64%"});
				$("#cont_porcentagem").find('.porcentagem').text('64%');
			}, time);
		}
	/*fim questao_6*/

	/*questao_7*/
		$("#questao_7").find('.check_box').on("click", function() {

			f_questao_7(400);
		});

		function f_questao_7(time) {

			var cont = $("#questao_7");
			
			setTimeout(function() {

				if($("#questao_7").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_visao = $.trim($("#questao_7").find('.check_box.active_').find('.text_').text());

				$('#questao_8').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"73%"});
				$("#cont_porcentagem").find('.porcentagem').text('73%');
			}, time);
		}
	/*fim questao_7*/

	/*questao_8*/
		$("#questao_8").find('.check_box').on("click", function() {

			f_questao_8(400);
		});

		function f_questao_8(time) {

			var cont = $("#questao_8");
			
			setTimeout(function() {

				if($("#questao_8").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_atit = $.trim($("#questao_8").find('.check_box.active_').find('.text_').text());

				$('#questao_9').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"73%"});
				$("#cont_porcentagem").find('.porcentagem').text('73%');
			}, time);
		}
	/*fim questao_8*/

	/*questao_9*/
		$("#questao_9").find('.check_box').on("click", function() {

			f_questao_9(400);
		});

		function f_questao_9(time) {

			var cont = $("#questao_9");
			
			setTimeout(function() {

				if($("#questao_9").find('.check_box.active_').length == 0) {

					return false;
				}
				
				cont.hide();

				setTimeout(function() {
					
					cont.css({"bottom":"-110%"});
				}, 100);

				master_bloq = $.trim($("#questao_9").find('.check_box.active_').find('.text_').text());

				$('#questao_10').css({"bottom":"0"});
				$("#cont_porcentagem").find('.bg_percent').css({"width":"73%"});
				$("#cont_porcentagem").find('.porcentagem').text('73%');
			}, time);
		}
	/*fim questao_9*/

	/*questao_10*/
		$('#questao_10').find('.btn_next_page').on('click', function() {
			
			f_questao_10();
		});

		$(document).on('keyup', function(e) {
			
			if($("#questao_10").css('bottom') == '0px' && e.keyCode == 13) {

				f_questao_10();
			}
		});

		function f_questao_10() {

			var cont = $('#questao_10');

			cont.hide();

			setTimeout(function() {
				
				cont.css({"bottom":"-110%"});
			}, 100);

			$("#questao_11").css({"bottom":"0"});
		}
	/*fim questao_10*/

	/*questao_11*/
		$('#questao_11').find('.btn_next_page').on('click', function() {
			
			f_questao_11();
		});

		$(document).on('keyup', function(e) {
			
			if($("#questao_11").css('bottom') == '0px' && e.keyCode == 13) {

				f_questao_11();
			}
		});

		function f_questao_11() {

			var cont = $('#questao_11');

			cont.hide();

			setTimeout(function() {
				
				cont.css({"bottom":"-110%"});
			}, 100);

			$("#questao_12").css({"bottom":"0"});
		}
	/*fim questao_11*/

	/*questao_12*/
		$('#questao_12').find('.btn_next_page').on('click', function() {
			
			f_questao_12();
		});

		$(document).on('keyup', function(e) {
			
			if($("#questao_12").css('bottom') == '0px' && e.keyCode == 13) {

				f_questao_12();
			}
		});

		function f_questao_12() {

			var cont = $('#questao_12');

			cont.hide();

			setTimeout(function() {
				
				cont.css({"bottom":"-110%"});
			}, 100);

			/*$("#questao_14").css({"bottom":"0"});
			$("#cont_porcentagem").find('.bg_percent').css({"width":"82%"});
			$("#cont_porcentagem").find('.porcentagem').text('82%');*/

			$("#questao_13").css({"bottom":"0"});
			$("#cont_porcentagem").find('.bg_percent').css({"width":"100%"});
			$("#cont_porcentagem").find('.porcentagem').text('100%');
		}
	/*fim questao_12*/

	/*questao_13*/
		$("#questao_13").find('.check_box').on("click", function() {

			f_questao_13();
		});

		$(document).on('keyup', function(e) {
			
			if($("#questao_13").css('bottom') == '0px' && e.keyCode == 13) {

				f_questao_13();
			}
		});

		function f_questao_13() {

			var cont = $('#questao_13');

			if($("#questao_13").find('.check_box.active_').length == 0) {

				cont.find('.cont_btn').hide();
				return false;
			} else {

				cont.find('.cont_btn').show();
			}

			cont.find('.cont_btn').off().on("click", function() {
				
				window.location.href = encodeURI(
					master_url+
					'&nome='+master_nome+
					'&sexo='+master_sexo+
					'&idade'+master_idade+
					'&foco='+master_foco+
					'&desejo='+master_desejo+
					'&porquenaofunciona'+master_porquenaofunciona+
					'&visao='+master_visao+
					'&atit='+master_atit+
					'&bloq='+master_bloq);
			});
		}
	/*fim questao_13*/
});
