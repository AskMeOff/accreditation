let id_appp;
let createrApp;
let idRkk;
let loginApp;
let stringFileReport;

function newShowModall(id_application) {
    let btnRkk;
    // console.log('newShowMod')
    let divSoprovodPismo = document.getElementById("divSoprovodPismo");
    if (!divSoprovodPismo.classList.contains("hiddentab"))
        divSoprovodPismo.classList.add("hiddentab");

    let divOrgStrukt = document.getElementById("divOrgStrukt");
    if (!divOrgStrukt.classList.contains("hiddentab"))
        divOrgStrukt.classList.add("hiddentab");

    let formFileReportZakluchenieSootvet = document.getElementById("formFileReportZakluchenieSootvet");
    if (formFileReportZakluchenieSootvet.classList.contains("hiddentab"))
        formFileReportZakluchenieSootvet.classList.remove("hiddentab");


    createrApp = "";

    $.ajax({
        url: "ajax/getCreaterApp.php",
        method: "GET",
        data: {id_application: id_application}
    }).then((response) => {
        createrApp = response;
    })

    let formFileReportSamoocenka = document.getElementById("formFileReportSamoocenka");

    let formUcomplect = document.getElementById("formUcomplect");
    formUcomplect.style = "display: none";
    let newDivUcomplect = document.createElement("div");
    let btnTableUcomplect = document.createElement("button");
    let labelUcomplect = document.createElement("p");
    labelUcomplect.innerHTML = "Укомплектованность";
    newDivUcomplect.appendChild(labelUcomplect);
    btnTableUcomplect.innerHTML = "Просмотр";
    btnTableUcomplect.classList = "ownUcomp"
    newDivUcomplect.appendChild(btnTableUcomplect);
    newDivUcomplect.style = "margin-bottom: 20px";
    let prev = formUcomplect.previousElementSibling;
    prev.insertAdjacentElement("afterend", newDivUcomplect);
    let modalUcomplect = document.getElementById("modalUcomplect");
    let modalBody = modalUcomplect.getElementsByClassName("modal-body")[0];
    btnTableUcomplect.onclick = () => {

        modalUcomplect.style = "display: block";
        $.ajax({
            url: "ajax/z_accred_ucomplectTable.php",
            method: "GET",
            data: {id_application: id_application}
        }).then((response) => {
            modalBody.innerHTML = response;
        })
    }

    let closeXucomplect = document.getElementsByClassName("closeXucomplect")[0];
    closeXucomplect.onclick = () => {
        modalUcomplect.style = "display: none";

    }
    let closeUcomplect = document.getElementsByClassName("closeUcomplect")[0];
    closeUcomplect.onclick = () => {
        modalUcomplect.style = "display: none";

    }


    let btnSend = document.getElementById("btnSend");


    let btnPrint = document.getElementById("newBtnPrint");
    let btnPrintReport = document.getElementById("btnPrintReport");


    let homeTab = document.getElementById("home-tab");
    let btnSen = document.getElementById("newBtnSend");
    let btnSu = document.getElementById("btnSuc");
    if (homeTab.classList.contains("active")) {

    }
    let footer = document.getElementsByClassName("modal-footer")[0];
    if (footer.classList.contains('hiddentab')) {
        footer.classList.remove('hiddentab');
    }

    let apppp = document.getElementsByClassName('accordion');

    if (apppp.length !== 0) {
        for (let i = 0; i < apppp.length; i++) {
            apppp[i].remove();
        }
    }

    let remAccTab = document.getElementsByClassName('remAccTab');

    if (remAccTab.length !== 0) {
        for (let i = 0; i < remAccTab.length; i++) {
            remAccTab[i].remove();
        }
    }


    let remSubMark = document.getElementsByClassName('subMark');
    if (remSubMark.length !== 0) {
        for (let i = 0; i < remSubMark.length; i++) {
            remSubMark[i].remove();
        }
    }
    let tab = document.getElementById("tab1");
    tab.setAttribute("onclick", "newShowTabs(this," + 1 + ")");
    let pane = document.getElementById("tab1-");
    if (!tab.children[0].classList.contains("active")) {
        tab.children[0].classList.add("active");
        pane.classList.add("active");
    }
    let btnChecking = document.getElementById("btnChecking");
    let btnOk = document.getElementById("btnOk");
    let btnNeOk = document.getElementById("btnNeOk");

    // let btncalc = document.getElementById("btnCalc");
    let btnreport = document.getElementById("btnPrintReport");
    let btnOkReshenie = document.getElementById("btnOkReshenie");
    let btnOkonchatelnoeReshenie = document.getElementById("btnOkonchatelnoeReshenie");

    let tabOdobrenie = document.getElementById("rkk-tab");
    let tabNeodobrennie = document.getElementById("neodobrennie-tab");
    let tabRassmotrenie = document.getElementById("rassmotrenie-tab");
    let tabReshenieSoveta = document.getElementById("reshenieSoveta-tab");
    let accredArchive = document.getElementById("accredArchive-tab");
    let accredArchiveNew = document.getElementById("accredArchiveNew-tab");
    let tabHome = document.getElementById("home-tab");
    let informgr = document.getElementById("informgr");
    let sovetgr = document.getElementById("sovetgr");
    let btnJournalActions = document.getElementById("btnJournalActions");
    let  fileAdminResh = document.getElementById("fileAdminResh");

    let  divPlan = document.getElementById("divPlan");
    let  divDataPlan = document.getElementById("divDataPlan");


    if (tabOdobrenie.classList.contains("active")) {
        // console.log("XUY");
        // btnNeOk.classList.add("hiddentab");
        btnOk.classList.remove("hiddentab");
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");

        btnJournalActions.style.display = "block";

        // btnreport.classList.remove("hiddentab");
    } else if (tabNeodobrennie && tabNeodobrennie.classList.contains("active")) {

        if (getCookie("secretar") === "1" || getCookie("predsedatel") === "1") {
            btnChecking.classList.remove("hiddentab");
        }
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        btnChecking.classList.add("hiddentab");
        btnOk.classList.add("hiddentab");
        fileAdminResh.classList.add("hiddentab");
        sovetgr.style.display = "none";
        informgr.style.display = "none";
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");
    } else if (tabRassmotrenie.classList.contains("active")) {
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        // btnNeOk.classList.add("hiddentab");
        btnChecking.classList.add("hiddentab");
        btnOk.classList.remove("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btncalc.classList.remove("hiddentab");
        btnreport.classList.remove("hiddentab");
        sovetgr.style.display = "none";
        informgr.style.display = "none";
        fileAdminResh.classList.add("hiddentab");
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");

    } else if (tabReshenieSoveta.classList.contains("active")) {
        btnOkonchatelnoeReshenie.classList.remove("hiddentab");
        // btncalc.classList.add("hiddentab");
        btnreport.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btnNeOk.classList.add("hiddentab");
        btnChecking.classList.add("hiddentab");
        btnOk.classList.add("hiddentab");
        informgr.style.display = "none";
        sovetgr.style.display = "block";
        fileAdminResh.classList.add("hiddentab");
        divPlan.classList.remove("hiddentab");
        divDataPlan.classList.remove("hiddentab");


    } else if (accredArchive.classList.contains("active")) {
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        // btncalc.classList.add("hiddentab");
        btnreport.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btnNeOk.classList.add("hiddentab");
        btnChecking.classList.add("hiddentab");
        btnOk.classList.add("hiddentab");
        informgr.style.display = "block";
        sovetgr.style.display = "block";
        fileAdminResh.classList.add("hiddentab");
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");
    } else if (tabHome.classList.contains("active")) {

        $.ajax({
            url: "ajax/getIdRkk.php",
            method: "GET",
            data: {
                id_application: id_application
            }
        }).done(function (result) {
            if (result !== "no data") {
                let data = JSON.parse(result);

                idRkk = data.id_rkk;
                console.log (idRkk +"dassdas");
                if (idRkk !== "0") {
                    btnChecking.classList.remove("hiddentab");
                } else {
                    btnChecking.classList.add("hiddentab");
                }
            }
        });


        sovetgr.style.display = "none";
        informgr.style.display = "block";
        if (getCookie("secretar") === "1" || getCookie("predsedatel") === "1") {
            // btnNeOk.classList.remove("hiddentab");
            btnChecking.classList.remove("hiddentab");
        }
        btnOk.classList.add("hiddentab");
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btncalc.classList.remove("hiddentab");
        btnreport.classList.remove("hiddentab");
        fileAdminResh.classList.add("hiddentab");
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");
        btnPrint.onclick = () => {

            newPrint();
        };

    } else if (accredArchiveNew.classList.contains("active")) {
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        btnreport.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btnNeOk.classList.add("hiddentab");
        btnChecking.classList.add("hiddentab");
        btnOk.classList.add("hiddentab");
        informgr.style.display = "block";
        sovetgr.style.display = "block";

    }else {
        sovetgr.style.display = "none";
        informgr.style.display = "block";
        if (getCookie("secretar") === "1" || getCookie("predsedatel") === "1") {
            // btnNeOk.classList.remove("hiddentab");
            btnChecking.classList.remove("hiddentab");
        }
        btnOk.classList.add("hiddentab");
        btnOkonchatelnoeReshenie.classList.add("hiddentab");
        btnOkReshenie.classList.add("hiddentab");
        // btncalc.classList.remove("hiddentab");
        btnreport.classList.remove("hiddentab");
        fileAdminResh.classList.add("hiddentab");
        divPlan.classList.add("hiddentab");
        divDataPlan.classList.add("hiddentab");
    }

    openTabId = 0;
    let mainRightCard = document.getElementById("mainRightCard");

    let addtab = document.getElementById("addtab");

    if (idRole === "15")
        addtab.style = "display: none";

    let btnSuc = document.getElementById("btnSuc");
    // let btnCalc = document.getElementById("btnCalc");


    //  console.log(aButton);


    document.getElementsByClassName("modal-title")[0].innerHTML = "Редактирование заявления № ";


    let ownUcompBtnClass = document.getElementsByClassName("ownUcomp")[0];
    let number_app = document.getElementById("id_application");
    let naim = document.getElementById("naim");
    naim.setAttribute("readonly", "");
    let sokr = document.getElementById("sokr");
    let unp = document.getElementById("unp");
    let adress = document.getElementById("adress");
    let adressFact = document.getElementById("adressFact");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");
    let rukovoditel = document.getElementById("rukovoditel");
    let predstavitel = document.getElementById("predstavitel");
    let soprPismo = document.getElementById("soprPismo");
    let orgStrukt = document.getElementById("orgStrukt");
    let ucomplect = document.getElementById("ucomplect");
    let techOsn = document.getElementById("techOsn");
    let fileReport = document.getElementById("fileReport");
    let reportSamoocenka = document.getElementById("reportSamoocenka");
    let reportZakluchenieSootvet = document.getElementById("reportZakluchenieSootvet");
    let doverennost = document.getElementById("doverennost");
    let prikazNaznach = document.getElementById("prikazNaznach");
    let divFileReportDorabotka = document.getElementById("divFileReportDorabotka");
    let divDateDorabotka = document.getElementById("divDateDorabotka");
    let formFileReportDorabotka = document.getElementById("formFileReportDorabotka");
    let formDateDorabotka = document.getElementById("formDateDorabotka");

    // divSoprPismo.style = "display:none";
    //  divOrgStrukt.style = "display:none";

    let divCopyRaspisanie = document.getElementById("divCopyRaspisanie");
    let divUcomplect = document.getElementById("divUcomplect");
    let divTechOsn = document.getElementById("divTechOsn");
    let divReport = document.getElementById("divReport");
    let divFileReportSamoocenka = document.getElementById("divFileReportSamoocenka");
    let divFileReportZakluchenieSootvet = document.getElementById("divFileReportZakluchenieSootvet");
    let divDoverennost = document.getElementById("divDoverennost");
    let divPrikazNaznach = document.getElementById("divPrikazNaznach");
    number_app.innerHTML = id_application;
    id_appp = id_application;
    let modal = document.getElementById("myModal");
    let tablist = document.getElementById("tablist");

    //  naim.value = username;
    if (status == 1 || status == 5) {
        formFileReportDorabotka.style.display = "block";
        formDateDorabotka.style.display = "block";
        checkUserRole();

    } else {
        checkUserRole();
    }


    let data = new Array();
    $.ajax({
        url: "ajax/getApplicationAccred.php",
        method: "GET",
        data: {id_application: id_application}
    })
        .done(function (response) {
            for (let i of JSON.parse(response)) {
                data.push(i);
                data_old.push(i);
            }
            let login = getCookie('login');
            naim.value = data[0][0];
            sokr.value = data[0][1];
            if (document.getElementById("sokr_name")) {
                document.getElementById("sokr_name").innerHTML = "Регистрация заявления ";
                document.getElementById("sokr_name").innerHTML += sokr.value;
            }
            unp.value = data[0][2];
            adress.value = data[0][3];
            tel.value = data[0][4];
            email.value = data[0][5];
            rukovoditel.value = data[0][6];
            predstavitel.value = data[0][7];
            adressFact.value = data[0][18];
            let id_o_a = data[0][32];
            if (id_o_a == null) {
                id_o_a = id_application;
                console.log ("новое");
            }
            else {
                console.log ("старое");
            }
            console.log(id_o_a)
            let data1 = JSON.parse(response);
            idRkk = data1[4];


            if (data[0][17] != null) {
                divDateDorabotka.insertAdjacentHTML("afterend", "<span>" + data[0][17] + "</span>");
            }
            if (data[0][24] != null) {
                let fileNames = data[0][24].split(';');
                fileNames.forEach((fileName) => {
                    filesContainerAdminResh.insertAdjacentHTML("beforeend", "<a target='_blank' href='/docs/documents/"+ loginApp + "/"  + id_application + "/" + fileName + "'>" + fileName + "</a><br>");
                });
            }
            if (data[0][14] != null) {
                stringFileReport = data[0][14];
                let fileNames = data[0][14].split(';');
                fileNames.forEach((fileName) => {
                    filesContainer.insertAdjacentHTML("beforeend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_application + "/" + fileName + "'>" + fileName + "</a><br>");
                });
            }
            if (data[0][15] != null) {
                reportSamoocenka.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_application + "/" + data[0][15] + "'>" + data[0][15] + "</a>");
            }
            if (data[0][16] != null) {
                divFileReportDorabotka.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + "/dorabotka/" + id_application + "/" + data[0][16] + "'>" + data[0][16] + "</a>");
            }
            if (data[0][8] != null) {
                soprPismo.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_application + "/" + data[0][8] + "'>" + data[0][8] + "</a>");
            }
            if (data[0][9] != null) {
                copyRaspisanie.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_o_a + "/" + data[0][9] + "'>" + data[0][9] + "</a>");
            }
            if (data[0][10] != null) {
                orgStrukt.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_application + "/" + data[0][10] + "'>" + data[0][10] + "</a>");
            }
            if (data[0][11] != null) {
                ucomplect.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_application + "/" + data[0][11] + "'>" + data[0][11] + "</a>");
            }
            if (data[0][12] != null) {
                techOsn.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_o_a + "/" + data[0][12] + "'>" + data[0][12] + "</a>");
            }
            if (data[0][20] != null) {
                reportZakluchenieSootvet.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_o_a + "/" + data[0][20] + "'>" + data[0][20] + "</a>");
            }

            let lico = document.getElementById("lico");
            if (data[0][22] != null) {
                lico.options.selectedIndex = data[0][22];
                chengeLico(lico);
            } else {
                lico.options.selectedIndex = 0;
                chengeLico(lico);
            }

            if (data[0][21] != null) {
                prikazNaznach.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_o_a + "/" + data[0][21] + "'>" + data[0][21] + "</a>");
            }

            if (data[0][19] != null) {
                doverennost.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + data[0][13] + "/" + id_o_a + "/" + data[0][19] + "'>" + data[0][19] + "</a>");
            }

            modal.classList.add("show");
            modal.style = "display: block";

            for (let obj of data[1]) {

                newGetTabss(obj[1], obj[0]);

            }
            let mark_percent = data[2];
            let mark_accred_percent = data[3];
            let mainRightCard = document.getElementById("mainRightCard");
            mainRightCard.innerHTML = "Самоаккредитация - " + Math.round(parseFloat(mark_percent).toFixed(2)) + "%";
            mainRightCard.innerHTML = mainRightCard.innerHTML + "<br>Оценка соответствия - " + Math.round(parseFloat(mark_accred_percent).toFixed(2)) + "%";

        });
    // выводим полученный ответ на консоль браузер

    $(".closeX").on("click", async () => {
        newDivUcomplect.remove();
        let sopr = divSoprPismo.getElementsByTagName("a")[0];
        let copy = divCopyRaspisanie.getElementsByTagName("a")[0];
        let org = divOrgStrukt.getElementsByTagName("a")[0];
        let ucompl = divUcomplect.getElementsByTagName("a")[0];
        let tech = divTechOsn.getElementsByTagName("a")[0];
        let rep = divReport.getElementsByTagName("a")[0];
        let divZakluchenieSootvet = divFileReportZakluchenieSootvet.getElementsByTagName("a")[0];
        let divFileReportSamoocenka = document.getElementById("divFileReportSamoocenka");
        let samoocenka = divFileReportSamoocenka.getElementsByTagName("a")[0];
        let fRD = formFileReportDorabotka.querySelectorAll("a");
        let doverennost = divDoverennost.getElementsByTagName("a")[0];
        let prikazNaznach = divPrikazNaznach.getElementsByTagName("a")[0];
        let btnRkkid = document.getElementById("btnRkkid");

        let DD = formDateDorabotka.querySelectorAll("span");


        var collapseElement = document.getElementsByClassName('collapse');

        if ((typeof collapseElement !== 'undefined') && (collapseElement !== null)) {
            let collapseElement2 = [...collapseElement];
            let collapseElement3 = collapseElement2.filter((item) => item.classList.contains("show") === true)
            if (collapseElement3.length > 0) {
                var elementcrit = document.querySelector('.collapse.show[id^="collapse"]');
                if (elementcrit) {
                    var idcrit = elementcrit.id.replace('collapse', '');
                    var id_criteria = parseInt(idcrit);

                    // Найти элемент с классом nav-link active
                    var elementsub = document.querySelector('.nav-link.active[id^="button"]');
                    var idsub = elementsub.id.replace('button', '');
                    var id_sub = parseInt(idsub);


                    await updateCollapse(id_criteria, id_sub, 0).then(() => {
                        if (samoocenka) {
                            samoocenka.remove();
                        }
                        if (divZakluchenieSootvet) {
                            divZakluchenieSootvet.remove();
                        }
                        // Удалить все найденные элементы с тегом "a"
                        for (let anchor of fRD) {
                            anchor.remove();
                        }

                        for (let anchor of DD) {
                            anchor.remove();
                        }
                        if (rep) {
                            rep.remove();
                        }
                        if (btnRkkid) {
                            btnRkkid.remove();
                        }
                        if (sopr) {
                            sopr.remove();
                        }
                        if (copy) {
                            copy.remove();
                        }
                        if (org) {
                            org.remove();
                        }
                        if (ucompl) {
                            ucompl.remove();
                        }
                        if (tech) {
                            tech.remove();
                        }

                        if (doverennost) {
                            doverennost.remove();
                        }
                        if (prikazNaznach) {
                            prikazNaznach.remove();
                        }

                        modal.classList.remove("show");
                        modal.style = "display: none";
                        for (let i = tablist.children.length - 1; i > 0; i--) {
                            tablist.children[i].remove();
                        }
                        let remAccTab = document.getElementsByClassName('remAccTab');

                        if (remAccTab.length !== 0) {
                            for (let i = 0; i < remAccTab.length; i++) {
                                remAccTab[i].remove();
                            }
                        }

                    });
                }

            } else {
                if (samoocenka) {
                    samoocenka.remove();
                }
                if (divZakluchenieSootvet) {
                    divZakluchenieSootvet.remove();
                }
                // Удалить все найденные элементы с тегом "a"
                for (let anchor of fRD) {
                    anchor.remove();
                }

                for (let anchor of DD) {
                    anchor.remove();
                }
                if (rep) {
                    rep.remove();
                }
                if (btnRkkid) {
                    btnRkkid.remove();
                }
                if (sopr) {
                    sopr.remove();
                }
                if (copy) {
                    copy.remove();
                }
                if (org) {
                    org.remove();
                }
                if (ucompl) {
                    ucompl.remove();
                }
                if (tech) {
                    tech.remove();
                }
                if (doverennost) {
                    doverennost.remove();
                }
                if (prikazNaznach) {
                    prikazNaznach.remove();
                }
                modal.classList.remove("show");
                modal.style = "display: none";
                for (let i = tablist.children.length - 1; i > 0; i--) {
                    tablist.children[i].remove();
                }
                let remAccTab = document.getElementsByClassName('remAccTab');

                if (remAccTab.length !== 0) {
                    for (let i = 0; i < remAccTab.length; i++) {
                        remAccTab[i].remove();
                    }
                }
            }
        } else {
            if (samoocenka) {
                samoocenka.remove();
            }
            if (divZakluchenieSootvet) {
                divZakluchenieSootvet.remove();
            }
            // Удалить все найденные элементы с тегом "a"
            for (let anchor of fRD) {
                anchor.remove();
            }

            for (let anchor of DD) {
                anchor.remove();
            }
            if (rep) {
                rep.remove();
            }
            if (btnRkkid) {
                btnRkkid.remove();
            }
            if (sopr) {
                sopr.remove();
            }
            if (copy) {
                copy.remove();
            }
            if (org) {
                org.remove();
            }
            if (ucompl) {
                ucompl.remove();
            }
            if (tech) {
                tech.remove();
            }
            if (doverennost) {
                doverennost.remove();
            }
            if (prikazNaznach) {
                prikazNaznach.remove();
            }
            modal.classList.remove("show");
            modal.style = "display: none";
            for (let i = tablist.children.length - 1; i > 0; i--) {
                tablist.children[i].remove();
            }
            let remAccTab = document.getElementsByClassName('remAccTab');

            if (remAccTab.length !== 0) {
                for (let i = 0; i < remAccTab.length; i++) {
                    remAccTab[i].remove();
                }
            }
        }

    });
    $(".closeD").on("click", async () => {
        newDivUcomplect.remove();
        let sopr = divSoprPismo.getElementsByTagName("a")[0];
        let copy = divCopyRaspisanie.getElementsByTagName("a")[0];
        let org = divOrgStrukt.getElementsByTagName("a")[0];
        let ucompl = divUcomplect.getElementsByTagName("a")[0];
        let tech = divTechOsn.getElementsByTagName("a")[0];
        let rep = divReport.getElementsByTagName("a")[0];
        let samoocenka = divFileReportSamoocenka.getElementsByTagName("a")[0];
        let divZakluchenieSootvet = divFileReportZakluchenieSootvet.getElementsByTagName("a")[0];
        let fRD = formFileReportDorabotka.querySelectorAll("a");
        let DD = formDateDorabotka.querySelectorAll("span");
        let doverennost = divDoverennost.getElementsByTagName("a")[0];
        let prikazNaznach = divPrikazNaznach.getElementsByTagName("a")[0];
        let btnRkkid = document.getElementById("btnRkkid");

        var collapseElement = document.getElementsByClassName('collapse');

        if ((typeof collapseElement !== 'undefined') && (collapseElement !== null)) {
            let collapseElement2 = [...collapseElement];
            let collapseElement3 = collapseElement2.filter((item) => item.classList.contains("show") === true)
            if (collapseElement3.length > 0) {
                var elementcrit = document.querySelector('.collapse.show[id^="collapse"]');
                if (elementcrit) {
                    var idcrit = elementcrit.id.replace('collapse', '');
                    var id_criteria = parseInt(idcrit);
                    // Найти элемент с классом nav-link active
                    var elementsub = document.querySelector('.nav-link.active[id^="button"]');
                    var idsub = elementsub.id.replace('button', '');
                    var id_sub = parseInt(idsub);

                    await updateCollapse(id_criteria, id_sub, 0).then(() => {
                        if (samoocenka) {
                            samoocenka.remove();
                        }
                        if (divZakluchenieSootvet) {
                            divZakluchenieSootvet.remove();
                        }
                        // Удалить все найденные элементы с тегом "a"
                        for (let anchor of fRD) {
                            anchor.remove();
                        }

                        for (let anchor of DD) {
                            anchor.remove();
                        }
                        if (rep) {
                            rep.remove();
                        }
                        if (btnRkkid) {
                            btnRkkid.remove();
                        }
                        if (sopr) {
                            sopr.remove();
                        }
                        if (copy) {
                            copy.remove();
                        }
                        if (org) {
                            org.remove();
                        }
                        if (ucompl) {
                            ucompl.remove();
                        }
                        if (tech) {
                            tech.remove();
                        }
                        if (doverennost) {
                            doverennost.remove();
                        }
                        if (prikazNaznach) {
                            prikazNaznach.remove();
                        }
                        modal.classList.remove("show");
                        modal.style = "display: none";
                        for (let i = tablist.children.length - 1; i > 0; i--) {
                            tablist.children[i].remove();
                        }
                        let remAccTab = document.getElementsByClassName('remAccTab');

                        if (remAccTab.length !== 0) {
                            for (let i = 0; i < remAccTab.length; i++) {
                                remAccTab[i].remove();
                            }
                        }

                    });
                }

            } else {
                if (samoocenka) {
                    samoocenka.remove();
                }
                if (divZakluchenieSootvet) {
                    divZakluchenieSootvet.remove();
                }
                // Удалить все найденные элементы с тегом "a"
                for (let anchor of fRD) {
                    anchor.remove();
                }

                for (let anchor of DD) {
                    anchor.remove();
                }
                if (rep) {
                    rep.remove();
                }
                if (btnRkkid) {
                    btnRkkid.remove();
                }
                if (sopr) {
                    sopr.remove();
                }
                if (copy) {
                    copy.remove();
                }
                if (org) {
                    org.remove();
                }
                if (ucompl) {
                    ucompl.remove();
                }
                if (tech) {
                    tech.remove();
                }
                if (doverennost) {
                    doverennost.remove();
                }
                if (prikazNaznach) {
                    prikazNaznach.remove();
                }
                modal.classList.remove("show");
                modal.style = "display: none";
                for (let i = tablist.children.length - 1; i > 0; i--) {
                    tablist.children[i].remove();
                }
                let remAccTab = document.getElementsByClassName('remAccTab');

                if (remAccTab.length !== 0) {
                    for (let i = 0; i < remAccTab.length; i++) {
                        remAccTab[i].remove();
                    }
                }
            }
        } else {
            if (samoocenka) {
                samoocenka.remove();
            }
            if (divZakluchenieSootvet) {
                divZakluchenieSootvet.remove();
            }
            // Удалить все найденные элементы с тегом "a"
            for (let anchor of fRD) {
                anchor.remove();
            }

            for (let anchor of DD) {
                anchor.remove();
            }
            if (rep) {
                rep.remove();
            }
            if (btnRkkid) {
                btnRkkid.remove();
            }
            if (sopr) {
                sopr.remove();
            }
            if (copy) {
                copy.remove();
            }
            if (org) {
                org.remove();
            }
            if (ucompl) {
                ucompl.remove();
            }
            if (tech) {
                tech.remove();
            }
            if (doverennost) {
                doverennost.remove();
            }
            if (prikazNaznach) {
                prikazNaznach.remove();
            }
            modal.classList.remove("show");
            modal.style = "display: none";
            for (let i = tablist.children.length - 1; i > 0; i--) {
                tablist.children[i].remove();
            }
            let remAccTab = document.getElementsByClassName('remAccTab');

            if (remAccTab.length !== 0) {
                for (let i = 0; i < remAccTab.length; i++) {
                    remAccTab[i].remove();
                }
            }
        }

    });

    let divBtnPrintReport = document.getElementById('btnPrintReport');
    if(divBtnPrintReport)
    divBtnPrintReport.onclick = () => {

        printNewReport();
    };


    let divBtnPrintReportOcenka = document.getElementById('btnPrintReportOcenka');
    if(divBtnPrintReportOcenka)
        divBtnPrintReportOcenka.onclick = () => {

            printNewReportOcenka();
        };

    checkUserRole();

   let divfilesContainer = document.getElementById('filesContainer');
    divfilesContainer.innerHTML = "";
    let fileReport1 =   document.getElementById('fileReport');
    fileReport1.classList.remove("hiddentab");


    $.ajax({
        url: "ajax/getLoginApp.php",
        method: "GET",
        data: {id_app: id_appp}
    }).done(function (response) {
        let data = JSON.parse(response);
        loginApp = data.loginApp;
    });

}

