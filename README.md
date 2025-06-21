x# Guía de estilo de Expo Router 

**Tabla de contenido:**

- [¿Qué es esto?](#qué-es-esto)
- [Inspiración](#inspiración)
- [¿Cómo usarlo?](#cómo-usarlo)
- [¿Por qué no?](#por-qué-no)

## ¿Qué es esto?

Hola 👋

Esta es una guía básica para configurar Expo Router con los requerimientos más comunes de una aplicación móvil.

**Algunos puntos que usted debería tener en cuenta:**

1. Esta guía de estilos está enfocada en [`Expo Router`](https://docs.expo.dev/router/introduction/).
2. Este es el resultado de años de experiencia desarrollando aplicaciones móviles.
3. Lo mencionado en esta guía es pragmático. Los conceptos mencionado aquí han sido aplicados en proyectos que se encuentran en producción.
4. Es una opinión. No es la única forma.
5. Hay otras formas de construir tu sistema de archivos en Expo Router.
6. En el repositorio podrás encontrar los conceptos mencionados a más adelante y tener un panorama completo.

## ¿Cómo usarlo?

Cuando se trata de la guía de estilos de Expo Router, **no existe una única forma, pero puede tomar varios conceptos mencionados aquí:**

1. Cada proyecto tiene su alcance y afronta diferentes escenarios.
2. Elige lo que tenga sentido para tí, según tu contexto específico.

**Personalmente recomiendo el punto número 2:**

- Leer la guía de estilo.
- Decidir lo que mejor funcione para tí y tu equipo.
- Adaptar los conceptos a tu caso específico.

## Descripción general

El núcleo de la guía de estilo se puede resumir en los siguientes puntos:

**En Expo Router, al configurar el sistema de archivos, los archivos no deben conocer la lógica de negocio de nuestras vistas:**

- En caso de una actualización de Expo Router, el desacoplar nuestra lógica de negocio de Expo Router nos ayuda a mantener una mayor flexibilidad ante el cambio.
- El sistema de archivos sirve como referencia de cómo esta construido nuestro sistema de navegación, no tiene
implementaciones concretas de nuestras vistas.

**En Expo Router, al crear layouts anidados, debemos evitar modificar estilos en layouts hijos:**

- Expo Router está construido para poder gestionar estilos heredados de nuestros layouts.
- Si la navegación se vuelve compleja debemos evitar construir todo a partir de las vistas padres y organizar las vistas según su diseño específico.
La idea general es separar la implementación de Expo Router para poder preparar nuestras aplicaciones ante el cambio.

**En Expo Router, el routing dinámico debe ser lo más simple posible:**
- Expo Router nos ofrece varias formas de poder enviar parámetros a un ruta, pero al mismo tiempo podemos complicar el sistema de routing dinámico, debemos mantener lo más simple posible la navegación y enfocarnos en que representa cada archivo de nuestro dominio.

**Las estrategias de [`Autenticación`](https://docs.expo.dev/router/advanced/authentication/) en Expo Router deben tener un solo punto de entrada:**
- Actualmente Expo Router nos ofrece dos formas de poder configurar nuestra estrategia de autenticación, usando [`Rutas Protegidas`](https://docs.expo.dev/router/advanced/authentication/) y [`Redireccionamiento`](https://docs.expo.dev/router/advanced/authentication-rewrites/) con el sistema de archivos. En gran medida debemos tener un solo punto de entrada para evitar duplicar lógica de autenticación.
- Las estrategias de autenticación debe estar accesible desde el punto más alto del árbol de carpetas.
- El tener un solo punto de autorización de rutas, evitamos destellos al montarse vistas mientras comprobamos la autorización.

## ¿Por qué no?
> 🤔 ¿Por qué no poner lógica de negocio en el sistema de archivos de Expo Router?
De hecho cuando las vistas en el sistema de archivos conocen sobre la lógica de negocio de nuestra aplicación nos acopla a la filosofía de Expo Router, cuando hayan cambios en la dependencia de navegación no será trivial migrar las vistas.

Cuando el sistema de archivos de Expo Router conoce la lógica de negocio, es una mala idea por los siguiente puntos.

1. La lógica de negocio no debe estar acoplada a dependencias en constante cambio.
2. La lógica de negocio de nuestra aplicación debe poder ser testeable fácilmente.
3. Cuando revisamos errores debemos tener claro como se organiza nuestro sistema de archivos de navegación.

> 🤔 ¿Por qué no debemos complicar la navegación dinámica en Expo Router?
1. Expo Router permite definir rutas dinámicas directamente desde el sistema de archivos.
2. La navegación dinámica debe ser lo suficientemente flexible como para cubrir los casos reales, pero no tan compleja que sea difícil de razonar, probar o mantener.
3. Parámetros opcionales mal manejados como ([[slug]], [...rest]) pueden llevar a pantallas en blanco, errores 404 o mal renderizado.

> 🤔 ¿Por qué no forzar estilos del layout padre en layouts hijos?

1. Los layouts en Expo Router están pensados para organizar navegación y composición, no para imponer estilos visuales estrictos a sus hijos. Si un layout hijo tiene padding, backgroundColor, height, etc. fijos:
2. Los layouts deben ser contenedores neutrales. Si el layout hijo fuerza estilos como flex: 1, backgroundColor, padding, estos podrían contradecir o duplicar los estilos definidos por el layout padre.
3. Estilos deben venir del layout padre. El layout hijo se comporta como un slot neutro o aplica solo los estilos mínimos necesarios (como flex: 1 si es estrictamente requerido para expandirse).

> 🤔 ¿Por qué las estrategias de autenticación de Expo Router no deben tener más de un punto de  entrada en el sistema de archivos?

Las estrategias de autenticación se pueden ejecutar de forma asíncrona. Al tener varios puntos de entrada de autorización de rutas nos limita en los siguientes aspectos.
1. Descentralización de la autorización de rutas. Más dificil de testear.
2. En el sistema de archivos de Expo Router, cada archivo debe tener una responsabilidad única.
3. Se vuelve mucho más complejo al agregar tipos de roles y extender la autorización de roles en nuestra aplicación.

Es grandioso tener un único punto de entra de autorización de rutas en nuestra sistema de archivos.

Desde mi experiencia, una vez que duplicas una funcionalidad, **esta empieza a estar en todas partes.**

Esta guía de estilo tiene como objetivo:

1. Brindarte conceptos que puedes aplicar con tu equipo.
1. Ayudarte a tomar decisiones para la arquitectura de tu aplicación.

El comportamiento de tu aplicación (o como lo llamamos, "lógica de negocio") no debe estar relacionado con la forma en que Expo Router funciona. Esta es una línea muy clara donde queremos separar nuestros intereses.

Por supuesto, hay casos en los que el proyecto no require una estructura a largo plazo; sin embargo, una buena base para considerar esta separación es lógica de negocio y Expo Router como dependencia de nuestra aplicación.
