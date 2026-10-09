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

  proyecto: "Proyecto - Reúna",
  curso: "Portafolio de Título (PTY4479)",

  /* Enlaces a Jira. Si dejas uno vacío ("") el botón no aparece.
     Cada sprint puede tener sus propios enlaces (ver más abajo). */
  jira: {
    tablero: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35?filter=&groupBy=none",
    burndown: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35/reports/burndown?source=overview",
    planning: "https://bimestre9.atlassian.net/jira/software/projects/BI9123/boards/35/backlog"
  },

  /* Sprint que se muestra al abrir la página. Si lo omites, se muestra el último.
     Cada sprint dura una semana, de martes a lunes. */
  sprintActual: "Sprint 9",

  /* -------------------------------------------------------------------
     SPRINTS
     Para agregar un sprint nuevo, copia todo un bloque { ... } y pégalo
     después del anterior (separados por coma).
     ------------------------------------------------------------------- */
  sprints: [
    {
      nombre: "Sprint 6",
      objetivo: "Permitir que los usuarios se registren, inicien sesión y vean avisos en la aplicación.",
      inicio: "2026-09-15",
      fin: "2026-09-21",

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
            { ayer: "No aplica.", hoy: "Revisar retroalimentación S5.", impedimentos: "Ninguno.", presentador: "Ana Miño" },
            { ayer: "No aplica.", hoy: "Revisar formato de entrega S6.", impedimentos: "Ninguno.", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-19",
          filas: [
            { ayer: "Revisar retroalimentación S5.", hoy: "Actualizar modelo E-R (añade tabla comunidades).", impedimentos: "Ninguno.", presentador: "Ana Miño" },
            { ayer: "Revisar formato de entrega S6.", hoy: "Crear y validar el formulario de registro; comenzar documentación nueva solicitada en semana 6.", impedimentos: "", presentador: "Ana Miño" },
            { ayer: "Revisar formato de entrega S6.", hoy: "Validar flujo en navegación: registro-login-home-avisos.", impedimentos: "Funciona solo hasta home; la opción Avisos del menú lateral no dirige a la página de avisos.", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-20",
          filas: [
            { ayer: "Crear y validar el formulario de registro, actualizar modelo E-R, crear dashboard para ordenar información semana 6.", hoy: "Continuar con entrega de semana 6.", impedimentos: "", presentador: "Ana Miño" },
            { ayer: "Revisar retroalimentación S5.", hoy: "Mejorar historias de usuario con criterios de aceptación y estimación de esfuerzo; redistribuir historias para el sprint siguiente.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-21",
          filas: [
            { ayer: "Documentos entrega semana 6.", hoy: "Añadir evidencias a historias con criterios aprobados.", impedimentos: "", presentador: "Ana Miño" },
            { ayer: "", hoy: "Planificar tiempos para pendientes del Sprint 6: criterios de aceptación faltantes y revisar impedimento asociado al side-menu.", impedimentos: "", presentador: "Ana Miño" }
          ]
        }
      ],

      /* ---------------- DEFINITION OF DONE (de este sprint) ----------------
         Adaptada para un equipo de una persona (misma base que los Sprints 7 y 8).
         Marca cumplido: true cuando el criterio ya se cumple. */
      definitionOfDone: [
        {
          criterio: "Funciona según la historia",
          items: [
            { texto: "Todos los criterios de aceptación de la historia fueron probados en la app y se cumplen.", cumplido: false },
            { texto: "Los permisos se validan también en la API.", cumplido: true }
          ]
        },
        {
          criterio: "Código listo",
          items: [
            { texto: "El frontend compila y el backend corre sin errores.", cumplido: false },
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
         estado: "Abierto" o "Cerrado". prioridad: "Alta", "Media" o "Baja".
         Si aún no se resuelve, deja fechaResolucion en "". */
      impedimentos: [
        {
          id: 1,
          impedimento: "Funcionalidad side-menu, hacia página Avisos",
          descripcion: "El menú lateral no logra navegar hacia /avisos, aunque la ruta funciona directo. Ya se revisó: app.component.html, side-menu.component.html, avisos.page.ts, avisos.page.html, avisos.service.ts y main.ts. Próximo paso: confirmar integración de ion-menu con ion-router-outlet y ajustar navegación desde el menú.",
          prioridad: "Alta",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Confirmar la integración de ion-menu con ion-router-outlet y ajustar la navegación desde el menú (lunes 21 de septiembre).",
          estado: "Abierto",
          fechaRegistro: "2026-09-20",
          fechaResolucion: "",
          impacto: "Retraso en avance de Sprint 6: no se puede validar el flujo registro, login, home, avisos hasta resolverlo."
        }
      ],

      /* ---------------- SPRINT REVIEW ----------------
         estado de cada criterio: "Aprobado" o "No aprobado".
         feedback y backlog pueden ser un texto o una lista de textos. */
      review: {
        fecha: "2026-09-20",
        historias: [
          {
            titulo: "Login (BI9123-14) - Como usuario (líder, colaborador o administrador), quiero iniciar sesión con mis credenciales, para acceder a la plataforma.",
            criterios: [
              { texto: "El sistema solicita usuario y contraseña en un formulario.", estado: "Aprobado" },
              { texto: "Los campos obligatorios no pueden quedar vacíos.", estado: "No aprobado" },
              { texto: "Si las credenciales son correctas, el usuario accede al home de la plataforma.", estado: "Aprobado" },
              { texto: "Si las credenciales son incorrectas, se muestra un mensaje de error.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Registro (BI9123-15) - Como nuevo usuario, quiero registrarme en la plataforma, para participar en ella.",
            criterios: [
              { texto: "El sistema solicita nombre, correo electrónico y contraseña en un formulario.", estado: "Aprobado" },
              { texto: "Si las credenciales son incorrectas, se muestra un mensaje de error claro.", estado: "Aprobado" },
              { texto: "Los campos obligatorios no pueden quedar vacíos.", estado: "No aprobado" }
            ]
          },
          {
            titulo: "Consultar avisos (BI9123-3) - Como colaborador, quiero consultar los avisos publicados en la plataforma.",
            criterios: [
              { texto: "El usuario puede ver una lista de avisos ordenados por fecha.", estado: "Aprobado" },
              { texto: "El usuario puede abrir un aviso y leer su contenido completo.", estado: "No aprobado" },
              { texto: "El usuario puede filtrar avisos por fecha o categoría.", estado: "No aprobado" }
            ]
          },
          {
            titulo: "Asignar permisos (BI9123-16) - Como administrador, quiero asignar permisos a los usuarios, para asegurar que cada uno acceda a las funciones que se estimen convenientes.",
            criterios: [
              { texto: "Solo los usuarios con is_staff = True o is_superuser = True pueden ingresar al panel admin.", estado: "Aprobado" },
              { texto: "Un usuario marcado como is_active = True puede autenticarse en la aplicación.", estado: "Aprobado" }
            ]
          }
        ],
        feedback: "El campo correo electrónico ya existe tanto en login como en registro; es necesario que sea obligatorio.",
        backlog: [
          "Se reordenan las historias para continuar en el siguiente sprint; el alcance de este sprint cambió (de 15 a 4 historias)."
        ]
      },

      /* ---------------- RETROSPECTIVE ----------------
         estados: cómo se sintió el equipo (contento, triste, enojado). */
      retro: {
        fecha: "2026-09-20",
        salioBien: [
          "Comienzo de Daily Meeting, Sprint Review, Impediment Log y Definition of Done.",
          "Todo lo anterior generó claridad en pasos específicos y planificación."
        ],
        mejorar: [
          "Planificación de las historias en sprints realistas, dada la carga de trabajo, el tiempo disponible y el tamaño del equipo."
        ],
        estados: {
          contento: ["Se reorganizó Jira, aclarando la perspectiva de avances y mejoras necesarias."],
          triste: ["Fue necesario dejar el sprint más corto; habrá retraso en el proyecto final."],
          enojado: ["Faltan criterios de aceptación en historias del Sprint 6."]
        }
      }
    },

    /* =====================================================================
       SPRINT 7
       ===================================================================== */
    {
      nombre: "Sprint 7",
      objetivo: "Que los líderes publiquen y editen avisos en su comunidad, y que cada miembro consulte solo los avisos que le corresponden, navegando con facilidad por la aplicación.",
      inicio: "2026-09-22",
      fin: "2026-09-28",

      /* Si el burndown de este sprint es distinto al general, pégalo aquí.
         Si no, deja "" y se usa el enlace general de arriba. */
      jira: {
        burndown: ""
      },

      /* ---------------- DAILY MEETING ---------------- */
      daily: [
        {
          fecha: "2026-09-23",
          filas: [
            { ayer: "Planificar tiempos.", hoy: "Revisar caso impedimento side-menu hacia avisos.", impedimentos: "Ninguno.", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-24",
          filas: [
            { ayer: "Se resolvió impedimento side-menu hacia avisos.", hoy: "Actualización de repositorio y dashboard.", impedimentos: "Ninguno.", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-25",
          filas: [
            { ayer: "Actualización de repositorio GitHub y dashboard.", hoy: "Actualizar historias / cerrar pendientes Sprint 6.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-26",
          filas: [
            { ayer: "Actualizar historias / cerrar pendientes Sprint 6.", hoy: "Cerrar historias Sprint 6, comenzar Sprint 7.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-09-27",
          filas: [
            { ayer: "Cerrar historias Sprint 6, comenzar Sprint 7.", hoy: "Cerrar Sprint 7.", impedimentos: "Faltó historia de \"Coherencia visual: diseño y marca\".", presentador: "Ana Miño" }
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
          impedimento: "Funcionalidad side-menu, hacia página Avisos",
          descripcion: "El menú lateral no lograba navegar hacia /avisos, aunque la ruta funcionaba directo. Faltaba declarar RouterLink en los imports de app.component.ts.",
          prioridad: "Alta",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Agregar RouterLink (y RouterLinkActive) al arreglo imports de app.component.ts.",
          estado: "Cerrado",
          fechaRegistro: "2026-09-20",
          fechaResolucion: "2026-09-24",
          impacto: "No se podía validar el flujo registro, login, home, avisos hasta resolverlo."
        },
        {
          id: 2,
          impedimento: "Faltó concretar historia: Coherencia visual, diseño y marca",
          descripcion: "La historia no tiene una descripción clara y falta definir criterios de aceptación concretos y verificables.",
          prioridad: "Media",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Se replanteó como una sola historia simple (BI9123-23), con criterios de aceptación y guía de estilo breve, y se agregó al backlog para el Sprint 9.",
          estado: "Cerrado",
          fechaRegistro: "2026-09-28",
          fechaResolucion: "2026-10-01",
          impacto: "La historia no se comenzó; queda sin aprobar en el Sprint 7 y pasa al Sprint 9."
        }
      ],

      /* ---------------- SPRINT REVIEW ---------------- */
      review: {
        fecha: "2026-09-28",
        historias: [
          {
            titulo: "Consultar avisos (BI9123-3) - Como colaborador, quiero consultar los avisos publicados en la plataforma.",
            criterios: [
              { texto: "El usuario puede ver una lista de avisos ordenados por fecha.", estado: "Aprobado" },
              { texto: "El usuario puede abrir un aviso y leer su contenido completo.", estado: "Aprobado" },
              { texto: "El usuario puede filtrar avisos por fecha o categoría.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Editar aviso (BI9123-4) - Como administrador, quiero editar un aviso publicado, para corregir o actualizar información.",
            criterios: [
              { texto: "El aviso se actualiza al ser editado.", estado: "Aprobado" },
              { texto: "El sistema registra la fecha de la última edición.", estado: "Aprobado" },
              { texto: "Solo el administrador puede editar desde Django.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Clasificar avisos según comunidad (BI9123-37) - Como administrador, quiero clasificar el aviso que publique, para que sea visto solamente por la comunidad a la que está dirigido.",
            criterios: [
              { texto: "El aviso se clasifica con el nombre de la comunidad.", estado: "Aprobado" },
              { texto: "El aviso clasificado en una comunidad solo es visto por los usuarios adscritos a ella.", estado: "Aprobado" },
              { texto: "Cada aviso muestra en la tarjeta el nombre de su comunidad; si un usuario pertenece a más de una, puede identificar de dónde proviene la información.", estado: "Aprobado" },
              { texto: "Un aviso sin comunidad asignada es visible para todos los usuarios, incluso sin iniciar sesión, e indica “Reúna” como origen.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Publicar aviso (BI9123-2) - Como líder comunitario, quiero publicar un aviso en la plataforma para informar sobre asuntos importantes.",
            criterios: [
              { texto: "El aviso muestra título, contenido y fecha de publicación.", estado: "Aprobado" },
              { texto: "El aviso es visible para todos los colaboradores de la comunidad.", estado: "Aprobado" },
              { texto: "El aviso aparece en la lista de avisos de la comunidad.", estado: "Aprobado" },
              { texto: "Al publicar, el líder selecciona la categoría del aviso (Reunión, Evento, Comunicado, Encuesta, Urgente, General).", estado: "Aprobado" },
              { texto: "El aviso queda asociado automáticamente a la comunidad del líder; si el líder es de varias, elige entre ellas.", estado: "Aprobado" },
              { texto: "Un líder no puede publicar avisos en comunidades donde no es líder.", estado: "Aprobado" },
              { texto: "Un colaborador no puede publicar.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Editar aviso desde la app, Líder (BI9123-38) - Como líder de una comunidad, quiero editar los avisos de mi comunidad desde la app, para corregir o actualizar información sin depender del administrador.",
            criterios: [
              { texto: "El líder ve la opción “Editar” en los avisos de las comunidades donde es líder.", estado: "Aprobado" },
              { texto: "El líder puede modificar título, contenido y categoría del aviso; la comunidad no se puede cambiar.", estado: "Aprobado" },
              { texto: "Cualquier líder de la comunidad puede editar sus avisos, y queda registrado quién hizo la última edición y cuándo.", estado: "Aprobado" },
              { texto: "El detalle del aviso muestra quién lo publicó y, si fue editado, quién y cuándo lo editó por última vez.", estado: "Aprobado" },
              { texto: "Un líder no puede editar avisos de comunidades donde no es líder, ni avisos de Reúna (sin comunidad).", estado: "Aprobado" },
              { texto: "Un colaborador no ve la opción “Editar” y la API rechaza su intento (403).", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Navegación general de la plataforma (BI9123-22) - Como usuario, quiero moverme entre las secciones de Reúna desde un menú claro que se adapte a si inicié sesión, para encontrar la información sin perderme.",
            criterios: [
              { texto: "El menú lateral está disponible en todas las pantallas principales y marca la sección en la que está el usuario.", estado: "Aprobado" },
              { texto: "Las secciones ya construidas (Home y Avisos) son accesibles desde el menú; las demás muestran una página “Próximamente” hasta que se activen sus historias.", estado: "Aprobado" },
              { texto: "Sin sesión, el menú muestra “Iniciar sesión” y “Registrarse”; con sesión, muestra el nombre de usuario y “Cerrar sesión”.", estado: "Aprobado" },
              { texto: "Al iniciar sesión, el usuario llega a Home y puede usar el menú.", estado: "Aprobado" },
              { texto: "Al cerrar sesión, el usuario vuelve a Home y ya no ve contenido de sus comunidades.", estado: "Aprobado" },
              { texto: "Si un usuario sin sesión intenta entrar a una página que la requiere (por ejemplo, Publicar aviso), se le lleva a iniciar sesión.", estado: "Aprobado" },
              { texto: "El botón “Volver” de cada pantalla lleva a la pantalla anterior lógica (por ejemplo, del detalle de un aviso a la lista de avisos).", estado: "Aprobado" },
              { texto: "La navegación funciona en pantalla de celular y de computador.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Coherencia visual: diseño y marca (BI9123-23) - Como usuario, quiero visualizar una interfaz coherente con la marca, para tener una experiencia armónica, efectiva y bien comunicada.",
            criterios: [
              { texto: "Faltaron criterios de aceptación.", estado: "No aprobado" }
            ]
          }
        ],
        feedback: "La historia de coherencia visual es poco específica.",
        backlog: [
          "El Sprint 7 se focalizó en avisos y navegación de la plataforma; se reorganizará la historia de coherencia visual, diseño y marca."
        ]
      },

      /* ---------------- RETROSPECTIVE ---------------- */
      retro: {
        fecha: "2026-09-28",
        salioBien: ["Los pendientes del Sprint 6 fueron resueltos; el Sprint 7 resolvió las historias de avisos y navegación."],
        mejorar: ["Descripción de historias y criterios de aceptación bien definidos, para no generar retrasos."],
        estados: {
          contento: [],
          triste: ["Faltó tiempo para resolver la historia de diseño visual."],
          enojado: ["La buena definición de la historia pendiente habría servido para optimizar el tiempo."]
        }
      }
    },

    /* =====================================================================
       SPRINT 8
       ===================================================================== */
    {
      nombre: "Sprint 8",
      objetivo: "Que los líderes compartan documentos y consulten la opinión de su comunidad mediante encuestas anónimas.",
      inicio: "2026-09-29",
      fin: "2026-10-05",

      /* Si el burndown de este sprint es distinto al general, pégalo aquí. */
      jira: {
        burndown: ""
      },

      /* ---------------- DAILY MEETING ----------------
         Un bloque por día (sin fechas repetidas). Cada fila es un integrante. */
      daily: [
        {
          fecha: "2026-10-01",
          filas: [
            { ayer: "", hoy: "Revisar sprint pendiente, replantear historias.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-10-02",
          filas: [
            { ayer: "Revisar sprint pendiente.", hoy: "Comenzar Sprint 8.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-10-03",
          filas: [
            { ayer: "Comenzar Sprint 8.", hoy: "Revisar criterios de aceptación de todas las historias, continuar Sprint 8, actualizar GitHub.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-10-04",
          filas: [
            { ayer: "Sprint 8: criterios de aceptación y realizar historias.", hoy: "Revisar documentación general: diagramas, informes; actualizar GitHub y dashboard Scrum.", impedimentos: "", presentador: "Ana Miño" }
          ]
        },
        {
          fecha: "2026-10-05",
          filas: [
            { ayer: "Documentación y revisión del sprint.", hoy: "Realizar presentación de avance de proyecto.", impedimentos: "", presentador: "Ana Miño" }
          ]
        }
      ],

      /* ---------------- DEFINITION OF DONE (de este sprint) ----------------
         Marca cumplido: true cuando el criterio ya se cumple.
         El último ítem de "Evidencia y registro" pasa a true ahora que el
         Sprint Review incluye las 4 historias. */
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
            { texto: "Las pruebas automáticas del backend pasan (python manage.py test).", cumplido: true },
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
         Para agregar uno, copia este bloque dentro de impedimentos: [ ... ]
         {
           id: 1,
           impedimento: "",
           descripcion: "",
           prioridad: "Media",
           reportadoPor: "Ana Miño",
           responsable: "Ana Miño",
           accion: "",
           estado: "Abierto",
           fechaRegistro: "2026-09-29",
           fechaResolucion: "",
           impacto: ""
         },
      */
      impedimentos: [
        {
          id: 3,
          impedimento: "Almacenamiento de documentos",
          descripcion: "Se evaluó subir los documentos a Google Drive, pero su cuota de almacenamiento es limitada y agrega una integración externa; además, el proyecto exige que todo pase por la API REST.",
          prioridad: "Media",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Guardar los archivos en el servidor (carpeta media/) y entregarlos por /api/documentos/<id>/descargar/, que valida que el usuario sea miembro de la comunidad.",
          estado: "Cerrado",
          fechaRegistro: "2026-10-01",
          fechaResolucion: "2026-10-01",
          impacto: "Se replanteó la historia Subir documento antes de programarla; sin retraso en el sprint."
        },
        {
          id: 4,
          impedimento: "Error de token JWT (\"Given token not valid\")",
          descripcion: "Con el token de acceso vencido, la API respondía 403 en lugar de 401, porque SessionAuthentication estaba primero; el interceptor de la app no renovaba el token y el usuario veía el error.",
          prioridad: "Alta",
          reportadoPor: "Ana Miño",
          responsable: "Ana Miño",
          accion: "Poner JWTAuthentication primero en DEFAULT_AUTHENTICATION_CLASSES, para que un token vencido devuelva 401 y el interceptor lo renueve.",
          estado: "Cerrado",
          fechaRegistro: "2026-10-02",
          fechaResolucion: "2026-10-02",
          impacto: "Las pantallas de documentos y encuestas fallaban tras un tiempo con la sesión abierta; se resolvió el mismo día."
        }
      ],

      /* ---------------- SPRINT REVIEW ---------------- */
      review: {
        fecha: "2026-10-05",
        historias: [
          {
            titulo: "Subir documento (BI9123-6) - Como líder de una comunidad, quiero subir un documento a mi comunidad para que sus miembros puedan consultarlo desde la aplicación.",
            criterios: [
              { texto: "El líder ve la opción “Subir documento” solo en las comunidades donde es líder.", estado: "Aprobado" },
              { texto: "Se aceptan archivos PDF, Word o imagen, de hasta 10 MB.", estado: "Aprobado" },
              { texto: "Al subir se muestra un mensaje de éxito; si el archivo no es válido, se explica por qué.", estado: "Aprobado" },
              { texto: "Queda registrado quién lo subió, a qué comunidad y cuándo.", estado: "Aprobado" },
              { texto: "Un colaborador, o un líder de otra comunidad, no puede subir.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Consultar documento (BI9123-7) - Como miembro de una comunidad, quiero ver y descargar los documentos de mis comunidades, para mantenerme informado.",
            criterios: [
              { texto: "Veo la lista de documentos de mis comunidades, con los más recientes primero.", estado: "Aprobado" },
              { texto: "Cada documento muestra nombre, comunidad, quién lo subió y fecha.", estado: "Aprobado" },
              { texto: "No veo documentos de comunidades a las que no pertenezco.", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Crear encuesta (BI9123-10) - Como líder de una comunidad, quiero crear encuestas en mi comunidad, para conocer la opinión de sus miembros sobre decisiones concretas.",
            criterios: [
              { texto: "El líder ve la opción “Crear encuesta” solo en las comunidades donde es líder; si es líder de varias, elige en cuál la crea.", estado: "Aprobado" },
              { texto: "La encuesta tiene título, de 1 a 5 preguntas de opción única con 2 a 5 alternativas cada una (sin repetir) y una fecha de cierre futura.", estado: "Aprobado" },
              { texto: "El líder puede editar la encuesta mientras nadie la haya respondido.", estado: "Aprobado" },
              { texto: "Un colaborador, o un líder de otra comunidad, no puede crear ni editar encuestas (403).", estado: "Aprobado" }
            ]
          },
          {
            titulo: "Responder encuesta (BI9123-11) - Como miembro de una comunidad, quiero responder las encuestas de mi comunidad, para expresar mi opinión en decisiones concretas.",
            criterios: [
              { texto: "Veo las encuestas de mis comunidades, separadas en abiertas y cerradas.", estado: "Aprobado" },
              { texto: "Respondo una sola vez, contestando todas las preguntas, antes de la fecha de cierre; luego la encuesta queda marcada como “Respondida”.", estado: "Aprobado" },
              { texto: "Las respuestas son anónimas: nadie puede ver quién respondió qué.", estado: "Aprobado" },
              { texto: "Un usuario de otra comunidad no puede responder.", estado: "Aprobado" }
            ]
          }
        ],
        feedback: "Posible mejora: vista de documentos PDF o imágenes, para que no sea necesario descargarlos.",
        backlog: [
          "Agregar la opción “Ver” para los PDF y las imágenes directamente en el navegador (nueva historia “Ver documento en navegador”, prioridad Could)."
        ]
      },

      /* ---------------- RETROSPECTIVE ---------------- */
      retro: {
        fecha: "2026-10-05",
        salioBien: [
          "Se completaron las 4 historias del sprint (documentos y encuestas) con todos sus criterios de aceptación aprobados.",
          "Se aplicó lo aprendido en los sprints anteriores: las historias se replantearon con criterios claros antes de programar."
        ],
        mejorar: [
          "Registrar cada historia en el Sprint Review del dashboard y en Jira apenas se termina, no al final del sprint.",
          "Mantener las mismas fechas del sprint en Jira, el dashboard y los documentos."
        ],
        estados: { contento: [], triste: [], enojado: [] }
      }
    },

    /* =====================================================================
       SPRINT 9  (completa a medida que avance la semana)
       ===================================================================== */
    {
      nombre: "Sprint 9",
      objetivo: "Dar a la comunidad acceso a los resultados de sus encuestas y a su historial de actividad, con una identidad visual coherente en toda la aplicación.",
      inicio: "2026-10-06",
      fin: "2026-10-12",

      jira: {
        burndown: ""
      },

      /* ---------------- DAILY MEETING ---------------- */
      daily: [
        {
          fecha: "2026-10-08",
          filas: [
            { ayer: "", hoy: "Corregir el informe de la Semana 8: unificar las fechas de los sprints (una semana cada uno, de martes a lunes) en Product Backlog, Sprint Planning, Daily, Sprint Review y burndown; actualizar fechas en Jira y en el dashboard.", impedimentos: "Ninguno.", presentador: "Ana Miño" }
          ]
        }
      ],

      /* ---------------- DEFINITION OF DONE (de este sprint) ----------------
         Misma base que el Sprint 8, todo en false para partir. */
      definitionOfDone: [
        {
          criterio: "Funciona según la historia",
          items: [
            { texto: "Todos los criterios de aceptación de la historia fueron probados en la app y se cumplen.", cumplido: false },
            { texto: "Los permisos se validan también en la API.", cumplido: false }
          ]
        },
        {
          criterio: "Código listo",
          items: [
            { texto: "El frontend compila y el backend corre sin errores.", cumplido: false },
            { texto: "Las migraciones están creadas y aplicadas; requirements.txt está actualizado.", cumplido: false },
            { texto: "Las pruebas automáticas del backend pasan (python manage.py test).", cumplido: false },
            { texto: "El código está subido a GitHub con un commit que describe la historia.", cumplido: false }
          ]
        },
        {
          criterio: "Evidencia y registro",
          items: [
            { texto: "Cada criterio tiene evidencia (captura, prueba de API o video de Playwright).", cumplido: false },
            { texto: "La historia está actualizada en Jira y en el dashboard (Sprint Review).", cumplido: false }
          ]
        }
      ],

      /* ---------------- IMPEDIMENT LOG ---------------- */
      impedimentos: [],

      /* ---------------- SPRINT REVIEW ---------------- */
      review: {
        fecha: "",
        historias: [],
        feedback: "",
        backlog: []
      },

      /* ---------------- RETROSPECTIVE ---------------- */
      retro: {
        fecha: "",
        salioBien: [],
        mejorar: [],
        estados: { contento: [], triste: [], enojado: [] }
      }
    }
  ]
};