async function newShowTabs(element, id_sub) {
    openTabId = id_sub;

    let tablist = document.getElementById("tablist");

    let mainSearch = document.getElementById("tab1");


    for (let item of tablist.children) {
        let a = item.children[0];
        a.removeAttribute("data-toggle");
    }
    element.children[0].setAttribute("data-toggle", "tab");

    let main = document.getElementById('tab1');
    main.children[0].setAttribute("data-toggle", "tab");

    let id = element.id;
    let tabDiv = document.getElementById(id + "-");
    let myModal = document.getElementById("myModal");
    let activeTabDiv = myModal.getElementsByClassName("tab-pane fade show active")[0];
    if (tabDiv && activeTabDiv) {
        activeTabDiv.classList.remove("active");
        tabDiv.classList.add("active");
    }
    let data = new Array();
    let idNum = id.substring(3);
    if (idNum > 1) {
        let row = tabDiv.getElementsByClassName("col-12")[1];
        let formCheckInput = document.getElementsByClassName("form-check-input");
        let formButton = document.getElementsByClassName("form-button");

        row.innerHTML = "";
        $.ajax({
            url: "ajax/newGetListTables.php",
            method: "GET",
            data: {id_sub: id_sub}
        }).done(function (response) {
            let data = JSON.parse(response);
            let idType1Data = data.filter(item => item.id_type === '1');
            let idType2Data = data.filter(item => item.id_type === '2');
            let idType3Data = data.filter(item => item.id_type === '3');
            let idType4Data = data.filter(item => item.id_type === '4');


//первый тип
            let divFormGroup1 = document.createElement("div");
            divFormGroup1.style = "margin-bottom: 10px";
            let label_1 = document.createElement("label");
            label_1.innerHTML = "Первичная медицинская помощь";
            label_1.style.fontWeight = "600";
            label_1.style.textAlign = "left";
            label_1.style.cursor = "pointer";
            let hr1 = document.createElement("hr");
            hr1.style.margin = "0";
            divFormGroup1.appendChild(label_1);
            divFormGroup1.appendChild(hr1);
            divFormGroup1.onclick = () => {
                let group1 = document.getElementsByClassName("group1");
                [...group1].forEach(item => {
                    if (item.classList.contains("hiddentab"))
                        item.classList.remove("hiddentab");
                    else
                        item.classList.add("hiddentab");
                })
            }
            row.appendChild(divFormGroup1);

            for (let i = 0; i < idType1Data.length; i++) {

                let divFormGroup = document.createElement("div");
                divFormGroup.className = "form-group group1 hiddentab";
                let divFormCheck = document.createElement("div");
                divFormCheck.className = "form-check margleft";

                if (idType1Data[i].level === '1') {
                    let inputCheck = document.createElement("input");
                    inputCheck.className = "form-check-input";
                    inputCheck.setAttribute("type", "checkbox");
                    inputCheck.setAttribute("id", "checkbox" + idType1Data[i].id);

                    let labelCheck = document.createElement("label");
                    labelCheck.className = "form-check-label";
                    labelCheck.style.textAlign = "left";
                    // labelCheck.setAttribute("for", "checkbox" + idType1Data[i].id);
                    labelCheck.innerHTML = idType1Data[i].name === undefined ? "" : idType1Data[i].name;
                    inputCheck.onclick = () => {
                        toggleActiveCheckbox(inputCheck, formCheckInput, formButton)
                    };
                    divFormCheck.appendChild(inputCheck);
                    divFormCheck.appendChild(labelCheck);
                } else {
                    let inputCheck = document.createElement("button");
                    inputCheck.className = "form-button";
                    inputCheck.style = "color: black;\n" +
                        "    display: inline-block;\n" +
                        "    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);\n" +
                        "    border: 1px solid #999;\n" +
                        "    border-radius: 3px;\n" +
                        "    padding: 5px 8px;\n" +
                        "    outline: none;\n" +
                        "    white-space: normal;\n" +
                        "    -webkit-user-select: none;\n" +
                        "    cursor: pointer;\n" +
                        "    text-shadow: 1px 1px #fff;\n" +
                        "    font-weight: 700;\n" +
                        "    font-size: 10pt;width:90%;";
                    inputCheck.setAttribute("disabled", true);
                    inputCheck.onclick = () => {
                        buttonSelected(inputCheck)
                    };
                    inputCheck.setAttribute("id", "checkbox" + idType1Data[i].id);
                    inputCheck.innerHTML = idType1Data[i].name === undefined ? "" : idType1Data[i].name;
                    divFormCheck.appendChild(inputCheck);
                }

                divFormGroup.appendChild(divFormCheck);
                row.appendChild(divFormGroup);
            }


//второй тип
            let divFormGroup2 = document.createElement("div");
            divFormGroup2.style = "margin-bottom: 10px";
            let label_2 = document.createElement("label");
            label_2.innerHTML = "Специализированная и/или высокотехнологичная медицинская помощь";
            label_2.style.fontWeight = "600";
            label_2.style.textAlign = "left";
            label_2.style.cursor = "pointer";
            let hr2 = document.createElement("hr");
            hr2.style.margin = "0";
            divFormGroup2.appendChild(label_2);
            divFormGroup2.appendChild(hr2);
            divFormGroup2.onclick = () => {
                let group2 = document.getElementsByClassName("group2");
                [...group2].forEach(item => {
                    if (item.classList.contains("hiddentab"))
                        item.classList.remove("hiddentab");
                    else
                        item.classList.add("hiddentab");
                })
            }
            row.appendChild(divFormGroup2);

            for (let i = 0; i < idType2Data.length; i++) {
                let divFormGroup = document.createElement("div");
                divFormGroup.className = "form-group group2 hiddentab";
                let divFormCheck = document.createElement("div");
                divFormCheck.className = "form-check margleft";

                if (idType2Data[i].level === '1') {
                    let inputCheck = document.createElement("input");
                    inputCheck.className = "form-check-input";
                    inputCheck.setAttribute("type", "checkbox");
                    inputCheck.setAttribute("id", "checkbox" + idType2Data[i].id);

                    let labelCheck = document.createElement("label");
                    labelCheck.className = "form-check-label";
                    labelCheck.style.textAlign = "left";
                    // labelCheck.setAttribute("for", "checkbox" + idType2Data[i].id);
                    let condition = idType2Data[i].name === undefined ? "" : idType2Data[i].name;
                    labelCheck.innerHTML = condition;
                    inputCheck.onclick = () => {
                        toggleActiveCheckbox(inputCheck, formCheckInput, formButton)
                    };
                    divFormCheck.appendChild(inputCheck);
                    divFormCheck.appendChild(labelCheck);
                } else {
                    let inputCheck = document.createElement("button");
                    inputCheck.className = "form-button";
                    inputCheck.style = "color: black;\n" +
                        "    display: inline-block;\n" +
                        "    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);\n" +
                        "    border: 1px solid #999;\n" +
                        "    border-radius: 3px;\n" +
                        "    padding: 5px 8px;\n" +
                        "    outline: none;\n" +
                        "    white-space: normal;\n" +
                        "    -webkit-user-select: none;\n" +
                        "    cursor: pointer;\n" +
                        "    text-shadow: 1px 1px #fff;\n" +
                        "    font-weight: 700;\n" +
                        "    font-size: 10pt;width:90%;";
                    inputCheck.setAttribute("disabled", true);
                    inputCheck.onclick = () => {
                        buttonSelected(inputCheck)
                    };
                    inputCheck.setAttribute("id", "checkbox" + idType2Data[i].id);
                    inputCheck.innerHTML = idType2Data[i].name === undefined ? "" : idType2Data[i].name;
                    divFormCheck.appendChild(inputCheck);
                }

                divFormGroup.appendChild(divFormCheck);
                row.appendChild(divFormGroup);
            }

//третий тип
            let divFormGroup3 = document.createElement("div");
            divFormGroup3.style = "margin-bottom: 10px";
            let label_3 = document.createElement("label");
            label_3.innerHTML = "Паллиативная медицинская помощь";
            label_3.style.fontWeight = "600";
            label_3.style.textAlign = "left";
            label_3.style.cursor = "pointer";
            let hr3 = document.createElement("hr");
            hr3.style.margin = "0";
            divFormGroup3.appendChild(label_3);
            divFormGroup3.appendChild(hr3);
            divFormGroup3.onclick = () => {
                let group3 = document.getElementsByClassName("group3");
                [...group3].forEach(item => {
                    if (item.classList.contains("hiddentab"))
                        item.classList.remove("hiddentab");
                    else
                        item.classList.add("hiddentab");
                })
            }
            row.appendChild(divFormGroup3);

            for (let i = 0; i < idType3Data.length; i++) {
                let divFormGroup = document.createElement("div");
                divFormGroup.className = "form-group group3 hiddentab";
                let divFormCheck = document.createElement("div");
                divFormCheck.className = "form-check margleft";

                if (idType3Data[i].level === '1') {
                    let inputCheck = document.createElement("input");
                    inputCheck.className = "form-check-input";
                    inputCheck.setAttribute("type", "checkbox");
                    inputCheck.setAttribute("id", "checkbox" + idType3Data[i].id);

                    let labelCheck = document.createElement("label");
                    labelCheck.className = "form-check-label";
                    labelCheck.style.textAlign = "left";
                    let condition = idType3Data[i].name === undefined ? "" : idType3Data[i].name;
                    labelCheck.innerHTML = condition;
                    inputCheck.onclick = () => {
                        toggleActiveCheckbox(inputCheck, formCheckInput, formButton)
                    };
                    divFormCheck.appendChild(inputCheck);
                    divFormCheck.appendChild(labelCheck);
                } else {
                    let inputCheck = document.createElement("button");
                    inputCheck.className = "form-button";
                    inputCheck.style = "color: black;\n" +
                        "    display: inline-block;\n" +
                        "    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);\n" +
                        "    border: 1px solid #999;\n" +
                        "    border-radius: 3px;\n" +
                        "    padding: 5px 8px;\n" +
                        "    outline: none;\n" +
                        "    white-space: normal;\n" +
                        "    -webkit-user-select: none;\n" +
                        "    cursor: pointer;\n" +
                        "    text-shadow: 1px 1px #fff;\n" +
                        "    font-weight: 700;\n" +
                        "    font-size: 10pt;width:90%;";
                    inputCheck.setAttribute("disabled", true);
                    inputCheck.onclick = () => {
                        buttonSelected(inputCheck)
                    };
                    inputCheck.setAttribute("id", "checkbox" + idType3Data[i].id);
                    inputCheck.innerHTML = idType3Data[i].name === undefined ? "" : idType3Data[i].name;
                    divFormCheck.appendChild(inputCheck);
                }

                divFormGroup.appendChild(divFormCheck);
                row.appendChild(divFormGroup);
            }


//4ый тип
            let divFormGroup4 = document.createElement("div");
            divFormGroup4.style = "margin-bottom: 10px";
            let label_4 = document.createElement("label");
            label_4.innerHTML = "Медико-социальная помощь";
            label_4.style.fontWeight = "600";
            label_4.style.textAlign = "left";
            label_4.style.cursor = "pointer";
            let hr4 = document.createElement("hr");
            hr4.style.margin = "0";
            divFormGroup4.appendChild(label_4);
            divFormGroup4.appendChild(hr4);

            row.appendChild(divFormGroup4);
            divFormGroup4.onclick = () => {
                let group4 = document.getElementsByClassName("group4");

                [...group4].forEach(item => {
                    if (item.classList.contains("hiddentab"))
                        item.classList.remove("hiddentab");
                    else
                        item.classList.add("hiddentab");
                })
            }
            for (let i = 0; i < idType4Data.length; i++) {
                let divFormGroup = document.createElement("div");
                divFormGroup.className = "form-group group4 hiddentab";
                let divFormCheck = document.createElement("div");
                divFormCheck.className = "form-check margleft";

                if (idType4Data[i].level === '1') {
                    let inputCheck = document.createElement("input");
                    inputCheck.className = "form-check-input";
                    inputCheck.setAttribute("type", "checkbox");
                    inputCheck.setAttribute("id", "checkbox" + idType4Data[i].id);

                    let labelCheck = document.createElement("label");
                    labelCheck.className = "form-check-label";
                    labelCheck.style.textAlign = "left";
                    // labelCheck.setAttribute("for", "checkbox" + idType4Data[i].id);
                    let condition = idType4Data[i].name === undefined ? "" : idType4Data[i].name;
                    labelCheck.innerHTML = condition;
                    inputCheck.onclick = () => {
                        toggleActiveCheckbox(inputCheck, formCheckInput, formButton)
                    };
                    divFormCheck.appendChild(inputCheck);
                    divFormCheck.appendChild(labelCheck);
                } else {
                    let inputCheck = document.createElement("button");
                    inputCheck.className = "form-button";
                    inputCheck.style = "color: black;\n" +
                        "    display: inline-block;\n" +
                        "    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);\n" +
                        "    border: 1px solid #999;\n" +
                        "    border-radius: 3px;\n" +
                        "    padding: 5px 8px;\n" +
                        "    outline: none;\n" +
                        "    white-space: normal;\n" +
                        "    -webkit-user-select: none;\n" +
                        "    cursor: pointer;\n" +
                        "    text-shadow: 1px 1px #fff;\n" +
                        "    font-weight: 700;\n" +
                        "    font-size: 10pt; width:90%;";
                    inputCheck.setAttribute("disabled", true);
                    inputCheck.onclick = () => {
                        buttonSelected(inputCheck)
                    };
                    inputCheck.setAttribute("id", "checkbox" + idType4Data[i].id);
                    inputCheck.innerHTML = idType4Data[i].name === undefined ? "" : idType4Data[i].name;
                    divFormCheck.appendChild(inputCheck);
                }

                divFormGroup.appendChild(divFormCheck);
                row.appendChild(divFormGroup);
            }
            createAccordionCards(id_sub);
        }).then(async () => {
            await $.ajax({
                url: "ajax/newGetActiveListTables.php",
                method: "GET",
                data: {id_sub: id_sub}
            }).then(function (response) {
                let activeTables = JSON.parse(response);

                let numTab = document.getElementById("tab" + id_sub + "-")
                activeTables.forEach(item => {

                    let checkB = numTab.querySelector("#checkbox" + item.id_list_tables);

                    if (item.lev === "1") {
                        if (item.coun == 1) {
                            checkB.checked = true;
                            checkB.removeAttribute("disabled");
                            [...formCheckInput].forEach(item1 => {
                                if (item1.checked === false) {
                                    item1.setAttribute("disabled", true);
                                }
                            });
                            [...formButton].forEach(item2 => {
                                item2.removeAttribute("disabled");
                            })
                        }
                    } else {
                        let coun = item.coun == null ? 0 : item.coun;
                        checkB.innerHTML += ": " + coun;
                    }
                })
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("Некоторые элементы не были дозагружены, Дождитесь загрузки, либо обновите страницу");
            })
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ": " + errorThrown);
        }).then(() => {
            $.ajax({
                url: "ajax/z_getAllTablesAccred.php",
                method: "GET",
                data: {id_sub: openTabId},
                success: (response) => {

                    let numTab = document.querySelector("#tab" + openTabId + "-");
                    let rightCard = numTab.querySelector("#cardRight");
                    // let cardForAdding = rightCard.querySelector(":first-child");
                    // let cardForAdding1 = cardForAdding.querySelector(":first-child");
                    if (rightCard)
                        rightCard.insertAdjacentHTML("afterbegin", response);
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                //
                console.log("AJAX Error: " + textStatus + ", " + errorThrown);
            }).then(() => {
                if (status == 2) {
                    let btnrename = document.getElementsByClassName("btn-rename");
                    let deleteicon = document.getElementsByClassName("delete-icon");
                    [...btnrename].forEach(item => {
                        item.classList.add("hiddentab");
                    });
                    [...deleteicon].forEach(item => {
                        item.classList.add("hiddentab");
                    })
                }
            });
        }).then(() => {
            $.ajax({
                url: "ajax/z_calc_subvision_accred.php",
                method: "GET",
                data: {id_sub: openTabId, id_application: id_appp}
            }).then((response) => {
                let data = JSON.parse(response);
                let thisTab = document.getElementById("tab" + openTabId + "-");
                let divMark = document.createElement("div");
                divMark.id = "markSub";
                let markSub = document.getElementById("markSub");
                if (markSub) {
                    markSub.remove();
                }
                divMark.style = "text-align: right;";

                divMark.innerHTML = "Самоаккредитация - " + Math.round(parseFloat(data.mark_percent).toFixed(2)) + "%";
                divMark.innerHTML = divMark.innerHTML + "<br>Количественная оценка - " + Math.round(parseFloat(data.mark_accred_percent).toFixed(2)) + "%";
                thisTab.appendChild(divMark);
            })
        })
    }

    if (idNum == "1") {

        $.ajax({
            url: "ajax/z_calc_application_accred.php",
            method: "GET",
            data: {id_application: id_appp}
        }).then((response) => {
            let data = JSON.parse(response);
            let mainRightCard = document.getElementById("mainRightCard");
            mainRightCard.innerHTML = "Самоаккредитация - " + Math.round(parseFloat(data.mark_percent).toFixed(2)) + "%";
            mainRightCard.innerHTML = mainRightCard.innerHTML + "<br>Количественная оценка - " + Math.round(parseFloat(data.mark_accred_percent).toFixed(2)) + "%";
        })


    }

}

