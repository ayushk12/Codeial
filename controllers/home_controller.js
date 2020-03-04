<head>
<title>
    <%= title  %>
</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js"></script>
<link rel="stylesheet" href="/css/layout.css">
<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/footer.css">

<%- style %>

</head>

<body>
<%- include('_header'); %>



<main id="layout-main">
    <%- body %>

</main>


<%- include('_footer'); %>

<%- script %>

<script>
    <% if (flash.success && flash.success.length > 0) {%>
        new Noty({
            theme: 'relax',
            text: "<%= flash.success %>",
            type: 'success',
            layout: 'topRight',
            timeout: 1500
            
        }).show();    
    <%} %>

    <% if (flash.error && flash.error.length > 0) {%>
        new Noty({
            theme: 'relax',
            text: "<%= flash.error %>",
            type: 'error',
            layout: 'topRight',
            timeout: 1500
            
        }).show();    
    <%} %>
</script>

</body>