# Explicit Architecture in ReactJs

[![Author][Author]](https://www.herbertograca.com)
[![Software License][License]](LICENSE)

This repository is a demo of [Explicit Architecture][1], using ReactJs and a [GraphQL API][18] on top of the
the [Symfony Demo Application][2].

Since this is a frontend project, the code is structured in a slightly different way than a backend project,
nevertheless, the guiding principles are the same.

For a example of the code structure in a backend project, you can check my repository [Explicit Architecture in PHP][18].

There may be code in this project that is not used and therefore it would be removed in a real project, nevertheless
it was included here as examples.

### Explicit Architecture

I explained [Explicit Architecture][1] in one of my blog posts, as a result of my understanding of several architectural
 ideas such as (but not limited to) [EBI Architecture][11], [DDD][12], [Ports & Adapters Architecture][13],
 [Onion Architecture][14] and [Clean Architecture][15].

Please, not that the term "component" in the following slides are not the same as a "react component". They refer to
a more generic concept of a domain wise module, which in the context of this project is a Page.

[![Explicit Architecture](https://docs.google.com/drawings/d/e/2PACX-1vQ5ps72uaZcEJzwnJbPhzUfEeBbN6CJ04j7hl2i3K2HHatNcsoyG2tgX2vnrN5xxDKLp5Jm5bzzmZdv/pub?w=960&amp;h=657)][2]

#### Package by component

[![Package by component](https://docs.google.com/drawings/d/e/2PACX-1vQjEj4dKKUaQEUcNDq2UO58oIUu6pehqrE99q4gSRk0DY9KPIuhgG9Yg3qJGgW4ybrL5Ql8_Xo5z3yq/pub?w=960&h=720)][17]

#### Dependencies directions

[![Dependencies](https://docs.google.com/drawings/d/e/2PACX-1vQyv5xAx5hFJPhiK19AGl_2t256M0yKcDSliH8etojltE3tBlEnCndwfsUr1UsXvv5PKGVtrBHkQX3h/pub?w=913&amp;h=129)][16]

#### Folder structure

- **bin** (_application binaries, however the dependencies binaries should go in vendor/bin_)
- **build** (_The compiled/built application_)
- **config** (_all the config needed to run the application_)
- **docs** (_application documentation_)
- **lib** (_libraries used by the application, which are independent from, but owned by, this project and not yet distributable_)
    - **reactjs-extension**  (_code to be used as if it was part of the language itself_)
        - _src_
- **public** (_the entry point to the application_)
- **src** (_there is no Core because it lives on the server side, behind an API_)
    - **[UI][10]** (_the application UI, heavily inspired in [Atomic Design by Brad Frost][19]_)
        - **[Pages][5]** (_the application pages with their components that are not reusable in other pages_)
        - **[SharedKernel][6]** (_components that are used in several pages_)
            - **Atoms** (_the smallest components_)
            - **Molecules** (_groups of Atoms and/or Molecules bonded together to form a simple, indistinct UI component_)
            - **Organisms** (_groups of Molecules joined together to form a relatively complex, distinct section of an interface_)
            - **Layouts** (_basic wireframe for a page, it only specifies the positioning that a list of elements will have_)
            - **Themes** (_definition of styling characteristics like spacings, colors, borders, etc_)
            - **Templates** (_a template for a type of Page, puts together a layout, a set of components, and a theme_)
    - **[Infrastructure][9]** (_the port & adapters for the infrastructure tools, designed as wrappers because of language limitations_)
- **translations**
- **var** (_volatile artifacts like logs, cache, temporary test databases, generated code, ..._)
- **node_modules** (_distributable libraries_)

[1]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
[2]: https://docs.google.com/drawings/d/1E_hx5B4czRVFVhGJbrbPDlb_JFxJC8fYB86OMzZuAhg/edit?usp=sharing
[5]: http://ddd.fed.wiki.org/view/welcome-visitors/view/domain-driven-design/view/bounded-context
[6]: http://ddd.fed.wiki.org/view/welcome-visitors/view/domain-driven-design/view/shared-kernel
[7]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/#primary-or-driving-adapters
[8]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/#ports
[9]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/#secondary-or-driving-adapters
[10]: https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/#application-core-organisation
[11]: https://herbertograca.com/2017/08/24/ebi-architecture/
[12]: https://herbertograca.com/2017/09/07/domain-driven-design/
[13]: https://herbertograca.com/2017/09/14/ports-adapters-architecture/
[14]: https://herbertograca.com/2017/09/21/onion-architecture/
[15]: https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/
[16]: https://docs.google.com/drawings/d/1DGiP9qyBpRHPDPKRJoXdElw1DXwmJoR-88Qvtf6hBNA/edit?usp=sharing
[17]: https://docs.google.com/drawings/d/1QurViCcaZ4Eh1CgBvel9aK5RLBkw2TaOAnO-Lhu4pfw/edit?usp=sharing

[18]: https://github.com/hgraca/explicit-architecture-php

[19]: https://atomicdesign.bradfrost.com/

[Author]: http://img.shields.io/badge/author-@hgraca-blue.svg?style=flat-square
[License]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