function newGetTabss(name, id_sub) {   // создание subvision и cardBody
    let tablist = document.getElementById("tablist");
    let tab = document.createElement("li");
    tab.classList.add("nav-item");
    let a = document.createElement("button");
    a.className = "nav-link";
    a.id = 'button' + id_sub;
    a.setAttribute("data-toggle", "tab");
    a.setAttribute("href", "#");
    a.setAttribute("role", "tab");
    a.setAttribute("aria-selected", "false");

    tab.setAttribute("onclick", "newShowTabs(this," + id_sub + ")");

    a.innerHTML = "" + name;
    tab.appendChild(a);

    tab.id = "tab" + id_sub;
    tablist.appendChild(tab);

    let myModal = document.getElementById("myModal");
    let tabContent = myModal.getElementsByClassName("tab-content tab-transparent-content")[0]; // ЕСЛИ ДОБАВИЛИ ВКЛАДКУ ТОГДА НУЖНО ТУТ ТОЖЕ УВЕЛИЧИТЬ
    let tabPane = document.createElement("div");
    tabPane.className = "tab-pane fade show remAccTab";
    tabPane.id = "tab" + id_sub + "-";
    let row1 = document.createElement("div");
    row1.className = "row";
    let col12_1 = document.createElement("div");
    col12_1.className = "col-12 grid-margin";
    let cardLeft = document.createElement("div");
    cardLeft.className = "card";
    if (idRole === "15") {
        cardLeft.classList.add("hiddentab");
    }

    let divRollUp = document.createElement("div");
    divRollUp.className = "d-md-block d-none";
    divRollUp.style = "text-align: end;margin-top: 5px;";
    let aRollUp = document.createElement("a");
    aRollUp.href = "#";
    aRollUp.className = "text-light p-1";
    aRollUp.id = "rollUp";
    let iconRollUp = document.createElement("i");
    iconRollUp.className = "mdi mdi-view-dashboard";

    aRollUp.appendChild(iconRollUp);


    divRollUp.appendChild(aRollUp);
    cardLeft.appendChild(divRollUp);

    aRollUp.onclick = () => {
        cardLeft.classList.toggle("rolledUp");
        cardLeft.getElementsByClassName("card-body")[0].classList.toggle("hiddentab");
        cardRight.classList.toggle("rightCardFS");
    }

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let container = document.createElement("div");
    container.className = "container leftSide";
    let row2 = document.createElement("div");
    row2.className = "row";
    let col12_2 = document.createElement("div");
    col12_2.className = "col-12";

    let btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Удалить подразделение";
    btnDelete.classList = "btn btn-danger";
    btnDelete.id = "delPodr";
    btnDelete.setAttribute("onclick", "deleteTab('" + id_sub + "')");
    btnDelete.style = "margin-bottom: 15px";
    if (idRole == 15) {

    } else {
        tabPane.appendChild(btnDelete);
    }


    col12_1.style = "display: flex";

    let cardRight = document.createElement("div");
    cardRight.className = "card rightCard65";
    cardRight.id = "cardRight";
    cardRight.style = "margin-left: 15px;";
    cardRight.innerHTML = "подзразделения";

    row2.appendChild(col12_2);
    container.appendChild(row2);
    cardBody.appendChild(container);
    cardLeft.appendChild(cardBody);
    col12_1.appendChild(cardLeft);
    col12_1.appendChild(cardRight);
    row1.appendChild(col12_1);
    tabPane.appendChild(row1);


    cardLeft.classList.add("rolledUp");
    aRollUp.setAttribute("disabled", "true");
    btnDelete.classList.add("hiddentab");
    container.classList.add("hiddentab");
    tabContent.appendChild(tabPane);


}

function newAddTab() {    // добавление subvision
    let nameTab = prompt("Введите название структурного подразделения");


    if (nameTab !== null) {
        if (nameTab.trim() !== '') {

            let number_app = document.getElementById("id_application");
            let id_application = number_app.innerHTML;
            $.ajax({
                url: "ajax/addSubvision.php",
                method: "POST",
                data: {id_application: id_application, name: nameTab}
            })
                .done(function (response) {
                    let id = response;
                    addHistoryAction(id_application, getCookie('id_user'), 1, `Создано структурное подразделение ${nameTab}`, '', '')
                    newGetTabss(nameTab, id);
                });


        } else {
            alert('Введите название подразделения');
        }


    }


}

