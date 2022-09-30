// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 3181:
case 1981:
case 3331:
case 3001:
case 1536:
case 2028:
case 791:
case 3100:
case 2361:
case 2622:
case 3861:
case 308:
case 2904:
case 1722:
case 385:
case 2933:
case 2054:
case 1218:
case 604:
case 3511:
case 3796:
case 964:
case 2241:
case 1244:
case 1780:
case 825:
case 533:
case 1768:
case 2179:
case 2712:
case 3024:
case 897:
case 90:
case 197:
case 2158:
case 2974:
case 848:
case 2378:
case 802:
case 1579:
case 3453:
case 272:
case 1584:
case 244:
case 18:
case 3455:
case 1708:
case 3433:
case 3810:
case 3338:
case 1879:
case 569:
case 1720:
case 473:
case 1808:
case 3351:
case 899:
case 1185:
case 1926:
case 2585:
case 797:
case 520:
case 457:
case 837:
case 3402:
case 1025:
case 243:
case 509:
case 3995:
case 253:
case 3580:
case 1304:
case 4069:
case 1728:
case 3970:
case 556:
case 2037:
case 2347:
case 2010:
case 1973:
case 2603:
case 447:
case 3270:
case 1732:
case 1586:
case 178:
case 944:
case 3517:
case 1288:
case 3272:
case 971:
case 3642:
case 2303:
case 578:
case 1054:
case 1547:
case 2579:
case 1441:
case 2234:
case 2299:
case 1212:
case 1964:
case 1974:
case 2294:
case 2852:
case 600:
case 2197:
case 915:
case 761:
case 1280:
case 238:
case 953:
case 1651:
case 3032:
case 257:
case 481:
case 1375:
case 3968:
case 2940:
case 2159:
case 1838:
case 535:
case 29:
case 1379:
case 1393:
case 2035:
case 2957:
case 3557:
case 2629:
case 406:
case 315:
case 1602:
case 2020:
case 1721:
case 1432:
case 2075:
case 3633:
case 2805:
case 3691:
case 736:
case 962:
case 2006:
case 1763:
case 36:
case 2590:
case 480:
case 3234:
case 799:
case 3214:
case 3153:
case 3537:
case 548:
case 1013:
case 703:
case 1712:
case 278:
case 3553:
case 1148:
case 4036:
case 2922:
case 3423:
case 3657:
case 50:
case 2225:
case 3945:
case 1807:
case 3173:
case 3955:
case 2625:
case 2017:
case 3119:
case 2520:
case 1538:
case 532:
case 3488:
case 643:
case 1690:
case 3266:
case 2979:
case 3881:
case 2003:
case 871:
case 1611:
case 2446:
case 484:
case 3108:
case 2324:
case 2737:
case 3522:
case 2662:
case 3997:
case 1342:
case 3384:
case 4034:
case 3524:
case 3388:
case 2722:
case 3896:
case 2091:
case 423:
case 2689:
case 2419:
case 684:
case 4039:
case 3067:
case 3641:
case 3556:
case 1389:
case 3800:
case 1949:
case 1158:
case 1801:
case 3898:
case 3425:
case 3028:
case 468:
case 1351:
case 1110:
case 3060:
case 1001:
case 2482:
case 2015:
case 1133:
case 2576:
case 4066:
case 2841:
case 511:
case 3704:
case 507:
case 704:
case 3971:
case 1411:
case 361:
case 2750:
case 1893:
case 2356:
case 2102:
case 1910:
case 2055:
case 459:
case 68:
case 1559:
case 1531:
case 3298:
case 1326:
case 1285:
case 1849:
case 2442:
case 159:
case 284:
case 1886:
case 2996:
case 3786:
case 1716:
case 2980:
case 1644:
case 3364:
case 108:
case 2277:
case 209:
case 442:
case 3927:
case 2659:
case 488:
case 613:
case 729:
case 2765:
case 904:
case 1180:
case 215:
case 3385:
case 1818:
case 627:
case 3021:
case 725:
case 868:
case 3444:
case 1489:
case 3569:
case 3140:
case 1388:
case 2135:
case 63:
case 419:
case 3600:
case 4000:
case 2360:
case 95:
case 1224:
case 2892:
case 2400:
case 3383:
case 2488:
case 3252:
case 1435:
case 3922:
case 2182:
case 3473:
case 2626:
case 3188:
case 1765:
case 2730:
case 126:
case 2086:
case 1860:
case 623:
case 2325:
case 3269:
case 2220:
case 3248:
case 2824:
case 3771:
case 2624:
case 3788:
case 1892:
case 1939:
case 1689:
case 2631:
case 3558:
case 2205:
case 3258:
case 3358:
case 1036:
case 1362:
case 632:
case 2254:
case 15:
case 4023:
case 3292:
case 1899:
case 2674:
case 740:
case 335:
case 1469:
case 314:
case 830:
case 3005:
case 1201:
case 4088:
case 1300:
case 1341:
case 3295:
case 1006:
case 3815:
case 608:
case 111:
case 3019:
case 2766:
case 3721:
case 3677:
case 3976:
case 1105:
case 2567:
case 2270:
case 2630:
case 3649:
case 1330:
case 4082:
case 2492:
case 588:
case 2864:
case 1264:
case 3323:
case 3405:
case 3253:
case 1447:
case 321:
case 3191:
case 2109:
case 2596:
case 601:
case 3782:
case 78:
case 2239:
case 2165:
case 701:
case 3591:
case 2401:
case 890:
case 2387:
case 1572:
case 1245:
case 2070:
case 3754:
case 2649:
case 1382:
case 2728:
case 166:
case 1390:
case 2490:
case 2307:
case 3160:
case 2518:
case 628:
case 2772:
case 943:
case 1789:
case 501:
case 1704:
case 1863:
case 822:
case 3355:
case 823:
case 1851:
case 4080:
case 1950:
case 2593:
case 177:
case 1568:
case 3706:
case 2224:
case 1141:
case 3559:
case 3581:
case 450:
case 129:
case 2615:
case 2150:
case 2198:
case 1155:
case 1096:
case 3648:
case 1853:
case 2004:
case 3798:
case 832:
case 503:
case 939:
case 1814:
case 2501:
case 3111:
case 502:
case 2814:
case 2584:
case 1575:
case 3330:
case 3126:
case 3528:
case 1984:
case 4047:
case 2918:
case 1083:
case 717:
case 2495:
case 1518:
case 1944:
case 636:
case 3360:
case 149:
case 2885:
case 566:
case 3190:
case 2667:
case 2549:
case 1211:
case 3702:
case 951:
case 1502:
case 2496:
case 2474:
case 3508:
case 1336:
case 2392:
case 3654:
case 1231:
case 2092:
case 3286:
case 2532:
case 2425:
case 1869:
case 1482:
case 207:
case 83:
case 2077:
case 360:
case 927:
case 1965:
case 2961:
case 1835:
case 328:
case 1053:
case 3105:
case 98:
case 1028:
case 426:
case 316:
case 3114:
case 1681:
case 3652:
case 938:
case 1392:
case 1456:
case 186:
case 1603:
case 2061:
case 445:
case 2238:
case 3217:
case 3541:
case 888:
case 3876:
case 960:
case 602:
case 2188:
case 1920:
case 3621:
case 885:
case 1491:
case 1906:
case 1181:
case 1356:
case 3965:
case 158:
case 434:
case 4093:
case 3156:
case 3407:
case 3504:
case 907:
case 3264:
case 1498:
case 3910:
case 2813:
case 3347:
case 818:
case 2569:
case 2132:
case 3777:
case 3103:
case 132:
case 3925:
case 3516:
case 2200:
case 3661:
case 2219:
case 100:
case 3316:
case 389:
case 3806:
case 884:
case 2586:
case 594:
case 1417:
case 3502:
case 1652:
case 673:
case 3283:
case 276:
case 2781:
case 1311:
case 1172:
case 1744:
case 752:
case 941:
case 2535:
case 9:
case 376:
case 3167:
case 645:
case 2108:
case 775:
case 983:
case 17:
case 561:
case 1533:
case 1985:
case 986:
case 649:
case 3494:
case 3606:
case 3201:
case 211:
case 1670:
case 2694:
case 1412:
case 331:
case 4078:
case 3883:
case 3589:
case 514:
case 3587:
case 1151:
case 2013:
case 120:
case 3155:
case 1463:
case 811:
case 71:
case 1883:
case 773:
case 3849:
case 3990:
case 2763:
case 4074:
case 60:
case 3366:
case 1322:
case 3362:
case 3462:
case 2375:
case 3413:
case 2142:
case 2973:
case 573:
case 3871:
case 2907:
case 1623:
case 1576:
case 431:
case 2472:
case 546:
case 54:
case 97:
case 932:
case 945:
case 334:
case 1775:
case 2913:
case 581:
case 2089:
case 2348:
case 2314:
case 3461:
case 1071:
case 652:
case 1946:
case 1953:
case 1528:
case 3680:
case 1040:
case 2065:
case 616:
case 2951:
case 295:
case 1791:
case 3419:
case 3813:
case 81:
case 3213:
case 901:
case 3165:
case 3178:
case 1065:
case 3382:
case 2082:
case 3991:
case 2:
case 1145:
case 3554:
case 1015:
case 929:
case 1455:
case 2815:
case 3496:
case 313:
case 1826:
case 3668:
case 2451:
case 1294:
case 610:
case 285:
case 2983:
case 3359:
case 851:
case 829:
case 923:
case 2169:
case 2802:
case 515:
case 2792:
case 2528:
case 591:
case 662:
case 808:
case 1662:
case 3920:
case 2731:
case 2137:
case 708:
case 2278:
case 3937:
case 1995:
case 734:
case 658:
case 386:
case 1705:
case 251:
case 2436:
case 110:
case 1480:
case 780:
case 1805:
case 469:
case 1468:
case 2964:
case 3053:
case 972:
case 301:
case 1723:
case 2642:
case 2895:
case 1016:
case 2954:
case 49:
case 2704:
case 3068:
case 1203:
case 1541:
case 1395:
case 3539:
case 1235:
case 3066:
case 1427:
case 2271:
case 749:
case 3218:
case 2608:
case 1622:
case 2665:
case 2605:
case 3369:
case 113:
case 1346:
case 2880:
case 168:
case 3867:
case 919:
case 3842:
case 598:
case 574:
case 1834:
case 1152:
case 2713:
case 2789:
case 2564:
case 3142:
case 2867:
case 221:
case 1890:
case 2714:
case 88:
case 1625:
case 1008:
case 2381:
case 2692:
case 2780:
case 383:
case 2062:
case 2888:
case 1803:
case 1578:
case 66:
case 3982:
case 1548:
case 1537:
case 4046:
case 1669:
case 1270:
case 3039:
case 3350:
case 2460:
case 1739:
case 948:
case 987:
case 1323:
case 2875:
case 3634:
case 349:
case 133:
case 3343:
case 1080:
case 582:
case 2743:
case 3332:
case 2382:
case 3519:
case 839:
case 1450:
case 593:
case 430:
case 1429:
case 398:
case 996:
case 3535:
case 1283:
case 564:
case 1299:
case 963:
case 3034:
case 3476:
case 1554:
case 4018:
case 3198:
case 1005:
case 94:
case 3329:
case 2209:
case 2131:
case 3147:
case 979:
case 3117:
case 934:
case 1067:
case 3072:
case 3244:
case 555:
case 125:
case 1202:
case 4090:
case 1376:
case 1993:
case 1215:
case 1493:
case 3082:
case 2637:
case 1:
case 1340:
case 2997:
case 3747:
case 2289:
case 3912:
case 3733:
case 2587:
case 1331:
case 2599:
case 3886:
case 1858:
case 4032:
case 1078:
case 1210:
case 2260:
case 1041:
case 16:
case 3059:
case 2030:
case 487:
case 1127:
case 102:
case 539:
case 1636:
case 40:
case 1825:
case 1820:
case 3731:
case 2389:
case 3148:
case 1349:
case 1699:
case 3458:
case 1316:
case 367:
case 1562:
case 3057:
case 3164:
case 806:
case 3287:
case 3869:
case 2099:
case 2993:
case 3952:
case 34:
case 99:
case 2002:
case 1756:
case 3737:
case 1385:
case 3309:
case 194:
case 1166:
case 743:
case 2374:
case 3084:
case 2242:
case 1778:
case 2851:
case 2407:
case 3290:
case 3915:
case 3550:
case 3521:
case 510:
case 4067:
case 76:
case 1227:
case 2531:
case 856:
case 2655:
case 2064:
case 400:
case 849:
case 2448:
case 2067:
case 1757:
case 2533:
case 2043:
case 3174:
case 1085:
case 1540:
case 2767:
case 805:
case 2819:
case 1555:
case 2505:
case 1458:
case 671:
case 3361:
case 1405:
case 1741:
case 1073:
case 2931:
case 2192:
case 3951:
case 1312:
case 4033:
case 2353:
case 1038:
case 2530:
case 3483:
case 199:
case 1119:
case 1265:
case 691:
case 1070:
case 2842:
case 1207:
case 3623:
case 1564:
case 2385:
case 2992:
case 1306:
case 373:
case 3901:
case 3003:
case 246:
case 3150:
case 1517:
case 2870:
case 3313:
case 2981:
case 48:
case 3732:
case 1132:
case 2261:
case 1902:
case 2784:
case 1614:
case 3851:
case 1580:
case 3409:
case 1239:
case 2473:
case 3092:
case 2610:
case 4057:
case 210:
case 2423:
case 792:
case 3993:
case 2545:
case 1983:
case 1884:
case 1206:
case 1815:
case 1998:
case 1035:
case 551:
case 3929:
case 1298:
case 751:
case 2024:
case 859:
case 3742:
case 2332:
case 2033:
case 2661:
case 1917:
case 530:
case 408:
case 2552:
case 855:
case 2237:
case 3321:
case 1685:
case 3051:
case 3180:
case 1532:
case 933:
case 1137:
case 2402:
case 4044:
case 1338:
case 3636:
case 3279:
case 3715:
case 2117:
case 1971:
case 3022:
case 1761:
case 181:
case 3446:
case 1076:
case 3989:
case 2189:
case 1931:
case 3902:
case 1048:
case 3568:
case 3437:
case 2305:
case 798:
case 1297:
case 2240:
case 912:
case 900:
case 759:
case 1521:
case 3500:
case 2597:
case 1198:
case 685:
case 1821:
case 2333:
case 4028:
case 3334:
case 1221:
case 1680:
case 3701:
case 2732:
case 1872:
case 2905:
case 2440:
case 2041:
case 553:
case 1571:
case 2506:
case 1980:
case 3120:
case 2403:
case 913:
case 2965:
case 1798:
case 2846:
case 3257:
case 584:
case 2903:
case 3043:
case 1238:
case 1877:
case 4010:
case 53:
case 2862:
case 866:
case 1671:
case 2149:
case 2388:
case 1406:
case 3348:
case 1396:
case 1052:
case 3078:
case 323:
case 940:
case 3195:
case 3931:
case 2133:
case 3713:
case 698:
case 2910:
case 1289:
case 1842:
case 3643:
case 722:
case 595:
case 2204:
case 2343:
case 2366:
case 2683:
case 2502:
case 1526:
case 1991:
case 1638:
case 1117:
case 2881:
case 2672:
case 646:
case 696:
case 153:
case 247:
case 957:
case 3646:
case 1649:
case 1955:
case 2098:
case 277:
case 281:
case 2470:
case 732:
case 612:
case 867:
case 3699:
case 216:
case 1178:
case 782:
case 879:
case 3840:
case 2331:
case 1186:
case 814:
case 1034:
case 824:
case 3014:
case 1620:
case 1507:
case 381:
case 1462:
case 1734:
case 3893:
case 3319:
case 3052:
case 3998:
case 3978:
case 1386:
case 2723:
case 3607:
case 2168:
case 3400:
case 3584:
case 2276:
case 185:
case 1139:
case 191:
case 2988:
case 2577:
case 2707:
case 1253:
case 3079:
case 2246:
case 2433:
case 1314:
case 1725:
case 1686:
case 404:
case 2926:
case 3756:
case 2443:
case 2902:
case 116:
case 2691:
case 1937:
case 1115:
case 1256:
case 3472:
case 2820:
case 1225:
case 3308:
case 3762:
case 2340:
case 3613:
case 55:
case 2444:
case 1319:
case 693:
case 1653:
case 2196:
case 1170:
case 1737:
case 169:
case 2527:
case 1223:
case 3212:
case 1687:
case 417:
case 2721:
case 300:
case 1022:
case 2420:
case 3489:
case 889:
case 1994:
case 3098:
case 1374:
case 3036:
case 77:
case 1624:
case 131:
case 2932:
case 1497:
case 3674:
case 74:
case 145:
case 2938:
case 1904:
case 3391:
case 3957:
case 3158:
case 1970:
case 3792:
case 3789:
case 1543:
case 657:
case 2924:
case 2598:
case 3783:
case 1084:
case 1222:
case 1081:
case 1534:
case 1922:
case 3880:
case 2066:
case 2304:
case 3223:
case 3560:
case 265:
case 3168:
case 2424:
case 4022:
case 3690:
case 402:
case 3744:
case 992:
case 2801:
case 1702:
case 2148:
case 3848:
case 1677:
case 1177:
case 1400:
case 3946:
case 27:
case 2519:
case 3727:
case 2804:
case 3110:
case 45:
case 155:
case 3763:
case 715:
case 1189:
case 226:
case 2351:
case 2458:
case 1093:
case 2653:
case 1086:
case 3872:
case 3576:
case 182:
case 2795:
case 4026:
case 307:
case 961:
case 2321:
case 3099:
case 1475:
case 184:
case 2617:
case 1683:
case 3894:
case 654:
case 2632:
case 2344:
case 463:
case 605:
case 1347:
case 2994:
case 2268:
case 4076:
case 2476:
case 2364:
case 2650:
case 0:
case 3588:
case 516:
case 3821:
case 3076:
case 375:
case 379:
case 2849:
case 3376:
case 1079:
case 4048:
case 1549:
case 3540:
case 3485:
case 3506:
case 3112:
case 3675:
case 3708:
case 3981:
case 8:
case 3498:
case 3809:
case 2817:
case 3947:
case 261:
case 614:
case 1120:
case 2181:
case 570:
case 1098:
case 2140:
case 3468:
case 2991:
case 1626:
case 2125:
case 1423:
case 2475:
case 906:
case 202:
case 2090:
case 4027:
case 2839:
case 1355:
case 266:
case 350:
case 1897:
case 1394:
case 4085:
case 279:
case 2833:
case 3822:
case 1383:
case 815:
case 1430:
case 416:
case 2627:
case 631:
case 345:
case 1752:
case 1781:
case 2525:
case 2609:
case 2236:
case 1154:
case 758:
case 2756:
case 3797:
case 1195:
case 2103:
case 3605:
case 3755:
case 2943:
case 2046:
case 396:
case 3368:
case 2312:
case 3766:
case 474:
case 439:
case 770:
case 3370:
case 686:
case 726:
case 1050:
case 2328:
case 3890:
case 659:
case 3679:
case 2556:
case 270:
case 46:
case 117:
case 2679:
case 921:
case 1923:
case 2837:
case 4061:
case 1758:
case 104:
case 2104:
case 3817:
case 3083:
case 2963:
case 2084:
case 1099:
case 2176:
case 2927:
case 2641:
case 1648:
case 3950:
case 3930:
case 3526:
case 1650:
case 2554:
case 105:
case 2452:
case 760:
case 667:
case 2517:
case 1125:
case 1544:
case 3977:
case 1601:
case 3551:
case 235:
case 3045:
case 1646:
case 2687:
case 2651:
case 2259:
case 1846:
case 2967:
case 2685:
case 3467:
case 3538:
case 3090:
case 471:
case 1777:
case 1519:
case 3061:
case 2633:
case 3322:
case 1812:
case 776:
case 1087:
case 3306:
case 1589:
case 854:
case 2487:
case 7:
case 1042:
case 1726:
case 259:
case 2072:
case 3211:
case 397:
case 3838:
case 1691:
case 4091:
case 537:
case 2346:
case 1290:
case 456:
case 2057:
case 1370:
case 607:
case 1464:
case 146:
case 222:
case 2945:
case 3275:
case 2855:
case 3865:
case 21:
case 2925:
case 1333:
case 2145:
case 3807:
case 1487:
case 774:
case 2972:
case 2025:
case 2026:
case 1108:
case 2123:
case 3238:
case 1857:
case 3862:
case 136:
case 1513:
case 2542:
case 668:
case 2822:
case 1909:
case 3728:
case 1407:
case 1072:
case 1470:
case 64:
case 3418:
case 1684:
case 2755:
case 1474:
case 681:
case 1027:
case 2729:
case 192:
case 1830:
case 1822:
case 378:
case 3710:
case 1666:
case 1226:
case 3276:
case 1784:
case 2284:
case 2899:
case 322:
case 3695:
case 1287:
case 1260:
case 1962:
case 4079:
case 1668:
case 2464:
case 1972:
case 1436:
case 2088:
case 3889:
case 1786:
case 3129:
case 3378:
case 3911:
case 3225:
case 3688:
case 2085:
case 1966:
case 3088:
case 3843:
case 1106:
case 1183:
case 1957:
case 1682:
case 579:
case 390:
case 1619:
case 3205:
case 860:
case 1633:
case 1353:
case 3183:
case 3664:
case 2811:
case 540:
case 2293:
case 2365:
case 2891:
case 2879:
case 911:
case 1583:
case 2059:
case 3447:
case 2854:
case 337:
case 200:
case 3942:
case 2676:
case 505:
case 3109:
case 2376:
case 2887:
case 3750:
case 3673:
case 518:
case 1092:
case 3964:
case 1806:
case 2523:
case 3333:
case 1501:
case 3310:
case 4092:
case 2928:
case 225:
case 2164:
case 3230:
case 1359:
case 1894:
case 1779:
case 2217:
case 3424:
case 119:
case 3685:
case 3510:
case 956:
case 405:
case 499:
case 4060:
case 4031:
case 3325:
case 2250:
case 3650:
case 3784:
case 1925:
case 3031:
case 2558:
case 565:
case 3655:
case 1262:
case 2733:
case 826:
case 3974:
case 3255:
case 2115:
case 3620:
case 3062:
case 688:
case 3121:
case 644:
case 1992:
case 1061:
case 1420:
case 817:
case 1421:
case 2126:
case 500:
case 2776:
case 669:
case 4055:
case 3204:
case 420:
case 1557:
case 250:
case 991:
case 3658:
case 1617:
case 130:
case 2252:
case 2589:
case 1031:
case 2008:
case 621:
case 2850:
case 289:
case 44:
case 3544:
case 343:
case 344:
case 2760:
case 1743:
case 1552:
case 1275:
case 206:
case 3969:
case 3716:
case 3527:
case 3705:
case 283:
case 147:
case 3594:
case 3846:
case 2011:
case 1696:
case 1387:
case 143:
case 3914:
case 12:
case 2812:
case 172:
case 1523:
case 2884:
case 3417:
case 3574:
case 2368:
case 641:
case 2872:
case 1844:
case 476:
case 1194:
case 2415:
case 2838:
case 3579:
case 362:
case 1618:
case 3127:
case 2856:
case 1612:
case 528:
case 1010:
case 1885:
case 4038:
case 1014:
case 418:
case 2557:
case 3365:
case 969:
case 3604:
case 2953:
case 2163:
case 1292:
case 2120:
case 2982:
case 2226:
case 470:
case 2256:
case 351:
case 3722:
case 549:
case 340:
case 1261:
case 1766:
case 1135:
case 2060:
case 2431:
case 1875:
case 1831:
case 2873:
case 338:
case 552:
case 3967:
case 2350:
case 3242:
case 870:
case 3289:
case 2206:
case 2782:
case 2285:
case 687:
case 271:
case 1313:
case 2896:
case 3130:
case 2039:
case 2834:
case 1850:
case 2078:
case 4016:
case 1797:
case 3404:
case 2022:
case 862:
case 92:
case 2748:
case 310:
case 2175:
case 382:
case 988:
case 2746:
case 853:
case 3011:
case 1836:
case 1769:
case 2620:
case 2193:
case 3933:
case 3899:
case 3449:
case 2249:
case 3263:
case 1366:
case 978:
case 96:
case 3711:
case 3858:
case 3085:
case 2513:
case 517:
case 3196:
case 3154:
case 536:
case 3403:
case 2050:
case 2971:
case 1237:
case 1320:
case 3790:
case 137:
case 675:
case 3317:
case 3055:
case 2708:
case 330:
case 3854:
case 2052:
case 32:
case 1301:
case 1059:
case 1876:
case 1828:
case 3723:
case 2094:
case 3714:
case 391:
case 3025:
case 65:
case 154:
case 2678:
case 846:
case 2154:
case 3805:
case 342:
case 4077:
case 2398:
case 1200:
case 3207:
case 625:
case 4042:
case 1413:
case 4014:
case 388:
case 2582:
case 1066:
case 2069:
case 2280:
case 2790:
case 2923:
case 952:
case 908:
case 3844:
case 1438:
case 2652:
case 3046:
case 2774:
case 2438:
case 3420:
case 1961:
case 3853:
case 3780:
case 93:
case 2029:
case 62:
case 2295:
case 2807:
case 3751:
case 2702:
case 1058:
case 2823:
case 1563:
case 1628:
case 1398:
case 1735:
case 2952:
case 1855:
case 1032:
case 2638:
case 189:
case 2853:
case 3949:
case 922:
case 3398:
case 1477:
case 2700:
case 491:
case 42:
case 198:
case 2153:
case 3305:
case 1771:
case 1187:
case 872:
case 2019:
case 2775:
case 562:
case 1164:
case 1862:
case 1171:
case 2404:
case 1512:
case 2510:
case 3832:
case 3499:
case 2866:
case 3026:
case 1104:
case 1310:
case 3684:
case 2890:
case 2323:
case 355:
case 1511:
case 1419:
case 3864:
case 2976:
case 882:
case 196:
case 2788:
case 3312:
case 2840:
case 1228:
case 2512:
case 427:
case 1188:
case 2230:
case 524:
case 3602:
case 13:
case 1560:
case 1539:
case 1277:
case 2416:
case 2798:
case 2040:
case 4052:
case 3575:
case 735:
case 634:
case 2514:
case 3904:
case 2539:
case 2831:
case 1759:
case 1097:
case 1588:
case 2709:
case 1019:
case 2369:
case 1002:
case 103:
case 2167:
case 2341:
case 101:
case 462:
case 1951:
case 1209:
case 3171:
case 1169:
case 689:
case 1232:
case 3546:
case 1219:
case 3093:
case 3759:
case 368:
case 3095:
case 3349:
case 1484:
case 3040:
case 1295:
case 3799:
case 2272:
case 3274:
case 557:
case 2984:
case 1529:
case 293:
case 3220:
case 449:
case 834:
case 2106:
case 3151:
case 3850:
case 2319:
case 3959:
case 3491:
case 1307:
case 2327:
case 2439:
case 1599:
case 3161:
case 2247:
case 3393:
case 3377:
case 1249:
case 1977:
case 3209:
case 1418:
case 513:
case 3608:
case 212:
case 2762:
case 3835:
case 1856:
case 1546:
case 2418:
case 2357:
case 2212:
case 3236:
case 240:
case 2408:
case 1272:
case 3185:
case 3824:
case 3866:
case 2453:
case 3972:
case 3395:
case 2379:
case 2917:
case 4094:
case 309:
case 2818:
case 3923:
case 1929:
case 3096:
case 369:
case 2744:
case 786:
case 204:
case 1903:
case 1658:
case 3573:
case 603:
case 2044:
case 3665:
case 3291:
case 4084:
case 213:
case 3396:
case 3017:
case 2009:
case 4012:
case 3740:
case 2779:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1664514001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,];
var gg_b = "1664514001/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
