import{Y as n,I as F}from"./index.ce7ea90d.js";import{e as w,c as A,a as M,h as d,o as v}from"./auth.fdd9f60a.js";import{a as x}from"./axios.1ff92d29.js";import{m as I,e as N}from"./exam-question.99932840.js";async function P(e){try{return(await x.put(`/exam-answers/${e.id}`,{questions:e.questions,score:e.score,percent:e.percent,status:"taken"},w())).status==200?!0:(n.create("Error while updating exam answer"),!1)}catch{return n.create("Error while updating exam answer"),!1}return!1}async function T(e,t){try{const s=await x.post("/graphql",{query:`
    query{
      examAnswers(where:{
        course:`+t+`,
        student:`+e+`
      }){
        score
        percent
        pass_percent
        status
        redo_idx
        exam{
          parts
          name
          lesson{
            title
            id
          }
        }
      }
    }
    `},w());if(s.status==200)return console.log(s.data),s.data.data.examAnswers;n.create("Error while getting exam answers from server")}catch(s){n.create("Error while getting exam answers from server"),console.log(s)}return[]}async function z(e){try{const t=await x.post("/graphql",{query:`
    query{
      examAnswers(where:{
        exam:`+e+`        
      }){
        id
        score
        percent
        pass_percent
        status
        redo_idx
        questions
        student{
          id
          user{
            username
            profile{
              name
              phoneNumber
              fcmtoken
              parentPhoneNumber
              lang
            }
          }
        }
      }
    }
    `},w());if(t.status==200)return console.log(t.data),t.data.data.examAnswers;n.create("Error while getting exam answers from server")}catch(t){n.create("Error while getting exam answers from server"),console.log(t)}return[]}const C=F("lessonsS",{state:()=>({working:!1}),getters:{lesson(){return A().selectedLesson}},actions:{getOne(e){var s,r,u,a;const t=A();if(((s=t.selectedLesson)==null?void 0:s.id)!=e){if(t.selectedLesson=null,t.selectedCourse==null){this.$router.back();return}(u=(r=t.selectedCourse)==null?void 0:r.course_sections)==null||u.forEach(i=>{var c;(c=i.lessons)==null||c.forEach(o=>{o.id==e&&(t.selectedLesson=o)})})}if(((a=t.selectedLesson)==null?void 0:a.id)==null){this.$router.back();return}},async update(e,t,s,r,u){var a;if(!(e==null||r==null)){if(e.id==null){n.create("Error in parameters, id is missing");return}if(this.working=!0,s!=null)try{console.log("uploading pdf file first");const i=await I().upload(s);console.log("file uploaded"),console.log(i),t.pdf=i.data[0].id,console.log("prepared request object"),console.log(t)}catch{n.create("Failed to upload file."),this.working=!1;return}try{if(console.log("update called"),(await x.put("/lessons/"+e.id,t,w())).status==200){this.working=!1,n.create("Updated!"),(u==null||u==!1)&&this.$router.back(),await this.updateLessonNotifications(t,u,e);const c=A();e.has_exam!=t.has_exam&&c.selectedLesson!=null&&(c.selectedLesson.has_exam=(a=t.has_exam)!=null?a:!1)}else n.create("Error while updating lesson")}catch(i){n.create("Error while updating lesson"),console.log(i)}this.working=!1}},async updateLessonNotifications(e,t,s){var r,u,a,i,c,o,f,m,h,g,l,S,k,Y,$,p;(s==null?void 0:s.has_exam)==!1&&e.has_exam==!0&&t==!0&&(await x.post("/faculties/notification",{title:(u=(r=A().selectedCourse)==null?void 0:r.name)!=null?u:"STDY",message:"there is a new exam",topics:["course_"+((a=A().selectedCourse)==null?void 0:a.id)+"_en"],courseId:(i=A().selectedCourse)==null?void 0:i.id},w()),await x.post("/faculties/notification",{title:(o=(c=A().selectedCourse)==null?void 0:c.name)!=null?o:"STDY",message:"\u064A\u0648\u062C\u062F \u0644\u062F\u064A\u0643 \u0627\u0645\u062A\u062D\u0627\u0646 \u062C\u062F\u064A\u062F",topics:["course_"+((f=A().selectedCourse)==null?void 0:f.id)+"_ar"],courseId:(m=A().selectedCourse)==null?void 0:m.id},w())),(s==null?void 0:s.has_homework)==!1&&e.has_homework==!0&&e.homework!=null&&(await x.post("/faculties/notification",{title:(g=(h=A().selectedCourse)==null?void 0:h.name)!=null?g:"STDY",message:"there is a new homework",topics:["course_"+((l=A().selectedCourse)==null?void 0:l.id)+"_en"],courseId:(S=A().selectedCourse)==null?void 0:S.id},w()),await x.post("/faculties/notification",{title:(Y=(k=A().selectedCourse)==null?void 0:k.name)!=null?Y:"STDY",message:"\u064A\u0648\u062C\u062F \u0644\u062F\u064A\u0643 \u0648\u0627\u062C\u0628 \u062C\u062F\u064A\u062F",topics:["course_"+(($=A().selectedCourse)==null?void 0:$.id)+"_ar"],courseId:(p=A().selectedCourse)==null?void 0:p.id},w()))}}}),D=F("coursesS",{state:()=>({working:!1}),getters:{selectedCourse(){return A().selectedCourse}},actions:{getOne(e){var t,s;A().selectedCourse=(s=(t=M().user)==null?void 0:t.courseOptions.filter(r=>r.value.id==e)[0].value)!=null?s:null},async sendNotificationToSomeStudents(e,t,s,r,u){console.log("sendNotificationToSomeStudents called"),this.working=!0;try{if(u.length==0){n.create("must enter notificationTextAr"),this.working=!1;return}if(r.length==0){n.create("must enter notificationTextEn"),this.working=!1;return}t.length>0&&await x.post("/faculties/notification",{title:"STDY",message:r,tokens:t,type:"course",id:e.id},w()),s.length>0&&await x.post("/faculties/notification",{title:"STDY",message:u,tokens:s,type:"course",id:e.id},w()),t.length==0&&s.length==0?(n.create("didn't find guests with tokens that match conditions"),console.log("didn't find guests with tokens that match conditions")):(n.create("sent"),console.log("sent"))}catch(a){console.log(a),n.create("error 85")}this.working=!1}}}),E=F("examsS",{state:()=>({working:!1,exams:[],exam:null,difficulty:1,parts:[],tag:"",questions:0,required:!1,duration_in_minutes:120,name:"",randomize_questions:!1,randomize_answers:!1,start:d().format("DD/MM/YYYY hh:mm A Z"),end:d().format("DD/MM/YYYY hh:mm A Z"),dateFormat:"DD/MM/YYYY hh:mm A Z",pass_percent:100,redo:[],redoIdx:1,redoPassPercent:100,redoStart:d().format("DD/MM/YYYY hh:mm A Z"),redoEnd:d().format("DD/MM/YYYY hh:mm A Z"),redoColumns:[{name:"idx",label:"idx",field(e){return e.idx}},{name:"pass percent",label:"pass percent",field(e){return e.pass_percent}},{name:"start",label:"start",field(e){return d(e.start).format("DD/MM/YYYY hh:mm A Z")}},{name:"end",label:"end",field(e){return d(e.end).format("DD/MM/YYYY hh:mm A Z")}},{name:"actions",label:"actions"}]}),actions:{async create(e,t){var r,u,a,i;const s={};s.difficulty=this.difficulty,s.course=e,s.lesson=t,s.duration_in_minutes=this.duration_in_minutes,s.name=this.name,s.randomize_answers=this.randomize_answers,s.randomize_questions=this.randomize_questions,s.parts=this.parts,s.required=this.required,s.redo=this.redo,s.pass_percent=this.pass_percent,s.start=d(this.start,this.dateFormat).utc().toISOString(),s.end=d(this.end,this.dateFormat).utc().toISOString();try{this.working=!0,console.log("create exam was called"),(await x.post("/exams",s,w())).status==200?(n.create("Created!"),console.log("will update lesson"),await C().update({id:parseInt(t)},{has_exam:!0},null,{id:e},!1),await x.post("/faculties/notification",{title:(u=(r=D().selectedCourse)==null?void 0:r.name)!=null?u:"STDY",message:"there is a new exam",topics:["course_"+e+"_en"],courseId:e},w()),await x.post("/faculties/notification",{title:(i=(a=D().selectedCourse)==null?void 0:a.name)!=null?i:"STDY",message:"\u064A\u0648\u062C\u062F \u0644\u062F\u064A\u0643 \u0627\u0645\u062A\u062D\u0627\u0646 \u062C\u062F\u064A\u062F",topics:["course_"+e+"_ar"],courseId:e},w())):n.create("Error creating new exam ")}catch(c){n.create("Error creating new exam "),console.log(c)}this.working=!1,this.$router.replace("/courses/"+e)},async delete(e){try{this.working=!0;const t=await x.delete("/exam/"+e.id,w());this.working=!1,t.status==200?n.create("Deleted"):n.create("Error deleting exam from server")}catch(t){n.create("Error deleting exam  from server"),this.working=!1,console.log(t)}},addRow(){if(this.tag.length==0||this.parts.filter(t=>t.tag==this.tag).length>0){n.create("Please enter new tag");return}if(this.questions<=0){n.create("please enter number of questions");return}const e=N().examQuestions.filter(t=>{const s=t.tag.split(",");for(const r of this.parts)if(s.indexOf(r.tag)>=0)return!1;return s.indexOf(this.tag)>=0}).length;if(this.questions>e){n.create("please enter a valid number of questions less than or equal to the available questions with this tag: "+e);return}this.parts.push({tag:this.tag,questions:parseInt(this.questions.toString())}),this.tag="",this.questions=0},removeRow(e){var t;this.parts=(t=this.parts.filter(s=>s.tag!=e.tag))!=null?t:[]},setExam(e){var t,s,r;this.exam=e,this.difficulty=e.difficulty,this.parts=e.parts,this.tag="",this.questions=0,this.required=e.required,this.duration_in_minutes=e.duration_in_minutes,this.name=e.name,this.randomize_answers=(t=e.randomize_answers)!=null?t:!0,this.randomize_questions=(s=e.randomize_questions)!=null?s:!0,this.start=d(e.start).format(this.dateFormat),this.end=d(e.end).format(this.dateFormat),this.pass_percent=e.pass_percent,this.redo=(r=e.redo)!=null?r:[],this.redoIdx=1,this.redoStart=d().format("DD/MM/YYYY hh:mm A Z"),this.redoEnd=d().format("DD/MM/YYYY hh:mm A Z");for(const u of this.redo)u.idx>=this.redoIdx&&(this.redoIdx=u.idx+1);this.redoPassPercent=100},async update(e,t,s){const r={};if(r.difficulty=this.difficulty,r.course=t,r.lesson=s,r.duration_in_minutes=this.duration_in_minutes,r.name=this.name,r.randomize_answers=this.randomize_answers,r.randomize_questions=this.randomize_questions,r.parts=this.parts,r.required=this.required,r.start=d(this.start,this.dateFormat).utc().toISOString(),r.end=d(this.end,this.dateFormat).utc().toISOString(),r.pass_percent=this.pass_percent,r.redo=this.redo,d(r.start).isAfter(d(r.end))){n.create("error in date input, end date must be after start date");return}if(this.pass_percent<0||this.pass_percent>100){n.create("pass percent is wrong");return}try{this.working=!0,console.log("update exam was called"),(await x.put("/exams/"+e.id,r,w())).status==200?n.create("updated exam!"):n.create("Error updating exam ")}catch(u){n.create("Error updating exam "),console.log(u)}this.working=!1,this.$router.replace("/courses/"+t)},clearFields(){this.exam=null,this.difficulty=1,this.parts=[],this.tag="",this.questions=0,this.required=!1,this.duration_in_minutes=120,this.name="exam name",this.randomize_answers=!0,this.randomize_questions=!0,this.start=d().format("DD/MM/YYYY hh:mm A Z"),this.end=d().format("DD/MM/YYYY hh:mm A Z"),this.pass_percent=100,this.redo=[],this.redoIdx=1,this.redoPassPercent=100,this.redoStart=d().format("DD/MM/YYYY hh:mm A Z"),this.redoEnd=d().format("DD/MM/YYYY hh:mm A Z")},addRedo(){if(d(this.redoStart,this.dateFormat).isBefore(d(this.end,this.dateFormat))){n.create("this redo is not starting after the end of the exam");return}if(!d(this.redoEnd,this.dateFormat).isAfter(d(this.redoStart,this.dateFormat))){n.create("the end datetime of the redo is incorrect");return}for(const e of this.redo){if(e.inserted==!1){n.create("a previous redo was not bulk inserted yet");return}if(e.idx==this.redoIdx){n.create("this redo is already in the list, please change the idx");return}if(d(e.end).isAfter(d(this.redoStart,this.dateFormat))){n.create("this redo is not starting after the end of a previous redo");return}}this.redo.push({idx:this.redoIdx,pass_percent:this.redoPassPercent,start:d(this.redoStart,this.dateFormat).utc().toDate(),end:d(this.redoEnd,this.dateFormat).utc().toDate(),inserted:!1}),this.redoIdx++,console.log(this.redo)},loadRedo(e){this.redoIdx=e.idx,this.redoStart=d(e.start).format(this.dateFormat),this.redoEnd=d(e.end).format(this.dateFormat),this.redoPassPercent=e.pass_percent},setRedo(){for(let e=0;e<this.redo.length;e++)this.redo[e].idx==this.redoIdx&&(this.redo[e].start=d(this.redoStart,this.dateFormat).toDate(),this.redo[e].end=d(this.redoEnd,this.dateFormat).toDate(),this.redo[e].pass_percent=this.redoPassPercent)},clearRedo(){this.redoIdx=this.redo.length+1,this.redoPassPercent=100,this.redoStart=d().format(this.dateFormat),this.redoEnd=d().format(this.dateFormat)}}}),j=F("examAnswersS",{state:()=>({upToPercent:100,progress_message:"",filter:"",selectedStudents:[],studentColumns:[{label:"id",name:"id",field(e){var t;return(t=e.student)==null?void 0:t.id}},{label:"username",name:"username",sortable:!0,field(e){var t,s;return(s=(t=e.student)==null?void 0:t.user)==null?void 0:s.username}},{label:"phone",name:"phone",sortable:!0,field(e){var t,s,r;return(r=(s=(t=e.student)==null?void 0:t.user)==null?void 0:s.profile)==null?void 0:r.phoneNumber}},{label:"previous exam answer redo",name:"previous exam answer redo",field(e){var t;return(t=e.examAnswer)==null?void 0:t.redo_idx}},{label:"previous exam answer percent",name:"previous exam answer percent",field(e){var t,s,r,u;return e.examAnswer==null||((t=e.examAnswer)==null?void 0:t.status)!="taken"&&((r=(s=e.examAnswer)==null?void 0:s.score)!=null?r:0)==0?"NA":(u=e.examAnswer)==null?void 0:u.percent},sortable:!0,sort:(e,t)=>{var s,r,u,a;return((r=(s=e.examAnswer)==null?void 0:s.percent)!=null?r:0)-((a=(u=t.examAnswer)==null?void 0:u.percent)!=null?a:0)}},,{label:"previous exam answer status",name:"previous exam answer status",field(e){var t;return(t=e.examAnswer)==null?void 0:t.status},sortable:!0}],redo:null,ready:!1,one:null,showReviewDialog:!1,review_columns:[{label:"ID",name:"ID",field:e=>e.id},{label:"Student",name:"Student",field:e=>{var t,s,r;return(r=(s=(t=e.student)==null?void 0:t.user)==null?void 0:s.profile)==null?void 0:r.name}},{label:"Score",name:"Score",field:e=>e.percent},{name:"actions",label:"actions",field:()=>null}],working:!1,student:null,course:null,examAnswers:[],scoredList:[],lessonsWithMissingExamAnswers:[]}),getters:{filteredStudents(){var e,t,s;return(s=(t=(e=D().selectedCourse)==null?void 0:e.course_students)==null?void 0:t.filter(r=>{var u;return r.examAnswer==null||((u=r.examAnswer)==null?void 0:u.percent)<=this.upToPercent}))!=null?s:[]}},actions:{async bulkInsert(e){var a;const t=E(),s=D();if(this.redo==null||this.redo.inserted==!0){n.create("error in bulk insert");return}const r=this.selectedStudents.map(i=>{var c,o,f,m,h,g,l;return{student:(o=(c=i.student)==null?void 0:c.id)!=null?o:-1,exam:(m=(f=t.exam)==null?void 0:f.id)!=null?m:-1,course:(h=parseInt(e.id))!=null?h:-1,questions:[],percent:0,score:0,redo_idx:(g=this.redo)==null?void 0:g.idx,status:"created",pass_percent:(l=this.redo)==null?void 0:l.pass_percent}});await t.update(t.exam,e.id,e.lessonId);const u=await x.post("/exam-answers",r,w());if(u.status==200||u.status==201){for(let o=0;o<t.redo.length;o++)t.redo[o].idx==((a=this.redo)==null?void 0:a.idx)&&(t.redo[o].inserted=!0);this.redo.inserted=!0,await t.update(t.exam,e.id,e.lessonId);const i=this.selectedStudents.filter(o=>{var f,m,h,g,l,S,k,Y,$;return((h=(m=(f=o.student)==null?void 0:f.user)==null?void 0:m.profile)==null?void 0:h.lang)!="ar"&&((S=(l=(g=o.student)==null?void 0:g.user)==null?void 0:l.profile)==null?void 0:S.fcmtoken)!=null&&(($=(Y=(k=o.student)==null?void 0:k.user)==null?void 0:Y.profile)==null?void 0:$.fcmtoken.length)>0}).map(o=>{var f,m,h;return(h=(m=(f=o.student)==null?void 0:f.user)==null?void 0:m.profile)==null?void 0:h.fcmtoken}),c=this.selectedStudents.filter(o=>{var f,m,h,g,l,S,k,Y,$;return((h=(m=(f=o.student)==null?void 0:f.user)==null?void 0:m.profile)==null?void 0:h.lang)=="ar"&&((S=(l=(g=o.student)==null?void 0:g.user)==null?void 0:l.profile)==null?void 0:S.fcmtoken)!=null&&(($=(Y=(k=o.student)==null?void 0:k.user)==null?void 0:Y.profile)==null?void 0:$.fcmtoken.length)>0}).map(o=>{var f,m,h;return(h=(m=(f=o.student)==null?void 0:f.user)==null?void 0:m.profile)==null?void 0:h.fcmtoken});s.selectedCourse!=null&&await s.sendNotificationToSomeStudents(s.selectedCourse,i,c,"there is a new exam redo","\u062A\u0645 \u0641\u062A\u062D \u0645\u0648\u0639\u062F \u062C\u062F\u064A\u062F \u0644\u0627\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646"),n.create("done"),this.$router.back()}else n.create("error in bulk insert"),console.log("error in bulk insert"),console.log(u.data)},async matchStudentWithExamAnswer(){var s;const e=E(),t=D();if(this.redo=null,e.redo.length==0){n.create("error in matching student with exam answer");return}for(let r=0;r<e.redo.length;r++)e.redo[r].inserted!=!0&&(this.redo=e.redo[r]);if(this.examAnswers.length==0){n.create("no exam answers loaded");return}if(t.selectedCourse!=null){if(t.selectedCourse.course_students=await v(t.selectedCourse),t.selectedCourse.course_students.length==0){n.create("no students loaded");return}for(let r=0;r<t.selectedCourse.course_students.length;r++){const u=t.selectedCourse.course_students[r];for(let a=0;a<this.examAnswers.length;a++){const i=this.examAnswers[a];this.redo!=null&&i.student!=null&&i.student.id==((s=u.student)==null?void 0:s.id)&&i.redo_idx==this.redo.idx-1&&(u.examAnswer=i)}}}},calcScore(){var t,s,r,u,a,i,c;if(this.one==null)throw Error("please select exam answer first");this.one.score=0;let e=0;for(const o of(s=(t=this.one)==null?void 0:t.questions)!=null?s:[]){if(o.score==null&&((r=o.correctAnswer)!=null?r:"")!=""&&(o.score=(u=o.fullScore)!=null?u:1),(o.score==null||o.score<0)&&(o.score=0),((a=o.score)!=null?a:0)>((i=o.fullScore)!=null?i:1))throw console.log(o),n.create("score cannot be > full score"),Error("score cannot be > full score");e+=(c=o.fullScore)!=null?c:1,o.score!=null?this.one.score+=o.score:o.answer==o.correctAnswer&&o.answer!=null&&o.answer.length>0&&this.one.score++}return this.one.percent=Math.ceil(this.one.score/e*100),!0},async update(){if(this.one==null)return;if(this.answerNeedReview(this.one)){n.create("error, you should score all remaining questions first");return}if(this.working){n.create("please wait, still working");return}this.working=!0,console.log("will calc total score"),this.progress_message="will calc total score";let e=!1;try{e=this.calcScore()}catch(t){console.log("error calculating total score"),n.create("error calculating total score"),console.log(t)}if(!e){this.working=!1;return}try{console.log("will update document"),this.progress_message="will update document",await P(this.one)&&(this.examAnswers.splice(this.examAnswers.indexOf(this.one),1),await this.sendWhatsappMessage(),await this.sendNotification(),console.log("will hide dialog"),this.progress_message="",this.showReviewDialog=!1)}catch(t){n.create("error updating exam answer"),console.log("error updating exam answer"),console.log(t);return}this.working=!1},async sendNotification(){var e,t,s,r,u,a,i,c,o,f,m,h,g,l,S,k;try{const Y=C(),$=D(),p="%0A",y=`${p}${p} ${(e=Y.lesson)==null?void 0:e.exam.name} ${(u=(r=(s=(t=$.selectedCourse)==null?void 0:t.instructor)==null?void 0:s.user)==null?void 0:r.profile)==null?void 0:u.name}${p}${p}${(i=(a=$.selectedCourse)==null?void 0:a.subject)==null?void 0:i.enName}${p}${p}\u0646\u062D\u0646 \u0641\u062E\u0648\u0631\u0648\u0646 \u0628\u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u062C\u0647\u0648\u062F\u0647 \u0648\u0627\u0644\u062A\u0632\u0627\u0645\u0647. \u0648\u0646\u062D\u0646 \u0646\u0634\u062C\u0639\u0647 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0629${p}${p}\u0641\u064A \u062D\u0627\u0644\u0629 \u0648\u062C\u0648\u062F \u0627\u064A \u0627\u0633\u0641\u0633\u0627\u0631\u0627\u062A \u0628\u0631\u062C\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u062F\u0631\u0633${p}${p}\u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627${p}https://linktr.ee/stdy${p}${p}\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A${p}01154780013${p}${p}STDY Studying Supercharged ...`;((m=(f=(o=(c=this.one)==null?void 0:c.student)==null?void 0:o.user)==null?void 0:f.profile)==null?void 0:m.fcmtoken)!=null&&(console.log("will send notification"),this.progress_message="will send notification",await x.post("/faculties/notification",{title:"STDY",message:"\u0644\u0642\u062F \u0638\u0647\u0631\u062A \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",tokens:[(S=(l=(g=(h=this.one)==null?void 0:h.student)==null?void 0:g.user)==null?void 0:l.profile)==null?void 0:S.fcmtoken],type:"exam",id:(k=C().lesson)==null?void 0:k.exam.id},w()))}catch(Y){n.create("error sending notification"),console.log("error sending notification"),console.log(Y)}this.sendParentNotification()},async sendParentNotification(){var e,t,s,r,u,a,i,c,o,f,m,h,g,l,S,k,Y,$;try{const p=C(),y=D(),_="%0A",Z=`${_}${_} ${(e=p.lesson)==null?void 0:e.exam.name} ${(u=(r=(s=(t=y.selectedCourse)==null?void 0:t.instructor)==null?void 0:s.user)==null?void 0:r.profile)==null?void 0:u.name}${_}${_}${(i=(a=y.selectedCourse)==null?void 0:a.subject)==null?void 0:i.enName}${_}${_}\u0646\u062D\u0646 \u0641\u062E\u0648\u0631\u0648\u0646 \u0628\u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u062C\u0647\u0648\u062F\u0647 \u0648\u0627\u0644\u062A\u0632\u0627\u0645\u0647. \u0648\u0646\u062D\u0646 \u0646\u0634\u062C\u0639\u0647 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0629${_}${_}\u0641\u064A \u062D\u0627\u0644\u0629 \u0648\u062C\u0648\u062F \u0627\u064A \u0627\u0633\u0641\u0633\u0627\u0631\u0627\u062A \u0628\u0631\u062C\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u062F\u0631\u0633${_}${_}\u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627${_}https://linktr.ee/stdy${_}${_}\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A${_}01154780013${_}${_}STDY Studying Supercharged ...`;if(((o=(c=this.one)==null?void 0:c.student)==null?void 0:o.parents)!=null&&((m=(f=this.one)==null?void 0:f.student)==null?void 0:m.parents.length)>0){const q=[];for(const b of(g=(h=this.one)==null?void 0:h.student)==null?void 0:g.parents)b.fcmtoken!=null&&b.fcmtoken.length>0&&q.push(b.fcmtoken);console.log("will send parent notification"),this.progress_message="will send parent notification",await x.post("/faculties/notification",{title:"STDY",message:`\u0644\u0642\u062F \u0638\u0647\u0631\u062A \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0627\u0645\u062A\u062D\u0627\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628\u0648\u0644\u062F\u0643 ${(Y=(k=(S=(l=this.one)==null?void 0:l.student)==null?void 0:S.user)==null?void 0:k.profile)==null?void 0:Y.name}.`,tokens:q,type:"exam",id:($=C().lesson)==null?void 0:$.exam.id},w())}}catch(p){n.create("error sending parent notification"),console.log("error sending parent notification"),console.log(p)}},async sendWhatsappMessage(){var e,t,s,r,u,a,i,c,o,f,m;try{const h=C(),g=D(),l="%0A",S=`${l}${l} ${(e=h.lesson)==null?void 0:e.exam.name} ${(u=(r=(s=(t=g.selectedCourse)==null?void 0:t.instructor)==null?void 0:s.user)==null?void 0:r.profile)==null?void 0:u.name}${l}${l}${(i=(a=g.selectedCourse)==null?void 0:a.subject)==null?void 0:i.enName}${l}${l}\u0646\u062D\u0646 \u0641\u062E\u0648\u0631\u0648\u0646 \u0628\u0627\u0644\u0637\u0627\u0644\u0628 \u0644\u062C\u0647\u0648\u062F\u0647 \u0648\u0627\u0644\u062A\u0632\u0627\u0645\u0647. \u0648\u0646\u062D\u0646 \u0646\u0634\u062C\u0639\u0647 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0629${l}${l}\u0641\u064A \u062D\u0627\u0644\u0629 \u0648\u062C\u0648\u062F \u0627\u064A \u0627\u0633\u0641\u0633\u0627\u0631\u0627\u062A \u0628\u0631\u062C\u0627\u0621 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0645\u062F\u0631\u0633${l}${l}\u0633\u0648\u0634\u064A\u0627\u0644 \u0645\u064A\u062F\u064A\u0627${l}https://linktr.ee/stdy${l}${l}\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A${l}01154780013${l}${l}STDY Studying Supercharged ...`;((m=(f=(o=(c=this.one)==null?void 0:c.student)==null?void 0:o.user)==null?void 0:f.profile)==null?void 0:m.parentPhoneNumber)!=null&&console.log("will send whatsapp message")}catch(h){n.create("error sending whatsapp message"),console.log("error sending whatsapp message"),console.log(h)}},async query(e,t){var s,r;if(console.log("getting exam answers"),((s=this.student)==null?void 0:s.id)==e.id&&((r=this.course)==null?void 0:r.id)==t.id){console.log("already loaded");return}this.working=!0,this.examAnswers=await T(e.id,t.id),this.lessonsWithMissingExamAnswers=t.lessons.filter(u=>{var a,i;if(u.has_exam!=!0)return!1;for(const c of this.examAnswers)if(((i=(a=c.exam)==null?void 0:a.lesson)==null?void 0:i.id)==u.id)return!1;return!0}),this.working=!1},needReview(e){return(e.correctAnswer==null||e.correctAnswer==null||e.correctAnswer=="")&&(e.score==null||e.score==null)&&(e.answer!=null||e.answerImage!=null)},answerNeedReview(e){for(const t of e.questions)if(this.needReview(t))return!0;return!1},async getByExam(e){if(!this.working){console.log("getting exam answers for exam: "+e.id),this.working=!0;try{const t=await z(e.id);this.examAnswers=[];for(const s of t)this.answerNeedReview(s)?this.examAnswers.push(s):this.scoredList.push(s)}catch{}this.ready=!0,this.working=!1}}}});export{E as a,D as c,j as e,C as l};