function toggleActiveCheckbox(inputCheck, formCheckInput, formButton) {   // добавление таблицы по чекбоксу

    let check = inputCheck.checked === true ? 1 : 0;
    let str = inputCheck.id;
    let id_list_tables_criteria = str.replace(/\D/g, ''); // Удаление всех символов, кроме цифр


    if (check == 1) {
        [...formCheckInput].forEach(item => {
            if (item.checked === false) {
                item.setAttribute("disabled", true);
            }
        });
        [...formButton].forEach(item => {
            item.removeAttribute("disabled");
        })

        $.ajax({
            url: "ajax/saveListTablesCheckbox.php",
            method: "GET",
            data: {id_sub: openTabId, id_list_tables_criteria: id_list_tables_criteria, check: check}
        })
            .done(function (response) {
                // ОТОБРАЖЕНИЕ таблиц критериев по нажатию на чекбокс
                let numTab = document.getElementById("tab" + openTabId + "-")

                let chkbName = numTab.querySelector("#checkbox" + id_list_tables_criteria);
                let lblName = chkbName.nextElementSibling.innerHTML;

                let rightCard = numTab.querySelector("#cardRight");


                let cardForAdding = rightCard.querySelector(":first-child");
                let cardForAdding1 = cardForAdding.querySelector(":first-child");
                if (cardForAdding1)
                    cardForAdding1.insertAdjacentHTML("afterbegin", response);


                let nameTab = document.getElementById("button" + openTabId);
                addHistoryAction(id_appp, getCookie('id_user'), 2, `Добавлено отделение ${lblName} в структурное подразделение ${nameTab.innerText}`, openTabId, '')

            });

    } else {

        if (confirm("Осторожно! Все таблицы отделений будут удалены. Вы уверены, что хотите удалить?")) {

            $.ajax({
                url: "ajax/deleteListTablesCheckbox.php",
                method: "GET",
                data: {id_sub: openTabId}
            })
                .done(function (response) {
                    let numTab = document.getElementById("tab" + openTabId + "-")

                    let rightCard = numTab.querySelector("#cardRight");
                    let cardForAdding = rightCard.querySelector(":first-child");
                    let cardForAdding1 = cardForAdding.querySelector(":first-child");
                    cardForAdding1.innerHTML = "";
                    let chkbName = numTab.querySelector("#checkbox" + id_list_tables_criteria);
                    let lblName = chkbName.nextElementSibling.innerHTML;
                    let nameTab = document.getElementById("button" + openTabId);
                    addHistoryAction(id_appp, getCookie('id_user'), 2, `Удалено отделение ${lblName} из структурного подразделения ${nameTab.innerText}`, openTabId, '')

                    let tabActive = document.getElementById("tab" + openTabId + "-");
                    let checkboxes = tabActive.querySelectorAll("[id^='checkbox']");
                    checkboxes.forEach(function (checkbox) {
                        let buttonText = checkbox.innerText;
                        let colonIndex = buttonText.indexOf(":");
                        if (colonIndex !== -1) {
                            checkbox.innerText = buttonText.substring(0, colonIndex);
                        }
                    });


                });
            [...formCheckInput].forEach(item => {
                if (item.checked === false) {
                    item.removeAttribute("disabled");
                }
            });
            [...formButton].forEach(item => {
                item.setAttribute("disabled", true);
            })
        } else {
            inputCheck.checked = true;
        }

    }

}

function buttonSelected(inputCheck) {  // добавление отделений (кнопки) - добавление таблиц отделений по кнопкам

    let department = prompt("Введите названия отделения");
    if (department !== undefined && department.trim() !== '') {
        let str = inputCheck.id;
        let id_list_tables_criteria = str.replace(/\D/g, ''); // Удаление всех символов, кроме цифр

        $.ajax({
            url: "ajax/saveListTables.php",
            method: "GET",
            data: {id_sub: openTabId, id_list_tables_criteria: id_list_tables_criteria, department: department}
        })
            .done(function (response) {
                if (response === "no") {
                    alert("Такое отделение уже существует");
                } else {
                    alert("Добавлено отделение");
                    let nameTab = document.getElementById("button" + openTabId);
                    addHistoryAction(id_appp, getCookie('id_user'), 2, `Добавлено отделение ${department} в структурное подразделение ${nameTab.innerText}`, openTabId, '')

                    let number;
                    let incrementedNumber;
                    let buttonText = inputCheck.textContent;
                    if (buttonText.includes(":")) {
                        number = parseInt(buttonText.split(":")[1].trim());
                        let incrementedNumber = number + 1;
                        inputCheck.textContent = buttonText.replace(number, incrementedNumber);
                    } else {
                        inputCheck.textContent = buttonText + ": 1";
                    }
                    let numTab = document.getElementById("tab" + openTabId + "-")

                    let rightCard = numTab.querySelector("#cardRight");
                    let cardForAdding = rightCard.querySelector(":first-child");
                    let cardForAdding1 = cardForAdding.querySelector(":first-child");
                    if (cardForAdding1)
                        cardForAdding1.insertAdjacentHTML("afterbegin", response);
                }
            });
    } else {
        alert("Вы не ввели название отделения");
    }
}

function newCollapseTable(thisDiv) {
    let idDep = thisDiv.id.substring(7);
    let btnUpd = document.querySelector("[data-id_department='"+idDep+"']");
    // console.log(btnUpd);
    let cb = document.getElementById("cardBody" + idDep);
    let tableCb = cb.children[0];
    let allCells = tableCb.getElementsByTagName("td");
    let allSelect = tableCb.querySelectorAll("#selpickerAccred");
    let specificTds = tableCb.querySelectorAll("#td7, #tdDef");




    let card = thisDiv.parentElement;

    let thisCollapse = card.querySelector("#collapse" + thisDiv.id.substring(7));
    if (thisCollapse.classList.contains("show")) {
        thisCollapse.classList.remove("show");
    } else {
        thisCollapse.classList.add("show");
    }
    // let noteCells = document.querySelectorAll('td[contenteditable="true"]');
    // let selpickers = document.querySelectorAll("#selpicker");
    // let fileInputs = document.querySelectorAll('input[type="file"]');
    //
    // let selpickersAccred = document.querySelectorAll("#selpickerAccred");
    //
    // if ((status !== 2) && (status !== 3)) {
    //
    //     selpickers.forEach((selpicker) => {
    //         selpicker.disabled = true;
    //     });
    //
    //     selpickersAccred.forEach((selpickerAccred) => {
    //         selpickerAccred.disabled = true;
    //     });
    //
    //     fileInputs.forEach((fileInput) => {
    //         fileInput.disabled = true;
    //     });
    //
    //     noteCells.forEach((noteCell) => {
    //         noteCell.removeAttribute("contenteditable");
    //     });
    // } else {
    //
    //     let selpickers = document.querySelectorAll("#selpicker");
    //     let fileInputs = document.querySelectorAll('input[type="file"]');
    //
    //     selpickers.forEach((selpicker) => {
    //         selpicker.disabled = true;
    //     });
    //
    //     selpickersAccred.forEach((selpickerAccred) => {
    //         selpickerAccred.disabled = false;
    //     });
    //
    //     fileInputs.forEach((fileInput) => {
    //         fileInput.disabled = false;
    //     });
    //
    //     if (noteCells)
    //         noteCells.forEach((noteCell) => {
    //             noteCell.setAttribute("contenteditable", "true");
    //         });
    //
    // }

    if(btnUpd.innerHTML === "Редактировать"){
        [...specificTds].forEach(item => {
            item.setAttribute("contenteditable", "false");
        });

        allSelect.forEach(item => {
            item.disabled = true;

        });

    }else{
        [...specificTds].forEach(item => {
            item.setAttribute("contenteditable", "true");
        });

        allSelect.forEach(item => {
            item.removeAttribute("disabled");
        });

    }


    let colId = "collapse" + idDep;
    let btnCol = document.querySelector("[aria-controls='" + colId + "']").innerHTML;
    let nameDep = btnCol.substring(0, btnCol.indexOf("("));
    let nameTab = document.getElementById("button" + openTabId);

}

function changeField3(idCrit, idDep, select) {
    let id_userOlys = getCookie('login');
    $.ajax({
        url: "ajax/changeField3.php",
        method: "GET",
        data: {idCrit: idCrit, idDep: idDep, val: select.options[select.selectedIndex].value, id_sub: openTabId,id_userOlys: getCookie("login"),
            id_app: id_app}
    })
        .done(function (response) {
            if (response == 0) {
                alert("Ошибка при сохранения данных.");
            }
        }).fail(function () {
        alert("Ошибка при выполнении запроса.");
    });
}

function changeField5(idCrit, idDep, text) {
    $.ajax({
        url: "ajax/changeField5.php",
        method: "POST",
        data: {idCrit: idCrit, idDep: idDep, text: text.innerText}
    }).done(function (response) {

    })
}

function changeField6(idAnswerCriteria, idCrit, idDep, select) {
    let id_userOlys = getCookie('login');

    $.ajax({
        url: "ajax/changeField6.php",
        method: "POST",
        data: {
            idAnswerCriteria: idAnswerCriteria,
            idCrit: idCrit,
            idDep: idDep,
            val: select.options[select.selectedIndex].value,
            id_sub: openTabId,
            id_userOlys: id_userOlys ,
            id_app: id_appp
        }
    })
        .done(function (response) {
            if (response == 0) {
                alert("Ошибка при обновлении данных.");
            }
        }).fail(function () {
        alert("Ошибка при выполнении запроса.");
    });
}
function changeField7(idAnswerCriteria, idCrit, idDep, text) {
    $.ajax({
        url: "ajax/changeField7.php",
        method: "POST",
        data: {idAnswerCriteria: idAnswerCriteria, idCrit: idCrit, idDep: idDep, text: text.innerText}
    }).done(function (response) {
        if (response == 0) {
            alert("Ошибка при сохранения данных.");
        }
    }).fail(function () {
        alert("Ошибка при выполнении запроса.");
    });
}

function changeFieldDefect(idAnswerCriteria, idCrit, idDep, text) {
    $.ajax({
        url: "ajax/changeFieldDefect.php",
        method: "GET",
        data: {idAnswerCriteria: idAnswerCriteria, idCrit: idCrit, idDep: idDep, text: text.innerText}
    }).done(function (response) {

    })
}



function addFile(idCrit, idDep, input) {
    let login = getCookie('login');


    let divA = document.getElementById(idCrit + "_" + idDep);

    let xhr = new XMLHttpRequest(),
        form = new FormData();
    let addedFile = input.files[0];
    form.append("idCrit", idCrit);
    form.append("idApp", id_appp);
    form.append("idDep", idDep);
    form.append("addedFile", addedFile);
    form.append("id_userOlys", login);

    xhr.open("post", "ajax/changeField4.php", true);

    let load = document.createElement("div");
    // load.innerHTML = "Подождите, идет загрузка";
    divA.insertAdjacentElement("afterend", load);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            let progress = (event.loaded / event.total) * 100;
            load.innerHTML = "Загрузка: " + Math.round(progress) + "%";
        }

    };

    xhr.upload.onloadstart = function () {

        let fileName = addedFile.name;
        let extAr = fileName.substring(fileName.lastIndexOf('.'), fileName.length);
        // console.log(extAr);
        if (extAr !== ".pdf" && extAr !== ".PDF") {
            alert("Неверный формат. Допустимый формат pdf");
            xhr.abort();
        } else {
            load.innerHTML = "Подождите, идет загрузка";
            input.disabled = "true";
        }
    };

    xhr.upload.onload = function () {
        input.removeAttribute("disabled");
        load.remove();
        let fileContainer = document.createElement('div');
        fileContainer.classList.add('file-container');
        let fileLink = document.createElement('a');
        fileLink.href = `/docs/documents/${createrApp}/${id_appp}/${idDep}/${addedFile.name}`;
        fileLink.textContent = addedFile.name;
        let deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-file');
        deleteButton.textContent = '×';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.paddingLeft = '10px';
        deleteButton.id = 'delete_' + idCrit + '_' + idDep + '_' + addedFile.name;
        deleteButton.onclick = function () {
            z_deleteFile(addedFile.name, idCrit, idDep);
        };
        fileContainer.appendChild(fileLink);
        fileContainer.appendChild(deleteButton);
        divA.appendChild(fileContainer);
    }
    xhr.send(form);
}


function z_deleteFile(fileName, idCrit, idDepartment) {
    if (confirm('Вы уверены, что хотите удалить этот файл?')) {
        let url = 'ajax/z_deleteFile.php?file_name=' + encodeURIComponent(fileName) + '&id_criteria=' + idCrit + '&id_department=' + idDepartment;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const fileContainers = document.getElementsByClassName('file-container');
                    for (let i = 0; i < fileContainers.length; i++) {
                        if (fileContainers[i].contains(document.getElementById('delete_' + idCrit + '_' + idDepartment + '_' + fileName))) {
                            fileContainers[i].remove();
                            break;
                        }
                    }
                } else {
                    alert('Не удалось удалить файл. Попробуйте снова.');
                }
            })
            .catch((error) => {
                console.error('Ошибка при удалении файла:', error);
                alert('Ошибка при удалении файла.');
            });
    }
}


function deleteDepartment(id_department) {
    event.stopPropagation();
    let confirmDelete = confirm("Вы действительно хотите удалить отделение?");
    if (confirmDelete) {
        let numTab = document.getElementById("tab" + openTabId + "-")
        let depName = numTab.querySelector("[aria-controls='collapse" + id_department + "']");
        let cutName;//= depName.innerHTML.substring(0, depName.innerHTML.lastIndexOf('('));
        if (depName.innerHTML.lastIndexOf('(') > 0) {
            cutName = depName.innerHTML.substring(0, depName.innerHTML.lastIndexOf('('));
        } else {
            cutName = depName.innerHTML
        }


        $.ajax({
            url: "ajax/z_getTableLevel.php",
            method: "GET",
            data: {id_sub: openTabId, id_department: id_department},
        }).done(function (response) {

            let parsedResponse = JSON.parse(response);

            if (parsedResponse.level == '1') {
                let tabActive = document.getElementById("tab" + openTabId + "-");
                let formCheckInput = document.getElementsByClassName("form-check-input");
                let formButton = document.getElementsByClassName("form-button");
                let inputCheck = tabActive.querySelector("#checkbox" + parsedResponse.id_list_tables_criteria);

                inputCheck.checked = false;
                toggleActiveCheckbox(inputCheck, formCheckInput, formButton);
            } else {
                $.ajax({
                    url: "ajax/z_deleteDepartment.php",
                    method: "GET",
                    data: {id_sub: openTabId, id_department: id_department},
                })
                    .done(function (response) {


                        let id_list_tables_criteria = response;
                        let tabActive = document.getElementById("tab" + openTabId + "-");
                        let countButton = tabActive.querySelector("#checkbox" + id_list_tables_criteria);
                        if (!countButton.innerHTML) {
                            let rightCard = tabActive.querySelector("#cardRight");
                            rightCard.innerHTML = "";
                        } else {
                            let countText = countButton.innerText;
                            let countT = countText.split(":")[1];

                            if (countT) {
                                let count = countT.trim();
                                let newT = countText.replace(count, String(Number(count) - 1));

                                countButton.innerHTML = newT;
                            }
                        }
                        let cardH = document.getElementById("heading" + id_department);

                        let nameTab = document.getElementById("button" + openTabId);
                        addHistoryAction(id_appp, getCookie('id_user'), 2, `Удалено отделение ${cutName} из структурного подразделения ${nameTab.innerText}`, openTabId, id_department)
                        if (cardH)
                            cardH.remove();
                        alert("Отделение удалено.");
                    })
                    .fail(function (error) {
                        console.error("Ошибка при удалении отдела:", error);
                    });
            }
        })
    }
}


function renameDepartment(id_department) {
    event.stopPropagation();
    let newDepartmentName = prompt("Введите новое название отделения:");
    if (newDepartmentName !== null && newDepartmentName.trim() !== "") {
        let numTab = document.getElementById("tab" + openTabId + "-")
        let depName = numTab.querySelector("[aria-controls='collapse" + id_department + "']");
        let cutName;//= depName.innerHTML.substring(0, depName.innerHTML.lastIndexOf('('));
        if (depName.innerHTML.lastIndexOf('(') > 0) {
            cutName = depName.innerHTML.substring(0, depName.innerHTML.lastIndexOf('('));
        } else {
            cutName = depName.innerHTML
        }
        $.ajax({
            url: "ajax/z_renameDepartment.php",
            method: "GET",
            data: {id_department: id_department, new_department_name: newDepartmentName, id_sub: openTabId},
        })
            .done(function (response) {

                let cardH = document.getElementById("heading" + id_department);
                let button = cardH.querySelector("button");

                let newText = response;
                button.innerText = newText;
                let nameTab = document.getElementById("button" + openTabId);
                addHistoryAction(id_appp, getCookie('id_user'), 2, `Переименовано отделение ${cutName} на ${newDepartmentName} в структурном подразделении ${nameTab.innerText}`, openTabId, id_department)
                alert("Отделение переименовано.");
            })
            .fail(function (error) {
                console.error("Ошибка при переименовании отделения:", error);
            });
    } else {
        alert("Вы не написали название отделения")
    }
}


