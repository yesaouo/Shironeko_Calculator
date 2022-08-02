function calculator() {
        const form=document.forms['form'];
        const skill1=form.skill1.value;
        const skill2=form.skill2.value;
        const skill3=form.skill3.value;
        let ap=new Number(form.ap.value);
        ap+=((skill1==1)?15:0)+((skill2==1)?20:0)+((skill3==1)?25:0)
        +((skill1==7)?20:0)+((skill1==8)?25:0)+((skill1==9)?24:0)
        +((skill2==6)?25:0)+((skill2==7)?27:0)+((skill3==9)?30:0);
        let cp=new Number(form.cp.value);
        cp+=((skill1==2)?10:0)+((skill2==2)?15:0)+((skill3==2)?20:0);
        let cdp=new Number(form.cdp.value);
        cdp+=((skill3==6)?25:0);
        let ndp=new Number(form.ndp.value);
        ndp+=((skill1==3)?25:0)+((skill2==3)?35:0)+((skill3==3)?50:0);
        const sv4=((skill1==4)?100:0)+((skill2==4)?100:0)+((skill3==4)?200:0);
        let sdp=new Number(form.sdp.value);
        sdp+=((skill3==5)?40:0)+((skill1==5)?15:0)+((skill1==6)?20:0)+((skill2==5)?30:0)+((skill3==7)?30:0)+((skill3==8)?50:0);
        const sv10=((skill3==10)?75:0);
        let atk=form.atk.value*(1+ap/100);
        let as=form.as.value*(1+cp/100);
        let asr;if(as>5000)asr=0.8;
        else if(as>1000)asr=0.55+(as-1000)/16000;
        else if(as>500)asr=0.4+(as-500)/3333;
        else if(as>300)asr=0.3+(as-300)/2000;
        else asr=as/1000;
        asr+=1;
        let asd;if(as>8667)asd=1.8;
        else if(as>6000)asd=1.64+(as-6000)/16667;
        else if(as>1000)asd=0.94+(as-1000)/7143;
        else if(as>200)asd=0.3+(as-200)/1250;
        else asd=as/666;
        asd+=cdp/100+1;
        let ND=2*atk*(1+(ap+ndp+sv4+sv10)/100)*asd;
        let SD=atk*(1+(sv4+sdp+sv10)/100)*asd;
        form.record.value+="\n一般傷害:"+Math.round(ND)+"\n技能傷害:"+Math.round(SD)+"\n";
        form.record.scrollTop = form.record.scrollHeight;
}