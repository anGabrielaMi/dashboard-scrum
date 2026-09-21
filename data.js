/* =====================================================================
   DATOS DEL DASHBOARD

   Este es el ÚNICO archivo que necesitas editar. index.html solo lee
   lo que hay aquí y lo muestra.

   Reglas rápidas:
   - Las fechas van siempre como "AAAA-MM-DD" (ejemplo: "2026-09-14").
   - Los textos van entre comillas. Cada elemento de una lista termina en coma.
   - Si un campo no aplica, déjalo vacío: "".
   - Los datos de abajo son EJEMPLOS. Reemplázalos por los tuyos y
     cambia esEjemplo a false para ocultar el aviso.
   ===================================================================== */

window.DASHBOARD = {
  esEjemplo: false,

  proyecto: "Proyecto - Reúna ",
  curso: "Portafolio de Título (PTY4479)",

  /* Enlaces a Jira. Si dejas uno vacío ("") el botón no aparece.
     Cada sprint puede tener sus propios enlaces (ver más abajo). */
  jira: {
    tablero: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35?filter=&groupBy=none",
    burndown: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35/reports/burndown?source=overview",
    planning: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35/backlog"
  },

  /* Sprint que se muestra al abrir la página. Si lo omites, se muestra el último. */
  sprintActual: "Sprint 6",

  /* -------------------------------------------------------------------
     DEFINITION OF DONE
     Es la misma para todo el proyecto. Marca cumplido: true cuando el
     criterio ya se cumple. Puedes agregar o quitar grupos e ítems.
     ------------------------------------------------------------------- */
  definitionOfDone: [
    {
      criterio: "Código revisado y limpio",
      items: [
        { texto: "El código ha sido revisado por al menos un miembro del equipo.", cumplido: true },
        { texto: "No hay errores críticos ni advertencias en la compilación.", cumplido: false },
        { texto: "El código sigue las convenciones de nomenclatura y estilo del equipo.", cumplido: true }
      ]
    },
    {
      criterio: "Pruebas completadas",
      items: [
        { texto: "Se han ejecutado pruebas unitarias para verificar la funcionalidad.", cumplido: false },
        { texto: "Se han realizado pruebas de integración para asegurar la compatibilidad con otros módulos.", cumplido: false }
      ]
    },
    {
      criterio: "Aprobación de funcionalidades",
      items: [
        { texto: "El Product Owner ha revisado y aprobado la funcionalidad en una demostración.", cumplido: false },
        { texto: "Todo el equipo considera que para cada objetivo o requisito se cumplen sus criterios de aceptación.", cumplido: false }
      ]
    },
    {
      criterio: "Revisión de código",
      items: [
        { texto: "Otro miembro del equipo ha revisado el código para identificar posibles mejoras o problemas.", cumplido: false }
      ]
    },
    {
      criterio: "Demostración",
      items: [
        { texto: "La funcionalidad ha sido demostrada al equipo y al Product Owner.", cumplido: false },
        { texto: "Se ha validado que cumple con los requisitos y expectativas definidas en el Product Backlog.", cumplido: false }
      ]
    },
    {
      criterio: "Código integrado",
      items: [
        { texto: "El trabajo de todos los miembros del equipo de desarrollo está totalmente integrado en cada iteración.", cumplido: false }
      ]
    }
  ],

  /* -------------------------------------------------------------------
     SPRINTS
     Para agregar un sprint nuevo, copia todo un bloque { ... } y pégalo
     después del anterior (separados por coma).
     ------------------------------------------------------------------- */
  sprints: [
    {
      nombre: "Sprint 6",
      objetivo: "Permitir que los usuarios se registren, inicien sesión y vean avisos en la aplicación.",
      inicio: "2026-09-14",
      fin: "2026-09-20",

      /* Opcional: enlaces propios de este sprint (por ejemplo, su burndown). */
      jira: {
        burndown: ""
      },

      /* ---------------- DAILY MEETING ----------------
         Una entrada por día. Cada fila es un integrante. */
      daily: [
        {
          fecha: "2026-09-18",
          filas: [
            { ayer: "No aplica.", hoy: "Revisar retroalimentación S5 .", impedimentos: "Ninguno.", presentador: "Ana Miño" },
            { ayer: "No aplica.", hoy: "Revisar formato de entrega S6", impedimentos: "Ninguno.", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-19",
          filas: [
            { ayer: "Revisar retroalimentación S5", hoy: "Actualizar modelo E-R (añade tabla comunidades) .", impedimentos: "Ninguno.", presentador: "Ana Miño" },
            { ayer: "Revisar formato de entrega S6", hoy: "Crear y validar el formulario de registro; comenzar documentación nueva solicitada en semana 6.", impedimentos: ".", presentador: "Ana Miño" },
            { ayer: "Revisar formato de entrega S6",hoy: "Validar flujo en navegación: registro-login-home-avisos", impedimentos: " Funciona solo hasta home, menú lateral que incluye opción avisos no dirige a página avisos", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-20",
          filas: [
            { ayer: "Crear y validar el formulario de registro, actualizar modelo E-R, crear dashboard para ordenar información semana 6", hoy: " Continuar con entrega de semana 6", impedimentos: ".", presentador: "Ana Miño" },
            { ayer: "Revisar retroalimentación S5", hoy: "Mejorar historias de usuario con criterios de aceptación, estimación de esfuerzo, Re-distribuir historias Sprint sgte. ", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-21",
          filas: [
            { ayer: "Documentos entrega semana 6", hoy: "Añadir evidencias a historias con criterios aprobados", impedimentos: "", presentador: "Ana Miño" },
            { ayer: "", hoy: "Planificar tiempos para pendientes Sprint 6: criterios de aceptación faltantes y  Revisar impedimento asociado al side-menu", impedimentos: "", presentador: "Ana Miño" }
          ]
        }
      ],

      /* ---------------- IMPEDIMENT LOG ----------------
         estado: "Abierto" o "Cerrado". prioridad: "Alta", "Media" o "Baja".
         Si aún no se resuelve, deja fechaResolucion en "". */
      impedimentos: [
        {
          id: 1,
          impedimento: "Funcionalidad side-menu, hacia página -Avisos",
          descripcion: "El menú lateral no logra navegar hacia /avisos, aunque la ruta funciona directo. Ya se revisó:  app.component.html, side-menu.component.html, avisos.page.ts, avisos.page.html, avisos.service.ts y main.ts. Próximo paso: confirmar integración de ion-menu con ion-router-outlet y ajustar navegación desde el menú.",
          prioridad: "Alta",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Confirmar la integración de ion-menu con ion-router-outlet y ajustar la navegación desde el menú (lunes 21 de septiembre).",
          estado: "Abierto",
          fechaRegistro: "2026-09-20",
          fechaResolucion: "",
          impacto: "Retraso en avance de Sprint 6: no se puede validar flujo registro, login, home, avisos hasta resolverlo"
        }
        
      ],

      /* ---------------- SPRINT REVIEW ----------------
         estado de cada criterio: "Aprobado" o "No aprobado".
         feedback y backlog pueden ser un texto o una lista de textos. */
      review: {
        fecha: "2026-09-20",
        historias: [
          {
            titulo: "Login - Como usuario (líder, colaborador, administrador) quiero iniciar sesión con mis credenciales. Para acceder a la plataforma. ",
            criterios: [
              { texto: "El sistema solicita usuario y contraseña en un formulario.", estado: "Aprobado" },
              { texto: "Los campos obligatorios no pueden quedar vacíos.", estado: "No aprobado" },
              { texto: "Si las credenciales son correctas, el usuario accede al home de la plataforma.", estado: "Aprobado" },
              { texto: "Si las credenciales son incorrectas, se muestra un mensaje de error.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Registro - Como nuevo usuario, quiero registrarme en la plataforma, para participar en ella. ",
            criterios: [
              { texto: "El sistema solicita nombre, correo electrónico y contraseña en un formulario.", estado: "Aprobado" },
              { texto: "Si las credenciales son incorrectas, se muestra un mensaje de error claro.", estado: "Aprobado" },
              { texto: "Los campos obligatorios no pueden quedar vacíos.", estado: "No aprobado" }
            ]
          },
           {
            titulo: "Consultar Avisos- Como colaborador, quiero consultar los avisos publicados en la plataforma ",
            criterios: [
              { texto: "El usuario puede ver una lista de avisos ordenados por fecha.", estado: "Aprobado" },
              { texto: "El usuario puede abrir un aviso y leer su contenido completo.", estado: "NO aprobado" },
              { texto: "El usuario puede filtrar avisos, por fecha, o categoría.", estado: "No aprobado" }
            ]
          },
           {
            titulo: "Asignar permisos- Como administrador, quiero asignar  permisos a los usuarios, para asegurar que cada uno de ellos acceda a las funciones que se estimen convenientes.",
            criterios: [
              { texto: "Solo los usuarios con is_staff = True o is_superuser = True pueden ingresar al panel admin", estado: "Aprobado" },
              { texto: "Un usuario marcado como is_active = True puede autenticarse en la aplicación", estado: "Aprobado" }
              
            ]
          }

        ],
        feedback: "Campo correo electrónico ya existe tanto en login como en registro, es necesario que sea obligatorio.",
        backlog: [
          "Se re-ordenan las historias para continuar en el siguiente Sprint, la extensión de este Sprint cambió (de 15, a 4 historias)",
          
        ]
      },

      /* ---------------- RETROSPECTIVE ----------------
         estados: cómo se sintió el equipo (contento, triste, enojado). */
      retro: {
        fecha: "2026-09-20",
        salioBien: [
          "Comienzo de Daily (meeting), Sprint review, impediment log,Definition of Done.",
          "Todo lo anterior generó claridad en pasos específicos y planificación."
        ],
        mejorar: [
          "Planificación de las historias en Sprints realistas, dada la carga de trabajo, el tiempo disponible y tamaño del equipo.",
          
        ],
        estados: {
          contento: ["Se reorganizó Jira, aclarando perspectiva de avances y mejoras necesarias."],
          triste: ["Fue necesario dejar el Sprint más corto, habrá retraso en el proyecto final."],
          enojado: ["Faltan criterios de aceptación en historias de Sprint 6"]
        }
      }
    }
  ]
};