function printNewReport() {
    return new Promise((resolve, reject) => {
        let number_app = document.getElementById("id_application");
        let id_application = number_app.innerHTML;
        let criteriaMark = document.createElement('div');
        criteriaMark.textContent = 'Результат самоаккредитации ';
        criteriaMark.style = "padding-top: 0.5rem; padding-bottom:1rem; ";
        var WinPrint = window.open(`dddd`, ``, 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write('<style> @page {\n' +
            'size: A4 landscape;\n' +
            'margin-bottom: 10mm;\n' +
            'margin-top: 8mm;\n' +
            'margin-left: 10mm;\n' +
            'margin-right: 5mm;\n' +
            '}' +
            'td{ max-width: 10vw;\n' +
            '  word-wrap: break-word;}</style>');

        let divContainer = document.createElement('div');
        divContainer.id = 'container';
        let divContent = document.createElement('div');
        divContent.id = 'content';
        divContent.style = 'max-height:250mm; margin-bottom: 20px;';
        let divFooter = document.createElement('div');
        divFooter.id = 'footer';
        divFooter.style = 'position:fixed; left: 0px; bottom: 0px; right: 0px; font-size:10px; margin-top: 5px;';
        divFooter.innerHTML = 'numeration';
        divContainer.appendChild(divContent);
        divContainer.appendChild(divFooter);


        let textSubCriteriaChecked = '';
        let divTextSubCriteriaChecked = document.createElement('div');
        divTextSubCriteriaChecked.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:2rem;";
        let headTable;
        // $.ajax({
        //     url: "ajax/getCalc.php",
        //     method: "GET",
        //     data: {id_application: id_application}
        // }).then(() => {
        //     return
            $.ajax({
                url: "ajax/z_getSubForPrintReport.php",
                method: "GET",
                data: {id_application: id_application}
            // });
        }).then((response) => {
            let subCriteriaForReport = JSON.parse(response);
            headTable = createTableForPrintSamoAccred(subCriteriaForReport);

        }).then(() => {
            let mainRightCard = document.getElementById("mainRightCard");
            let mainRightCardText = mainRightCard.innerHTML;
            let naim = document.getElementById('naim');
            criteriaMark.textContent += `${naim.value}` + ` среднее значение групп критериев ` + mainRightCardText.substring(mainRightCardText.indexOf('-') + 1, mainRightCardText.indexOf('%') + 1);

            let table;
            return $.ajax({
                url: "ajax/z_getAppForPrintNo.php",
                method: "GET",
                data: {id_app: id_application}
            });
        }).then((response) => {
            let tableForPrint = JSON.parse(response);
            if (tableForPrint.length !== 0) {
                let naim = document.getElementById("naim");
                let unp = document.getElementById("unp");
                let naimText = naim.value;
                let unpText = unp.value;
                table = createTableForPrintNo(tableForPrint);
            }
        }).then((response) => {
            let sokr = document.getElementById('sokr');
            let naim = document.getElementById('naim');

            function formatDate(date) {
                var dd = date.getDate();
                if (dd < 10) dd = '0' + dd;
                var mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;
                var yy = date.getFullYear() % 100;
                if (yy < 10) yy = '0' + yy;
                return dd + '.' + mm + '.' + yy;
            }


            let divReportTitle = document.createElement('div');
            let divReportTitle2 = document.createElement('div');
            let divReportTitle3 = document.createElement('div');
            WinPrint.document.write('<style> th{font-weight: 500; }</style>');
            divReportTitle2.style = "padding-top: 0.5rem; font-size:1.4rem; padding-left:2rem; padding-right: 2rem; text-align:center";
            divReportTitle2.textContent = `Отчет о результатах самоаккредитации`;
            divReportTitle3.style = "padding-bottom:0.5rem; font-size:1.4rem; padding-left:2rem; padding-right: 2rem; text-align:center";
            divReportTitle3.textContent = `${naim.value}  ${formatDate(new Date())}`;
            divReportTitle.appendChild(divReportTitle2);
            divReportTitle.appendChild(divReportTitle3);
            WinPrint.document.write(divReportTitle.innerHTML);
            WinPrint.document.write('<br/>');
            // divTextSubCriteriaChecked.innerHTML = headTable;
            divTextSubCriteriaChecked.appendChild(headTable);
            WinPrint.document.write(divTextSubCriteriaChecked.innerHTML);
            WinPrint.document.write('<br/>');
            WinPrint.document.write(criteriaMark.innerText);

            WinPrint.document.write('<br/>');
            if (table && table.textContent && table.textContent.length > 0) {
                let divReportTitleFieldNo = document.createElement('div');
                let divReportTitleTableCriteriaAll = document.createElement('div');
                divReportTitleTableCriteriaAll.style = "display: inline-block ;padding-top: 0.5rem; padding-bottom:1rem; font-size:1.4rem; margin-top: 2rem; text-align: center";
                divReportTitleTableCriteriaAll.textContent = 'Сведения о соответствии базовым критериям медицинской аккредитации';
                divReportTitleFieldNo.appendChild(divReportTitleTableCriteriaAll);
                WinPrint.document.write(divReportTitleFieldNo.innerHTML);
                WinPrint.document.write('<br/>');
                WinPrint.document.write('<br/>');
                WinPrint.document.write(table.innerHTML);
            } else {
                WinPrint.document.write(divReportTitle.innerHTML);
                WinPrint.document.write('<br/>');
                WinPrint.document.write('<br/>');
                divTextSubCriteriaChecked.innerHTML = textSubCriteriaChecked;
                WinPrint.document.close();
                WinPrint.focus();

                WinPrint.print();
                WinPrint.close();
            }
            WinPrint.document.close();
            WinPrint.focus();
            let naimOrg = document.getElementById("naim");
            WinPrint.document.title = "Отчет о самоаккредитации_" + naimOrg.value + "_" + new Date().toLocaleDateString().replaceAll(".", "");
            WinPrint.print();
            WinPrint.close();
            resolve();
        }).catch((error) => {
            console.error(error);
        });
    })

}
function printNewReportOcenka() {
    return new Promise((resolve, reject) => {
        let number_app = document.getElementById("id_application");
        let id_application = number_app.innerHTML;
        let criteriaMark = document.createElement('div');
        criteriaMark.textContent = 'Результат оценки, ';
        criteriaMark.style = "padding-top: 0.5rem; padding-bottom:1rem; ";
        var WinPrint = window.open(`dddd`, ``, 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write('<style> @page {\n' +
            'size: A4 landscape;\n' +
            'margin-bottom: 10mm;\n' +
            'margin-top: 8mm;\n' +
            'margin-left: 10mm;\n' +
            'margin-right: 5mm;\n' +
            '}' +
            'td{ max-width: 10vw;\n' +
            '  word-wrap: break-word;}</style>');

        let divContainer = document.createElement('div');
        divContainer.id = 'container';
        let divContent = document.createElement('div');
        divContent.id = 'content';
        divContent.style = 'max-height:250mm; margin-bottom: 20px;';
        let divFooter = document.createElement('div');
        divFooter.id = 'footer';
        divFooter.style = 'position:fixed; left: 0px; bottom: 0px; right: 0px; font-size:10px; margin-top: 5px;';
        divFooter.innerHTML = 'numeration';
        divContainer.appendChild(divContent);
        divContainer.appendChild(divFooter);


        let textSubCriteriaChecked = '';
        let divTextSubCriteriaChecked = document.createElement('div');
        divTextSubCriteriaChecked.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:2rem;";
        let headTable;
        // $.ajax({
        //     url: "ajax/getCalc.php",
        //     method: "GET",
        //     data: {id_application: id_application}
        // }).then(() => {
        //     return
            $.ajax({
                url: "ajax/z_getSubForPrintReportOcenka.php",
                method: "GET",
                data: {id_application: id_application}
            // });
        }).then((response) => {
            let subCriteriaForReport = JSON.parse(response);
            headTable = createTableForPrintSamoAccredOcenka(subCriteriaForReport);

        }).then(() => {
            let mainRightCard = document.getElementById("mainRightCard");
            let mainRightCardText = mainRightCard.innerHTML;
            let naim = document.getElementById('naim');
            criteriaMark.textContent += `${naim.value}` + ` среднее значение групп критериев ` + mainRightCardText.substring(mainRightCardText.lastIndexOf('-') + 1, mainRightCardText.lastIndexOf('%') + 1);

            let table;
            return $.ajax({
                url: "ajax/z_getAppForPrintNoOcenka.php",
                method: "GET",
                data: {id_app: id_application}
            });
        }).then((response) => {
            let tableForPrint = JSON.parse(response);
            if (tableForPrint.length !== 0) {
                let naim = document.getElementById("naim");
                let unp = document.getElementById("unp");
                let naimText = naim.value;
                let unpText = unp.value;
                table = createTableForPrintNoOcenka(tableForPrint);
            }
        }).then((response) => {
            let sokr = document.getElementById('sokr');
            let naim = document.getElementById('naim');

            function formatDate(date) {
                var dd = date.getDate();
                if (dd < 10) dd = '0' + dd;
                var mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;
                var yy = date.getFullYear() % 100;
                if (yy < 10) yy = '0' + yy;
                return dd + '.' + mm + '.' + yy;
            }


            let divReportTitle = document.createElement('div');
            let divReportTitle2 = document.createElement('div');
            let divReportTitle3 = document.createElement('div');
            WinPrint.document.write('<style> th{font-weight: 500; }</style>');
            divReportTitle2.style = "padding-top: 0.5rem; font-size:1.4rem; padding-left:2rem; padding-right: 2rem; text-align:center";
            divReportTitle2.textContent = `Результаты оценки для групп критериев медицинской аккредитации и перечень выявленных несоответствий базовым критериям медицинской аккредитации`;
            divReportTitle3.style = "padding-bottom:0.5rem; font-size:1.4rem; padding-left:2rem; padding-right: 2rem; text-align:center";
            divReportTitle3.textContent = `${naim.value}  ${formatDate(new Date())}`;
            divReportTitle.appendChild(divReportTitle2);
            divReportTitle.appendChild(divReportTitle3);
            WinPrint.document.write(divReportTitle.innerHTML);
            WinPrint.document.write('<br/>');
            // divTextSubCriteriaChecked.innerHTML = headTable;
            divTextSubCriteriaChecked.appendChild(headTable);
            WinPrint.document.write(divTextSubCriteriaChecked.innerHTML);
            WinPrint.document.write('<br/>');
            WinPrint.document.write(criteriaMark.innerText);

            WinPrint.document.write('<br/>');
            if (table && table.textContent && table.textContent.length > 0) {
                let divReportTitleFieldNo = document.createElement('div');
                let divReportTitleTableCriteriaAll = document.createElement('div');
                divReportTitleTableCriteriaAll.style = "display: inline-block ;padding-top: 0.5rem; padding-bottom:1rem; font-size:1.4rem; margin-top: 2rem; text-align: center";
                divReportTitleTableCriteriaAll.textContent = 'Сведения о соответствии базовым критериям медицинской аккредитации';
                divReportTitleFieldNo.appendChild(divReportTitleTableCriteriaAll);
                WinPrint.document.write(divReportTitleFieldNo.innerHTML);
                WinPrint.document.write('<br/>');
                WinPrint.document.write('<br/>');
                WinPrint.document.write(table.innerHTML);
            } else {
                WinPrint.document.write(divReportTitle.innerHTML);
                WinPrint.document.write('<br/>');
                WinPrint.document.write('<br/>');
                divTextSubCriteriaChecked.innerHTML = textSubCriteriaChecked;
                WinPrint.document.close();
                WinPrint.focus();

                WinPrint.print();
                WinPrint.close();
            }
            WinPrint.document.close();
            WinPrint.focus();
            let naimOrg = document.getElementById("naim");
            WinPrint.document.title = "Отчет о самоаккредитации_" + naimOrg.value + "_" + new Date().toLocaleDateString().replaceAll(".", "");
            WinPrint.print();
            WinPrint.close();
            resolve();
        }).catch((error) => {
            console.error(error);
        });
    })

}

function createTableForPrintSamoAccred(valueRespons) {

    let divPrintTable = document.createElement('div');

    let table = document.createElement('table');
    table.style = "border-collapse: collapse; border-spacing: 0;width:100%";


    let trHeadMain = document.createElement('tr');
    trHeadMain.style = "font-style: normal"

    let th1 = document.createElement('th');
    th1.innerHTML = '№ п/п';
    th1.style = "border: 1px solid black; width: 10%; font-style: normal";

    let th2 = document.createElement('th');
    th2.innerHTML = 'Название подразделения';
    th2.style = "border: 1px solid black; width: 40%; font-style: normal";

    let th3 = document.createElement('th');
    th3.innerHTML = 'Группа критериев (полное название критерия)';
    th3.style = "border: 1px solid black; width: 30%; font-style: normal";


    let th4 = document.createElement('th');
    th4.innerHTML = 'Результат самоаккредитации,%';
    th4.style = "border: 1px solid black; width: 20%; font-style: normal";


    trHeadMain.appendChild(th1);
    trHeadMain.appendChild(th2);
    trHeadMain.appendChild(th3);
    trHeadMain.appendChild(th4);


    table.appendChild(trHeadMain);


    let tbody = document.createElement('tbody');
    table.appendChild(tbody);


    let id_s = -1;
    let num = 1;
    valueRespons.map((item, index) => {

        if (id_s !== item['id_subvision']) {


            let trNaim = document.createElement('tr');
            let tdNaim = document.createElement('td');
            tdNaim.setAttribute('colspan', '4');
            tdNaim.style = "border: 1px solid black; padding-top: 0.5rem; padding-bottom:0.5rem; padding-left: 2rem; font-weight: bold";
            tdNaim.innerHTML = item['name'];
            trNaim.appendChild(tdNaim);
            tbody.appendChild(trNaim);


            id_s = item['id_subvision'];
        }

        if (id_s == item['id_subvision']) {
            let trNaim2 = document.createElement('tr');
            let tdOtdel1 = document.createElement('td');
            // tdNaim2.setAttribute('colspan', '4');
            tdOtdel1.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; text-align: center; vertical-align: baseline";
            tdOtdel1.innerHTML = `${num}`;

            let tdOtdel2 = document.createElement('td');
            tdOtdel2.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; padding-left: 0.3rem; vertical-align: baseline";
            let strNameOtdel = '';
            if (item['name_otdel'] !== null) {
                if (item['name_otdel'].indexOf('(') > 0) {
                    strNameOtdel = item['name_otdel'].substring(0, item['name_otdel'].indexOf('(') - 1)
                } else {
                    strNameOtdel = item['name_otdel']
                }
            }

            tdOtdel2.innerHTML = strNameOtdel;

            let tdOtdel3 = document.createElement('td');
            tdOtdel3.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem;padding-left: 0.3rem; vertical-align: baseline";
            tdOtdel3.innerHTML = item['name_full'];

            let tdOtdel4 = document.createElement('td');
            tdOtdel4.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; padding-left: 0.3rem; vertical-align: baseline";
            tdOtdel4.innerHTML = Math.round(parseFloat(item['mark_dpercent']).toFixed(2)) + '%';

            trNaim2.appendChild(tdOtdel1);
            trNaim2.appendChild(tdOtdel2);
            trNaim2.appendChild(tdOtdel3);
            trNaim2.appendChild(tdOtdel4);
            tbody.appendChild(trNaim2);


            num += 1;

        }
        // else {
        //     if (subCriteriaForReport[index + 1]['name'] && subCriteriaForReport[index]['name'] !== subCriteriaForReport[index + 1]['name'])
        //         as += item['name_otdel'] == null ? 'не выбраны отделения' : item['name_otdel'] + ` ${parseFloat(item['mark_dpercent']).toFixed(2)}%` + ".";
        //     else
        //         as += item['name_otdel'] == null ? 'не выбраны отделения' : item['name_otdel'] + ` ${parseFloat(item['mark_dpercent']).toFixed(2)}%` + ", ";
        // }
    });


    divPrintTable.appendChild(table);

    return divPrintTable;
}

function createTableForPrintNoOcenka(tableForPrint) {

    let divPrintTable = document.createElement('div');

    let divNameSubTable = document.createElement('div');
    divNameSubTable.textContent = tableForPrint[0]['name'];
    divNameSubTable.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:1.8rem; font-weight: 600";

    divPrintTable.appendChild(divNameSubTable);

    let divNameCriteriaTable = document.createElement('div');
    divNameCriteriaTable.textContent = tableForPrint[0]['name_criteria'];
    divNameCriteriaTable.style = "padding-top: 1rem; padding-bottom:2rem";

    divPrintTable.appendChild(divNameCriteriaTable);

    let table = document.createElement('table');
    table.style = "border-collapse: collapse; border-spacing: 0;width:100%";


    let trHeadMain = document.createElement('tr');

    let thNum = document.createElement('th');
    thNum.innerHTML = '№ п/п';
    thNum.style = "border: 1px solid black";
    thNum.setAttribute('rowspan', '2');

    let th1_Main = document.createElement('th');
    th1_Main.innerHTML = 'Наименование критерия';
    th1_Main.style = "border: 1px solid black; ";
    th1_Main.setAttribute('rowspan', '2');
    /*
        let th2_Main = document.createElement('th');
        th2_Main.innerHTML = 'Класс критерия';
        th2_Main.style = "border: 1px solid black";
        th2_Main.setAttribute('rowspan','2');
    */

    let th3_Main = document.createElement('th');
    th3_Main.innerHTML = 'Сведения о несоответствии базовым критериям медицинской аккредитации';
    th3_Main.style = "border: 1px solid black; text-align: center";
    th3_Main.setAttribute('colspan', '3');


    let trHead = document.createElement('tr');
    let th3 = document.createElement('th');
    th3.innerHTML = 'Сведения по оценке соответствия критерию (нет)';
    th3.style = "border: 1px solid black";

    let th4 = document.createElement('th');
    th4.innerHTML = 'Документы и сведения, на основании которых проведена оценка соответствия';
    th4.style = "width:350px; border: 1px solid black";


    let th5 = document.createElement('th');
    th5.innerHTML = 'Выявленные несоответствия';
    th5.style = "border: 1px solid black";


    trHeadMain.appendChild(thNum);
    trHeadMain.appendChild(th1_Main);
    //  trHeadMain.appendChild(th2_Main);
    trHeadMain.appendChild(th3_Main);


    table.appendChild(trHeadMain);
    trHead.appendChild(th3);
    trHead.appendChild(th4);
    trHead.appendChild(th5);


    table.appendChild(trHead);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    numCriteria = 0;
    numSub = tableForPrint[0]['id_subvision'];

    tableForPrint.map((item, index) => {
        if (numSub !== item['id_subvision']) {

            let trNaimSub = document.createElement('tr');
            let tdNaimSub = document.createElement('td');
            tdNaimSub.setAttribute('colspan', '6');
            tdNaimSub.style = "padding-top: 2rem; padding-bottom:1rem; font-size:1.8rem; font-weight: 600";
            tdNaimSub.innerHTML = item['name'];
            trNaimSub.appendChild(tdNaimSub);
            tbody.appendChild(trNaimSub);
            numCriteria = -1;

        }

        if ((numCriteria !== item['id_criteria']) && (index !== 0)) {
            let trNaim = document.createElement('tr');
            let tdNaim = document.createElement('td');
            tdNaim.setAttribute('colspan', '6');
            tdNaim.style = "padding-top: 1rem; padding-bottom:1rem";
            tdNaim.innerHTML = item['name_criteria'];
            trNaim.appendChild(tdNaim);
            tbody.appendChild(trNaim);


            let trHeadMain2 = document.createElement('tr');

            let thNum = document.createElement('th');
            thNum.innerHTML = '№ п/п';
            thNum.style = "border: 1px solid black";
            thNum.setAttribute('rowspan', '2');

            let th1_Main2 = document.createElement('td');
            th1_Main2.innerHTML = 'Наименование критерия';
            th1_Main2.style = "border: 1px solid black";
            th1_Main2.setAttribute('rowspan', '2');
            /*
                            let th2_Main2 = document.createElement('td');
                            th2_Main2.innerHTML = 'Класс критерия';
                            th2_Main2.style = "border: 1px solid black";
                            th2_Main2.setAttribute('rowspan','2');
            */

            let th3_Main2 = document.createElement('td');
            th3_Main2.innerHTML = 'Сведения о несоответствии базовым критериям медицинской аккредитации';
            th3_Main2.style = "border: 1px solid black; text-align: center";
            th3_Main2.setAttribute('colspan', '3');


            let trHead2 = document.createElement('tr');
            let th32 = document.createElement('td');
            th32.innerHTML = 'Сведения по оценке соответствия критерию (нет)';
            th32.style = "border: 1px solid black";

            let th42 = document.createElement('td');
            th42.innerHTML = 'Документы и сведения, на основании которых проведена оценка соответствия';
            th4.style = "width:350px; border: 1px solid black";


            let th52 = document.createElement('td');
            th52.innerHTML = 'Выявленные несоответствия';
            th52.style = "border: 1px solid black";


            trHeadMain2.appendChild(thNum);
            trHeadMain2.appendChild(th1_Main2);
            //      trHeadMain2.appendChild(th2_Main2);
            trHeadMain2.appendChild(th3_Main2);


            tbody.appendChild(trHeadMain2);
            trHead2.appendChild(th32);
            trHead2.appendChild(th42);
            trHead2.appendChild(th52);

            tbody.appendChild(trHead2);
        }


        // }

        numCriteria = -1;

        if (item['id_criteria'] !== null) {

            let tr = document.createElement('tr');

            let tdNum = document.createElement('td');
            tdNum.innerHTML = item['str_num'];
            tdNum.style = "border: 1px solid black";

            let td1 = document.createElement('td');
            td1.innerHTML = item['mark_name'];
            td1.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            /*
                        let td2 = document.createElement('td');
                        td2.innerHTML = item['mark_class'];
                        td2.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            */
            let td3 = document.createElement('td');
            td3.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            td3.innerHTML = item['field7'];

            let td4 = document.createElement('td');
            td4.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            let myArr = item['field8'].split(';');
            myArr.forEach(item => {
                td4.innerHTML += item + "<br>";
            })

            let td5 = document.createElement('td');
            td5.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            td5.innerHTML = item['field9'];


            tr.appendChild(tdNum);
            tr.appendChild(td1);
            //      tr.appendChild(td2);
            tr.appendChild(td3);

            tr.appendChild(td4);
            tr.appendChild(td5);

            tbody.appendChild(tr);
            numSub = item['id_subvision']

        }


        numCriteria = item['id_criteria'];
    })


    divPrintTable.appendChild(table);

    return divPrintTable;
}


function createTableForPrintSamoAccredOcenka(valueRespons) {

    let divPrintTable = document.createElement('div');

    let table = document.createElement('table');
    table.style = "border-collapse: collapse; border-spacing: 0;width:100%";


    let trHeadMain = document.createElement('tr');
    trHeadMain.style = "font-style: normal"

    let th1 = document.createElement('th');
    th1.innerHTML = '№ п/п';
    th1.style = "border: 1px solid black; width: 10%; font-style: normal";

    let th2 = document.createElement('th');
    th2.innerHTML = 'Название подразделения';
    th2.style = "border: 1px solid black; width: 40%; font-style: normal";

    let th3 = document.createElement('th');
    th3.innerHTML = 'Группа критериев (полное название критерия)';
    th3.style = "border: 1px solid black; width: 30%; font-style: normal";


    let th4 = document.createElement('th');
    th4.innerHTML = 'Результат оценки,%';
    th4.style = "border: 1px solid black; width: 20%; font-style: normal";


    trHeadMain.appendChild(th1);
    trHeadMain.appendChild(th2);
    trHeadMain.appendChild(th3);
    trHeadMain.appendChild(th4);


    table.appendChild(trHeadMain);


    let tbody = document.createElement('tbody');
    table.appendChild(tbody);


    let id_s = -1;
    let num = 1;
    valueRespons.map((item, index) => {

        if (id_s !== item['id_subvision']) {


            let trNaim = document.createElement('tr');
            let tdNaim = document.createElement('td');
            tdNaim.setAttribute('colspan', '4');
            tdNaim.style = "border: 1px solid black; padding-top: 0.5rem; padding-bottom:0.5rem; padding-left: 2rem; font-weight: bold";
            tdNaim.innerHTML = item['name'];
            trNaim.appendChild(tdNaim);
            tbody.appendChild(trNaim);


            id_s = item['id_subvision'];
        }

        if (id_s == item['id_subvision']) {
            let trNaim2 = document.createElement('tr');
            let tdOtdel1 = document.createElement('td');
            // tdNaim2.setAttribute('colspan', '4');
            tdOtdel1.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; text-align: center; vertical-align: baseline";
            tdOtdel1.innerHTML = `${num}`;

            let tdOtdel2 = document.createElement('td');
            tdOtdel2.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; padding-left: 0.3rem; vertical-align: baseline";
            let strNameOtdel = '';
            if (item['name_otdel'] !== null) {
                if (item['name_otdel'].indexOf('(') > 0) {
                    strNameOtdel = item['name_otdel'].substring(0, item['name_otdel'].indexOf('(') - 1)
                } else {
                    strNameOtdel = item['name_otdel']
                }
            }

            tdOtdel2.innerHTML = strNameOtdel;

            let tdOtdel3 = document.createElement('td');
            tdOtdel3.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem;padding-left: 0.3rem; vertical-align: baseline";
            tdOtdel3.innerHTML = item['name_full'];

            let tdOtdel4 = document.createElement('td');
            tdOtdel4.style = "border: 1px solid black;padding-top: 0.25rem; padding-bottom:0.25rem; padding-left: 0.3rem; vertical-align: baseline";
            tdOtdel4.innerHTML = Math.round(parseFloat(item['mark_dpercent']).toFixed(2)) + '%';

            trNaim2.appendChild(tdOtdel1);
            trNaim2.appendChild(tdOtdel2);
            trNaim2.appendChild(tdOtdel3);
            trNaim2.appendChild(tdOtdel4);
            tbody.appendChild(trNaim2);


            num += 1;

        }
        // else {
        //     if (subCriteriaForReport[index + 1]['name'] && subCriteriaForReport[index]['name'] !== subCriteriaForReport[index + 1]['name'])
        //         as += item['name_otdel'] == null ? 'не выбраны отделения' : item['name_otdel'] + ` ${parseFloat(item['mark_dpercent']).toFixed(2)}%` + ".";
        //     else
        //         as += item['name_otdel'] == null ? 'не выбраны отделения' : item['name_otdel'] + ` ${parseFloat(item['mark_dpercent']).toFixed(2)}%` + ", ";
        // }
    });


    divPrintTable.appendChild(table);

    return divPrintTable;
}

function newPrint() {


    let number_app = document.getElementById("id_application");
    let id_application = number_app.innerHTML;


    $.ajax({
        url: "ajax/z_getAppForPrint.php",
        method: "GET",
        data: {id_app: id_application}
    })
        .done(function (response) {
            //  console.log(response);
            let tableForPrint = JSON.parse(response);


            let naim = document.getElementById("naim");
            let unp = document.getElementById("unp");
            let naimText = naim.value;
            let unpText = unp.value;

            var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');

            WinPrint.document.write('<style>@page {\n' +
                'margin: 1rem;\n' +
                '}</style>');  // убрать колонтитул

            let divReportTitle2 = document.createElement('div');
            divReportTitle2.style = "padding-top: 0.5rem; font-size:1.4rem; padding-left:2rem; padding-right: 2rem; text-align:center; position: relative; transform: translate(-50%, -50%)\";";
            divReportTitle2.innerHTML = `КОНТРОЛЬНЫЙ ЛИСТ<br>
по оценке соответствия базовым критериям медицинской аккредитации к оказанию медицинской помощи по<br> видам, профилям заболеваний, состояниям, синдромам`;
            WinPrint.document.write(divReportTitle2.outerHTML);
            let table = newCreateTableForPrint(tableForPrint);


            WinPrint.document.write('<br/>');
            WinPrint.document.write(table.innerHTML);


            WinPrint.document.close();
            WinPrint.focus();
            let naimOrg = document.getElementById("naim");
            WinPrint.document.title = naimOrg.value + "_№" + id_application + "_" + new Date().toLocaleDateString().replaceAll(".", "");
            WinPrint.print();
            WinPrint.close();

        });


}


function newCreateTableForPrint(tableForPrint) {

    let divPrintTable = document.createElement('div');

    let divNameSubTable = document.createElement('div');
    divNameSubTable.textContent = tableForPrint[0]['name'];
    divNameSubTable.style = "padding-top: 0.5rem; padding-bottom:1rem; font-size:1.8rem; font-weight: 600";

    divPrintTable.appendChild(divNameSubTable);

    let divNameCriteriaTable = document.createElement('div');
    divNameCriteriaTable.textContent = tableForPrint[0]['name_criteria'];
    divNameCriteriaTable.style = "padding-top: 1rem; padding-bottom:2rem";

    divPrintTable.appendChild(divNameCriteriaTable);

    let table = document.createElement('table');
    table.style = "border-collapse: collapse; border-spacing: 0;";


    let trHeadMain = document.createElement('tr');

    let thNum = document.createElement('th');
    thNum.innerHTML = '№ п/п';
    thNum.style = "border: 1px solid black";
    thNum.setAttribute('rowspan', '2');

    let th1_Main = document.createElement('th');
    th1_Main.innerHTML = 'Наименование критерия';
    th1_Main.style = "border: 1px solid black; ";
    th1_Main.setAttribute('rowspan', '2');
    /*
        let th2_Main = document.createElement('th');
        th2_Main.innerHTML = 'Класс критерия';
        th2_Main.style = "border: 1px solid black";
        th2_Main.setAttribute('rowspan','2');
    */

    let th3_Main = document.createElement('th');
    th3_Main.innerHTML = 'Сведения об оценке соответствия критериям';
    th3_Main.style = "border: 1px solid black; text-align: center";
    th3_Main.setAttribute('colspan', '3');


    let trHead = document.createElement('tr');
    let th3 = document.createElement('th');
    th3.innerHTML = 'Сведения по оценке соответствия критерию (да, нет, не применяется)';
    th3.style = "border: 1px solid black";

    let th4 = document.createElement('th');
    th4.innerHTML = 'Документы и сведения, на основании которых проведена оценка соответствия';
    th4.style = "width:350px; border: 1px solid black";


    let th5 = document.createElement('th');
    th5.innerHTML = 'Выявленные несоответствия';
    th5.style = "border: 1px solid black";


    trHeadMain.appendChild(thNum);
    trHeadMain.appendChild(th1_Main);
    //  trHeadMain.appendChild(th2_Main);
    trHeadMain.appendChild(th3_Main);


    table.appendChild(trHeadMain);
    trHead.appendChild(th3);
    trHead.appendChild(th4);
    trHead.appendChild(th5);


    table.appendChild(trHead);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    numCriteria = 0;
    numSub = 0;
    tableForPrint.map((item, index) => {


        if (numSub !== item['id_subvision'] && (index !== 0)) {

            let trNaimSub = document.createElement('tr');
            let tdNaimSub = document.createElement('td');
            tdNaimSub.setAttribute('colspan', '6');
            tdNaimSub.style = "padding-top: 2rem; padding-bottom:1rem; font-size:1.8rem; font-weight: 600";
            tdNaimSub.innerHTML = item['name'];
            trNaimSub.appendChild(tdNaimSub);
            tbody.appendChild(trNaimSub);
            numCriteria = -1;

        }

        if ((numCriteria !== item['id_criteria']) && (index !== 0)) {
            let trNaim = document.createElement('tr');
            let tdNaim = document.createElement('td');
            tdNaim.setAttribute('colspan', '6');
            tdNaim.style = "padding-top: 1rem; padding-bottom:1rem";
            tdNaim.innerHTML = item['name_criteria'];
            trNaim.appendChild(tdNaim);
            tbody.appendChild(trNaim);


            let trHeadMain2 = document.createElement('tr');

            let thNum = document.createElement('th');
            thNum.innerHTML = '№ п/п';
            thNum.style = "border: 1px solid black";
            thNum.setAttribute('rowspan', '2');

            let th1_Main2 = document.createElement('td');
            th1_Main2.innerHTML = 'Наименование критерия';
            th1_Main2.style = "border: 1px solid black";
            th1_Main2.setAttribute('rowspan', '2');
            /*
                            let th2_Main2 = document.createElement('td');
                            th2_Main2.innerHTML = 'Класс критерия';
                            th2_Main2.style = "border: 1px solid black";
                            th2_Main2.setAttribute('rowspan','2');
            */

            let th3_Main2 = document.createElement('td');
            th3_Main2.innerHTML = 'Сведения об оценке соответствия критериям';
            th3_Main2.style = "border: 1px solid black; text-align: center";
            th3_Main2.setAttribute('colspan', '3');


            let trHead2 = document.createElement('tr');
            let th32 = document.createElement('td');
            th32.innerHTML = 'Сведения по оценке соответствия критерию (да, нет, не применяется)';
            th32.style = "border: 1px solid black";

            let th42 = document.createElement('td');
            th42.innerHTML = 'Документы и сведения, на основании которых проведена оценка соответствия';
            th4.style = "width:350px; border: 1px solid black";


            let th52 = document.createElement('td');
            th52.innerHTML = 'Выявленные несоответствия';
            th52.style = "border: 1px solid black";


            trHeadMain2.appendChild(thNum);
            trHeadMain2.appendChild(th1_Main2);
            //      trHeadMain2.appendChild(th2_Main2);
            trHeadMain2.appendChild(th3_Main2);


            tbody.appendChild(trHeadMain2);
            trHead2.appendChild(th32);
            trHead2.appendChild(th42);
            trHead2.appendChild(th52);

            tbody.appendChild(trHead2);
        }


        numCriteria = -1;

        if (item['id_criteria'] !== null) {

            let tr = document.createElement('tr');

            let tdNum = document.createElement('td');
            tdNum.innerHTML = item['str_num'];
            tdNum.style = "border: 1px solid black";

            let td1 = document.createElement('td');
            td1.innerHTML = item['mark_name'];
            td1.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            /*
                        let td2 = document.createElement('td');
                        td2.innerHTML = item['mark_class'];
                        td2.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            */
            let td3 = document.createElement('td');
            td3.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            td3.innerHTML = item['field7'];

            let td4 = document.createElement('td');
            td4.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            td4.innerHTML = item['field8'];

            let td5 = document.createElement('td');
            td5.style = "border: 1px solid black; padding: 0.2rem 0.75rem";
            td5.innerHTML = item['field9'];


            tr.appendChild(tdNum);
            tr.appendChild(td1);
            //    tr.appendChild(td2);
            tr.appendChild(td3);

            tr.appendChild(td4);
            tr.appendChild(td5);

            tbody.appendChild(tr);

            numCriteria = item['id_criteria'];
        }


        numSub = item['id_subvision']
    })


    divPrintTable.appendChild(table);

    return divPrintTable;
}

async function printAppForm() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "ajax/z_createFormApplication.php",
            method: "GET",
            data: {id_application: id_appp}
        }).then((response) => {
            var WinPrint = window.open('', '', 'left=50,top=50,width=1200,height=860,toolbar=0,scrollbars=1,status=0');
            WinPrint.document.write('<style>@page {\n' +
                'margin: 1rem;\n' +
                '}</style>');
            WinPrint.document.write('<br/>');
            WinPrint.document.write(response);
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.document.title = "Заявление_№" + id_appp + "_" + new Date().toLocaleDateString().replaceAll(".", "");
            WinPrint.print();
            WinPrint.close();

            resolve();
        })
    });
}

