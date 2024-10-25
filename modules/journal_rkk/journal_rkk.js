

let checkContacktValue = false; 
let arrOblastId_journal_rkk = [];
let arrOblastSTR_journal_rkk = [];

let arrRkkotzyvId_journal_rkk = [];
let arrRkkotzyvSTR_journal_rkk = [];

function CheckCheckBoxElement(elem, element_name){
    
    let checkBox = document.getElementById(`checkbox_${element_name}`);

    if(elem != 'checkBox'){
        
        checkBox.checked = !checkBox.checked;
    }
    

    if(element_name === 'pervtor_2'){
        let rkkotzyv_hide = document.getElementById(`rkkotzyv_hide`); 
        if (checkBox.checked == false) {
            rkkotzyv_hide.classList.add("hiddentab");
        } else {
            
            rkkotzyv_hide.classList.remove("hiddentab");
        }
        
    }

    // if(!btnReportPrint.hasAttribute('disabled')){
    //     btnReportPrint.setAttribute('disabled','true')
    // }
}


function CheckCheckBoxOblastElement(elem, index){

    let checkBox = document.getElementById(`checkbox_oblast_${index}`);
    if(elem != 'checkBox'){   
        checkBox.checked = !checkBox.checked;
    }

    let oblast = document.getElementsByClassName('oblast');

    if(index===0){
        if (oblast.length !== 0) {
            for (let i = 0; i < oblast.length; i++) {
                let checkBox1 = document.getElementById(`checkbox_oblast_${oblast[i].id}`);
                checkBox1.checked = checkBox.checked;
            }
        }
    }


    if(index!==0){
        let checkBox1 = document.getElementById(`checkbox_oblast_0`);
        checkBox1.checked = false;
    }

    
    

    // if(!btnReportPrint.hasAttribute('disabled')){
    //     btnReportPrint.setAttribute('disabled','true')
    // }
}

function CheckCheckBoxRkkotzyvElement(elem, index){

    let checkBox = document.getElementById(`checkbox_rkkotzyv_${index}`);
    if(elem != 'checkBox'){   
        checkBox.checked = !checkBox.checked;
    }

    let rkkotzyv = document.getElementsByClassName('rkkotzyv');
/*
    if(index===0){
        if (rkkotzyv.length !== 0) {
            for (let i = 0; i < rkkotzyv.length; i++) {
                let checkBox1 = document.getElementById(`checkbox_rkkotzyv_${oblast[i].id}`);
                checkBox1.checked = checkBox.checked;
            }
        }
    }


    if(index!==0){
        let checkBox1 = document.getElementById(`checkbox_rkkotzyv_0`);
        checkBox1.checked = false;
    }
*/
    
    

    // if(!btnReportPrint.hasAttribute('disabled')){
    //     btnReportPrint.setAttribute('disabled','true')
    // }
}

function disablePrint(){
    // let btnReportPrint = document.getElementById(`btnReportPrint`);

    // if(!btnReportPrint.hasAttribute('disabled')){
    //     btnReportPrint.setAttribute('disabled','true')
    // }


}


function CheckRadioElement(elem, element_name){

    let checkbox_search = document.getElementById('checkbox_search_1').checked

    if(checkbox_search){

        let radio_checked = document.getElementById(`radio_${element_name}`);

        let radio_journal = document.getElementById(`radio_journal`);
        let radio_form = radio_journal.getElementsByTagName('input');

        for (let i = 1; i <= radio_form.length ; i++) {
            let radio = document.getElementById(`radio_search_`+i);
            if((radio.checked)&&(i !== element_name)){
                radio.checked = false
            } 
            
        }

        radio_checked.checked = true
    }
    
}


function CheckCheckBoxSearch(elem){
    
    let checkBox = document.getElementById(`checkbox_search_1`);

    if(elem != 'checkBox'){
        
        checkBox.checked = !checkBox.checked;
    }

    let radio_search_1 = document.getElementById(`radio_search_1`);
    let radio_search_2 = document.getElementById(`radio_search_2`);
    let search_text = document.getElementById(`search_text`);


    if(checkBox.checked){
        radio_search_1.removeAttribute('disabled')
        radio_search_2.removeAttribute('disabled')
        search_text.removeAttribute('disabled')
        
    } else {
        radio_search_1.setAttribute('disabled','true')
        radio_search_2.setAttribute('disabled','true')
        search_text.setAttribute('disabled','true')
        search_text.value = '';
    }

    

    // if(!btnReportPrint.hasAttribute('disabled')){
    //     btnReportPrint.setAttribute('disabled','true')
    // }
}



function validateDate(date_at, date_to, date_name){
    
    let div_date_name = document.getElementById(date_name).innerText;
  
    if((date_at && !date_to) || (!date_at && date_to)){
        alert(`Неверно заполнено поле ${div_date_name}`)
        return -1
    } else {
        if(date_at>date_to) {
            alert(`Неверно заполнено поле ${div_date_name}`)
            return -1
        } else {
            if(date_at && date_to){
                return 1
            } else {
                return 0
            }
        }
    }
   
}

