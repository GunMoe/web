var formData ;
console.log(FormData);

//点击本地上传文件
 $('#btn').click(() => {
 	$('#fileInput').click();
 })
 $('#fileInput').change((event) => {
 	var files = event.target.files;
 	appendFile(files, '.list-btn');
 })

 //拖拽上传文件 在页面进行预览 上传form用到ajax
 const dragbox = document.querySelector('.dragFile');
  dragbox.addEventListener('dragover', function (e) {
      e.preventDefault(); // 必须阻止默认事件
  }, false);
  dragbox.addEventListener('drop', function (e) {
      e.preventDefault(); // 阻止默认事件
        var files = e.dataTransfer.files; //获取文件
        appendFile(files, '.list-drag')
      // code
  }, false);

 function appendFile(files, listName) { 
 	for (file of files) {
		formData = new FormData(file);
		var FileSize = 0;
		if (file.size > 1048576) {
			FileSize = Math.round(file.size * 100 / 1048576) / 100 + " MB";
		} else if (file.size > 1024) {
			FileSize = Math.round(file.size * 100 / 1024) / 100 + " KB";
		} else {
			FileSize = file.size + " Bytes";
		}
 		let url = window.URL.createObjectURL(file);
 		let liStr =	`
            <li class="list-group-item">
              <div>
                <img src="${url}" alt="文件" />
              </div>
            </li>
			<li class="message_li">
				<div class="file_progress">
					<div id="Progress" class="file_progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
					 style="width: 22%;">
						<span></span>
					</div>
				</div>
				<div class="info">name:${file.name}</div>
				<div class="info">size:${FileSize}</div>
			</li>
          `;
 		$(listName).append(liStr);
 	}
 }

$("#test").click(function (){
	console.log(formData);
});