async function sendApp() {

    let id_application = document.getElementById("id_application");
    let divSoprovodPismo = document.getElementById("divSoprovodPismo");
    let divCopyRaspisanie = document.getElementById("divCopyRaspisanie");
    let divOrgStrukt = document.getElementById("divOrgStrukt");
    let divFileReportSamoocenka = document.getElementById("divFileReportSamoocenka");

    let sokr = document.getElementById("sokr");
    let unp = document.getElementById("unp");
    let adress = document.getElementById("adress");
    let adressFact = document.getElementById("adressFact");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");
    let rukovoditel = document.getElementById("rukovoditel");
    let predstavitel = document.getElementById("predstavitel");

    let isSend = confirm("После отправления заявки, редактирование будет невозможно. Отправить?");
    if (isSend) {

        $.ajax({
            url: "ajax/validateFieldsBeforeSendApp.php",
            method: "GET",
            data: {id_application: id_application.innerText}
        }).then(response => {
            let objects = JSON.parse(response);
            if (objects.length === 0) {
                // ||
                //     divFileReportSamoocenka.getElementsByTagName("a").length == 0
                if (
                    divCopyRaspisanie.getElementsByTagName("a").length == 0
                ) {
                    alert("Не все обязательные документы загружены! Заявление не отправлено.");
                } else if (sokr.value.trim() === "" ||
                    unp.value.trim() === "" ||
                    adress.value.trim() === "" ||
                    adressFact.value.trim() === "" ||
                    tel.value.trim() === "" ||
                    email.value.trim() === "" ||
                    rukovoditel.value.trim() === "" ||
                    predstavitel.value.trim() === ""
                ) {
                    alert("Не все обязательные поля заполнены.");

                } else {
                    printAppForm().then(() => {
                        printNewReport().then(() => {
                            $.ajax({
                                url: "ajax/newSendApp.php",
                                method: "GET",
                                data: {id_application: id_application.innerText}
                            })
                                .done(function (response) {
                                    if (response === "") {
                                        addHistoryAction(id_appp, getCookie('id_user'), 1, `Заявление № ${id_appp} отправлено`, "", "")
                                        alert("Заявление отправлено");
                                        location.href = "/index.php?application";
                                    } else {
                                        alert(response);
                                    }
                                });
                        })
                    })


                }
            } else {
                let errMsg = "Допущена ошибка: ";
                let tmpSub = 0;
                let tmpDep = 0;
                objects.map((item) => {

                    if (tmpSub !== item['id_sub']) {
                        errMsg += "\nПодразделение " + item['sub_name'] + ": ";
                    }

                    if (tmpDep !== item['id_department'] && item['id_department'] !== null) {
                        errMsg += "\nОтделение " + item['dep_name'] + ": \n Критерии: ";
                    }

                    if (item['id_department'] === null) {
                        errMsg += 'Нет информации по подразделению'
                    }

                    tmpDep = item['id_department'];
                    tmpSub = item['id_sub'];

                    if (item['pp'] !== null) {
                        errMsg += item['pp'] + ", ";
                    }


                })
                errMsg = errMsg.substring(0, errMsg.length - 2)
                alert(errMsg);
            }
        })
    }
}


