/* =====================================================================
   DATOS DEL DASHBOARD

   Este es el ÚNICO archivo que necesitas editar. index.html solo lee
   lo que hay aquí y lo muestra.

   Reglas rápidas:
   - Las fechas van siempre como "AAAA-MM-DD" (ejemplo: "2026-09-14").
   - Los textos van entre comillas. Cada elemento de una lista termina en coma.
   - Si un campo no aplica, déjalo vacío: "".
   - La Definition of Done va dentro de cada sprint (definitionOfDone).
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
  sprintActual: "Sprint 7",

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
            { ayer: "Revisar formato de entrega S6", hoy: "Validar flujo en navegación: registro-login-home-avisos", impedimentos: " Funciona solo hasta home, menú lateral que incluye opción avisos no dirige a página avisos", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-20",
          filas: [
            { ayer: "Crear y validar el formulario de registro, actualizar modelo E-R, crear dashboard para ordenar información semana 6", hoy: " Continuar con entrega de semana 6", impedimentos: ".", presentador: "Ana Miño" },
            { ayer: "Revisar retroalimentación S5", hoy: "Mejorar historias de usuario con criterios de aceptación, estimación de esfuerzo, Re-distribuir historias Sprint sgte. ", impedimentos: "", presentador: "Ana Miño" }
          ]
        }
      ],

      /* ---------------- DEFINITION OF DONE (de este sprint) ----------------
         Marca cumplido: true cuando el criterio ya se cumple. */
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
              { texto: "El usuario puede abrir un aviso y leer su contenido completo.", estado: "No aprobado" },
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
          "Se re-ordenan las historias para continuar en el siguiente Sprint, la extensión de este Sprint cambió (de 15, a 4 historias)"
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
          "Planificación de las historias en Sprints realistas, dada la carga de trabajo, el tiempo disponible y tamaño del equipo."
        ],
        estados: {
          contento: ["Se reorganizó Jira, aclarando perspectiva de avances y mejoras necesarias."],
          triste: ["Fue necesario dejar el Sprint más corto, habrá retraso en el proyecto final."],
          enojado: ["Faltan criterios de aceptación en historias de Sprint 6"]
        }
      }
    },

    /* =====================================================================
       SPRINT 7
       ===================================================================== */
    {
      nombre: "Sprint 7",
      objetivo: "",
      inicio: "2026-09-21",
      fin: "2026-09-28",

      /* Si el burndown de este sprint es distinto al general, pégalo aquí.
         Si no, deja "" y se usa el enlace general de arriba. */
      jira: {
        burndown: ""
      },

      /* ---------------- DAILY MEETING ---------------- */
      daily: [
        {
          fecha: "2026-09-21",
          filas: [
            { ayer: "Documentos entrega semana 6", hoy: "Añadir evidencias a historias con criterios aprobados", impedimentos: "", presentador: "Ana M." },
            { ayer: "", hoy: "Planificar tiempos para pendientes Sprint 6: criterios de aceptación faltantes y  Revisar impedimento asociado al side-menu", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-23",
          filas: [
            { ayer: "Planificar tiempos", hoy: "Revisar caso impedimento side-menu hacia avisos", impedimentos: "Ninguno.", presentador: "Ana M." }
          ]
        },
        {
          fecha: "2026-09-24",
          filas: [
            { ayer: "Se resolvió impedimento side-menú -avisos", hoy: "Actualización de repo y dashboard", impedimentos: "Ninguno", presentador: "Ana M." }
          ]
        },
        {
          fecha: "2026-09-25",
          filas: [
            { ayer: "Actualización Github repositorio y dashboard", hoy: "Actualizar historias/Cerrar pendientes Sprint 6", impedimentos: "", presentador: "Ana M." }
          ]
        },
        {
          fecha: "2026-09-26",
          filas: [
            { ayer: "Actualizar historias/Cerrar pendientes Sprint 6", hoy: "cerrar historias sprint 6, comenzar sprint 7", impedimentos: "", presentador: "Ana M." }
          ]
        },
        {
          fecha: "2026-09-27",
          filas: [
            { ayer: "cerrar historias sprint 6, comenzar sprint 7", hoy: "Cerrar Sprint 7", impedimentos: "Faltó historia de 'Coherencia visual diseño y marca'", presentador: "Ana M." }
          ]
        },
        {
          fecha: "2026-09-28",
          filas: [
            { ayer: "", hoy: "", impedimentos: "", presentador: "Ana M." },
            { ayer: "", hoy: "", impedimentos: "", presentador: "Ana M." }
          ]
        }
      ],

      /* ---------------- DEFINITION OF DONE (de este sprint) ----------------
         Marca cumplido: true cuando el criterio ya se cumple. */
      definitionOfDone: [
        {
          criterio: "Funciona según la historia",
          items: [
            { texto: "Todos los criterios de aceptación de la historia fueron probados en la app y se cumplen.", cumplido: true },
            { texto: "Los permisos se validan también en la API.", cumplido: true }
          ]
        },
        {
          criterio: "Código listo",
          items: [
            { texto: "El frontend compila y el backend corre sin errores.", cumplido: true },
            { texto: "Las migraciones están creadas y aplicadas; requirements.txt está actualizado.", cumplido: true },
            { texto: "El código está subido a GitHub con un commit que describe la historia.", cumplido: true }
          ]
        },
        {
          criterio: "Evidencia y registro",
          items: [
            { texto: "Cada criterio tiene evidencia (captura, prueba de API o video de Playwright).", cumplido: false },
            { texto: "La historia está actualizada en Jira y en el dashboard (Sprint Review).", cumplido: true }
          ]
        }
      ],

      /* ---------------- IMPEDIMENT LOG ----------------
         estado: "Abierto" o "Cerrado". */
      impedimentos: [
        {
          id: 1,
          impedimento: "Funcionalidad side-menu, hacia página -Avisos",
          descripcion: "El menú lateral no lograba navegar hacia /avisos, aunque la ruta funcionaba directo. Faltaba declarar RouterLink en los imports de app.component.ts.",
          prioridad: "Alta",
          reportadoPor: "Ana M.",
          responsable: "Ana M.",
          accion: "Agregar RouterLink (y RouterLinkActive) al arreglo imports de app.component.ts.",
          estado: "Cerrado",
          fechaRegistro: "2026-09-20",
          fechaResolucion: "2026-09-24",
          impacto: "No se podía validar el flujo registro, login, home, avisos hasta resolverlo."
        },
        {
          id: 2,
          impedimento: "Faltó concretar historia- Coherencia visual-diseño y marca",
          descripcion: "La historia no tiene una descripción clara y falta definir criterios de aceptación concretos y verificables.",
          prioridad: "Media",
          reportadoPor: "Ana M.",
          responsable: "Ana M.",
          accion: "La historia será replanteada, se dividirá en dos: 1) guía de estilo 2) Aplicación de identidad visual. Se implementará en Sprint 8. Pendiente: agregar los cambios al backlog.",
          estado: "Abierto",
          fechaRegistro: "2026-09-28",
          fechaResolucion: "",
          impacto: "La historia no se comenzó, queda sin aprobar en el Sprint 7 "
        }
      ],

      /* ---------------- SPRINT REVIEW ---------------- */
      review: {
        fecha: "2026-09-28",
        historias: [
          {
            titulo: "Consultar aviso- Como colaborador, quiero consultar los avisos publicados en la plataforma",
            criterios: [
              { texto: "El usuario puede ver una lista de avisos ordenados por fecha. ", estado: "Aprobado" },
              { texto: "El usuario puede abrir un aviso y leer su contenido completo.", estado: "Aprobado" },
              { texto: "El usuario puede filtrar avisos, por fecha, o categoría. ", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Editar aviso -Como administrador, quiero editar un aviso publicado, para corregir o actualizar información. ",
            criterios: [
              { texto: "El aviso editado se actualiza en caso de ser editado.", estado: "Aprobado" },
              { texto: "El sistema registra la fecha de la última edición. ", estado: "Aprobado" },
              { texto: "Solo el administrador puede editar desde Django.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Clasificar avisos según comunidad respectiva- Como administrador quiero clasificar el aviso que publique, para que sea visto solamente por la comunidad a la que está dirigido",
            criterios: [
              { texto: "El aviso se clasifica con el nombre de [comunidad 1] u otra.", estado: "Aprobado" },
              { texto: "El aviso clasificado en esa comunidad  solo es visto por los usuarios adscritos a ella.", estado: "Aprobado" },
              { texto: "Cada aviso tiene en la tarjeta el nombre de la comunidad a la que pertenece. Si un usuario pertenece a más de una comunidad puede identificar de este modo desde dónde proviene la información. ", estado: "Aprobado" },
              { texto: "Un aviso sin comunidad asignada es visible para todos los usuarios, incluso sin iniciar sesión, e indica “Reúna” como origen.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Publicar aviso - Como líder comunitario, quiero publicar un aviso en la plataforma para informar sobre asuntos importantes. ",
            criterios: [
              { texto: "El aviso debe mostrar título, contenido, fecha de publicación.", estado: "Aprobado" },
              { texto: "El aviso debe ser visible para todos los colaboradores de la comunidad.", estado: "Aprobado" },
              { texto: "El aviso aparece en la lista de avisos de la comunidad.", estado: "Aprobado" },
              { texto: "Al publicar, el líder selecciona la categoría del aviso (Reunión, Evento, Comunicado, Encuesta, Urgente, General)", estado: "Aprobado" },
              { texto: "El aviso queda asociado automáticamente a la comunidad del líder; si el líder es de varias, elige entre ellas.", estado: "Aprobado" },
              { texto: "Un líder no puede publicar avisos de comunidades donde no es líder. ", estado: "Aprobado" },
              { texto: "Un colaborador no puede publicar", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Editar aviso desde la app (Líder) - Como líder de una comunidad, quiero editar los avisos de mi comunidad desde la app, para corregir o actualizar información sin depender del administrador. ",
            criterios: [
              { texto: "El líder ve la opción “Editar” en los avisos de las comunidades donde es líder.", estado: "Aprobado" },
              { texto: "El líder puede modificar título, contenido y categoría del aviso; la comunidad no se puede cambiar.", estado: "Aprobado" },
              { texto: "Cualquier líder de la comunidad puede editar sus avisos, y queda registrado quién hizo la última edición y cuándo.", estado: "Aprobado" },
              { texto: "El detalle del aviso muestra quién lo publicó y, si fue editado, quién y cuándo lo editó por última vez.", estado: "Aprobado" },
              { texto: "Un líder no puede editar avisos de comunidades donde no es líder, ni avisos de Reúna (avisos que no se clasifican en ninguna comunidad)", estado: "Aprobado" },
              { texto: "Un colaborador no ve la opción “Editar” y la API rechaza su intento (403)", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Navegación general de la plataforma - Como usuario, quiero moverme entre las secciones de Reúna desde un menú claro que se adapte a si inicié sesión, para encontrar la información sin perderme.",
            criterios: [
              { texto: "El menú lateral está disponible en todas las pantallas principales y marca la sección en la que está el usuario.", estado: "Aprobado" },
              { texto: "Las secciones ya construidas (Home y Avisos) son accesibles desde el menú; las demás muestran una página “Próximamente” hasta que se activen sus propias historias.", estado: "Aprobado" },
              { texto: "Sin sesión, el menú muestra “Iniciar sesión” y “Registrarse”; con sesión, muestra el nombre de usuario y “Cerrar sesión”", estado: "Aprobado" },
              { texto: "Al iniciar sesión, el usuario llega a Home y puede usar el menú.", estado: "Aprobado" },
              { texto: "Al cerrar sesión, el usuario vuelve a Home y ya no ve contenido de sus comunidades.", estado: "Aprobado" },
              { texto: "Si un usuario sin sesión intenta entrar a una página que la requiere (por ejemplo, Publicar aviso), se le lleva  a iniciar sesión.", estado: "Aprobado" },
              { texto: "El botón “Volver” de cada pantalla lleva a la pantalla anterior lógica (por ejemplo, del detalle de un aviso, a la lista de avisos).", estado: "Aprobado" },
              { texto: "La navegación funciona en pantalla de celular y de computador. ", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Coherencia visual-diseño y marca - Como  usuario, quiero visualizar una interfaz coherente con la marca, para tener una experiencia armónica, efectiva, bien comunicada.  ",
            criterios: [
              { texto: "-Faltaron criterios-", estado: "No aprobado" }
            ]
          }
        ],
        feedback: "Historia de coherencia visual poco específica. ",
        backlog: [
          "Sprint 7 se focalizó en avisos y navegación de la plataforma, se reorganizará historia de coherencia visual, diseño de marca"
        ]
      },

      /* ---------------- RETROSPECTIVE ---------------- */
      retro: {
        fecha: "2026-09-28",
        salioBien: ["Pendientes del Sprint 6 fueron resueltos, Sprint 7 resolvió historias de avisos y navegación"],
        mejorar: ["Descripción de historia y criterios de aceptación bien definidos, para no generar retrasos."],
        estados: { contento: [], triste: ["Faltó tiempo para resolver historia de diseño visual"], enojado: ["La buena definición de la historia pendiente habría servido para optimizar el tiempo. "] }
      }
    }
  ]
};
