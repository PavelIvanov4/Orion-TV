let go = document.getElementById('go');
let show = document.getElementById('show');
let randomize = document.getElementById('randomize');
let extra = document.getElementById('extra');
let num = 0;

show.addEventListener('click', () => {
	if (num == 0) {
	extra.style.display = 'block';
	show.innerHTML = 'Скрыть';
	show.classList.toggle('borders');
	randomize.classList.toggle('borders');
	num ++;
	return;
	} else {
	extra.style.display = 'none';
	show.innerHTML = 'Показать';
	show.classList.toggle('borders');
	randomize.classList.toggle('borders');
	num --;
	}
})

randomize.addEventListener('click', () => {
	let count = Math.floor(Math.random() * 300 + 1);
	if(count == 1) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=kmpzDfrqliU');
		extra.innerHTML = 'How to make a seashell – Just add water!';
	} else if(count == 2) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=S1jCOJcW8js');
		extra.innerHTML = 'Crayon Factory Experience';
	} else if(count == 3) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=d8FFssmKsPQ');
		extra.innerHTML = 'Art Class Experiment In School';
	} else if(count == 4) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mYhy7eaazIk');
		extra.innerHTML = 'Crash Course Astronomy – Telescopes';
	} else if(count == 5) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=L-Wtlev6suc');
		extra.innerHTML = 'Crash Course Astronomy – Observations';
	} else if(count == 6) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=pFoty21X370');
		extra.innerHTML = '15 Unbelievable Places That Exist';
	} else if(count == 7) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=wA0n6llF9lQ');
		extra.innerHTML = '10 Underwater Discoveries';
	} else if(count == 8) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=lmiRjmbnn8Q');
		extra.innerHTML = 'How Crayons Are Made';
	} else if(count == 9) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_asrhvc4dPg');
		extra.innerHTML = 'How Balloons Are Made';
	} else if(count == 10) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=pHQt8NJ9Glg');
		extra.innerHTML = 'Magic Of Making – Jaguar Cars';
	} else if(count == 11) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TnupP-MSEHI');
		extra.innerHTML = 'School Junior Year Vlog';
	} else if(count == 12) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UvaQOWYhsOw');
		extra.innerHTML = 'School Vlog';
	} else if(count == 13) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=t6o3CODTGB8');
		extra.innerHTML = 'Room Tour';
	} else if(count == 14) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_WLLcGBoQeI');
		extra.innerHTML = 'Finals Week School Morning Routine';
	} else if(count == 15) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=qzABM3FA0Vg');
		extra.innerHTML = 'When You\'re Bored At Home';
	} else if(count == 16) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=cTGmXz--mmo');
		extra.innerHTML = 'Making Aesthetic Stickers';
	} else if(count == 17) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ZYaTQ0cLI04');
		extra.innerHTML = 'Fall Bake With Me + Q&A';
	} else if(count == 18) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=hUtnW3hpcWA');
		extra.innerHTML = 'Snapchat Response Songwriting';
	} else if(count == 19) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=bhseoSl3nLY');
		extra.innerHTML = 'American School Field Trip';
	} else if(count == 20) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IVCyDiAUdr4');
		extra.innerHTML = 'French Or American School';
	} else if(count == 21) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Xy6IN9OoyRY');
		extra.innerHTML = 'Making Seashell Displays';
	} else if(count == 22) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xGEoK8kRNoQ');
		extra.innerHTML = 'Plant Cells 3D Explainer Animation';
	} else if(count == 23) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5apLdW0lL08');
		extra.innerHTML = 'Frisco Percussion';
	} else if(count == 24) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ftVUrNbAVeY');
		extra.innerHTML = 'Easy House Drawing';
	} else if(count == 25) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dkiZuu79N_I');
		extra.innerHTML = 'Gene Wilder – Taming the Fox';
	} else if(count == 26) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iSEkI3Urmd4');
		extra.innerHTML = 'Harry Potter Homecoming Assembly';
	} else if(count == 27) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=9H3Qsvlw2Vw');
		extra.innerHTML = 'Musical Cast Guesses Disney Movies';
	} else if(count == 28) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6efqoijkDJI');
		extra.innerHTML = 'Gen Z Reacts To Optical Illusions';
	} else if(count == 29) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ae8w0qFyQ0Q');
		extra.innerHTML = 'Curious George In Space';
	} else if(count == 30) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=hRwmj0oi4DA');
		extra.innerHTML = 'Curious George Takes a Vacation';
	} else if(count == 31) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=KO-idOCAYCY');
		extra.innerHTML = 'Curious George – Train of Light';
	} else if(count == 32) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=yma1APIunMI');
		extra.innerHTML = 'City of Friends Compilation 1';
	} else if(count == 33) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MHRdbW6eEIw');
		extra.innerHTML = 'City of Friends Compilation 2';
	} else if(count == 34) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=alJed4Dadu8');
		extra.innerHTML = 'Talking Tom & Friends';
	} else if(count == 35) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MK5E_7hOi-k');
		extra.innerHTML = 'Solar System Sizes';
	} else if(count == 36) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OgcXCcz1WZc');
		extra.innerHTML = 'Ernestine and Ernestina';
	} else if(count == 37) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=D0ta4NtBCJo');
		extra.innerHTML = 'Back to School DIY Notebooks';
	} else if(count == 38) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QRmvCoDjVwQ');
		extra.innerHTML = 'Noah Park Piano Performance';
	} else if(count == 39) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=bcm5PeBbw4o');
		extra.innerHTML = 'Earth\'s Surface Relief';
	} else if(count == 40) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=KeR0S0jUucU');
		extra.innerHTML = 'Model Trains. N Scale';
	} else if(count == 41) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=vxqHHJRUkpU');
		extra.innerHTML = 'Kids and Friendship';
	} else if(count == 42) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XWooph--ONA');
		extra.innerHTML = 'Easy Tree Drawing';
	} else if(count == 43) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YhGrMvFCpnE');
		extra.innerHTML = 'World Record Kids';
	} else if(count == 44) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=52nFMHtxhc8');
		extra.innerHTML = 'Mr. Rogers Neighborhood. Be Yourself';
	} else if(count == 45) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Pz-euQxy_f4');
		extra.innerHTML = 'Stretched Picture Trick';
	} else if(count == 46) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=RtU8nBnpFVE');
		extra.innerHTML = 'Wings Animated Movie';
	} else if(count == 47) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-9ADLZv7jms');
		extra.innerHTML = 'A Day At Forest School';
	} else if(count == 48) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=uLp0NhNszQU');
		extra.innerHTML = 'Chemical Experiments Fun';
	} else if(count == 49) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fMxYfsLepPk');
		extra.innerHTML = 'CGI Animation – Starry Skies';
	} else if(count == 50) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=t09pAwLICC4');
		extra.innerHTML = 'Electricity';
	} else if(count == 51) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=3EOKqEXZLR8');
		extra.innerHTML = 'Toy Trains Galore 2!';
	} else if(count == 52) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=PsBm-TgdWpw');
		extra.innerHTML = 'Books For 5th Graders';
	} else if(count == 53) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ZGuYeMI2bGQ');
		extra.innerHTML = 'Room Tour 2016';
	} else if(count == 54) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VYB0929tS7Y');
		extra.innerHTML = 'City Drawing For Kids';
	} else if(count == 55) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ad3CMri3hOs');
		extra.innerHTML = 'Morris Lessmore';
	} else if(count == 56) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=K6DSMZ8b3LE');
		extra.innerHTML = 'Seven Continents Song';
	} else if(count == 57) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LAFqAbrPKxQ');
		extra.innerHTML = 'All\'s Fair At The Fair';
	} else if(count == 58) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=djPgd1m6IMY');
		extra.innerHTML = 'Easy Origami Fish';		
	} else if(count == 59) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SwefYNKH87Y');
		extra.innerHTML = 'Autumn Miller Back Walkover';
	} else if(count == 60) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4MHn9Q5NtdY');
		extra.innerHTML = 'Easy Science Experiments For Kids';
	} else if(count == 61) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Pc9dLYra43o');
		extra.innerHTML = 'Hand Sewing Tutorial';
	} else if(count == 62) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DIUjtlARVTw');
		extra.innerHTML = 'DIY Octopus Plushie';
	} else if(count == 63) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=rXmnb4AALXg');
		extra.innerHTML = 'Sewing For Beginners';	
	} else if(count == 64) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mpF9Wu8IuZc');
		extra.innerHTML = 'Blackberry Bramble Basket';
	} else if(count == 65) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SpYqs_ry_1I');
		extra.innerHTML = 'Basket Base';
	} else if(count == 66) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2odi5nszWKc');
		extra.innerHTML = 'Chain Reaction Tricks';
	} else if(count == 67) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=3LPYTh8CIIg');
		extra.innerHTML = 'Road Trip Hacks';
	} else if(count == 68) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gvWfml92Suc');
		extra.innerHTML = 'Chipmunks – Chasing The Sun';	
	} else if(count == 69) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UXsomnDkntI');
		extra.innerHTML = 'How The Internet Works?';
	} else if(count == 70) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_WA30cC9gy0');
		extra.innerHTML = 'Watch Soap Grow!';
	} else if(count == 71) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OortiZu_STI');
		extra.innerHTML = 'Toy Trains Galore 4!';
	} else if(count == 72) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=I3QNdSt1LUU');
		extra.innerHTML = 'Simply Sofia – School Week';
	} else if(count == 73) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2JyGBG9dUmw');
		extra.innerHTML = 'Spring Cartoon';	
	} else if(count == 74) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=FkzudF6QmrU');
		extra.innerHTML = 'Mr. Rogers Neighborhood. Going Away and Coming Back';
	} else if(count == 75) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Af6ppUlb3vA');
		extra.innerHTML = 'Word World – Castles In The Sea';
	} else if(count == 76) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Av07QiqmsoA');
		extra.innerHTML = 'The Lemonade Machine';
	} else if(count == 77) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=s6oYTmgD4O4');
		extra.innerHTML = 'Safety Fire Drill';
	} else if(count == 78) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ffTw333yfm8');
		extra.innerHTML = 'Educated Fish';	
	} else if(count == 79) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sKmPmBP-Rsc');
		extra.innerHTML = 'How Does E-Mail Work?';
	} else if(count == 80) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=BVDjckRHYsk');
		extra.innerHTML = 'pH – Science Rap Academy';
	} else if(count == 81) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=x7k7CeWDtWs');
		extra.innerHTML = 'Know Your Globe';
	} else if(count == 82) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=S_zd-HxMq0k');
		extra.innerHTML = 'Gift Hacks For Every Occasion';
	} else if(count == 83) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-TrGp7p4YF0');
		extra.innerHTML = 'Who Teaches Teachers?';	
	} else if(count == 84) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=AHMZvBt7gQU');
		extra.innerHTML = 'Word World – Rocket To The Moon';
	} else if(count == 85) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1BrZzDHgx6g');
		extra.innerHTML = 'How To Draw A Cat';
	} else if(count == 86) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dGcsidHfWt4');
		extra.innerHTML = 'Bellbrook High School Marching Band. Flute';
	} else if(count == 87) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6jQ7y_qQYUA');
		extra.innerHTML = 'Recycling For Kids';
	} else if(count == 88) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=uFRrTEe3Z_w');
		extra.innerHTML = 'Orbitals. Science Rap Academy';	
	} else if(count == 89) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xMnx_3BC7EM');
		extra.innerHTML = 'Fishing With Sam. Animated Short Film';
	} else if(count == 90) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QlRx428qOYo');
		extra.innerHTML = 'DIY School Supplies';
	} else if(count == 91) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=8yuiUvi568I');
		extra.innerHTML = 'Learn Spanish For Kids';
	} else if(count == 92) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gbL9sN_QD7Q');
		extra.innerHTML = 'Kids Meet A Magician';
	} else if(count == 93) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_Tjako_U_2s');
		extra.innerHTML = 'Marshmallow Castle Build';	
	} else if(count == 94) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1vc1HxNpB6I');
		extra.innerHTML = 'Mr. Rogers\' Neighborhood. Valuing All Kinds Of Art';
	} else if(count == 95) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VxNid3CZPl8');
		extra.innerHTML = 'Family Weekend Vlog';
	} else if(count == 96) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UhB0U6OUPIM');
		extra.innerHTML = 'What Is Cubism? Tate Kids';
	} else if(count == 97) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1YE_Zas-A5A');
		extra.innerHTML = 'What Is Surrealism? Tate Kids';
	} else if(count == 98) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=N3ISUUO0CSo');
		extra.innerHTML = 'Expedia. St. Petersburg Travel Guide';	
	} else if(count == 99) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UQgcBiAztjs');
		extra.innerHTML = 'Expedia. Frankfurt Travel Guide';
	} else if(count == 100) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=45ETZ1xvHS0');
		extra.innerHTML = 'Expedia. London Travel Guide';
	} else if(count == 101) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=0GZSfBuhf6Y');
		extra.innerHTML = 'Touropia. 25 Best Places In Europe';
	} else if(count == 102) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=b7FNvq11CEw');
		extra.innerHTML = 'Touropia. 25 Best Places In USA';
	} else if(count == 103) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=NcN2H1AjKRY');
		extra.innerHTML = 'Barcelona 4K Drone';	
	} else if(count == 104) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=i-285FbVKpc');
		extra.innerHTML = 'Cologne 4K Drone';
	} else if(count == 105) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MuflV6qAs3I');
		extra.innerHTML = 'Hamburg 4K Drone';
	} else if(count == 106) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=FCPdIvXo2rU');
		extra.innerHTML = 'The Alps 4K Video';
	} else if(count == 107) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=wz3BGn--UIA');
		extra.innerHTML = 'Neuschwanstein 4K Video';
	} else if(count == 108) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=HLmOkDBfxv0');
		extra.innerHTML = '4K CA Yosemite National Park';	
	} else if(count == 109) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=yixv9J6Agdo');
		extra.innerHTML = 'Treasures Of The Louvre';
	} else if(count == 110) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=KdBULBUimyk');
		extra.innerHTML = 'Warsaw Royal Castle';
	} else if(count == 111) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gGDQKge-HLo');
		extra.innerHTML = 'Lodz Undiscovered';
	} else if(count == 112) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_mdu3ghaNXQ');
		extra.innerHTML = 'Top 4 Art Museums In New York City';
	} else if(count == 113) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=m53NP_ydpmY');
		extra.innerHTML = 'The State Hermitage Museum';	
	} else if(count == 114) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4vH3_wrXyPk');
		extra.innerHTML = 'Mont St Michel Inside';
	} else if(count == 115) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=h0Gm3dI0X_s');
		extra.innerHTML = 'Antonio Gaudi\'s Barcelona';
	} else if(count == 116) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=jCenF89GxkA');
		extra.innerHTML = 'Art Brussels. Tour & Taxi';
	} else if(count == 117) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fZloW3h-wVU');
		extra.innerHTML = 'Madrid Prado Museum & Royal Palace';
	} else if(count == 118) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=96hl5J47c3k');
		extra.innerHTML = 'Abstract Art Case';	
	} else if(count == 119) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MxPioEoMOgc');
		extra.innerHTML = 'Summer In St. Petersburg Vlog';
	} else if(count == 120) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=qiyenn9Z4yI');
		extra.innerHTML = 'Poland Vlog';
	} else if(count == 121) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ACkmg3Y64_s');
		extra.innerHTML = 'Miniatur Wunderland Official Video';
	} else if(count == 122) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VCzrDN4jmVs');
		extra.innerHTML = 'Cool Manhattan NYC Street Painter';
	} else if(count == 123) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XK1dazJppJE');
		extra.innerHTML = '10 Amazing Facts About Germany';	
	} else if(count == 124) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_sLDC089qpI');
		extra.innerHTML = '10 Top Tourist Attractions In Brussels';
	} else if(count == 125) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=f_OWRxv08fM');
		extra.innerHTML = 'Germany. 50 Tourist Places';
	} else if(count == 126) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ipaJdHmkXn0');
		extra.innerHTML = 'France. 50 Tourist Places';
	} else if(count == 127) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_pA0xVwkDN8');
		extra.innerHTML = 'Landmark Size Comparison';
	} else if(count == 128) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=m4KRsr-g6lY');
		extra.innerHTML = '10 Most Isolated Towns On Earth';	
	} else if(count == 129) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=p3QEzXKQuTk');
		extra.innerHTML = 'Top 5 Unusual Buildings';
	} else if(count == 130) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=qO1brxn1rNs');
		extra.innerHTML = '15 Cool Accidental Inventions';
	} else if(count == 131) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=hssSf2x2cRg');
		extra.innerHTML = 'Top 10 Interesting Facts About Jupiter';
	} else if(count == 132) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ppaQdRWF25g');
		extra.innerHTML = 'Scotland. Glengorm Castle';
	} else if(count == 133) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=75gCFlRY15E');
		extra.innerHTML = '8 Outlandish Tree Houses';	
	} else if(count == 134) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=nFaMwXyIHdw');
		extra.innerHTML = 'World\'s Best Airports';
	} else if(count == 135) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zV2ICC2h74s');
		extra.innerHTML = 'Movie Theater Formats';
	} else if(count == 136) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5zphHChULuY');
		extra.innerHTML = '13 Innovative Artists';
	} else if(count == 137) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ZgvO--dGLjY');
		extra.innerHTML = 'Tea Around The World';
	} else if(count == 138) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=s41T6KWQIhQ');
		extra.innerHTML = 'Cookies Around The World';	
	} else if(count == 139) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=b6A2sQpHWUo');
		extra.innerHTML = 'NYC Cronut Dessert';
	} else if(count == 140) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=S5f3wCEvkvo');
		extra.innerHTML = 'Interactive Fun House';
	} else if(count == 141) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=h9c7Zox3MCE');
		extra.innerHTML = 'European Trams';
	} else if(count == 142) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ju3LWnOkgcs');
		extra.innerHTML = 'Cologne Plane Spotting';
	} else if(count == 143) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sFFMEEPD16I');
		extra.innerHTML = 'Study In Germany. Programs';	
	} else if(count == 144) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=M6PTJptKZhI');
		extra.innerHTML = 'Aeroscape Engineering';
	} else if(count == 145) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=7rMgpExA4kM');
		extra.innerHTML = 'How Airplanes Are Made';
	} else if(count == 146) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=I-EIVlHvHRM');
		extra.innerHTML = 'A. I. Art Creation';
	} else if(count == 147) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zR3Igc3Rhfg');
		extra.innerHTML = 'To Scale. The Solar System';
	} else if(count == 148) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mghVDwfKY1M');
		extra.innerHTML = 'Citrus Set';	
	} else if(count == 149) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SZ_sQaWn0Uo');
		extra.innerHTML = 'Futuristic Greenhouse Visit';
	} else if(count == 150) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=V29-HvFLOzQ');
		extra.innerHTML = 'Behind the Scenes Of Our Planet. Narwhal';
	} else if(count == 151) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XY3yndaXsUU');
		extra.innerHTML = 'Urbanism, Architecture & Biodiversity';
	} else if(count == 152) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ryj-yfA3aMM');
		extra.innerHTML = 'The BUFFER Marine Area Project';
	} else if(count == 153) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mwzExNYs12Y');
		extra.innerHTML = 'Amazing Science Toys/Gadgets (4)';	
	} else if(count == 154) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=itJNlsM9BM8');
		extra.innerHTML = 'Amazing Science Toys/Gadgets (5)';
	} else if(count == 155) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xYe4-7I5ot0');
		extra.innerHTML = 'Amazing Optical Illusions';
	} else if(count == 156) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ewNCYcoWYg0');
		extra.innerHTML = 'Frankfurt Skyscrapers';
	} else if(count == 157) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=nMHLWDAegYY');
		extra.innerHTML = 'NYC Incredible Facts';
	} else if(count == 158) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=aoFmFdMeyVM');
		extra.innerHTML = 'Top 10 Art Galleries In The World';	
	} else if(count == 159) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=enpkJE-7Dkc');
		extra.innerHTML = 'How To Grow Coral';
	} else if(count == 160) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ToUmmVvqKHo');
		extra.innerHTML = '40 Creative Photography Ideas';
	} else if(count == 161) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=libKVRa01L8');
		extra.innerHTML = 'Solar System 101 Video';
	} else if(count == 162) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=epZdZaEQhS0');
		extra.innerHTML = 'Saturn 101 Video';
	} else if(count == 163) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ddq8YLwcscA');
		extra.innerHTML = 'The First American Lighthouse';	
	} else if(count == 164) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=PL2j9MbvgH8');
		extra.innerHTML = 'Ford vs. Ferrari';
	} else if(count == 165) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=0lNgPNOkMdQ');
		extra.innerHTML = 'Rhythmic Gymnastics School';
	} else if(count == 166) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gj6frb_mHzQ');
		extra.innerHTML = 'Aquarius Undersea Laboratory Tour';
	} else if(count == 167) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UE661QWlBtE');
		extra.innerHTML = 'Constructing Floating Homes';
	} else if(count == 168) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6RkWqu3aHHI');
		extra.innerHTML = 'How Was It Made? Micromosaics';	
	} else if(count == 169) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iZMj0v9uEfU');
		extra.innerHTML = 'ABQ Balloon Fiesta';
	} else if(count == 170) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=RFcGvmFtR-s');
		extra.innerHTML = 'Rise Lantern Festival';
	} else if(count == 171) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4rgSzQwe5DQ');
		extra.innerHTML = 'Vivaldi – The Four Seasons';
	} else if(count == 172) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1prweT95Mo0');
		extra.innerHTML = 'Yo-Yo Ma. Bach – Cello Suite No. 1';
	} else if(count == 173) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fqcdVziCynM');
		extra.innerHTML = 'Walter Mitty. Bike On Iceland';	
	} else if(count == 174) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Blb9la-SE1k');
		extra.innerHTML = 'Easy Chocolate Lace Lollipops';
	} else if(count == 175) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=9TjUWnAK0cg');
		extra.innerHTML = 'Easier Pan Pizza';
	} else if(count == 176) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4lE02B0TTwY');
		extra.innerHTML = 'German Bratwurst';
	} else if(count == 177) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Q3ur8wzzhBU');
		extra.innerHTML = 'Internet Of Things';
	} else if(count == 178) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=pvBlSFVmoaw');
		extra.innerHTML = 'TED. Electrical Experiments With Plants';	
	} else if(count == 179) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=RQaTIS85VKE');
		extra.innerHTML = 'Top 20 Keyboard Shortcuts';
	} else if(count == 180) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sZdE-jDiNb0');
		extra.innerHTML = 'Answers To 5 Whys';
	} else if(count == 181) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YThelfB2fvg');
		extra.innerHTML = 'Mouse Cursor History';
	} else if(count == 182) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=a4N4yQB_B4c');
		extra.innerHTML = 'Where Two Oceans Meet';
	} else if(count == 183) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=o1zNIm8GVPY');
		extra.innerHTML = 'I\'m Not A Robot';	
	} else if(count == 184) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=oLrOnEmy_GA');
		extra.innerHTML = 'How Does The ISS Work?';
	} else if(count == 185) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1jfNIBtfWDY');
		extra.innerHTML = 'How Does An Escalator Work?';
	} else if(count == 186) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iMNNZaDTqYg');
		extra.innerHTML = 'Olly Murs – Anywhere Else';
	} else if(count == 187) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-S5QnR9xJWM');
		extra.innerHTML = 'Olly Murs – That\'s Alright With Me';
	} else if(count == 188) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YJ5fRzTJvS4');
		extra.innerHTML = 'Lemonade Mouth – Somebody';	
	} else if(count == 189) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=psuRGfAaju4');
		extra.innerHTML = 'Owl City – Fireflies';
	} else if(count == 190) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=9bX97Hgb6IY');
		extra.innerHTML = 'Ed Sheeran – The City';
	} else if(count == 191) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-8YV5xhENt8');
		extra.innerHTML = 'Dua Lipa – Homesick';
	} else if(count == 192) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=m7Bc3pLyij0');
		extra.innerHTML = 'Marshmello ft. Bastille – Happier';
	} else if(count == 193) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=jofNR_WkoCE');
		extra.innerHTML = 'Ylvis – The Fox (What Does The Fox Say?)';	
	} else if(count == 194) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IIBvyFX2q-s');
		extra.innerHTML = 'The Vamps – Hurricane';
	} else if(count == 195) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=GnmlTfUFXPU');
		extra.innerHTML = 'Grace Vanderwaal – Florets';
	} else if(count == 196) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TdU1vhLK9HM');
		extra.innerHTML = 'Grace Vanderwaal – Light The Sky';
	} else if(count == 197) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mk48xRzuNvA');
		extra.innerHTML = 'The Script – Hall Of Fame';
	} else if(count == 198) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=qP-7GNoDJ5c');
		extra.innerHTML = 'Nathan Evans – Wellerman';	
	} else if(count == 199) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=x6WFa3r1tNo');
		extra.innerHTML = 'Bambee – Let The Sun Shine In';
	} else if(count == 200) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=B2z7Iy2NCgQ');
		extra.innerHTML = 'Perry Como – The Colors Of My Life';
	} else if(count == 201) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=HKeOuUKnq98');
		extra.innerHTML = 'Alcazar – Thank You';
	} else if(count == 202) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sySlY1XKlhM');
		extra.innerHTML = 'B. J. Thomas – Raindrops Keep Falling On My Head';
	} else if(count == 203) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Usc5vs26wug');
		extra.innerHTML = 'Phil Collins – Big Noise';	
	} else if(count == 204) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5lKJoNDdpv8');
		extra.innerHTML = 'Phil Collins – Strangers Like Me (Tarzan)';
	} else if(count == 205) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=i66p0_wZ9F0');
		extra.innerHTML = 'Moana – How Far I\'ll Go';
	} else if(count == 206) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=b0xkDit1yNo');
		extra.innerHTML = 'The Seekers – Morningtown Ride';
	} else if(count == 207) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=to5Sg2KeEnU');
		extra.innerHTML = 'Maroon 5 – Sunday Morning';
	} else if(count == 208) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=jifUJrYPZQQ');
		extra.innerHTML = 'Wednesday Dance (Tik Tok Speed Up)';	
	} else if(count == 209) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=0dcbw4IEY5w');
		extra.innerHTML = 'ABBA – Thank You For The Music';
	} else if(count == 210) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dDI7x1nwTUw');
		extra.innerHTML = 'ABBA – Eagle';
	} else if(count == 211) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fjP0XgQI-_Q');
		extra.innerHTML = 'Roxette – The First Girl On The Moon';
	} else if(count == 212) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TbksX8Pnw_c');
		extra.innerHTML = 'Herreys – Diggi-Loo, Diggi-Ley (English Version)';
	} else if(count == 213) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=B7xai5u_tnk');
		extra.innerHTML = 'TheFatRat – Monody (feat. Laura Brehm)';	
	} else if(count == 214) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=krcaX7RL0OI');
		extra.innerHTML = 'Lastep – Come To Life';
	} else if(count == 215) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=9fbxTFevdAE');
		extra.innerHTML = 'Aloe Blacc – Green Lights';
	} else if(count == 216) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5M4dR-eWp1Y');
		extra.innerHTML = 'Livin\' Joy – Don\'t Stop Movin\'';
	} else if(count == 217) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Tprdribab0w');
		extra.innerHTML = 'Tempo – Everybody Get Up';
	} else if(count == 218) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VCYQ8V1kHUc');
		extra.innerHTML = 'Magnus Bokn – Over The Sea';	
	} else if(count == 219) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=G8dsvclf3Tk');
		extra.innerHTML = 'Electric Light Orchestra - Mr. Blue Sky';
	} else if(count == 220) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=pIkK4uYLP9A');
		extra.innerHTML = 'Janji – Shine';
	} else if(count == 221) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dMD2Riybg0E');
		extra.innerHTML = 'KT Tunstall – Universe & U';
	} else if(count == 222) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=HFd2lVfrwL8');
		extra.innerHTML = 'Dayglow – Deep End';
	} else if(count == 223) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ArBD_VHIY8Q');
		extra.innerHTML = 'Dayglow – Stops Making Sense';	
	} else if(count == 224) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=O7S21zudhtY');
		extra.innerHTML = 'Zedd feat. Ryan Tedder – Lost At Sea';
	} else if(count == 225) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TtPBRjyLUSA');
		extra.innerHTML = 'A-Teens – Firefly';
	} else if(count == 226) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=P2fT3aSd0uA');
		extra.innerHTML = 'Растительные клетки';
	} else if(count == 227) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_x2eVaPVytU');
		extra.innerHTML = 'Гимназия 11';
	} else if(count == 228) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dQ9dwtT7BnU');
		extra.innerHTML = 'Как нарисовать бабочку';	
	} else if(count == 229) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OT72xxEpITs');
		extra.innerHTML = 'Смешарики. Упаковщики';
	} else if(count == 230) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-OwM57Ah4uM');
		extra.innerHTML = 'Смешарики. Мультиповар';
	} else if(count == 231) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DIJlTJG_Umc');
		extra.innerHTML = 'Яна Пузанкова. Танец барабанщицы';
	} else if(count == 232) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=vWN8qXlBrFQ');
		extra.innerHTML = '5 крутых опытов с водой';
	} else if(count == 233) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OpbUUSuzUiY');
		extra.innerHTML = 'Океанариум Планета Нептун';	
	} else if(count == 234) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IpnN9aelAso');
		extra.innerHTML = 'Биология. Водоросли';
	} else if(count == 235) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=k-7PpJtYGlM');
		extra.innerHTML = 'Звёздочки счастья из оригами';
	} else if(count == 236) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=p6QZ0SYH4sA');
		extra.innerHTML = 'Горные породы и минералы';
	} else if(count == 237) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=a3fbvA4xP0U');
		extra.innerHTML = 'Спектакль Мэри Поппинс';
	} else if(count == 238) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=aq6Bw4zeh_w');
		extra.innerHTML = 'Строительство нашей школы';	
	} else if(count == 239) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=U5wl2zec0gs');
		extra.innerHTML = 'Гимназия 166. Выпускной-2019';
	} else if(count == 240) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=n97cISYpzms');
		extra.innerHTML = 'Школа 178. 1 Сентября';
	} else if(count == 241) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=T65TtF1wuY4');
		extra.innerHTML = 'Школа 5. Поздравление с днём учителя';
	} else if(count == 242) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=cjtgIK84DM8');
		extra.innerHTML = 'Фестиваль Шаг Навстречу. День Города';
	} else if(count == 243) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dcgISSXvno4');
		extra.innerHTML = 'Академический оркестр школы искусств';	
	} else if(count == 244) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=3VEXx_yAgb0');
		extra.innerHTML = 'Школа 53. Выпускной 4-го класса';
	} else if(count == 245) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-0k5DrwYgYo');
		extra.innerHTML = 'Петербургская школа кельтской арфы';
	} else if(count == 246) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ZJUxSURfC7A');
		extra.innerHTML = 'Моря, озёра и реки России';
	} else if(count == 247) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=jgewB5UI_Ok');
		extra.innerHTML = 'Леса России';
	} else if(count == 248) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IQjXYehyEB4');
		extra.innerHTML = 'Фиксики. Чертёж';	
	} else if(count == 249) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_qzCsu5uzgU');
		extra.innerHTML = 'Фиксики. Пластилин';
	} else if(count == 250) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=eW70mqVVHZ8');
		extra.innerHTML = 'Уроки Тётушки Совы. Огонь';
	} else if(count == 251) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LzXwlxmHEcE');
		extra.innerHTML = 'Уроки Тётушки Совы. ПДД';
	} else if(count == 252) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LP9EahzYkZw');
		extra.innerHTML = 'Фестиваль ледовых скульптур';
	} else if(count == 253) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=A_XmlK1YhSo');
		extra.innerHTML = '5 самых необычных школ в мире';	
	} else if(count == 254) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6em1Z_pIh4M');
		extra.innerHTML = 'Лицей 214. Школьная история';
	} else if(count == 255) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=bNOL4FUob3w');
		extra.innerHTML = 'Масштаб плана';
	} else if(count == 256) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5Pp1LhCDe8s');
		extra.innerHTML = 'Школа в Онтарио';
	} else if(count == 257) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=isZodr3detA');
		extra.innerHTML = 'Как взлетают воздушные шары';
	} else if(count == 258) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=20l6ee_axK8');
		extra.innerHTML = 'Квадрат и куб числа';	
	} else if(count == 259) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DbUFZ9Ds7HU');
		extra.innerHTML = 'Архитектура Древней Греции';
	} else if(count == 260) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Gyg0tsQzXmo');
		extra.innerHTML = 'DIY канцелярия на бюджете';
	} else if(count == 261) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=7kx2M3Nv1jk');
		extra.innerHTML = 'СОМ-ТВ. Лагерь';
	} else if(count == 262) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fBrcr78MAjU');
		extra.innerHTML = 'Что у земли внутри?';
	} else if(count == 263) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IBnPMBT2MqA');
		extra.innerHTML = 'Гимназия 190';	
	} else if(count == 264) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=eQ8skcuZZb8');
		extra.innerHTML = 'Bubble. Необычные велосипеды';
	} else if(count == 265) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IAfcTeoktz8');
		extra.innerHTML = 'Bubble. 20 удивительных вещей нашей планеты';
	} else if(count == 266) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2SYZGyeueUo');
		extra.innerHTML = 'Секретная звёздная карта Южного Полушария';
	} else if(count == 267) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=KFTAWjp82Xs');
		extra.innerHTML = 'Миниатюрный особняк';
	} else if(count == 268) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2Hfd9SOWajg');
		extra.innerHTML = 'Барни и друзья. Из чего состоит твоё имя';	
	} else if(count == 269) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IY36O2CpA1Q');
		extra.innerHTML = 'Барни и его друзья. Включите воображение';
	} else if(count == 270) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=WZN1HQat4sI');
		extra.innerHTML = 'Почтальон Пэт. Улетевший груз';
	} else if(count == 271) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=q6K8Jks72og');
		extra.innerHTML = 'Почтальон Пэт. Ветряная машина';
	} else if(count == 272) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QcDWFvn0gIo');
		extra.innerHTML = 'Школа 17. Случай в нашей школе';
	} else if(count == 273) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=FhhcXfCvd1A');
		extra.innerHTML = 'Как нарисовать дом';	
	} else if(count == 274) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=u4WKMwHAUCc');
		extra.innerHTML = 'Как делают карандаши';
	} else if(count == 275) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=G844TqtpMkk');
		extra.innerHTML = 'Миниатюрный домик из картона';
	} else if(count == 276) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Uz9jEs8EDSI');
		extra.innerHTML = 'Школа 4. О школе';
	} else if(count == 277) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VlCrB_JSEqM');
		extra.innerHTML = 'Синтаксический разбор предложения';
	} else if(count == 278) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Kl3HWv1g5ss');
		extra.innerHTML = 'Гранд Макет Россия';	
	} else if(count == 279) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=AVxm6wsXFag');
		extra.innerHTML = 'Как нарисовать космос (гуашь)';
	} else if(count == 280) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2TXfDCANcB8');
		extra.innerHTML = 'Все ручные швы';
	} else if(count == 281) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DUARIKxDj5w');
		extra.innerHTML = 'Работа со швейной машинкой';
	} else if(count == 282) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=5-q1_vUVYdE');
		extra.innerHTML = 'Последние школьные дни';
	} else if(count == 283) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LbsF-RNtK5o');
		extra.innerHTML = '5 мест в России';	
	} else if(count == 284) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XDzcQZX4Vy4');
		extra.innerHTML = 'Удивительные объекты Солнечной Системы';
	} else if(count == 285) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=EK09Kubl35Y');
		extra.innerHTML = 'Минералы и горные породы в музее';
	} else if(count == 286) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=WULHPuTsS40');
		extra.innerHTML = 'Лахта Центр';
	} else if(count == 287) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MdNEVmlWZho');
		extra.innerHTML = 'Фонтаны из воздушных шаров';
	} else if(count == 288) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xj4d5cOTm9o');
		extra.innerHTML = 'Москва-Сити с дрона';	
	} else if(count == 289) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Zy1lk84ikLg');
		extra.innerHTML = 'Лера Привалова – Небо Над Нами';
	} else if(count == 290) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6Epco-EhLuU');
		extra.innerHTML = 'Анастасия Плотникова – Самолет';
	} else if(count == 291) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=AtaUmqkyWbs');
		extra.innerHTML = 'Ансамбль "Школьные истории" – Лесной Олень';
	} else if(count == 292) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=pCo86QyKclQ');
		extra.innerHTML = 'Браво – Это За Окном Рассвет';
	} else if(count == 293) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zXs2jD7Tfhs');
		extra.innerHTML = 'Браво – Этот Город';	
	} else if(count == 294) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Dl0KeA6xBdY');
		extra.innerHTML = 'Шура – Сказка';
	} else if(count == 295) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TJKRBPSHHFw');
		extra.innerHTML = 'Лицей – Синоптики';
	} else if(count == 296) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=HyGngB-14MQ');
		extra.innerHTML = 'Виктор Салтыков – Белая Ночь';
	} else if(count == 297) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SSrJnks_d28');
		extra.innerHTML = 'Максим – Мой Ответ Да';
	} else if(count == 298) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=n_GcnWMvecA');
		extra.innerHTML = 'Георгий Свиридов – Вальс';	
	} else if(count == 299) {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mHnhdfG0w6E');
		extra.innerHTML = 'R3HAB & Elena Temnikova – Where You Wanna Be';
	} else {
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QR-rvyjeYks');
		extra.innerHTML = 'Irina Shott – Identify Yourself';	
	}		
})