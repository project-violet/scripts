// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 3021:
case 3238:
case 1633:
case 3222:
case 1680:
case 280:
case 3351:
case 3150:
case 1033:
case 3621:
case 3370:
case 3545:
case 3171:
case 114:
case 1417:
case 2661:
case 1002:
case 1736:
case 2262:
case 2061:
case 2226:
case 1090:
case 725:
case 1225:
case 1690:
case 24:
case 3289:
case 613:
case 2130:
case 1797:
case 973:
case 3005:
case 3605:
case 3266:
case 3923:
case 593:
case 2734:
case 1808:
case 2148:
case 1520:
case 2963:
case 1509:
case 2455:
case 1428:
case 1432:
case 871:
case 687:
case 3113:
case 2219:
case 1224:
case 330:
case 372:
case 1347:
case 2573:
case 37:
case 2937:
case 4001:
case 1985:
case 1746:
case 3711:
case 3444:
case 3929:
case 113:
case 3992:
case 269:
case 859:
case 2394:
case 1043:
case 955:
case 1892:
case 3535:
case 2969:
case 1643:
case 787:
case 3885:
case 268:
case 1800:
case 2473:
case 974:
case 208:
case 883:
case 1164:
case 1503:
case 2996:
case 614:
case 1528:
case 2341:
case 2140:
case 4025:
case 2579:
case 3900:
case 2555:
case 2384:
case 1409:
case 3119:
case 1039:
case 3884:
case 2815:
case 1760:
case 2271:
case 713:
case 625:
case 938:
case 3841:
case 3293:
case 397:
case 2250:
case 187:
case 1067:
case 1984:
case 2207:
case 2189:
case 1688:
case 2554:
case 939:
case 3076:
case 3230:
case 981:
case 3676:
case 465:
case 25:
case 817:
case 2166:
case 802:
case 80:
case 2912:
case 3178:
case 3326:
case 3656:
case 1137:
case 919:
case 2697:
case 4016:
case 3114:
case 41:
case 766:
case 679:
case 412:
case 2068:
case 3003:
case 1208:
case 1169:
case 2668:
case 3603:
case 407:
case 1365:
case 2052:
case 1824:
case 576:
case 3840:
case 2338:
case 2322:
case 2964:
case 1196:
case 1761:
case 3543:
case 2652:
case 2087:
case 2270:
case 1035:
case 185:
case 3362:
case 678:
case 1940:
case 2733:
case 1364:
case 2453:
case 1938:
case 3490:
case 2862:
case 1801:
case 1405:
case 2559:
case 1877:
case 2406:
case 4029:
case 166:
case 1576:
case 3899:
case 3866:
case 3925:
case 3710:
case 3433:
case 1989:
case 3567:
case 2749:
case 3480:
case 2527:
case 3889:
case 2965:
case 3539:
case 1634:
case 785:
case 1825:
case 1966:
case 3598:
case 1476:
case 2807:
case 1505:
case 4008:
case 1993:
case 3042:
case 3241:
case 1147:
case 310:
case 3284:
case 3590:
case 2215:
case 2553:
case 294:
case 1216:
case 1983:
case 1930:
case 3502:
case 921:
case 2046:
case 3580:
case 552:
case 3883:
case 2646:
case 2348:
case 3830:
case 2330:
case 3848:
case 2131:
case 727:
case 2214:
case 569:
case 1504:
case 3609:
case 741:
case 1948:
case 1644:
case 3549:
case 1081:
case 1282:
case 2813:
case 568:
case 2510:
case 3350:
case 508:
case 823:
case 2798:
case 1772:
case 606:
case 666:
case 3727:
case 2941:
case 2067:
case 1411:
case 3627:
case 2098:
case 2816:
case 3027:
case 2396:
case 709:
case 2517:
case 1395:
case 1199:
case 2165:
case 15:
case 2442:
case 2369:
case 152:
case 2994:
case 1791:
case 3659:
case 1554:
case 3075:
case 2688:
case 3812:
case 2337:
case 4019:
case 3392:
case 3709:
case 3675:
case 3059:
case 768:
case 3460:
case 2829:
case 1394:
case 3536:
case 2892:
case 3837:
case 492:
case 3886:
case 2643:
case 1745:
case 1986:
case 2746:
case 109:
case 3914:
case 642:
case 4062:
case 2420:
case 4026:
case 3124:
case 2532:
case 2528:
case 2857:
case 1579:
case 3018:
case 1341:
case 2556:
case 2409:
case 1384:
case 752:
case 3074:
case 2800:
case 315:
case 168:
case 680:
case 3742:
case 337:
case 108:
case 2995:
case 3568:
case 1996:
case 65:
case 2649:
case 652:
case 4071:
case 2823:
case 3452:
case 3863:
case 2808:
case 3436:
case 4007:
case 1870:
case 585:
case 2224:
case 1573:
case 2347:
case 176:
case 3951:
case 3497:
case 3264:
case 225:
case 2432:
case 1479:
case 2002:
case 2752:
case 566:
case 390:
case 1262:
case 2787:
case 2633:
case 668:
case 1511:
case 180:
case 1193:
case 2680:
case 922:
case 3006:
case 3308:
case 2363:
case 3606:
case 3728:
case 2090:
case 1226:
case 3053:
case 3703:
case 609:
case 810:
case 2542:
case 14:
case 477:
case 2690:
case 1331:
case 1130:
case 669:
case 3776:
case 794:
case 2504:
case 3269:
case 1418:
case 2948:
case 1474:
case 1788:
case 1131:
case 1214:
case 348:
case 830:
case 3123:
case 2229:
case 3673:
case 1278:
case 2292:
case 2091:
case 872:
case 87:
case 2772:
case 1798:
case 1739:
case 3913:
case 2081:
case 2644:
case 1767:
case 349:
case 1510:
case 2044:
case 2681:
case 3296:
case 2147:
case 964:
case 241:
case 1215:
case 1871:
case 384:
case 1475:
case 2476:
case 1807:
case 3971:
case 846:
case 2505:
case 1459:
case 2993:
case 4051:
case 3611:
case 2045:
case 1348:
case 3011:
case 950:
case 2983:
case 3472:
case 2930:
case 3561:
case 1427:
case 3654:
case 1559:
case 2405:
case 4014:
case 2877:
case 1575:
case 3054:
case 1340:
case 3247:
case 3704:
case 856:
case 4078:
case 3324:
case 362:
case 2922:
case 1453:
case 2364:
case 431:
case 317:
case 801:
case 1862:
case 30:
case 251:
case 335:
case 489:
case 793:
case 1858:
case 2634:
case 1826:
case 3461:
case 2421:
case 488:
case 3865:
case 3926:
case 3958:
case 1749:
case 358:
case 1068:
case 2169:
case 1668:
case 3263:
case 3325:
case 3129:
case 1097:
case 903:
case 1574:
case 2137:
case 4015:
case 3655:
case 1697:
case 3100:
case 1410:
case 936:
case 3721:
case 2940:
case 359:
case 1702:
case 1052:
case 1195:
case 2824:
case 1687:
case 1322:
case 3182:
case 444:
case 525:
case 2953:
case 864:
case 3990:
case 1499:
case 3805:
case 3477:
case 1593:
case 2906:
case 373:
case 1310:
case 3401:
case 3217:
case 2861:
case 2304:
case 1489:
case 2724:
case 59:
case 1802:
case 592:
case 3764:
case 3902:
case 260:
case 2465:
case 3821:
case 1466:
case 200:
case 1530:
case 275:
case 243:
case 2051:
case 2670:
case 479:
case 2120:
case 667:
case 2236:
case 2070:
case 3804:
case 3361:
case 1849:
case 1023:
case 2464:
case 1353:
case 441:
case 3031:
case 345:
case 3232:
case 478:
case 1306:
case 2725:
case 3203:
case 2109:
case 2268:
case 691:
case 2305:
case 726:
case 3424:
case 427:
case 3187:
case 1281:
case 3372:
case 3695:
case 1657:
case 4034:
case 1682:
case 1327:
case 528:
case 3220:
case 2260:
case 2918:
case 791:
case 1000:
case 1448:
case 577:
case 1629:
case 2128:
case 529:
case 707:
case 2376:
case 2014:
case 1375:
case 1540:
case 406:
case 3085:
case 1179:
case 1029:
case 1843:
case 712:
case 3685:
case 231:
case 3943:
case 2564:
case 3209:
case 3168:
case 451:
case 2959:
case 3988:
case 3501:
case 1888:
case 901:
case 3094:
case 3577:
case 244:
case 1538:
case 1522:
case 4035:
case 3694:
case 2117:
case 3876:
case 11:
case 1430:
case 167:
case 1713:
case 2927:
case 997:
case 338:
case 840:
case 2615:
case 3684:
case 1318:
case 1154:
case 3242:
case 3041:
case 3967:
case 5:
case 3084:
case 2015:
case 1016:
case 2872:
case 3525:
case 318:
case 3423:
case 543:
case 3204:
case 3747:
case 1624:
case 2887:
case 899:
case 3640:
case 1174:
case 3592:
case 2537:
case 3408:
case 2619:
case 786:
case 1956:
case 2955:
case 1932:
case 2979:
case 319:
case 3803:
case 3557:
case 4039:
case 1595:
case 2596:
case 898:
case 3856:
case 2897:
case 732:
case 3689:
case 73:
case 705:
case 3516:
case 770:
case 2058:
case 1175:
case 3763:
case 3089:
case 2332:
case 3817:
case 1625:
case 816:
case 2723:
case 3666:
case 3066:
case 1127:
case 4043:
case 3221:
case 3022:
case 3038:
case 3352:
case 1233:
case 292:
case 3638:
case 1594:
case 3172:
case 186:
case 560:
case 413:
case 2062:
case 2261:
case 1770:
case 1153:
case 1845:
case 347:
case 1714:
case 3786:
case 2309:
case 2105:
case 1484:
case 2792:
case 1778:
case 2911:
case 544:
case 1106:
case 3416:
case 1239:
case 665:
case 3693:
case 2272:
case 2650:
case 605:
case 3842:
case 4049:
case 2121:
case 670:
case 2671:
case 2607:
case 3360:
case 1494:
case 2782:
case 3796:
case 2757:
case 2007:
case 2:
case 2437:
case 1485:
case 2563:
case 228:
case 2716:
case 3944:
case 3492:
case 1715:
case 686:
case 1920:
case 4090:
case 1531:
case 1844:
case 2342:
case 3820:
case 3523:
case 277:
case 1881:
case 553:
case 229:
case 1495:
case 3712:
case 3457:
case 2496:
case 3991:
case 3648:
case 3048:
case 1110:
case 4080:
case 4052:
case 3859:
case 2245:
case 3343:
case 291:
case 3612:
case 3875:
case 3134:
case 2522:
case 4036:
case 4087:
case 1117:
case 3211:
case 1975:
case 2976:
case 3471:
case 896:
case 3450:
case 3748:
case 493:
case 2154:
case 2589:
case 2616:
case 2374:
case 2839:
case 1872:
case 2016:
case 731:
case 21:
case 2566:
case 267:
case 2430:
case 857:
case 2867:
case 207:
case 2771:
case 188:
case 3367:
case 1260:
case 2600:
case 744:
case 1918:
case 3793:
case 600:
case 3398:
case 2281:
case 915:
case 3135:
case 2682:
case 2244:
case 2707:
case 3818:
case 3096:
case 937:
case 131:
case 818:
case 3069:
case 3783:
case 1564:
case 3413:
case 3086:
case 1128:
case 2692:
case 399:
case 1678:
case 2540:
case 2375:
case 3637:
case 1156:
case 3519:
case 2359:
case 1614:
case 2155:
case 2092:
case 1078:
case 2291:
case 3388:
case 3799:
case 3738:
case 3722:
case 1777:
case 1670:
case 4046:
case 143:
case 1701:
case 2548:
case 3144:
case 1651:
case 2762:
case 1070:
case 3181:
case 3380:
case 3333:
case 754:
case 2306:
case 700:
case 1725:
case 775:
case 1910:
case 3419:
case 1268:
case 2008:
case 3063:
case 2758:
case 2849:
case 2023:
case 1464:
case 2353:
case 923:
case 3255:
case 2623:
case 494:
case 3279:
case 2173:
case 631:
case 2111:
case 2310:
case 2593:
case 3853:
case 3145:
case 3571:
case 3462:
case 1953:
case 2422:
case 3507:
case 743:
case 688:
case 1142:
case 3254:
case 653:
case 3047:
case 2583:
case 2530:
case 100:
case 2921:
case 1861:
case 821:
case 2489:
case 32:
case 3740:
case 322:
case 1724:
case 2844:
case 3960:
case 3218:
case 1469:
case 1342:
case 845:
case 177:
case 1486:
case 1437:
case 3741:
case 1563:
case 2485:
case 692:
case 1860:
case 3478:
case 3345:
case 7:
case 3149:
case 2891:
case 2909:
case 2495:
case 948:
case 3785:
case 2441:
case 591:
case 3415:
case 1911:
case 2373:
case 3275:
case 1547:
case 2153:
case 3259:
case 3391:
case 3190:
case 2845:
case 2942:
case 1782:
case 1007:
case 3795:
case 3102:
case 1757:
case 3133:
case 1650:
case 51:
case 2298:
case 3180:
case 512:
case 873:
case 729:
case 1121:
case 3227:
case 1050:
case 468:
case 408:
case 340:
case 111:
case 2159:
case 2355:
case 1026:
case 629:
case 2025:
case 1626:
case 1708:
case 1058:
case 2175:
case 2625:
case 1176:
case 839:
case 382:
case 2001:
case 409:
case 677:
case 1954:
case 469:
case 881:
case 3167:
case 1261:
case 2601:
case 2127:
case 1512:
case 2233:
case 935:
case 90:
case 286:
case 2077:
case 2280:
case 1887:
case 1836:
case 2624:
case 2174:
case 3578:
case 1852:
case 1619:
case 2354:
case 265:
case 855:
case 23:
case 232:
case 1569:
case 2595:
case 1596:
case 3968:
case 3879:
case 2249:
case 983:
case 874:
case 2956:
case 3997:
case 1955:
case 79:
case 2928:
case 3470:
case 1868:
case 1979:
case 3690:
case 894:
case 3542:
case 2653:
case 3768:
case 2308:
case 2265:
case 1779:
case 2606:
case 772:
case 2756:
case 3033:
case 4048:
case 2546:
case 535:
case 1370:
case 1171:
case 3080:
case 502:
case 1238:
case 3680:
case 1299:
case 56:
case 3736:
case 290:
case 314:
case 1434:
case 926:
case 3417:
case 3002:
case 3432:
case 325:
case 697:
case 1754:
case 2951:
case 421:
case 3509:
case 1604:
case 2497:
case 3224:
case 559:
case 172:
case 1240:
case 447:
case 4083:
case 4030:
case 3403:
case 2487:
case 2436:
case 1435:
case 1923:
case 223:
case 3808:
case 3823:
case 2610:
case 1908:
case 2010:
case 3649:
case 601:
case 1957:
case 3995:
case 3503:
case 1982:
case 2742:
case 4089:
case 3556:
case 3882:
case 1900:
case 1119:
case 3409:
case 2618:
case 3857:
case 2124:
case 1895:
case 3528:
case 761:
case 893:
case 2018:
case 1444:
case 1929:
case 2869:
case 548:
case 797:
case 496:
case 3985:
case 571:
case 3643:
case 3312:
case 2587:
case 4022:
case 3043:
case 2460:
case 3829:
case 646:
case 2059:
case 2392:
case 2329:
case 156:
case 1894:
case 1158:
case 1314:
case 1076:
case 2812:
case 3442:
case 991:
case 101:
case 3994:
case 3639:
case 197:
case 3517:
case 967:
case 2627:
case 3039:
case 91:
case 3760:
case 3816:
case 584:
case 630:
case 2720:
case 3984:
case 2300:
case 2101:
case 672:
case 3667:
case 419:
case 67:
case 387:
case 1445:
case 3067:
case 93:
case 3761:
case 195:
case 2377:
case 2182:
case 905:
case 970:
case 3035:
case 1449:
case 259:
case 3940:
case 481:
case 439:
case 610:
case 809:
case 2919:
case 1656:
case 4084:
case 3137:
case 3186:
case 3404:
case 1114:
case 2129:
case 1632:
case 2325:
case 2679:
case 2192:
case 523:
case 2705:
case 1326:
case 808:
case 2263:
case 3365:
case 258:
case 868:
case 3989:
case 2865:
case 795:
case 1925:
case 3634:
case 3825:
case 3966:
case 2572:
case 1402:
case 3112:
case 1017:
case 986:
case 1977:
case 351:
case 3364:
case 85:
case 262:
case 3938:
case 1490:
case 852:
case 3999:
case 217:
case 2054:
case 2962:
case 3405:
case 1115:
case 2654:
case 3877:
case 1901:
case 1502:
case 3930:
case 1498:
case 1883:
case 2011:
case 2212:
case 1830:
case 379:
case 880:
case 3045:
case 1294:
case 1580:
case 2611:
case 695:
case 1774:
case 2950:
case 327:
case 2971:
case 3476:
case 1284:
case 842:
case 445:
case 84:
case 4031:
case 1642:
case 378:
case 3216:
case 341:
case 3257:
case 1151:
case 1295:
case 1350:
case 3044:
case 3081:
case 3282:
case 1371:
case 2913:
case 1727:
case 3772:
case 1443:
case 248:
case 3292:
case 2673:
case 2286:
case 2237:
case 3691:
case 1285:
case 710:
case 1009:
case 2776:
case 876:
case 2108:
case 1775:
case 3791:
case 261:
case 3912:
case 35:
case 352:
case 201:
case 2126:
case 1392:
case 2378:
case 1675:
case 715:
case 866:
case 2676:
case 1659:
case 2314:
case 623:
case 3554:
case 3385:
case 2283:
case 2230:
case 806:
case 1101:
case 3411:
case 3744:
case 403:
case 1446:
case 510:
case 2162:
case 1357:
case 3250:
case 297:
case 2293:
case 3199:
case 1627:
case 3271:
case 1316:
case 3213:
case 2119:
case 1618:
case 1597:
case 1074:
case 3555:
case 1124:
case 3579:
case 1018:
case 3140:
case 3341:
case 2957:
case 2491:
case 1568:
case 3996:
case 115:
case 368:
case 1742:
case 1837:
case 2885:
case 3814:
case 3878:
case 2535:
case 931:
case 2444:
case 2992:
case 2481:
case 885:
case 3745:
case 482:
case 3937:
case 230:
case 3851:
case 624:
case 3573:
case 27:
case 2240:
case 3870:
case 2591:
case 1970:
case 2754:
case 2004:
case 3455:
case 2604:
case 1610:
case 2908:
case 3148:
case 1436:
case 404:
case 2435:
case 1717:
case 2923:
case 123:
case 2779:
case 2605:
case 1265:
case 2266:
case 1732:
case 2755:
case 342:
case 1653:
case 3258:
case 2289:
case 3331:
case 3130:
case 878:
case 841:
case 190:
case 3262:
case 960:
case 2434:
case 2107:
case 637:
case 2621:
case 615:
case 2222:
case 2021:
case 1847:
case 879:
case 2150:
case 3511:
case 3193:
case 1913:
case 3060:
case 3510:
case 2295:
case 602:
case 2350:
case 2020:
case 1296:
case 2170:
case 662:
case 149:
case 617:
case 3813:
case 422:
case 825:
case 2759:
case 3474:
case 1776:
case 2775:
case 2609:
case 148:
case 1123:
case 929:
case 3131:
case 1237:
case 1286:
case 2848:
case 2285:
case 3214:
case 3348:
case 2830:
case 1011:
case 2533:
case 658:
case 1611:
case 2580:
case 2294:
case 556:
case 2502:
case 814:
case 2439:
case 3743:
case 2642:
case 3215:
case 9:
case 659:
case 3871:
case 2241:
case 3850:
case 597:
case 771:
case 1950:
case 2718:
case 3475:
case 3807:
case 911:
case 1572:
case 3858:
case 2017:
case 2402:
case 648:
case 2433:
case 1958:
case 2480:
case 2567:
case 1865:
case 887:
case 2838:
case 2822:
case 3575:
case 3340:
case 1054:
case 2899:
case 758:
case 320:
case 4086:
case 1654:
case 4037:
case 3184:
case 2901:
case 783:
case 1116:
case 102:
case 10:
case 99:
case 992:
case 16:
case 2490:
case 162:
case 649:
case 2362:
case 813:
case 530:
case 1301:
case 3410:
case 1100:
case 3270:
case 1182:
case 2543:
case 3652:
case 3819:
case 4012:
case 3251:
case 3052:
case 3195:
case 3399:
case 3338:
case 3366:
case 183:
case 3668:
case 1263:
case 3518:
case 76:
case 3185:
case 1655:
case 3697:
case 2056:
case 2706:
case 2632:
case 2628:
case 3097:
case 2326:
case 1705:
case 702:
case 3574:
case 2178:
case 1679:
case 70:
case 2740:
case 674:
case 3921:
case 745:
case 2254:
case 2961:
case 3833:
case 1764:
case 326:
case 582:
case 3880:
case 1805:
case 3438:
case 2507:
case 4020:
case 2349:
case 655:
case 3593:
case 173:
case 3310:
case 1217:
case 877:
case 3623:
case 1232:
case 2766:
case 681:
case 1765:
case 2279:
case 639:
case 4042:
case 2255:
case 2191:
case 503:
case 3353:
case 2513:
case 1949:
case 2063:
case 3440:
case 3306:
case 2419:
case 1203:
case 2181:
case 3762:
case 925:
case 2722:
case 2686:
case 913:
case 3155:
case 1685:
case 2519:
case 3359:
case 1524:
case 2086:
case 2037:
case 3375:
case 1168:
case 2413:
case 1209:
case 2669:
case 2730:
case 1943:
case 155:
case 2783:
case 3244:
case 1095:
case 3327:
case 1220:
case 1187:
case 3281:
case 2398:
case 781:
case 3082:
case 1136:
case 1695:
case 3657:
case 2135:
case 3000:
case 2367:
case 307:
case 811:
case 3867:
case 31:
case 3483:
case 3430:
case 2972:
case 367:
case 1641:
case 4028:
case 3839:
case 3374:
case 504:
case 755:
case 3898:
case 4056:
case 1684:
case 1242:
case 2827:
case 1967:
case 1988:
case 1501:
case 2450:
case 3493:
case 139:
case 2562:
case 3976:
case 892:
case 89:
case 2875:
case 3522:
case 3538:
case 3599:
case 1694:
case 2211:
case 2343:
case 2612:
case 391:
case 3245:
case 853:
case 3928:
case 263:
case 203:
case 2451:
case 1500:
case 2143:
case 3249:
case 497:
case 1832:
case 3595:
case 2879:
case 2968:
case 2334:
case 370:
case 3431:
case 461:
case 889:
case 1204:
case 332:
case 33:
case 118:
case 2952:
case 1423:
case 401:
case 3024:
case 1408:
case 3354:
case 3118:
case 3585:
case 236:
case 1529:
case 3624:
case 4076:
case 3835:
case 1592:
case 951:
case 2139:
case 3233:
case 1638:
case 1172:
case 2198:
case 1699:
case 522:
case 3280:
case 3127:
case 719:
case 1038:
case 1022:
case 1352:
case 3677:
case 1099:
case 966:
case 906:
case 3001:
case 3202:
case 1763:
case 718:
case 1817:
case 1397:
case 1689:
case 2188:
case 933:
case 3290:
case 2253:
case 1205:
case 2665:
case 2206:
case 1842:
case 2227:
case 2344:
case 2133:
case 3239:
case 2180:
case 3298:
case 516:
case 1796:
case 978:
case 3942:
case 941:
case 3267:
case 3494:
case 3288:
case 3153:
case 619:
case 3845:
case 147:
case 47:
case 1769:
case 2275:
case 1083:
case 3373:
case 1276:
case 2415:
case 3484:
case 3106:
case 1416:
case 3714:
case 121:
case 1786:
case 1737:
case 3495:
case 1457:
case 1991:
case 2794:
case 1482:
case 599:
case 1809:
case 3110:
case 3311:
case 2551:
case 2873:
case 1648:
case 4021:
case 2345:
case 2570:
case 843:
case 3891:
case 1429:
case 1944:
case 3715:
case 3920:
case 747:
case 1981:
case 3485:
case 446:
case 1508:
case 1523:
case 721:
case 2274:
case 3531:
case 3844:
case 3015:
case 1526:
case 2641:
case 3872:
case 2041:
case 2242:
case 2967:
case 3927:
case 2939:
case 2998:
case 1012:
case 1407:
case 2876:
case 886:
case 2694:
case 3246:
case 1859:
case 95:
case 1612:
case 2988:
case 547:
case 3959:
case 459:
case 1748:
case 3975:
case 239:
case 1471:
case 40:
case 832:
case 435:
case 83:
case 3103:
case 2168:
case 1730:
case 331:
case 462:
case 716:
case 46:
case 865:
case 4054:
case 2685:
case 3078:
case 1388:
case 3376:
case 2524:
case 3128:
case 3678:
case 199:
case 2085:
case 3974:
case 3918:
case 62:
case 198:
case 2152:
case 622:
case 2095:
case 2220:
case 2695:
case 2136:
case 1135:
case 2949:
case 3910:
case 3305:
case 2203:
case 1419:
case 3268:
case 1663:
case 2228:
case 519:
case 245:
case 2765:
case 2631:
case 1191:
case 3297:
case 1390:
case 1255:
case 2160:
case 1722:
case 3651:
case 1181:
case 4011:
case 343:
case 3051:
case 3701:
case 3252:
case 976:
case 518:
case 3142:
case 1047:
case 448:
case 1647:
case 471:
case 360:
case 3304:
case 1458:
case 122:
case 2980:
case 3861:
case 2425:
case 2146:
case 1145:
case 1349:
case 1462:
case 273:
case 1550:
case 449:
case 3906:
case 1806:
case 2990:
case 699:
case 1507:
case 2048:
case 2400:
case 1570:
case 1345:
case 1149:
case 2648:
case 555:
case 704:
case 3496:
case 490:
case 2482:
case 3973:
case 68:
case 3613:
case 1218:
case 2944:
case 750:
case 1784:
case 1478:
case 2492:
case 2981:
case 3486:
case 3437:
case 1414:
case 3007:
case 3:
case 1795:
case 3412:
case 994:
case 423:
case 636:
case 164:
case 3782:
case 3121:
case 3671:
case 2093:
case 3700:
case 3050:
case 1133:
case 4010:
case 3650:
case 2693:
case 3272:
case 3071:
case 3309:
case 3911:
case 1785:
case 2737:
case 221:
case 1391:
case 3846:
case 2630:
case 247:
case 2083:
case 3547:
case 826:
case 2030:
case 2276:
case 1811:
case 1167:
case 3261:
case 3062:
case 182:
case 1139:
case 2622:
case 39:
case 2336:
case 2387:
case 2172:
case 1198:
case 1854:
case 2038:
case 2099:
case 763:
case 2352:
case 3512:
case 1065:
case 437:
case 311:
case 1731:
case 2205:
case 1665:
case 81:
case 2934:
case 257:
case 867:
case 2089:
case 3708:
case 3176:
case 3332:
case 1253:
case 1515:
case 2397:
case 3026:
case 2689:
case 4018:
case 3356:
case 2516:
case 2582:
case 2856:
case 782:
case 3897:
case 2832:
case 2557:
case 1879:
case 163:
case 1470:
case 2803:
case 3868:
case 219:
case 2500:
case 1451:
case 1997:
case 604:
case 3852:
case 1514:
case 3619:
case 3836:
case 740:
case 664:
case 136:
case 3019:
case 1987:
case 2935:
case 3569:
case 2747:
case 2423:
case 1952:
case 218:
case 1064:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753200002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,];
var gg_b = "1753200002/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