function preperaReport(){
    
    let dataParametrs = {
        with_contact: 0,
        zaregal:0,
        info:0,
        date_reg_at: null,
        date_reg_to: null, 
        date_protokol_at: null, 
        date_protokol_to: null, 
        date_admin_resh_at: null, 
        date_admin_resh_to: null, 
        date_sved_at: null, 
        date_sved_to: null, 
        date_delo_at: null, 
        date_delo_to: null, 
        date_reg : 0 ,
        date_protokol: 0,
        date_admin_resh: 0,
        date_sved :0, 
        date_delo: 0,
        checkbox_adm_resh_1: false, 
        checkbox_adm_resh_2: false, 
        checkbox_adm_resh_3: false, 
	checkbox_adm_resh_4: false, 
        adm_resh:0,
        checkbox_pervtor_1: false,
        checkbox_pervtor_2: false,
        pervtor: 0,
        checkAllOblast : false,
        checkOblasts : '',
        checkOblastsId : '',
        otz : false,
        otkaz : false,
        guzo : 0,
        checkbox_guzo_1 :false,
        checkbox_guzo_2 : false,
        search_check: false,
        radio_search_1: false,
        radio_search_2: false,
        text_search: '',
      
        checkRkkotzyvStr : '',
        checkRkkotzyvId : '',
    }

    let checkbox_with_contact = document.getElementById(`checkbox_with_contact`).checked;
    dataParametrs.with_contact = checkbox_with_contact;

    let checkbox_zaregal = document.getElementById(`checkbox_zaregal`).checked;
    dataParametrs.zaregal = checkbox_zaregal;

    let checkbox_info = document.getElementById(`checkbox_info`).checked;
    dataParametrs.info = checkbox_info;  

    let date_reg_at = document.getElementById(`date_reg_at`);
    let date_reg_at_value = date_reg_at.value;

    dataParametrs.date_reg_at = date_reg_at_value;
    let date_reg_to = document.getElementById(`date_reg_to`);
    let date_reg_to_value = date_reg_to.value;
    dataParametrs.date_reg_to = date_reg_to_value;

    let date_reg = validateDate(date_reg_at_value, date_reg_to_value, 'date_reg')
    if (date_reg == -1){
        return
    }
    dataParametrs.date_reg = date_reg


    let date_protokol_at = document.getElementById(`date_protokol_at`);
    let date_protokol_at_value = date_protokol_at.value;
    dataParametrs.date_protokol_at = date_protokol_at_value;

    let date_protokol_to = document.getElementById(`date_protokol_to`);
    let date_protokol_to_value = date_protokol_to.value;
    dataParametrs.date_protokol_to = date_protokol_to_value;

    let date_protokol = validateDate(date_protokol_at_value, date_protokol_to_value, 'date_protokol')
    if (date_protokol == -1){
        return
    }
    dataParametrs.date_protokol = date_protokol;

    let date_admin_resh_at = document.getElementById(`date_admin_resh_at`);
    let date_admin_resh_at_value = date_admin_resh_at.value;
    dataParametrs.date_admin_resh_at = date_admin_resh_at_value;

    let date_admin_resh_to = document.getElementById(`date_admin_resh_to`);
    let date_admin_resh_to_value = date_admin_resh_to.value;
    dataParametrs.date_admin_resh_to = date_admin_resh_to_value;

    let date_admin_resh = validateDate(date_admin_resh_at_value, date_admin_resh_to_value, 'date_admin_resh')
    if (date_admin_resh == -1){
        return
    }
    dataParametrs.date_admin_resh = date_admin_resh;

    let date_sved_at = document.getElementById(`date_sved_at`);
    let date_sved_at_value = date_sved_at.value;
    dataParametrs.date_sved_at = date_sved_at_value;

    let date_sved_to = document.getElementById(`date_sved_to`);
    let date_sved_to_value = date_sved_to.value;
    dataParametrs.date_sved_to = date_sved_to_value;

    let date_sved = validateDate(date_sved_at_value, date_sved_to_value, 'date_sved')
    if (date_sved == -1){
        return
    }
    dataParametrs.date_sved = date_sved;

    let date_delo_at = document.getElementById(`date_delo_at`);
    let date_delo_at_value = date_delo_at.value;
    dataParametrs.date_delo_at = date_delo_at_value;

    let date_delo_to = document.getElementById(`date_delo_to`);
    let date_delo_to_value = date_delo_to.value;
    dataParametrs.date_delo_to = date_delo_to_value;

    let date_delo = validateDate(date_delo_at_value, date_delo_to_value, 'date_delo')
    if (date_delo == -1){
        return
    }
    dataParametrs.date_delo = date_delo;

    /*
    if( date_reg == 0 &&  date_protokol== 0 && date_admin_resh== 0 && date_sved==0 && date_delo== 0){
        alert(`Не задан ни один отчетный период`)
        return
    }
     */   

    let checkbox_adm_resh_1 = document.getElementById(`checkbox_adm_resh_1`);
    let checkbox_adm_resh_1_value = checkbox_adm_resh_1.checked;
    dataParametrs.checkbox_adm_resh_1 = checkbox_adm_resh_1_value;

    let checkbox_adm_resh_2 = document.getElementById(`checkbox_adm_resh_2`);
    let checkbox_adm_resh_2_value = checkbox_adm_resh_2.checked;
    dataParametrs.checkbox_adm_resh_2 = checkbox_adm_resh_2_value;
    
    let checkbox_adm_resh_3 = document.getElementById(`checkbox_adm_resh_3`);
    let checkbox_adm_resh_3_value = checkbox_adm_resh_3.checked;
    dataParametrs.checkbox_adm_resh_3 = checkbox_adm_resh_3_value;

    let checkbox_adm_resh_4 = document.getElementById(`checkbox_adm_resh_4`);
    let checkbox_adm_resh_4_value = checkbox_adm_resh_4.checked;
    dataParametrs.checkbox_adm_resh_4 = checkbox_adm_resh_4_value;



    let adm_resh = 0
    if(checkbox_adm_resh_1_value || checkbox_adm_resh_2_value || checkbox_adm_resh_3_value || checkbox_adm_resh_4_value){
        adm_resh = 1 
    }
    dataParametrs.adm_resh = adm_resh;

   // console.log('adm_resh ', adm_resh)

    let checkbox_pervtor_1 = document.getElementById(`checkbox_pervtor_1`);
    let checkbox_pervtor_1_value = checkbox_pervtor_1.checked;
    dataParametrs.checkbox_pervtor_1 = checkbox_pervtor_1.checked;

    let checkbox_pervtor_2 = document.getElementById(`checkbox_pervtor_2`);
    let checkbox_pervtor_2_value = checkbox_pervtor_2.checked;
    dataParametrs.checkbox_pervtor_2= checkbox_pervtor_2.checked;

    if(checkbox_pervtor_2_value || checkbox_pervtor_1_value){
        dataParametrs.pervtor= 1;
    } else {
        dataParametrs.pervtor= 0;  
    }
    

    let checkbox_guzo_1 = document.getElementById(`checkbox_guzo_1`);
    let checkbox_guzo_1_value = checkbox_guzo_1.checked;
    dataParametrs.checkbox_guzo_1 = checkbox_guzo_1.checked;

    let checkbox_guzo_2 = document.getElementById(`checkbox_guzo_2`);
    let checkbox_guzo_2_value = checkbox_guzo_2.checked;
    dataParametrs.checkbox_guzo_2= checkbox_guzo_2.checked;

    if(checkbox_guzo_2_value || checkbox_guzo_1_value){
        dataParametrs.guzo= 1;
    } else {
        dataParametrs.guzo= 0;  
    }
    

    let checkAllOblast = document.getElementById(`checkbox_oblast_0`).checked;
    dataParametrs.checkAllOblast= checkAllOblast;
   
    ReportCheckedOblast()
    dataParametrs.checkOblasts= arrOblastSTR_journal_rkk.toString();
    dataParametrs.checkOblastsId= arrOblastId_journal_rkk.toString();
    
   // console.log(dataParametrs) 

    let checkbox_otz = document.getElementById(`checkbox_otz`);
    dataParametrs.otz = checkbox_otz.checked;

    let checkbox_otkaz = document.getElementById(`checkbox_otkaz`);
    dataParametrs.otkaz = checkbox_otkaz.checked;


    let search_check = document.getElementById(`checkbox_search_1`);
    dataParametrs.search_check = search_check.checked;

    let radio_search_1 = document.getElementById(`radio_search_1`);
    dataParametrs.radio_search_1 = radio_search_1.checked;

    let radio_search_2 = document.getElementById(`radio_search_2`);
    dataParametrs.radio_search_2 = radio_search_2.checked;

    let text_search = document.getElementById(`search_text`);
    if((text_search.value.trim().length===0 ) && (search_check.checked)){
        alert(`Незаполено поле поиск`)
        return;
    }

    dataParametrs.text_search = text_search.value.trim()

	
    if (checkbox_pervtor_2_value){
	    ReportCheckedRkkotzyv()
	    dataParametrs.checkRkkotzyvStr= arrRkkotzyvSTR_journal_rkk.toString();
	    dataParametrs.checkRkkotzyvId= arrRkkotzyvId_journal_rkk.toString();
	}
    else {
	dataParametrs.checkRkkotzyvStr='';
	dataParametrs.checkRkkotzyvId= '';
	}	



    reportPrepere(dataParametrs)

    let reportRow = document.getElementById('reportRow');
    reportRow.style="background-color: white";

    let btnReportPrint = document.getElementById(`btnReportPrint`);
    btnReportPrint.removeAttribute('disabled')
}

