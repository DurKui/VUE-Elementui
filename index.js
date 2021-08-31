new Vue({
    el: '#app',
    data: function() {
        return {
            userInfo: {
                username :'',
                gender:'',
                phonenumber:'',
                birth:''
            },
            tableData: [{
                username :'陈允魁',
                gender:'男',
                phonenumber:'19858879332',
                birth:'2001-10-06'
            }],
            form: {
                username :'',
                gender:'',
                phonenumber:'',
                birth:''
            }
            ,
            centerDialogVisible: false,
            nowindex: ''
        }
    },
    methods:
        {
            addinfo: function()
            {
                this.tableData.push(this.userInfo);
                this.userInfo=
                    {
                        username :'',
                        gender:'',
                        phonenumber:'',
                        birth:''
                    };
                this.$message({message: '添加成功！！！',type: 'success'});
            },
            editinfo: function (item,idx)
            {
                this.form={
                    username:item.username,
                    gender: item.gender,
                    phonenumber: item.phonenumber,
                    birth: item.birth
                };
                this.nowindex=idx;
                this.centerDialogVisible=true;

            },
            changeinfo:function ()
            {
                Vue.set(this.tableData,this.nowindex,this.form);
                this.centerDialogVisible=false;
                this.$message({
                    showClose: true,
                    message: '恭喜你，修改成功',
                    type: 'success'
                });
            },
            deleteinfo:function (idx)
            {
                this.tableData.splice(idx,1);
                this.$message({
                    showClose: true,
                    message: '删除成功！！！',
                    type: 'success'
                });
            }
        }
})