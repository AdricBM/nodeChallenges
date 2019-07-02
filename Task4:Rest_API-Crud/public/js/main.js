$(document).ready(()=>{
    $('.delete-prospect').on('click',(e)=>{
        $target =$(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/prospect/'+id,
            success: (response)=>{
                alert('Deleting Prospect');
                window.location.href='/';
            },
            err: (err)=>{
                console.log(err);
            }
        });
    });
});