function ReportCheckedOblast(){

    arrOblastId_journal_rkk = [];
    arrOblastSTR_journal_rkk = [];

    let oblast = document.getElementsByClassName('oblast');
        if (oblast.length !== 0) {
            for (let i = 1; i < oblast.length; i++) {
                let checkBox = document.getElementById(`checkbox_oblast_${oblast[i].id}`);
                if(checkBox.checked){
                    arrOblastId_journal_rkk = [...arrOblastId_journal_rkk, oblast[i].id];

                    let spanCheckBox = document.getElementById(`span_oblast_${oblast[i].id}`).innerText;
                    arrOblastSTR_journal_rkk = [...arrOblastSTR_journal_rkk, spanCheckBox ]
                }
                
            }
        } 
    

}


function ReportCheckedRkkotzyv(){

    arrRkkotzyvId_journal_rkk = [];
    arrRkkotzyvSTR_journal_rkk = [];

    let rkkotzyv = document.getElementsByClassName('rkkotzyv');
        if (rkkotzyv.length !== 0) {
            for (let i = 1; i < rkkotzyv.length; i++) {
                let checkBox = document.getElementById(`checkbox_rkkotzyv_${rkkotzyv[i].id}`);
                if(checkBox.checked){
                    arrRkkotzyvId_journal_rkk = [...arrRkkotzyvId_journal_rkk, rkkotzyv[i].id];

                    let spanCheckBox = document.getElementById(`span_rkkotzyv_${rkkotzyv[i].id}`).innerText;
                    arrRkkotzyvSTR_journal_rkk = [...arrRkkotzyvSTR_journal_rkk, spanCheckBox ]
                }
                
            }
        } 
    

}