function saveUcompField(idSub, idDep, text, fieldNum) {
    $.ajax({
        url: "ajax/z_saveUcompField.php",
        method: "GET",
        data: {idSub: idSub, idDep: idDep, fieldNum: fieldNum, text: text.innerText.replace(/[^\w\s\+\-%,.]/gi, '')}
    }).then(function (response) {
        let modalUcomplect = document.getElementById("modalUcomplect");
        let modalBody = modalUcomplect.getElementsByClassName("modal-body")[0];

        $.ajax({
            url: "ajax/z_accred_ucomplectTable.php",
            method: "GET",
            data: {id_application: id_appp}
        }).then((response) => {
            modalBody.innerHTML = response;
        })
    })
}

function saveCommon(idApp, text, fieldNum) {
    $.ajax({
        url: "ajax/z_saveUcompFieldCommon.php",
        method: "GET",
        data: {idApp: idApp, fieldNum: fieldNum, text: text.innerText.replace(/[^\w\s\+\-%,.]/gi, '')}
    }).then(function (response) {
        let modalUcomplect = document.getElementById("modalUcomplect");
        let modalBody = modalUcomplect.getE("modal-body")[0];

        $.ajax({
            url: "ajax/z_accred_ucomplectTable.php",
            method: "GET",
            data: {id_application: id_appp}
        }).then((response) => {
            modalBody.innerHTML = response;
        })
    })
}


function onInputAdressFact() {
    const input = document.getElementById('adressFact');
    if (isAdressValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'green';
    }
}

function printModalContent() {
    var modalBody = document.getElementById('modalUcomplect').querySelector('.modal-body');
    var printWindow = window.open('', '', 'width=1500,height=1100');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Укомплектованность</title></head><body>');
    printWindow.document.write(modalBody.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
}

function checkUserRole() {

    const inputreportZakluchenieSootvet = document.getElementById("reportZakluchenieSootvet");
    const inputprikazNaznach = document.getElementById("prikazNaznach");
    const inputFieldSokrNaim = document.getElementById("sokr");
    const inputFieldunp = document.getElementById("unp");
    const inputFieldadress = document.getElementById("adress");
    const inputFieldadressFact = document.getElementById("adressFact");
    const inputFieldtel = document.getElementById("tel");
    const inputFieldemail = document.getElementById("email");
    const inputFieldrukovoditel = document.getElementById("rukovoditel");
    const inputFieldpredstavitel = document.getElementById("predstavitel");
    const inputFieldcopyRaspisanie = document.getElementById("copyRaspisanie");
    const inputFieldtechOsn = document.getElementById("techOsn");
    const inputFieldreportSamoocenka = document.getElementById("reportSamoocenka");
    const ownUcompBtn = document.getElementsByClassName("ownUcomp")[0];



    const divFileReportSamoocenka1  =  document.getElementById("divFileReportSamoocenka");
    const divFileReportDorabotka1  =  document.getElementById("divFileReportDorabotka");
    const divDateDorabotka1  =  document.getElementById("divDateDorabotka");



    if (idRole === "15") {

        inputFieldSokrNaim.disabled = true;
        inputFieldunp.disabled = true;
        inputFieldadress.disabled = true;
        inputFieldadressFact.disabled = true;
        inputFieldtel.disabled = true;
        inputFieldemail.disabled = true;
        inputFieldrukovoditel.disabled = true;
        inputFieldpredstavitel.disabled = true;
        inputFieldcopyRaspisanie.disabled = true;
        inputFieldtechOsn.disabled = true;
        inputFieldreportSamoocenka.disabled = true;
       // ownUcompBtn.disabled = true;
        inputprikazNaznach.disabled = true;
        inputreportZakluchenieSootvet.disabled = true;

        inputFieldcopyRaspisanie.style = "width: auto;margin-bottom: 0px;";
        inputFieldtechOsn.style ="width: auto;margin-bottom: 0px;";
        inputFieldreportSamoocenka.style = "width: auto;margin-bottom: 0px;";
        inputprikazNaznach.style = "width: auto;margin-bottom: 0px;";
        inputreportZakluchenieSootvet.style = "width: auto;margin-bottom: 0px;";

        divFileReportSamoocenka1.style = "display:block";
        divFileReportDorabotka1.style = "display:block";
        divDateDorabotka1.style = "display:block";

    } else if (idRole === "14") {
        inputFieldSokrNaim.disabled = true;
        inputFieldunp.disabled = true;
        inputFieldadress.disabled = true;
        inputFieldadressFact.disabled = true;
        inputFieldtel.disabled = true;
        inputFieldemail.disabled = true;
        inputFieldrukovoditel.disabled = true;
        inputFieldpredstavitel.disabled = true;
        inputFieldcopyRaspisanie.disabled = true;
        inputFieldtechOsn.disabled = true;
        inputFieldreportSamoocenka.disabled = true;
      //  ownUcompBtn.disabled = true;
        inputprikazNaznach.disabled = true;
        inputreportZakluchenieSootvet.disabled = true;

        //
        // inputFieldSokrNaim.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldunp.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldadress.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldadressFact.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldtel.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldemail.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldrukovoditel.style = "width: 0px;margin-bottom: -35px;";
        // inputFieldpredstavitel.style = "width: 0px;margin-bottom: -35px;";
         inputFieldcopyRaspisanie.style = "width: 0px;margin-bottom: -35px;";
         inputFieldtechOsn.style = "width: 0px;margin-bottom: -35px;";
         inputFieldreportSamoocenka.style = "width: 0px;margin-bottom: -35px;";
         inputprikazNaznach.style = "width: 0px;margin-bottom: -35px;";
         inputreportZakluchenieSootvet.style = "width: 0px;margin-bottom: -35px;";


         divFileReportSamoocenka1.style = "display:none";
         divFileReportDorabotka1.style = "display:none";
         divDateDorabotka1.style = "display:none";

    }
    else {
        inputFieldSokrNaim.disabled = false;
        inputFieldunp.disabled = false;
        inputFieldadress.disabled = false;
        inputFieldadressFact.disabled = false;
        inputFieldtel.disabled = false;
        inputFieldemail.disabled = false;
        inputFieldrukovoditel.disabled = false;
        inputFieldpredstavitel.disabled = false;
        inputFieldcopyRaspisanie.disabled = false;
        inputFieldtechOsn.disabled = false;
        inputFieldreportSamoocenka.disabled = false;
        ownUcompBtn.disabled = false;
        inputprikazNaznach.disabled = false;
        inputreportZakluchenieSootvet.disabled = false;


        inputFieldcopyRaspisanie.style = "width: auto;margin-bottom: 0px;";
        inputFieldtechOsn.style ="width: auto;margin-bottom: 0px;";
        inputFieldreportSamoocenka.style = "width: auto;margin-bottom: 0px;";
        inputprikazNaznach.style = "width: auto;margin-bottom: 0px;";
        inputreportZakluchenieSootvet.style = "width: auto;margin-bottom: 0px;";

        divFileReportSamoocenka1.style = "display:block";
        divFileReportDorabotka1.style = "display:block";
        divDateDorabotka1.style = "display:block";



    }
}

// document.getElementById("btnFormApplication").onclick = async function () {
//     await printAppForm();
// };

function chengeLico(select) {
    switch (select.options[select.selectedIndex].value) {
        case "1":
            rukDiv.classList.remove("hiddentab");
            predDiv.classList.add("hiddentab");
            formDoverennost.classList.add("hiddentab");
            formPrikazNaznach.classList.remove("hiddentab");
            break;
        case "2":
            predDiv.classList.remove("hiddentab");
            rukDiv.classList.add("hiddentab");
            formDoverennost.classList.remove("hiddentab");
            formPrikazNaznach.classList.add("hiddentab");
            break;
        case "0":
            predDiv.classList.add("hiddentab");
            rukDiv.classList.add("hiddentab");
            formDoverennost.classList.add("hiddentab");
            formPrikazNaznach.classList.add("hiddentab");
            break;
    }
}

$("#doverennost").on("change", () => {
    let login = getCookie('login');
    let divTechOsn = document.getElementById("divDoverennost");
    let sopr = divTechOsn.getElementsByTagName("a")[0];
    if (sopr) {
        sopr.remove();
    }
    let techOsn = document.getElementById("doverennost");
    techOsn.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + login + "/" + id_appp + "/" + techOsn.files[0].name + "'>" + techOsn.files[0].name + "</a>");

    let id_application = document.getElementById("id_application");

    let xhr = new XMLHttpRequest(),
        form = new FormData();
    let techOsnFile = techOsn.files[0];
    form.append("id_application", id_application.innerText);
    form.append("doverennost", techOsnFile);

    xhr.open("post", "ajax/postFileDoverennost.php", true);
    // let techOsndiv = document.getElementById("techOsndiv");
    // if (techOsndiv) {
    //     techOsndiv.remove();
    // }
    let loadSopr = document.getElementById("loadDoverennost");
    if (loadSopr) {
        loadSopr.remove();
    }
    let load = document.createElement("div");
    load.innerHTML = "Подождите, идет загрузка";
    load.id = "loadDoverennost";
    techOsn.insertAdjacentElement("afterend", load);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            let progress = (event.loaded / event.total) * 100;
            load.innerHTML = "Загрузка: " + Math.round(progress) + "%";
        }
    };

    xhr.upload.onloadstart = function () {
        load.innerHTML = "Подождите, идет загрузка";
    };
    xhr.upload.onload = function () {
        load.innerHTML = "Файл загружен";
    }
    xhr.send(form);
});

$("#prikazNaznach").on("change", () => {
    let login = getCookie('login');
    let divTechOsn = document.getElementById("divPrikazNaznach");
    let sopr = divTechOsn.getElementsByTagName("a")[0];
    if (sopr) {
        sopr.remove();
    }
    let techOsn = document.getElementById("prikazNaznach");
    techOsn.insertAdjacentHTML("afterend", "<a target='_blank' href='/docs/documents/" + login + "/" + id_appp + "/" + techOsn.files[0].name + "'>" + techOsn.files[0].name + "</a>");

    let id_application = document.getElementById("id_application");

    let xhr = new XMLHttpRequest(),
        form = new FormData();
    let techOsnFile = techOsn.files[0];
    form.append("id_application", id_application.innerText);
    form.append("prikazNaznach", techOsnFile);

    xhr.open("post", "ajax/postFilePrikazNaznach.php", true);
    // let techOsndiv = document.getElementById("techOsndiv");
    // if (techOsndiv) {
    //     techOsndiv.remove();
    // }
    let loadSopr = document.getElementById("loadPrikazNaznach");
    if (loadSopr) {
        loadSopr.remove();
    }
    let load = document.createElement("div");
    load.innerHTML = "Подождите, идет загрузка";
    load.id = "loadPrikazNaznach";
    techOsn.insertAdjacentElement("afterend", load);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            let progress = (event.loaded / event.total) * 100;
            load.innerHTML = "Загрузка: " + Math.round(progress) + "%";
        }
    };

    xhr.upload.onloadstart = function () {
        load.innerHTML = "Подождите, идет загрузка";
    };
    xhr.upload.onload = function () {
        load.innerHTML = "Файл загружен";
    }
    xhr.send(form);
});


//
// $("#btnSend").on("click", async () =>{
//     if(this.id === "newBtnSend") {
//         await sendApp(id_app);
//     }else {
//
//     }
// })

// new Promise(((resolve, reject) => {
//     setTimeout(() => {
//         let files = document.getElementsByClassName("form-control-file");
//         for (let i = 0; i < files.length; i++) {
//             files[i].disabled = "true";
//             console.log(files[i]);
//         }
//     }, 3000);
// }))

