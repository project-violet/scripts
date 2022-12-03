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
var o = 1;
switch (g) {
case 1681:
case 3848:
case 3387:
case 1207:
case 2839:
case 2465:
case 2263:
case 3940:
case 876:
case 2869:
case 3892:
case 1826:
case 2553:
case 3321:
case 686:
case 4084:
case 4069:
case 300:
case 38:
case 3334:
case 4057:
case 2579:
case 2766:
case 1971:
case 1576:
case 4076:
case 408:
case 2726:
case 2782:
case 2984:
case 3983:
case 924:
case 3725:
case 3354:
case 1272:
case 1372:
case 471:
case 436:
case 10:
case 2073:
case 2085:
case 2280:
case 554:
case 2769:
case 2518:
case 2568:
case 2213:
case 2377:
case 1175:
case 3465:
case 499:
case 79:
case 419:
case 2513:
case 3855:
case 1140:
case 2672:
case 2282:
case 1149:
case 693:
case 2721:
case 1885:
case 919:
case 3580:
case 1603:
case 1247:
case 950:
case 2482:
case 1481:
case 884:
case 3370:
case 72:
case 1723:
case 2138:
case 3587:
case 2796:
case 461:
case 214:
case 2224:
case 3360:
case 829:
case 1671:
case 978:
case 2003:
case 3895:
case 2062:
case 3632:
case 3367:
case 35:
case 1631:
case 1687:
case 3452:
case 3448:
case 2228:
case 517:
case 649:
case 59:
case 970:
case 520:
case 1936:
case 3699:
case 2212:
case 2293:
case 3803:
case 117:
case 2297:
case 1853:
case 1817:
case 2053:
case 299:
case 13:
case 2849:
case 2446:
case 3104:
case 3719:
case 840:
case 3790:
case 902:
case 2889:
case 3828:
case 3241:
case 622:
case 3595:
case 1486:
case 3836:
case 230:
case 383:
case 2846:
case 2727:
case 3433:
case 963:
case 1759:
case 425:
case 3179:
case 2865:
case 600:
case 3625:
case 3701:
case 2637:
case 2071:
case 2494:
case 2217:
case 374:
case 412:
case 3535:
case 1176:
case 578:
case 3915:
case 3005:
case 2057:
case 1624:
case 447:
case 2197:
case 3171:
case 1222:
case 463:
case 3336:
case 20:
case 3330:
case 1120:
case 76:
case 3049:
case 2458:
case 1217:
case 1602:
case 718:
case 835:
case 2016:
case 3071:
case 3024:
case 632:
case 1098:
case 1564:
case 888:
case 1858:
case 2009:
case 3285:
case 734:
case 2121:
case 497:
case 1462:
case 1292:
case 783:
case 1881:
case 3992:
case 78:
case 1950:
case 3976:
case 739:
case 3613:
case 3067:
case 2084:
case 1531:
case 3447:
case 4068:
case 3513:
case 1844:
case 2470:
case 2879:
case 799:
case 1555:
case 596:
case 1818:
case 111:
case 3534:
case 3470:
case 3575:
case 2106:
case 2888:
case 1498:
case 337:
case 1102:
case 2247:
case 3054:
case 3847:
case 1156:
case 70:
case 2528:
case 941:
case 1527:
case 3125:
case 2524:
case 3668:
case 2199:
case 713:
case 1249:
case 391:
case 3011:
case 3232:
case 3565:
case 1697:
case 1707:
case 1446:
case 434:
case 1397:
case 3874:
case 3149:
case 1562:
case 1403:
case 1894:
case 592:
case 1299:
case 421:
case 6:
case 2328:
case 2546:
case 2468:
case 2273:
case 528:
case 487:
case 1287:
case 4029:
case 3796:
case 2691:
case 1859:
case 3138:
case 3543:
case 2645:
case 843:
case 1699:
case 3456:
case 47:
case 1424:
case 320:
case 1605:
case 594:
case 2878:
case 699:
case 1209:
case 1952:
case 1208:
case 3826:
case 2038:
case 378:
case 707:
case 2525:
case 1063:
case 1806:
case 382:
case 161:
case 2566:
case 2908:
case 1668:
case 1058:
case 3350:
case 3224:
case 3269:
case 1778:
case 2607:
case 3639:
case 969:
case 1506:
case 513:
case 4094:
case 3003:
case 3526:
case 3627:
case 314:
case 2935:
case 3032:
case 3767:
case 3277:
case 2770:
case 2131:
case 207:
case 1970:
case 4037:
case 2256:
case 2781:
case 2582:
case 4038:
case 217:
case 3201:
case 3966:
case 356:
case 2495:
case 2545:
case 3937:
case 2006:
case 2436:
case 3298:
case 3089:
case 1710:
case 2188:
case 2117:
case 3891:
case 765:
case 4077:
case 1268:
case 643:
case 893:
case 2143:
case 269:
case 375:
case 2192:
case 3291:
case 1709:
case 1376:
case 136:
case 285:
case 270:
case 1138:
case 665:
case 61:
case 2655:
case 1976:
case 190:
case 1271:
case 2804:
case 2506:
case 19:
case 2922:
case 3648:
case 2428:
case 2987:
case 4059:
case 241:
case 2477:
case 1334:
case 3641:
case 1793:
case 3272:
case 560:
case 361:
case 1139:
case 455:
case 1783:
case 372:
case 3376:
case 347:
case 1983:
case 1312:
case 42:
case 355:
case 3000:
case 1722:
case 284:
case 313:
case 2092:
case 1422:
case 2552:
case 2917:
case 3428:
case 3661:
case 1636:
case 3345:
case 2776:
case 991:
case 2898:
case 1651:
case 2179:
case 3501:
case 2924:
case 1683:
case 4052:
case 3488:
case 3256:
case 735:
case 3481:
case 1025:
case 1565:
case 2677:
case 2242:
case 1484:
case 4092:
case 1022:
case 363:
case 2913:
case 2661:
case 3761:
case 940:
case 187:
case 3039:
case 2932:
case 1632:
case 129:
case 760:
case 3909:
case 191:
case 2333:
case 3808:
case 1849:
case 466:
case 626:
case 2569:
case 2697:
case 2656:
case 2166:
case 2548:
case 1891:
case 1879:
case 639:
case 909:
case 2387:
case 2107:
case 3817:
case 464:
case 1957:
case 1354:
case 1839:
case 2203:
case 3487:
case 3883:
case 1431:
case 2803:
case 2884:
case 3474:
case 710:
case 2321:
case 2586:
case 2036:
case 822:
case 3194:
case 1050:
case 2811:
case 4063:
case 2983:
case 527:
case 1639:
case 2068:
case 3982:
case 1064:
case 1197:
case 3061:
case 2039:
case 3318:
case 1757:
case 1892:
case 678:
case 3594:
case 3592:
case 358:
case 51:
case 280:
case 255:
case 1251:
case 1204:
case 730:
case 1170:
case 1590:
case 2383:
case 844:
case 2181:
case 2874:
case 1595:
case 2861:
case 3853:
case 2669:
case 2827:
case 2425:
case 2664:
case 1239:
case 208:
case 3322:
case 3810:
case 3548:
case 4003:
case 1533:
case 4015:
case 1336:
case 3380:
case 127:
case 3292:
case 3114:
case 2756:
case 3504:
case 62:
case 3806:
case 3552:
case 2046:
case 723:
case 2031:
case 1827:
case 3952:
case 1290:
case 1834:
case 3919:
case 1516:
case 2189:
case 3629:
case 3823:
case 3954:
case 1444:
case 2284:
case 905:
case 3438:
case 365:
case 956:
case 880:
case 1164:
case 1316:
case 1964:
case 568:
case 2621:
case 16:
case 3377:
case 1591:
case 2825:
case 3084:
case 1959:
case 584:
case 1630:
case 2840:
case 1448:
case 3426:
case 2942:
case 251:
case 512:
case 2379:
case 1107:
case 1108:
case 1449:
case 4042:
case 1515:
case 3527:
case 2266:
case 1024:
case 411:
case 3570:
case 2311:
case 100:
case 3609:
case 2535:
case 3545:
case 3780:
case 2663:
case 2581:
case 860:
case 341:
case 731:
case 4024:
case 1792:
case 1540:
case 3337:
case 3776:
case 2577:
case 401:
case 1230:
case 2347:
case 2791:
case 3333:
case 3311:
case 1460:
case 2172:
case 2303:
case 1284:
case 1919:
case 4078:
case 1571:
case 1601:
case 1784:
case 1665:
case 871:
case 2176:
case 1702:
case 119:
case 253:
case 1981:
case 1065:
case 1764:
case 3525:
case 1787:
case 2302:
case 2808:
case 551:
case 1573:
case 4005:
case 3518:
case 260:
case 3156:
case 2418:
case 2429:
case 3167:
case 249:
case 482:
case 2916:
case 3189:
case 3864:
case 2724:
case 2956:
case 2771:
case 243:
case 3175:
case 974:
case 4012:
case 1977:
case 3116:
case 2353:
case 1926:
case 1349:
case 2680:
case 861:
case 1864:
case 438:
case 105:
case 1634:
case 1580:
case 1596:
case 3398:
case 3340:
case 2955:
case 3809:
case 3773:
case 3245:
case 3110:
case 867:
case 142:
case 3327:
case 850:
case 1072:
case 44:
case 2837:
case 1325:
case 1178:
case 2887:
case 1666:
case 3050:
case 1436:
case 1119:
case 2411:
case 3121:
case 33:
case 1751:
case 1613:
case 406:
case 2354:
case 2322:
case 869:
case 827:
case 1646:
case 3818:
case 2489:
case 2376:
case 413:
case 3692:
case 753:
case 2433:
case 1924:
case 1343:
case 895:
case 1285:
case 4017:
case 530:
case 1820:
case 1231:
case 2978:
case 1828:
case 3401:
case 1693:
case 2151:
case 2877:
case 246:
case 1339:
case 3313:
case 1160:
case 3160:
case 3238:
case 2314:
case 3578:
case 605:
case 2155:
case 1409:
case 624:
case 1556:
case 1812:
case 695:
case 2512:
case 3941:
case 2810:
case 1437:
case 684:
case 547:
case 3744:
case 1511:
case 392:
case 2481:
case 3964:
case 3459:
case 315:
case 2644:
case 1356:
case 457:
case 3779:
case 2734:
case 188:
case 53:
case 3888:
case 2950:
case 2830:
case 2635:
case 98:
case 825:
case 3597:
case 3735:
case 1047:
case 1364:
case 91:
case 109:
case 1240:
case 45:
case 430:
case 3264:
case 26:
case 2184:
case 1080:
case 1270:
case 1066:
case 2438:
case 3585:
case 1660:
case 3556:
case 1311:
case 3027:
case 2886:
case 1581:
case 3122:
case 29:
case 2371:
case 3834:
case 3408:
case 2461:
case 3882:
case 1597:
case 1882:
case 1530:
case 1341:
case 1941:
case 1902:
case 3967:
case 345:
case 2555:
case 3599:
case 682:
case 3093:
case 3924:
case 2594:
case 3246:
case 126:
case 942:
case 1700:
case 2624:
case 984:
case 2306:
case 1585:
case 3777:
case 1508:
case 571:
case 3437:
case 2999:
case 2731:
case 702:
case 3393:
case 1482:
case 2075:
case 676:
case 1771:
case 3958:
case 1810:
case 3529:
case 490:
case 2412:
case 3702:
case 3230:
case 2533:
case 1275:
case 2134:
case 3951:
case 2442:
case 3867:
case 1283:
case 1958:
case 272:
case 2703:
case 1327:
case 264:
case 2829:
case 1369:
case 3811:
case 1724:
case 2508:
case 2853:
case 138:
case 518:
case 2759:
case 3708:
case 23:
case 222:
case 2473:
case 1772:
case 3405:
case 920:
case 2185:
case 3239:
case 1096:
case 3829:
case 296:
case 832:
case 774:
case 2115:
case 1132:
case 3296:
case 1082:
case 2262:
case 326:
case 2135:
case 1548:
case 333:
case 3635:
case 2241:
case 4075:
case 1317:
case 3759:
case 1501:
case 631:
case 3157:
case 3574:
case 2186:
case 3056:
case 667:
case 2157:
case 50:
case 4006:
case 1682:
case 316:
case 2947:
case 3034:
case 715:
case 1929:
case 1655:
case 183:
case 1719:
case 3986:
case 604:
case 3489:
case 3275:
case 1017:
case 1800:
case 841:
case 3212:
case 852:
case 478:
case 2471:
case 1673:
case 972:
case 3910:
case 459:
case 1062:
case 1574:
case 2883:
case 2708:
case 2592:
case 1684:
case 3170:
case 3577:
case 3637:
case 1961:
case 1405:
case 957:
case 3388:
case 3678:
case 1091:
case 199:
case 3683:
case 1716:
case 3454:
case 1708:
case 3901:
case 681:
case 2510:
case 1703:
case 1692:
case 523:
case 2658:
case 821:
case 3053:
case 1411:
case 1584:
case 2609:
case 2086:
case 223:
case 58:
case 3217:
case 1905:
case 908:
case 2719:
case 668:
case 3569:
case 1713:
case 1112:
case 3363:
case 87:
case 934:
case 1451:
case 2934:
case 3581:
case 1213:
case 816:
case 2530:
case 1504:
case 1566:
case 1686:
case 3884:
case 717:
case 2979:
case 3328:
case 2424:
case 195:
case 306:
case 3366:
case 2927:
case 3960:
case 1938:
case 591:
case 601:
case 416:
case 683:
case 1832:
case 2355:
case 2687:
case 1298:
case 726:
case 2452:
case 2676:
case 2394:
case 3567:
case 2450:
case 1870:
case 3169:
case 2248:
case 3802:
case 764:
case 1884:
case 1620:
case 3666:
case 3294:
case 817:
case 3435:
case 570:
case 193:
case 2752:
case 1982:
case 2126:
case 1130:
case 2254:
case 3631:
case 2541:
case 1030:
case 939:
case 3645:
case 1456:
case 1259:
case 4048:
case 4060:
case 3240:
case 2615:
case 1618:
case 2141:
case 4011:
case 3591:
case 1404:
case 157:
case 2109:
case 558:
case 3863:
case 2742:
case 3875:
case 1799:
case 3842:
case 2211:
case 1487:
case 1201:
case 3729:
case 2110:
case 818:
case 3791:
case 3041:
case 2895:
case 3439:
case 1507:
case 3324:
case 1153:
case 3077:
case 277:
case 1061:
case 1517:
case 2153:
case 3176:
case 1499:
case 779:
case 1945:
case 3267:
case 1998:
case 3827:
case 3001:
case 767:
case 54:
case 2828:
case 2610:
case 3697:
case 2605:
case 3679:
case 1430:
case 3177:
case 3010:
case 3120:
case 3644:
case 2270:
case 3540:
case 3029:
case 1331:
case 1483:
case 3717:
case 3509:
case 1128:
case 2562:
case 2373:
case 2173:
case 3244:
case 2391:
case 3197:
case 1390:
case 2409:
case 2882:
case 2722:
case 1830:
case 1338:
case 1151:
case 1609:
case 1872:
case 2318:
case 721:
case 2736:
case 597:
case 3746:
case 855:
case 608:
case 1076:
case 2000:
case 638:
case 3914:
case 3479:
case 2350:
case 3220:
case 422:
case 3033:
case 3738:
case 307:
case 3961:
case 621:
case 3100:
case 145:
case 479:
case 2041:
case 3045:
case 2583:
case 620:
case 258:
case 2739:
case 2091:
case 112:
case 257:
case 202:
case 3861:
case 1762:
case 2026:
case 3254:
case 3873:
case 728:
case 2998:
case 480:
case 2730:
case 2822:
case 1308:
case 2784:
case 2662:
case 1144:
case 3357:
case 1443:
case 590:
case 2343:
case 662:
case 642:
case 2588:
case 369:
case 913:
case 1234:
case 2017:
case 1379:
case 3547:
case 2851:
case 3216:
case 481:
case 3152:
case 814:
case 2854:
case 3602:
case 616:
case 3865:
case 2602:
case 614:
case 2496:
case 1920:
case 553:
case 3394:
case 340:
case 1988:
case 1053:
case 2044:
case 1439:
case 2287:
case 2617:
case 1420:
case 1991:
case 800:
case 2764:
case 1621:
case 1604:
case 228:
case 1223:
case 947:
case 2743:
case 1406:
case 1145:
case 1121:
case 2334:
case 3464:
case 3055:
case 2938:
case 3695:
case 132:
case 526:
case 247:
case 2205:
case 1000:
case 4079:
case 989:
case 1560:
case 2921:
case 688:
case 3844:
case 1833:
case 1525:
case 4073:
case 687:
case 1685:
case 1680:
case 4000:
case 4041:
case 1382:
case 3260:
case 1074:
case 1808:
case 2294:
case 1625:
case 4:
case 379:
case 796:
case 1250:
case 1766:
case 851:
case 2455:
case 2251:
case 1978:
case 2532:
case 3420:
case 1740:
case 2486:
case 3686:
case 1359:
case 3136:
case 3164:
case 3979:
case 1417:
case 2693:
case 1728:
case 1984:
case 1118:
case 674:
case 96:
case 2097:
case 4066:
case 2646:
case 1377:
case 2775:
case 1743:
case 3495:
case 276:
case 3453:
case 2479:
case 1662:
case 3386:
case 2233:
case 2043:
case 2649:
case 3894:
case 2735:
case 2802:
case 1007:
case 1963:
case 3993:
case 3227:
case 2340:
case 3638:
case 2083:
case 1802:
case 904:
case 3:
case 210:
case 1946:
case 3304:
case 2527:
case 2160:
case 3854:
case 2996:
case 1114:
case 1282:
case 2992:
case 3191:
case 3445:
case 3558:
case 3721:
case 922:
case 1593:
case 3849:
case 2221:
case 2010:
case 1125:
case 387:
case 1561:
case 3922:
case 899:
case 2364:
case 572:
case 1948:
case 3383:
case 3655:
case 2558:
case 1966:
case 1851:
case 2948:
case 1111:
case 1942:
case 4058:
case 371:
case 218:
case 409:
case 2754:
case 609:
case 3807:
case 3858:
case 2550:
case 2351:
case 4049:
case 1824:
case 3970:
case 2633:
case 2844:
case 1027:
case 3938:
case 542:
case 3364:
case 1523:
case 3816:
case 3301:
case 3926:
case 128:
case 1381:
case 1386:
case 1904:
case 519:
case 1753:
case 3205:
case 3025:
case 151:
case 1913:
case 670:
case 3222:
case 149:
case 3181:
case 2182:
case 99:
case 606:
case 883:
case 1190:
case 1028:
case 3737:
case 3273:
case 3994:
case 1300:
case 407:
case 593:
case 3589:
case 1570:
case 971:
case 3076:
case 1745:
case 790:
case 1698:
case 1823:
case 197:
case 1310:
case 212:
case 1041:
case 3975:
case 205:
case 3946:
case 559:
case 3131:
case 811:
case 2812:
case 3200:
case 828:
case 886:
case 1013:
case 1011:
case 162:
case 952:
case 1822:
case 3163:
case 603:
case 1321:
case 3724:
case 648:
case 2779:
case 1440:
case 349:
case 3568:
case 635:
case 3483:
case 1836:
case 1664:
case 4054:
case 362:
case 857:
case 3876:
case 2437:
case 3579:
case 3165:
case 3923:
case 456:
case 4081:
case 3369:
case 34:
case 3303:
case 1888:
case 1781:
case 3640:
case 1856:
case 56:
case 2768:
case 1718:
case 2965:
case 3221:
case 1332:
case 1599:
case 488:
case 3207:
case 2202:
case 2501:
case 890:
case 2760:
case 1355:
case 918:
case 380:
case 3395:
case 3107:
case 945:
case 580:
case 1526:
case 3522:
case 836:
case 2711:
case 2544:
case 672:
case 125:
case 3714:
case 2547:
case 1617:
case 3373:
case 2628:
case 2276:
case 1765:
case 1016:
case 404:
case 3347:
case 2587:
case 2988:
case 3030:
case 2974:
case 1281:
case 3572:
case 2797:
case 747:
case 3031:
case 2288:
case 3978:
case 3607:
case 458:
case 233:
case 745:
case 439:
case 993:
case 3792:
case 1537:
case 2748:
case 2864:
case 1006:
case 2357:
case 3139:
case 1459:
case 1962:
case 3331:
case 460:
case 1552:
case 1742:
case 2786:
case 1569:
case 2678:
case 2905:
case 1123:
case 67:
case 1744:
case 2194:
case 3499:
case 2608:
case 1641:
case 3984:
case 1360:
case 1276:
case 3953:
case 2681:
case 1658:
case 3934:
case 3675:
case 1414:
case 862:
case 1875:
case 550:
case 3732:
case 450:
case 2490:
case 3289:
case 3669:
case 2833:
case 3063:
case 3840:
case 1749:
case 2800:
case 1198:
case 669:
case 552:
case 310:
case 1470:
case 3057:
case 931:
case 3918:
case 2826:
case 2292:
case 3143:
case 86:
case 3825:
case 3286:
case 3974:
case 3480:
case 2124:
case 31:
case 2259:
case 780:
case 2319:
case 830:
case 1269:
case 2312:
case 144:
case 3795:
case 2670:
case 1939:
case 262:
case 858:
case 3690:
case 43:
case 3228:
case 2907:
case 875:
case 2650:
case 3904:
case 2563:
case 30:
case 3335:
case 1131:
case 1202:
case 3132:
case 1402:
case 3634:
case 304:
case 1371:
case 4056:
case 1221:
case 146:
case 3362:
case 73:
case 914:
case 294:
case 3965:
case 2105:
case 385:
case 2745:
case 2008:
case 2291:
case 3064:
case 3062:
case 2013:
case 2079:
case 663:
case 282:
case 1182:
case 1075:
case 295:
case 1242:
case 1057:
case 2028:
case 2265:
case 515:
case 2022:
case 1554:
case 2001:
case 2500:
case 2368:
case 248:
case 2150:
case 1457:
case 2029:
case 892:
case 3507:
case 3971:
case 1415:
case 9:
case 1809:
case 2520:
case 3379:
case 350:
case 2049:
case 3211:
case 3831:
case 2337:
case 2585:
case 441:
case 3643:
case 2058:
case 1863:
case 1029:
case 1788:
case 1953:
case 1324:
case 3309:
case 1656:
case 3306:
case 1643:
case 3813:
case 1347:
case 1965:
case 615:
case 2441:
case 733:
case 2872:
case 3610:
case 39:
case 1899:
case 992:
case 2666:
case 3046:
case 981:
case 759:
case 1545:
case 2959:
case 1226:
case 3288:
case 3381:
case 2960:
case 505:
case 2539:
case 2195:
case 3251:
case 2144:
case 1642:
case 2397:
case 1124:
case 2168:
case 4055:
case 1392:
case 3325:
case 3784:
case 1192:
case 2349:
case 701:
case 3897:
case 3471:
case 2403:
case 3406:
case 469:
case 472:
case 493:
case 221:
case 3490:
case 1342:
case 647:
case 802:
case 1018:
case 4083:
case 74:
case 236:
case 2219:
case 3997:
case 637:
case 1366:
case 3546:
case 2338:
case 2835:
case 7:
case 3611:
case 3352:
case 2156:
case 2325:
case 1455:
case 3402:
case 2537:
case 3621:
case 784:
case 644:
case 3274:
case 1117:
case 3422:
case 3374:
case 1255:
case 3778:
case 179:
case 402:
case 4036:
case 3948:
case 1763:
case 48:
case 3287:
case 2488:
case 81:
case 1969:
case 943:
case 995:
case 489:
case 3229:
case 1918:
case 2700:
case 3520:
case 1770:
case 1756:
case 1690:
case 2419:
case 3300:
case 1791:
case 3841:
case 2720:
case 1549:
case 565:
case 152:
case 3188:
case 3559:
case 1889:
case 912:
case 2758:
case 1615:
case 2714:
case 511:
case 589:
case 2795:
case 1227:
case 3115:
case 1210:
case 1067:
case 3898:
case 3198:
case 3252:
case 2445:
case 1093:
case 2348:
case 2249:
case 3192:
case 49:
case 1860:
case 776:
case 2386:
case 566:
case 3822:
case 4062:
case 529:
case 1910:
case 2838:
case 2629:
case 376:
case 2393:
case 2899:
case 1670:
case 3299:
case 1589:
case 3415:
case 3020:
case 848:
case 2860:
case 181:
case 1031:
case 3148:
case 3070:
case 397:
case 1731:
case 3615:
case 288:
case 2514:
case 2901:
case 1315:
case 2623:
case 2783:
case 2204:
case 896:
case 3989:
case 932:
case 424:
case 2564:
case 646:
case 2104:
case 1146:
case 2114:
case 634:
case 3442:
case 3654:
case 3905:
case 3626:
case 2762:
case 167:
case 2792:
case 114:
case 1051:
case 3142:
case 2252:
case 1314:
case 2313:
case 140:
case 778:
case 1243:
case 1095:
case 925:
case 3893:
case 2380:
case 2571:
case 3502:
case 1330:
case 2777:
case 1861:
case 175:
case 27:
case 3794:
case 3798:
case 1676:
case 1674:
case 1036:
case 3451:
case 3573:
case 1497:
case 1471:
case 1711:
case 1811:
case 2448:
case 2601:
case 3193:
case 2423:
case 3590:
case 21:
case 2785:
case 1769:
case 842:
case 577:
case 3042:
case 1236:
case 3226:
case 261:
case 3450:
case 3235:
case 1845:
case 177:
case 2761:
case 2957:
case 1917:
case 770:
case 3887:
case 2516:
case 3711:
case 1426:
case 1183:
case 3541:
case 1667:
case 1739:
case 396:
case 1174:
case 2296:
case 1333:
case 819:
case 599:
case 3542:
case 1797:
case 2089:
case 474:
case 1416:
case 1434:
case 2929:
case 1847:
case 4044:
case 3066:
case 2007:
case 1476:
case 2223:
case 508:
case 955:
case 2480:
case 4045:
case 384:
case 1203:
case 540:
case 2336:
case 1814:
case 1189:
case 15:
case 1309:
case 3250:
case 1318:
case 353:
case 2868:
case 725:
case 3814:
case 1143:
case 787:
case 2063:
case 3103:
case 2570:
case 2975:
case 256:
case 2673:
case 1199:
case 2953:
case 3276:
case 3596:
case 2065:
case 2763:
case 1180:
case 2478:
case 3096:
case 641:
case 2910:
case 1780:
case 323:
case 1344:
case 60:
case 1048:
case 998:
case 3486:
case 286:
case 645:
case 2858:
case 894:
case 2464:
case 1663:
case 442:
case 3302:
case 2780:
case 2619:
case 1083:
case 3832:
case 311:
case 2944:
case 2161:
case 2342:
case 3249:
case 420:
case 2591:
case 2824:
case 1974:
case 532:
case 928:
case 3752:
case 650:
case 576:
case 37:
case 3007:
case 1368:
case 2694:
case 2941:
case 467:
case 2283:
case 2331:
case 318:
case 354:
case 3297:
case 3674:
case 4010:
case 3751:
case 317:
case 556:
case 2738:
case 297:
case 3015:
case 3199:
case 308:
case 3080:
case 2765:
case 399:
case 1044:
case 3839:
case 3753:
case 740:
case 1429:
case 1659:
case 698:
case 915:
case 2051:
case 1159:
case 3382:
case 366:
case 2701:
case 2025:
case 2268:
case 1873:
case 690:
case 1542:
case 3237:
case 2175:
case 483:
case 696:
case 3051:
case 930:
case 3060:
case 1522:
case 1704:
case 2281:
case 3633:
case 1179:
case 1606:
case 569:
case 4033:
case 1903:
case 2728:
case 868:
case 2985:
case 2341:
case 2406:
case 201:
case 2149:
case 3255:
case 618:
case 1387:
case 2683:
case 2600:
case 3851:
case 804:
case 219:
case 1546:
case 4082:
case 3112:
case 3857:
case 1032:
case 1181:
case 1669:
case 3957:
case 325:
case 2301:
case 3783:
case 2080:
case 3852:
case 2918:
case 395:
case 331:
case 3647:
case 3677:
case 1752:
case 2596:
case 1777:
case 849:
case 3768:
case 3642:
case 1980:
case 2503:
case 1089:
case 3073:
case 213:
case 1649:
case 449:
case 3155:
case 41:
case 64:
case 3860:
case 2454:
case 2335:
case 3305:
case 2346:
case 1582:
case 3758:
case 234:
case 1614:
case 3528:
case 357:
case 1479:
case 1746:
case 2308:
case 1524:
case 786:
case 1940:
case 3133:
case 242:
case 1931:
case 273:
case 476:
case 3726:
case 751:
case 1278:
case 118:
case 3102:
case 756:
case 3691:
case 3280:
case 1068:
case 2034:
case 3906:
case 1785:
case 2920:
case 3482:
case 390:
case 2012:
case 2061:
case 586:
case 2366:
case 1798:
case 1831:
case 3603:
case 697:
case 2926:
case 2067:
case 386:
case 1141:
case 691:
case 3990:
case 2396:
case 3903:
case 3652:
case 3718:
case 3521:
case 2229:
case 973:
case 1813:
case 3742:
case 1933:
case 2421:
case 3554:
case 3247:
case 2208:
case 587:
case 1898:
case 141:
case 122:
case 1738:
case 2023:
case 97:
case 1761:
case 1706:
case 3890:
case 3943:
case 1521:
case 1322:
case 772:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1670083202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,];
var gg_b = "1670083202/";

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