function prepereTableReport(dataParametrs){

    let table = document.createElement('table');
    table.id="printMe"
   
    table.style = "border-spacing: 0; border: none";

    let thead1 = document.createElement('thead');

    let trHead = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.innerHTML = 'Рег. индекс';
    th1.id='th1'
    th1.style = "border: 1px solid black; width: 5%; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th2 = document.createElement('th');
    th2.innerHTML = '№';
    th2.id='th2'
    th2.style = "border: 1px solid black; width: 5%; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th3 = document.createElement('th');
    th3.innerHTML = '№ заявления';
    th3.id='th3'
    th3.style = "border: 1px solid black; width: 5%; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"
    
    let th4 = document.createElement('th');
    th4.innerHTML = 'Наименование Юр. Лицо';
    th4.id='th4'
    th4.style = "border: 1px solid black; min-width: 400px; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"


    let th5 = document.createElement('th');
    th5.innerHTML = 'первичный/повторный';
    th5.id='th5'
    th5.style = "border: 1px solid black; width: 10%; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th26 = document.createElement('th');
    th26.innerHTML = 'Основание для повторного';
    th26.id='th26'
    th26.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th27 = document.createElement('th');
    th27.innerHTML = 'Статус';
    th27.id='th27'
    th27.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th6 = document.createElement('th');
    th6.innerHTML = 'Дата регистрации заявления';
    th6.id='th6'
    th6.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"


    let th7 = document.createElement('th');
    th7.innerHTML = 'Юр. Адрес';
    th7.id='th7'
    th7.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"
    
    let th8 = document.createElement('th');
    th8.innerHTML = 'Фактич. Адрес';
    th8.id='th8'
    th8.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"
    
    let th9 = document.createElement('th');
    th9.innerHTML = 'телефон';
    th9.id='th9'
    th9.style = "border: 1px solid black; min-width: 200px; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"
    
    let th10 = document.createElement('th');
    th10.innerHTML = 'Email';
    th10.id='th10'
    th10.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"  

    let th11 = document.createElement('th');
    th11.innerHTML = 'Административное решение';
    th11.id='th11'
    th11.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th12 = document.createElement('th');
    th12.innerHTML = 'Дата протокола';
    th12.id='th12'
    th12.style = "border: 1px solid black; min-width: 120px; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"
   
    let th13 = document.createElement('th');
    th13.innerHTML = 'Дата уведомления';
    th13.id='th13'
    th13.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

  

    let th14 = document.createElement('th');
    th14.innerHTML = 'Номер свидетельства';
    th14.id='th14'
    th14.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th15 = document.createElement('th');
    th15.innerHTML = 'Срок действия сетрификата';
    th15.id='th15'
    th15.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th16 = document.createElement('th');
    th16.innerHTML = 'Срок действия';
    th16.id='th16'
    th16.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th17 = document.createElement('th');
    th17.innerHTML = 'Отметка о снятии контроля';
    th17.id='th17'
    th17.style = "border: 1px solid black; min-width: 125px; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th18 = document.createElement('th');
    th18.innerHTML = 'Документ в дело номер';
    th18.id='th18'
    th18.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th19 = document.createElement('th');
    th19.innerHTML = 'Зарегистрировал';
    th19.id='th19'
    th19.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th20 = document.createElement('th');
    th20.innerHTML = 'Информация о профилях и видах МП которые не были заявлены';
    th20.id='th20'
    th20.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th21 = document.createElement('th');
    th21.innerHTML = 'Получил свидетельство ФИО, дата';
    th21.id='th21'
    th21.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th23 = document.createElement('th');
    th23.innerHTML = 'Дополнительная информация';
    th23.id='th23'
    th23.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th22 = document.createElement('th');
    th22.innerHTML = 'Регион';
    th22.id='th22'
    th22.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th24 = document.createElement('th');
    th24.innerHTML = 'Комиссия';
    th24.id='th24'
    th24.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    let th25 = document.createElement('th');
    th25.innerHTML = 'Выдача свидетельства';
    th25.id='th25'
    th25.style = "border: 1px solid black; text-align: left; line-height: normal; padding: 0.2rem 0.75rem;"

    trHead.appendChild(th1);
    trHead.appendChild(th2);
  //  trHead.appendChild(th3);
    trHead.appendChild(th4);

    if((dataParametrs.pervtor === 1)|| (dataParametrs.adm_resh === 1)){
        trHead.appendChild(th5);
    }

    if((dataParametrs.checkbox_pervtor_2 === true)|| (dataParametrs.adm_resh === 1)){
        trHead.appendChild(th26);
    }

    if(dataParametrs.adm_resh === 1){
        trHead.appendChild(th27);
    }
    
    trHead.appendChild(th6);
    if(dataParametrs.with_contact === true){

        trHead.appendChild(th7);
        trHead.appendChild(th8);
        trHead.appendChild(th9);
        trHead.appendChild(th10);
    }
    trHead.appendChild(th11);
    trHead.appendChild(th25);
    trHead.appendChild(th12);
    trHead.appendChild(th13);
    trHead.appendChild(th14);
    trHead.appendChild(th15);
//    trHead.appendChild(th16);
    trHead.appendChild(th17);
    trHead.appendChild(th18);
    if(dataParametrs.zaregal === true){
        trHead.appendChild(th19);
    }
    if(dataParametrs.info === true){
        trHead.appendChild(th20);
        trHead.appendChild(th21);
        trHead.appendChild(th23);
    }
    
    
    trHead.appendChild(th22);
    trHead.appendChild(th24);
    thead1.appendChild(trHead);
    table.appendChild(thead1);

    return table
}


