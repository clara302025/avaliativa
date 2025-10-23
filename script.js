$(document).ready(function() {
       // Função para exibir o alerta
       function mostrarAlerta() {
        alert("Bem-vindo a Lista de Tarefas");
    }

    // Configura um temporizador de 5 segundos (5000 milissegundos)
    window.onload = function() {
        setTimeout(mostrarAlerta, 5000);
    };
    
   carregarTarefas();


    // Adicionar tarefa
    $('#addtarefa').on ('click', function () {
        var tarefatext= $ ('#tarefainput').val();
        if(tarefatext.length>0) {
         adicionarTarefa(tarefatext);
         salvarTarefas();
         $('#tarefainput').val('');
        }


    });

    // Função para adicionar uma tarefa
    function adicionarTarefa (text) {
        $('#tarefalist').append(
            '<li><span>&times;</span>' + text + '</li>')

    }

    // Função para Marcar/ Desmarcar Tarefa como concluída
    $(document).on ('click' , 'li', function (){
        $(this).toggleClass('completed');
        salvarTarefas();
        
    });

     // Remover Tarefa
     $(document).on ('click' , 'span', function (e){
        e.stopPropagation(); 
        $(this).parent().fadeOut(500, function() {
        $(this).remove(); 
        salvarTarefas();
        });
     });
        
     // Função para salvar tarefa
     function salvarTarefas () {
        var tarefas = $('#tarefalist').html();
        localStorage.setItem('tarefas', tarefas);
     }

    // Função para carregar tarefa salva
    function carregarTarefas() {
    // Recuperar os dados armazenados na chave 'tarefa' do localStorage
    var tarefas = localStorage.getItem('tarefas');
        
    // Verifica se existem dados armazenados
    if (tarefas) {
        // Se existirem dados, atualiza o conteúdo do elemeno
        // com id 'tarefaList' com esses dados
        $('#tarefalist').html(tarefas);

        }
    }
     })