function saveRkk() {
    // console.log(id_app);
    let dateRegistr = document.getElementById("dateRegistr");
    let countlist = document.getElementById("countlist");
    let tech_osn_rkk = document.getElementById("tech_osn_rkk");
    let stat_rasp = document.getElementById("stat_rasp");
    let ucomp_rkk = document.getElementById("ucomp_rkk");
    let report_samoacred = document.getElementById("report_samoacred");
    let dop_sved = document.getElementById("dop_sved");
    let prinyal_zayav = document.getElementById("prinyal_zayav");
    let predst_rkk = document.getElementById("predst_rkk");
    let perv_vtor_zayav = document.getElementById("perv_vtor_zayav");
    let reg_index = document.getElementById("reg_index");
    let povtor_index = document.getElementById("povtor_index");
    let info_napr_zapr = document.getElementById("info_napr_zapr");
    let info_sogl = document.getElementById("info_sogl");
    let protolol_zasedanie = document.getElementById("protolol_zasedanie");
    let date_zasedanie = document.getElementById("date_zasedanie");
    let info_vozvrat = document.getElementById("info_vozvrat");
    let info_otzyv = document.getElementById("info_otzyv");
    let admin_resh = document.getElementById("admin_resh");
    let date_admin_resh = document.getElementById("date_admin_resh");
    let count_admin_resh = document.getElementById("count_admin_resh");
    let resultat = document.getElementById("resultat");
    let svidetelstvo = document.getElementById("svidetelstvo");
    let date_svidetelstvo = document.getElementById("date_svidetelstvo");
    let po_n = document.getElementById("po_n");
    let count_svidetelstvo = document.getElementById("count_svidetelstvo");
    let info_uved = document.getElementById("info_uved");
    let count_medacr = document.getElementById("count_medacr");
    let getter = document.getElementById("getter");
    let delo = document.getElementById("delo");
    let delo_listov = document.getElementById("delo_listov");
    let date_delo = document.getElementById("date_delo");
    let dop_info = document.getElementById("dop_info");
    let checkboxValueGuzo = document.getElementById("checkboxValueGuzo");
    let checkboxValue = checkboxValueGuzo.checked ? "1" : "0";
    $.ajax({
        url: "ajax/saveRkk.php",
        method: "POST",
        data: {
            dateRegistr: dateRegistr.value,
            countlist: countlist.value,
            tech_osn_rkk: tech_osn_rkk.value,
            stat_rasp: stat_rasp.value,
            ucomp_rkk: ucomp_rkk.value,
            report_samoacred: report_samoacred.value,
            dop_sved: dop_sved.value,
            prinyal_zayav: prinyal_zayav.options[prinyal_zayav.options.selectedIndex].value,
            predst_rkk: predst_rkk.value,
            perv_vtor_zayav: perv_vtor_zayav.options[perv_vtor_zayav.options.selectedIndex].value,
            reg_index: reg_index.value,
            povtor_index: povtor_index.value,
            info_napr_zapr: info_napr_zapr.value,
            info_sogl: info_sogl.value,
            protolol_zasedanie: protolol_zasedanie.value,
            date_zasedanie: date_zasedanie.value,
            info_vozvrat: info_vozvrat.value,
            info_otzyv: info_otzyv.value,
            admin_resh: admin_resh.value,
            date_admin_resh: date_admin_resh.value,
            count_admin_resh: count_admin_resh.value,
            resultat: resultat.value,
            svidetelstvo: svidetelstvo.value,
            date_svidetelstvo: date_svidetelstvo.value,
            po_n: po_n.value,
            count_svidetelstvo: count_svidetelstvo.value,
            info_uved: info_uved.value,
            count_medacr: count_medacr.value,
            getter: getter.value,
            delo: delo.value,
            delo_listov: delo_listov.value,
            date_delo: date_delo.value,
            dop_info: dop_info.value,
            checkboxValue:checkboxValue,
            id_application: id_appp

        }
    }).done(function (result) {
        if (result == "0")
            alert("Не все обязательные поля заполнены!");
        else
            alert("Данные сохранены!");
    });
}

function getRkk() {
    let dateRegistr = document.getElementById("dateRegistr");
    let countlist = document.getElementById("countlist");
    let tech_osn_rkk = document.getElementById("tech_osn_rkk");
    let stat_rasp = document.getElementById("stat_rasp");
    let ucomp_rkk = document.getElementById("ucomp_rkk");
    let report_samoacred = document.getElementById("report_samoacred");
    let dop_sved = document.getElementById("dop_sved");
    let prinyal_zayav = document.getElementById("prinyal_zayav");
    let predst_rkk = document.getElementById("predst_rkk");
    let perv_vtor_zayav = document.getElementById("perv_vtor_zayav");
    let reg_index = document.getElementById("reg_index");
    let povtor_index = document.getElementById("povtor_index");
    let info_napr_zapr = document.getElementById("info_napr_zapr");
    let info_sogl = document.getElementById("info_sogl");
    let protolol_zasedanie = document.getElementById("protolol_zasedanie");
    let date_zasedanie = document.getElementById("date_zasedanie");
    let info_vozvrat = document.getElementById("info_vozvrat");
    let info_otzyv = document.getElementById("info_otzyv");
    let admin_resh = document.getElementById("admin_resh");
    let date_admin_resh = document.getElementById("date_admin_resh");
    let count_admin_resh = document.getElementById("count_admin_resh");
    let resultat = document.getElementById("resultat");
    let svidetelstvo = document.getElementById("svidetelstvo");
    let date_svidetelstvo = document.getElementById("date_svidetelstvo");
    let po_n = document.getElementById("po_n");
    let count_svidetelstvo = document.getElementById("count_svidetelstvo");
    let info_uved = document.getElementById("info_uved");
    let count_medacr = document.getElementById("count_medacr");
    let getter = document.getElementById("getter");
    let delo = document.getElementById("delo");
    let delo_listov = document.getElementById("delo_listov");
    let date_delo = document.getElementById("date_delo");
    let dop_info = document.getElementById("dop_info");
    let checkboxValueGuzo = document.getElementById("checkboxValueGuzo");

    $.ajax({
        url: "ajax/getRkk.php",
        method: "GET",
        data: {
            id_application: id_appp
        }
    }).done(function (result) {
        if (result !== "no data") {
            let data = JSON.parse(result);

            dateRegistr.value = data.date_reg;
            countlist.value = data.count_list_app;
            tech_osn_rkk.value = data.tech_osn;
            stat_rasp.value = data.raspisanie;
            ucomp_rkk.value = data.ucomplect;
            report_samoacred.value = data['report_samoacred'];
            dop_sved.value = data['dop_sved'];
            prinyal_zayav.value = data['id_user'];
            predst_rkk.value = data.predstavitel;
            perv_vtor_zayav.value = data.perv_vtor;
            povtor_index.value = data.date_index_povt_app;
            info_napr_zapr.value = data['info_napr_zapr'];
            info_sogl.value = data['info_sogl'];
            protolol_zasedanie.value = data.protokol_zased;
            date_zasedanie.value = data.date_protokol;
            info_vozvrat.value = data.info_vozvr;
            info_otzyv.value = data['info_otzyv'];
            date_admin_resh.value = data['date_admin_resh'];
            count_admin_resh.value = data.count_list_admin;
            resultat.value = data['result'];
            svidetelstvo.value = data['svidetelstvo'];
            date_svidetelstvo.value = data.date_sved;
            po_n.value = data['po_n'];
            count_svidetelstvo.value = data.count_list_sved;
            info_uved.value = data['info_uved'];
            count_medacr.value = data.count_list_report_medacr;
            getter.value = data['getter'];
            delo.value = data['delo'];
            date_delo.value = data['date_delo'];
            delo_listov.value = data['delo_listov'];
            dop_info.value = data['dop_info'];
            if (data['checkboxValueGuzo'] === "1") {
                checkboxValueGuzo.checked = true;            } else {
                checkboxValueGuzo.checked = false;
            }
        }
    });
}


function regRkk() {
    $.ajax({
        url: "ajax/regRkk.php",
        method: "GET",
        data: {
            id_application: id_appp
        }
    }).done(response => {
        dateRegistr.disabled = false;
        countlist.disabled = false;
        tech_osn_rkk.disabled = false;
        stat_rasp.disabled = false;
        ucomp_rkk.disabled = false;
        report_samoacred.disabled = false;
        dop_sved.disabled = false;
        prinyal_zayav.disabled = false;
        predst_rkk.disabled = false;
        perv_vtor_zayav.disabled = false;
        reg_index.disabled = false;
        povtor_index.disabled = false;
        info_napr_zapr.disabled = false;
        info_sogl.disabled = false;
        protolol_zasedanie.disabled = false;
        date_zasedanie.disabled = false;
        info_vozvrat.disabled = false;
        info_otzyv.disabled = false;
        admin_resh.disabled = false;
        date_admin_resh.disabled = false;
        count_admin_resh.disabled = false;
        resultat.disabled = false;
        svidetelstvo.disabled = false;
        date_svidetelstvo.disabled = false;
        po_n.disabled = false;
        count_svidetelstvo.disabled = false;
        info_uved.disabled = false;
        count_medacr.disabled = false;
        getter.disabled = false;
        delo.disabled = false;
        delo_listov.disabled = false;
        date_delo.disabled = false;
        dop_info.disabled = false;
        checkboxValueGuzo.disabled = false;
        if (response === '000') {
            $('#registerRkk').css('display', 'none');
        } else {
            $('#registerRkk').css('display', 'block');
        }
        $('#btnChecking').removeClass('hiddentab');
        alert("Зарегистрировано");

    })
}

function refreshRkk(id_app) {
    $.ajax({
        url: 'ajax/checkIdRkk.php',
        method: 'GET',
        data: {id_app: id_app},
        success: function (response) {
            if (response === '000') {
                $('#dateRegistr, #countlist, #tech_osn_rkk, #stat_rasp, #ucomp_rkk, #report_samoacred, #dop_sved, #predst_rkk, #perv_vtor_zayav ,#povtor_index, #prinyal_zayav ,#info_napr_zapr, #info_sogl, #protolol_zasedanie, #date_zasedanie, #info_vozvrat, #info_otzyv, #admin_resh, #date_admin_resh, #count_admin_resh, #resultat, #svidetelstvo, #date_svidetelstvo, #po_n, #count_svidetelstvo, #info_uved, #count_medacr, #getter, #delo, #delo_listov, #kontrol, #date_delo, #dop_info, #checkboxValueGuzo').removeAttr('disabled');
                $('#registerRkk').css('display', 'none');
            } else {
                $('#dateRegistr, #countlist, #tech_osn_rkk, #stat_rasp, #ucomp_rkk, #report_samoacred, #dop_sved, #predst_rkk, #perv_vtor_zayav ,#povtor_index, #prinyal_zayav ,#info_napr_zapr, #info_sogl, #protolol_zasedanie, #date_zasedanie, #info_vozvrat, #info_otzyv, #admin_resh, #date_admin_resh, #count_admin_resh, #resultat, #svidetelstvo, #date_svidetelstvo, #po_n, #count_svidetelstvo, #info_uved, #count_medacr, #getter, #delo, #delo_listov, #kontrol, #date_delo, #dop_info, #checkboxValueGuzo').attr('disabled', true);
                $('#registerRkk').css('display', 'block');
            }
        },
        error: function () {
            console.log('Ошибка при выполнении AJAX-запроса');
        }
    });
}

function guzoChange(checkbox)
{
    if (checkbox.checked) {

        checkbox.value = "1";

    } else {
        checkbox.value = "0";
    }
}


function setNewStatus(){

    if(confirm("Вы точно хотите переместить заявление в статус самооценки?")) {
        $.ajax({
            url: "ajax/setNewStatus.php",
            method: "POST",
            data: {id_app: id_appp}
        }).done(response => {
            alert("Заявление перемещено в статус самооценки");
        })
    }
}

function printRkk(){
    $.ajax({
        url: "ajax/z_printRkk.php",
        method: "GET",
        data: {
            id_application: id_appp
        }
    }).done(response => {
        var WinPrint = window.open('', '', 'left=50,top=50,width=1200,height=860,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write('<style>@page {\n' +
            'margin: 1rem;\n' +
            '}</style>');
        WinPrint.document.write('<br/>');
        WinPrint.document.write(response);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.document.title = "РКК_№" + id_appp + "_" + new Date().toLocaleDateString().replaceAll(".", "");
        WinPrint.print();
        WinPrint.close();

        resolve();
    });
}

function printRkk(){
    $.ajax({
        url: "ajax/z_printRkk.php",
        method: "GET",
        data: {
            id_application: id_appp
        }
    }).done(response => {
        var WinPrint = window.open('', '', 'left=50,top=50,width=1200,height=860,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write('<style>@page {\n' +
            'margin: 1rem;\n' +
            '}</style>');
        WinPrint.document.write('<br/>');
        WinPrint.document.write(response);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.document.title = "РКК_№" + id_appp + "_" + new Date().toLocaleDateString().replaceAll(".", "");
        WinPrint.print();
        WinPrint.close();

        resolve();
    });
}

$("#btnOk").on("click", () => {
    if (confirm("Подтвердите завершение оценки")) {


        let id_application = document.getElementById("id_application");
        $.ajax({
            url: "ajax/validateFieldsBeforeOkGuzo.php",
            method: "GET",
            data: {id_application: id_application.innerText}
        }).then(response => {
            let objects = JSON.parse(response);
            if (objects.length === 0) {

                // let divReport = document.getElementById("filesContainer");
                // let a = divReport.getElementsByTagName("a")[0];
                if (stringFileReport !== "" && stringFileReport !== undefined) {
                    $.ajax({
                        url: "ajax/changeStatusOkGuzo.php",
                        method: "GET",
                        data: {id_application: id_application.innerText}
                    })
                        .done(function (response) {

                            alert("Оценка завершена");
                            location.href = "/index.php?application_support";
                        });
                } else
                    alert("Не прикреплен отчет!");
            } else {
                let errMsg = "Допущена ошибка: ";
                let tmpSub = 0;
                let tmpDep = 0;
                objects.map((item) => {

                    if (tmpSub !== item['id_sub']) {
                        errMsg += "\nПодразделение " + item['sub_name'] + ": ";
                    }

                    if (tmpDep !== item['id_department'] && item['id_department'] !== null) {
                        errMsg += "\nОтделение " + item['dep_name'] + ": \n Критерии: ";
                    }

                    if (item['id_department'] === null) {
                        errMsg += 'Нет информации по подразделению'
                    }

                    tmpDep = item['id_department'];
                    tmpSub = item['id_sub'];

                    if (item['pp'] !== null) {
                        errMsg += item['pp'] + ", ";
                    }


                })
                errMsg = errMsg.substring(0, errMsg.length - 2)
                alert(errMsg);

            }
        })
    }
});







function updateReadyOrNot(id_department, value) {
    let btnUpd = document.querySelector("[data-id_department='"+id_department+"']");
    let readyornot = btnUpd.getAttribute("readyornot");
    console.log (id_department + "iddep" , value + "value");
    let cb = document.getElementById("cardBody" + id_department);
    let tableCb = cb.children[0];
    let allCells = tableCb.getElementsByTagName("td");
    let allSelect = tableCb.querySelectorAll("#selpickerAccred");
    let specificTds = tableCb.querySelectorAll("#td7, #tdDef");

    if (readyornot === "0"){
        value = 1;
        btnUpd.setAttribute("readyornot", 1);
        [...specificTds].forEach(item => {
            item.setAttribute("contenteditable", "false");
        });

            [...allSelect].forEach(item => {
            item.setAttribute("disabled", "true");
        });
    }
    else{
        value = 0 ;
        btnUpd.setAttribute("readyornot", 0);
        [...specificTds].forEach(item => {
            item.setAttribute("contenteditable", "true");
        });

            [...allSelect].forEach(item => {
            item.removeAttribute("disabled");
        });
    }
    $.ajax({
        url: '../ajax/updateReadyornot.php',
        method: 'POST',
        data:{   id_department: id_department, value: value },
        success: function(response) {
            if (value === 1) {
                btnUpd.innerHTML = "Редактировать";

            } else {
                btnUpd.innerHTML = "Готово";
            }

        },
        error: function(xhr, status, error) {
            console.error('Ошибка при обновлении значения: ' + error);
        }
    });
    let idDep = id_department;
    let colId = "collapse" + idDep;
    let btnCol = document.querySelector("[aria-controls='" + colId + "']").innerHTML;
    let nameDep = btnCol.substring(0, btnCol.indexOf("("));
    let nameTab = document.getElementById("button" + openTabId);
    addHistoryAction(id_appp, getCookie('id_user'), 1, `Использование таблицы ${nameDep} в подразделении ${nameTab.innerText}`, openTabId, idDep);

}


$("#btnJournalActions").on("click", () => {
    console.log(id_appp)
    $.ajax({
        url: "ajax/journal_actions.php",
        method: "GET",
        data: {id_app: id_appp}

    })


        .done(function (response) {
            console.log('12')

            let journal = document.getElementById('journal');
            journal.innerHTML = response;

            showModalAction(id_appp);

        })
});


$("#formReport").on("change", () => {
    let fileReport = document.getElementById("fileReport");
    let filesContainer = document.getElementById("filesContainer");
    filesContainer.innerHTML = "";
    let login = getCookie('login');
    for (let i = 0; i < fileReport.files.length; i++) {
        let file = fileReport.files[i];
        filesContainer.insertAdjacentHTML("beforeend", "<a target='_blank' href='/docs/documents/" + loginApp + "/" + id_appp + "/" + file.name + "'>" + file.name + "</a><br>");
    }

    let id_application = document.getElementById("id_application");
    let xhr = new XMLHttpRequest();
    let form = new FormData();
    for (let i = 0; i < fileReport.files.length; i++) {
        form.append("fileReport[]", fileReport.files[i]);
    }
    form.append("id_application", id_appp);
    form.append("login", loginApp);
    xhr.open("post", "ajax/postFileReportGuzo.php", true);
    let load = document.createElement("div");
    load.innerHTML = "Подождите, идет загрузка";
    load.id = "loadPrikazNaznach";
    fileReport.insertAdjacentElement("afterend", load);

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            let progress = (event.loaded / event.total) * 99;
            load.innerHTML = "Загрузка: " + Math.round(progress) + "%";
        }
    };

    xhr.upload.onloadstart = function () {
        load.innerHTML = "Подождите, идет загрузка";
    };
    // xhr.upload.onload = function () {
    //     if (xhr.status != 200){
    //         load.innerHTML = `Ошибка загрузки ${xhr.status}: ${xhr.statusText}`;
    //     }
    //     else{
    //         load.innerHTML = "Файл загружен";
    //     }
    // }

    xhr.addEventListener("load", () => {
        if (xhr.status >=200 && xhr.status < 400)
            load.innerHTML = "Файл загружен";
        else
            load.innerHTML = `Ошибка загрузки ${xhr.status}: ${xhr.statusText}`;
    });

    xhr.addEventListener("error", () => fail(new Error("Network error")));


    xhr.send(form)


});