let dataReport = new Array();

function reportPrepere(dataParametrs){
    let divForTable = document.getElementById(`divForTable`);
    divForTable.innerHTML = '';

    let table = prepereTableReport(dataParametrs)

    console.log(dataParametrs)

    let data = new Array();
    $.ajax({
        url: "modules/journal_rkk/getJournalRkk.php",
        method: "GET",
        data: {
            date_reg_at: dataParametrs.date_reg_at,
            date_reg_to: dataParametrs.date_reg_to, 
            date_protokol_at: dataParametrs.date_protokol_at, 
            date_protokol_to: dataParametrs.date_protokol_to, 
            date_admin_resh_at: dataParametrs.date_admin_resh_at, 
            date_admin_resh_to: dataParametrs.date_admin_resh_to, 
            date_sved_at: dataParametrs.date_sved_at, 
            date_sved_to: dataParametrs.date_sved_to, 
            date_delo_at: dataParametrs.date_delo_at, 
            date_delo_to: dataParametrs.date_delo_to, 
            date_reg : dataParametrs.date_reg,
            date_protokol: dataParametrs.date_protokol,
            date_admin_resh: dataParametrs.date_admin_resh,
            date_sved : dataParametrs.date_sved, 
            date_delo:  dataParametrs.date_delo,
            checkbox_adm_resh_1: dataParametrs.checkbox_adm_resh_1, 
            checkbox_adm_resh_2: dataParametrs.checkbox_adm_resh_2, 
            checkbox_adm_resh_3: dataParametrs.checkbox_adm_resh_3, 
	    checkbox_adm_resh_4: dataParametrs.checkbox_adm_resh_4, 
            adm_resh: dataParametrs.adm_resh,
            checkbox_pervtor_1: dataParametrs.checkbox_pervtor_1,
            checkbox_pervtor_2: dataParametrs.checkbox_pervtor_2,
            pervtor: dataParametrs.pervtor,
            checkAllOblast : dataParametrs.checkAllOblast,
            checkOblasts : dataParametrs.checkOblasts,
            checkOblastsId : dataParametrs.checkOblastsId,
            otz: dataParametrs.otz,
            otkaz: dataParametrs.otkaz,
            checkbox_guzo_1: dataParametrs.checkbox_guzo_1,
            checkbox_guzo_2: dataParametrs.checkbox_guzo_2,
            search_check: dataParametrs.search_check,
            radio_search_1: dataParametrs.radio_search_1,
            radio_search_2: dataParametrs.radio_search_2,
            text_search: dataParametrs.text_search,
            checkRkkotzyvStr : dataParametrs.checkRkkotzyvStr,
            checkRkkotzyvId : dataParametrs.checkRkkotzyvId,
        }
        
    }).done(function (response){
        for (let i of JSON.parse(response)){
            data.push(i);
            dataReport.push(i)
        }

      //  console.log(JSON.parse(response))

        
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let itog =0
        if(data.length > 0){
            data.map((item,index) => {
                itog++

                let div = document.createElement('div');
                                                
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.innerHTML = item['id_rkk'];
                td1.className='td1'
                td1.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td2 = document.createElement('td');
                td2.innerHTML = itog;
                td2.className='td2'
                td2.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";
                              
                let td3 = document.createElement('td');
                td3.innerHTML = item['id_application'];
                td3.className='td3'
                td3.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td4 = document.createElement('td');
                td4.innerHTML = item['naim'];
                td4.className='td4'
                td4.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td5 = document.createElement('td');
                td5.innerHTML = item['perv_vtor'];
                td5.className='td5'
                td5.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td26 = document.createElement('td');
                td26.innerHTML = item['rkkotzyv_str'];
                td26.className='td26'
                td26.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td27 = document.createElement('td');
                td27.innerHTML = item['name_status_report'];
                td27.className='td27'
                td27.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td6 = document.createElement('td');
                td6.innerHTML = item['date_reg'];
                td6.className='td6'
                td6.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                
                    let td7 = document.createElement('td');
                    td7.innerHTML = item['ur_adress'];
                    td7.className='td7'
                    td7.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                    let td8 = document.createElement('td');
                    td8.innerHTML = item['fact_adress'];
                    td8.className='td8'
                    td8.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                    let td9 = document.createElement('td');
                    td9.innerHTML = item['tel'];
                    td9.className='td9'
                    td9.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                    let td10 = document.createElement('td');
                    td10.innerHTML = item['email'];
                    td10.className='td10'
                    td10.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";
                

                let td11 = document.createElement('td');
                td11.innerHTML = item['adm_reah'];
                td11.className='td11'
                td11.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td12 = document.createElement('td');
                td12.innerHTML = item['date_protokol'];
                td12.className='td12'
                td12.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td13 = document.createElement('td');
                td13.innerHTML = item['date_admin_resh'];
                td13.className='td13'
                td13.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                div.innerHTML = item['svidetelstvo']; 

                let td14 = document.createElement('td');
              //  td14.innerHTML =  item['svidetelstvo'];

                td14.appendChild(div);
                td14.className='td14'
                td14.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td15 = document.createElement('td');
                td15.innerHTML = item['date_sved'];
                td15.className='td15'
                td15.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td16 = document.createElement('td');
                td16.innerHTML = item['sved_srok_deist'];
                td16.className='td16'
                td16.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td17 = document.createElement('td');
                td17.innerHTML = item['date_delo'];
                td17.className='td17'
                td17.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td18 = document.createElement('td');
                td18.innerHTML = item['delo'];
                td18.className='td18'
                td18.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td19 = document.createElement('td');
                td19.innerHTML = item['zaregal'];
                td19.className='td19'
                td19.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";
                
                let td20 = document.createElement('td');
                td20.innerHTML = item['info_uved'];
                td20.className='td20'
                td20.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td21 = document.createElement('td');
                td21.innerHTML = item['getter'];
                td21.className='td21'
                td21.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td23 = document.createElement('td');
                td23.innerHTML = item['dop_info'];
                td23.className='td23'
                td23.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td22 = document.createElement('td');
                td22.innerHTML = item['oblast'];
                td22.className='td22'
                td22.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";

                let td24 = document.createElement('td');
                td24.innerHTML = item['comisia'];
                td24.className='td24'
                td24.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";
                
                let td25 = document.createElement('td');
                td25.innerHTML = item['giveSvid'];
                td25.className='td25'
                td25.style = "border: 1px dashed black; padding: 0.2rem 0.75rem;text-align:center;line-height: normal; ";
                
                tr.appendChild(td1);
                tr.appendChild(td2);
               // tr.appendChild(td3);
                tr.appendChild(td4);

                if((dataParametrs.pervtor === 1) || (dataParametrs.adm_resh === 1)){
                    tr.appendChild(td5);
                }

                if((dataParametrs.checkbox_pervtor_2 === true)|| (dataParametrs.adm_resh === 1)){
                    tr.appendChild(td26);
                }

                if(dataParametrs.adm_resh === 1){
                    tr.appendChild(td27);
                }

                tr.appendChild(td6);

                if(dataParametrs.with_contact === true){
                    tr.appendChild(td7);
                    tr.appendChild(td8);
                    tr.appendChild(td9);
                    tr.appendChild(td10);
                }
                tr.appendChild(td11);
                tr.appendChild(td25);
                tr.appendChild(td12);
                tr.appendChild(td13);
                tr.appendChild(td14);
                tr.appendChild(td15);
            //    tr.appendChild(td16);
                tr.appendChild(td17);
                tr.appendChild(td18);
                if(dataParametrs.zaregal === true){
                    tr.appendChild(td19);
                }
                if(dataParametrs.info === true){
                    tr.appendChild(td20);
                    tr.appendChild(td21);
                    tr.appendChild(td23);
                }
                
                
                tr.appendChild(td22);
                tr.appendChild(td24);
                tbody.appendChild(tr);

            })
       } else {
        
        let divForTable = document.getElementById(`divForTable`);
        divForTable.innerHTML = '';
        divForTable.innerHTML = 'По данным параметрам нет записей';

       }


    })



    let divReportTitle = document.createElement('div');
    divReportTitle.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:2rem; text-align:left";

    divReportTitle.textContent = `Журнал регистрации РКК`;


    let divReportUsl = document.createElement('div');
         divReportUsl.id = 'divReportUsl';
         divReportUsl.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:1.2rem; line-height: normal;";
         divReportUsl.innerHTML = '<b>' + `Условия отбора:`+'</b>' + '<br/>';

        if(dataParametrs.date_reg == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Дата регистрации:'+'</b>' + ' с ' + dataParametrs.date_reg_at + ' по ' + dataParametrs.date_reg_to + '<br/>'
        }

        if(dataParametrs.date_protokol == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Дата протокола:'+'</b>' + ' с ' + dataParametrs.date_protokol_at + ' по ' + dataParametrs.date_protokol_to + '<br/>'
        }

        if(dataParametrs.date_admin_resh == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Дата административного решения:'+'</b>' + ' с ' + dataParametrs.date_admin_resh_at + ' по ' + dataParametrs.date_admin_resh_to + '<br/>'
        }

        if(dataParametrs.date_sved == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Срок действия свидетельства:'+'</b>' + ' с ' + dataParametrs.date_sved_at + ' по ' + dataParametrs.date_sved_to + '<br/>'
        }        
      
        if(dataParametrs.date_delo == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Дата снятия с контроля:'+'</b>' + ' с '  + dataParametrs.date_delo_at + ' по ' + dataParametrs.date_delo_to + '<br/>'
        } 
        
        if(dataParametrs.checkAllOblast === true) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Регион :'+'</b>' + 'Все регионы<br/>'
        } else {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Регион:'+'</b> ' +  dataParametrs.checkOblasts + '<br/>'
        }

        if(dataParametrs.adm_resh == 1) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Вид административного решения:'+'</b>'
            if(dataParametrs.checkbox_adm_resh_1 === true){
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' Выдача свидетельства'
            }
            if(dataParametrs.checkbox_adm_resh_2 === true){
                if(dataParametrs.checkbox_adm_resh_1 === true){
                    divReportUsl.innerHTML  = divReportUsl.innerHTML + ', '
                } 
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' Отказ в выдаче свидетельства'
            }
            if(dataParametrs.checkbox_adm_resh_3 === true){
                if((dataParametrs.checkbox_adm_resh_1 === true)||(dataParametrs.checkbox_adm_resh_2 === true)){
                    divReportUsl.innerHTML  = divReportUsl.innerHTML + ', '
                } 
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' Отказ в приеме заявления'
            }

	    if(dataParametrs.checkbox_adm_resh_4 === true){
                if((dataParametrs.checkbox_adm_resh_1 === true)||(dataParametrs.checkbox_adm_resh_2 === true)||(dataParametrs.checkbox_adm_resh_3 === true)){
                    divReportUsl.innerHTML  = divReportUsl.innerHTML + ', '
                } 
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' Отсутствует административное решение'
            }
           
            divReportUsl.innerHTML  = divReportUsl.innerHTML + '<br/>'
        } 

        if((dataParametrs.guzo == 1) || (dataParametrs.pervtor == 1)){
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Заявление:'+'</b>'
        }

        if(dataParametrs.guzo == 1) {
       //     divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Заявление:'+'</b>'
            if(dataParametrs.checkbox_guzo_1 === true){
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' ГУЗО, Комитет'
            }
            if(dataParametrs.checkbox_guzo_2 === true){
                if(dataParametrs.checkbox_guzo_1 === true){
                    divReportUsl.innerHTML  = divReportUsl.innerHTML + ', '
                } 
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' Внутреняя комиссия'
            }
           
            if(dataParametrs.pervtor != 1){
            divReportUsl.innerHTML  = divReportUsl.innerHTML + '<br/>'
            }
        }


        if(dataParametrs.pervtor == 1) {
        //    divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Заявление:'+'</b>'
            if(dataParametrs.checkbox_pervtor_1 === true){
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' первичное'
            }
            if(dataParametrs.checkbox_pervtor_2 === true){
                if(dataParametrs.checkbox_pervtor_1 === true){
                    divReportUsl.innerHTML  = divReportUsl.innerHTML + ', '
                } 
                divReportUsl.innerHTML  = divReportUsl.innerHTML + ' повторное'
            }
           
            divReportUsl.innerHTML  = divReportUsl.innerHTML + '<br/>'
        } 

        if(dataParametrs.checkRkkotzyvStr.length > 0) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Основание для повторного'+'</b>:'+dataParametrs.checkRkkotzyvStr.toString() +'<br/>'      
        } 


        if(dataParametrs.otz === true) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Отозванные заявления'+'</b>'+ '<br/>'      
        } 
        
        if(dataParametrs.otkaz === true) {
            divReportUsl.innerHTML  = divReportUsl.innerHTML +'<b>' +' Отказ в приеме заявления'+'</b>'+ '<br/>'      
        } 

    
         
    divForTable.appendChild(divReportTitle);          
    divForTable.appendChild(divReportUsl);     

    let divTable = document.createElement('div');
    divTable.id = 'divTable'
    let butnJournal = document.getElementById('butnJournal');
    
    let contentWidth = butnJournal.clientWidth - 32;
    
    divTable.style = `overflow-x:auto; max-width: ${contentWidth}px;overflow-block: visible; max-height: 600px;`;
    
    divTable.appendChild(table); 
    divForTable.appendChild(divTable); 
    
}



function printReport(){

    printTable()
    
    
    var WinPrint = window.open('g','g','left=50,top=50,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write('<style>@page {\n' +
        'size: A4 landscape;\n' +
        'margin: 1rem;\n' +
        '}</style>');
    
 
   // WinPrint.document.write(divReportTitle.innerHTML);    
    let divForTable = document.getElementById('divForTable');    
    let divTable = document.getElementById('divTable');    

     let butnJournal = document.getElementById('butnJournal');
    
    let contentWidth = butnJournal.clientWidth - 32;
    divTable.style = ``;
   // let divReportUsl = document.getElementById('divReportUsl');    
   // divReportUsl.removeAttribute('hidden');
   //let printMe = divForTable;    
   
   
    //let printMe = document.getElementById('printMe'); 

    let pageCount = data[data.length-1].page;

 
    
     for (let j = 0; j <= pageCount; j++) {
        let divBreakRem = document.getElementById('divBreak')
        if(divBreakRem){
            divBreakRem.remove();
        }
        
        data.map(item => {
            let thEl_ = document.getElementById(item.id)
            let tdEl_ = document.getElementsByClassName(`td${item.id.substring(2)}`)

            thEl_.style.display = '';
            thEl_.style.maxWidth = Math.floor(item.width) + 'px';

       

             for (let i = 0; i < tdEl_.length; i++) {
                tdEl_[i].style.display = '';
                tdEl_[i].style.maxWidth = Math.floor(item.width) + 'px';
       

              }
            
        })  
     
         data.map(item => {
            let thEl = document.getElementById(item.id)
            let tdEl = document.getElementsByClassName(`td${item.id.substring(2)}`)
           
            if(item.page!=j){
         

                thEl.style.display = 'none';
                thEl.style.maxWidth = Math.floor(item.width)+ 'px';
                for (let i = 0; i < tdEl.length; i++) {
                    tdEl[i].style.display = 'none';
                    tdEl[i].style.maxWidth = Math.floor(item.width)+ 'px';
                  
                }
    
    
            
            }
        
            
        })  
        let divBreak =  document.createElement('p');
        divBreak.style = 'overflow:hidden;page-break-before:always;';
        divBreak.id = 'divBreak'
      
        
        if(j != pageCount){
            divForTable.appendChild(divBreak)
        }
        
        WinPrint.document.write(divForTable.innerHTML);

    
    }

    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

    divTable.style = `overflow-x:auto; max-width: ${contentWidth}px;overflow-block: visible; max-height: 600px;`;
   // divReportUsl.setAttribute('hidden','true');


   data.map(item => {
    let thEl_ = document.getElementById(item.id)
    let tdEl_ = document.getElementsByClassName(`td${item.id.substring(2)}`)

    thEl_.style.display = '';
    thEl_.style.maxWidth = Math.floor(item.width) + 'px';

     for (let i = 0; i < tdEl_.length; i++) {
        tdEl_[i].style.display = '';
        tdEl_[i].style.maxWidth = Math.floor(item.width) + 'px';


      }
    
    })  

   
}

let data = new Array();

function printTable(){

    data = new Array();


    let divReportRow = document.getElementById('reportRow');   
    let divForTable = document.getElementById('divForTable');   
     
  

     let printMe = document.getElementById('printMe');  
	 let thead = printMe.getElementsByTagName("thead")[0]
	 let th = thead.getElementsByTagName("th")
 
	 let itemTh2 = [...th];
	 let itemTh = []
	 itemTh2.map(item => {
		 itemTh=[...itemTh, item];
	 })
	 
	 
	 
	 let clWidth = 1530
	 let i = 0
 
     let thWidth = 0;
 
	 itemTh.map((item) => {
		 let rect = item.getBoundingClientRect()

         thWidth = thWidth + rect.width

         data = [...data, { id: item.id, page: Math.floor(thWidth / 1530), width: rect.width, left: rect.left }];

         console.log(thWidth, '  thWidth' )  
        })

}


function printReport2(data){

        let printMe = document.getElementById('divForTable');  
        let dateNow = new Date;
        tableToExcel(printMe,'Журнал', `Журнал_РКК_${new Date().toLocaleDateString()}.xls`)
}

var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html  ><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name>'+
    '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->'+
    '<style> tr div{ mso-number-format:000000; }'+
    ' </style>'+
    '<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { 	    	 
        return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) 
    }
    , downloadURI = function(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

    return function(table, name, fileName) {
        if (!table.nodeType) table = document.getElementById(table)
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        var resuri = uri + base64(format(template, ctx))
        downloadURI(resuri, fileName);
    }
})();  