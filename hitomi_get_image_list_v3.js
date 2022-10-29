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
case 178:
case 152:
case 1252:
case 2223:
case 382:
case 2858:
case 4029:
case 3062:
case 755:
case 2042:
case 875:
case 1138:
case 1442:
case 3908:
case 2119:
case 1529:
case 2257:
case 1245:
case 4047:
case 337:
case 346:
case 972:
case 1264:
case 809:
case 1238:
case 2351:
case 1332:
case 1665:
case 2671:
case 1353:
case 3067:
case 2285:
case 472:
case 1922:
case 869:
case 3038:
case 4046:
case 1866:
case 1317:
case 479:
case 3972:
case 1312:
case 1781:
case 375:
case 1747:
case 2942:
case 3838:
case 2304:
case 395:
case 3621:
case 645:
case 712:
case 1640:
case 1484:
case 284:
case 3940:
case 2660:
case 3301:
case 2845:
case 1275:
case 820:
case 2525:
case 1036:
case 3332:
case 1367:
case 1130:
case 108:
case 3000:
case 213:
case 641:
case 1006:
case 1549:
case 2069:
case 2622:
case 2313:
case 2566:
case 550:
case 3941:
case 2668:
case 2741:
case 2182:
case 1956:
case 652:
case 1165:
case 1031:
case 1446:
case 1868:
case 42:
case 1350:
case 1444:
case 2511:
case 2250:
case 2491:
case 956:
case 1369:
case 1489:
case 3587:
case 3804:
case 1400:
case 1363:
case 2882:
case 1738:
case 1298:
case 1326:
case 425:
case 49:
case 3487:
case 2937:
case 2609:
case 1313:
case 1679:
case 3574:
case 3903:
case 1651:
case 1836:
case 772:
case 4091:
case 3422:
case 867:
case 571:
case 1136:
case 756:
case 1089:
case 1404:
case 2507:
case 1648:
case 2920:
case 1253:
case 463:
case 1210:
case 94:
case 2523:
case 2559:
case 173:
case 3875:
case 688:
case 235:
case 146:
case 3512:
case 1070:
case 2909:
case 2494:
case 1592:
case 3459:
case 2651:
case 2974:
case 3752:
case 2818:
case 784:
case 273:
case 3252:
case 2746:
case 541:
case 2122:
case 2192:
case 431:
case 1334:
case 423:
case 2270:
case 977:
case 3511:
case 2916:
case 1140:
case 2230:
case 1957:
case 1815:
case 899:
case 1865:
case 3508:
case 3431:
case 2185:
case 2148:
case 3610:
case 445:
case 3204:
case 2613:
case 199:
case 2256:
case 1850:
case 943:
case 2986:
case 1408:
case 3031:
case 1054:
case 2702:
case 1604:
case 260:
case 3825:
case 2243:
case 3177:
case 665:
case 1936:
case 2299:
case 1590:
case 1973:
case 4059:
case 378:
case 3743:
case 3856:
case 127:
case 3792:
case 4043:
case 748:
case 430:
case 955:
case 2972:
case 3086:
case 1256:
case 3707:
case 440:
case 2426:
case 2067:
case 1436:
case 3154:
case 2947:
case 224:
case 3532:
case 1770:
case 610:
case 2748:
case 3992:
case 2464:
case 3906:
case 1672:
case 2342:
case 399:
case 3330:
case 2967:
case 2070:
case 873:
case 852:
case 3272:
case 349:
case 3123:
case 1012:
case 3210:
case 2198:
case 3900:
case 3607:
case 343:
case 3371:
case 3485:
case 3979:
case 1364:
case 792:
case 3624:
case 206:
case 597:
case 3615:
case 2074:
case 1885:
case 1205:
case 1532:
case 1224:
case 2926:
case 1409:
case 640:
case 2889:
case 2164:
case 824:
case 2950:
case 105:
case 2418:
case 1649:
case 8:
case 1001:
case 1284:
case 2314:
case 2020:
case 3515:
case 1461:
case 3215:
case 1879:
case 563:
case 3085:
case 3478:
case 3530:
case 188:
case 1756:
case 1161:
case 3259:
case 29:
case 794:
case 2044:
case 3225:
case 1439:
case 380:
case 3365:
case 3763:
case 3686:
case 546:
case 957:
case 3374:
case 848:
case 2358:
case 759:
case 3618:
case 1497:
case 1102:
case 3661:
case 2170:
case 3257:
case 1237:
case 2577:
case 2434:
case 980:
case 4068:
case 577:
case 1432:
case 102:
case 1830:
case 426:
case 3750:
case 2841:
case 2514:
case 3101:
case 2392:
case 2821:
case 3943:
case 1261:
case 305:
case 1388:
case 2753:
case 1897:
case 528:
case 3631:
case 2277:
case 3561:
case 106:
case 595:
case 2080:
case 2157:
case 1950:
case 1646:
case 3509:
case 2442:
case 3805:
case 3276:
case 69:
case 229:
case 863:
case 995:
case 2273:
case 67:
case 2383:
case 1994:
case 782:
case 1342:
case 503:
case 286:
case 3951:
case 579:
case 1340:
case 2776:
case 897:
case 1613:
case 2694:
case 2524:
case 2744:
case 2249:
case 2990:
case 165:
case 2719:
case 2881:
case 2450:
case 729:
case 2897:
case 4026:
case 2430:
case 2132:
case 2346:
case 1397:
case 3520:
case 1227:
case 154:
case 1360:
case 2315:
case 671:
case 635:
case 3027:
case 2743:
case 3353:
case 2179:
case 2221:
case 1807:
case 3528:
case 3907:
case 283:
case 679:
case 3503:
case 2661:
case 1294:
case 1841:
case 2009:
case 2894:
case 1696:
case 3269:
case 2982:
case 637:
case 844:
case 1816:
case 2624:
case 2436:
case 3967:
case 1345:
case 397:
case 2703:
case 355:
case 1884:
case 3544:
case 1192:
case 175:
case 3719:
case 1988:
case 1085:
case 2789:
case 1723:
case 584:
case 2836:
case 1468:
case 1835:
case 745:
case 3028:
case 3122:
case 4048:
case 1173:
case 2337:
case 73:
case 3779:
case 3359:
case 1748:
case 2081:
case 2064:
case 2978:
case 2542:
case 3700:
case 3684:
case 320:
case 969:
case 568:
case 2567:
case 619:
case 3231:
case 624:
case 339:
case 1301:
case 687:
case 365:
case 812:
case 2084:
case 3685:
case 414:
case 2090:
case 1615:
case 1134:
case 133:
case 2437:
case 1564:
case 3152:
case 2570:
case 1736:
case 946:
case 598:
case 484:
case 2984:
case 289:
case 2641:
case 3117:
case 3932:
case 2707:
case 482:
case 128:
case 483:
case 3049:
case 3155:
case 3677:
case 2677:
case 417:
case 4090:
case 1164:
case 719:
case 2591:
case 274:
case 653:
case 1465:
case 1989:
case 171:
case 1758:
case 2187:
case 3811:
case 2726:
case 3443:
case 3421:
case 1555:
case 795:
case 2017:
case 539:
case 3153:
case 1263:
case 1126:
case 4050:
case 1033:
case 3543:
case 1917:
case 2133:
case 3591:
case 3083:
case 444:
case 837:
case 2355:
case 2191:
case 2455:
case 974:
case 3340:
case 3455:
case 3570:
case 3573:
case 3361:
case 1677:
case 3460:
case 2679:
case 319:
case 3799:
case 3556:
case 2395:
case 2646:
case 1306:
case 3655:
case 2497:
case 526:
case 1122:
case 3192:
case 783:
case 769:
case 3:
case 2489:
case 930:
case 3053:
case 523:
case 2575:
case 3453:
case 1287:
case 2690:
case 1854:
case 2931:
case 1609:
case 2228:
case 2722:
case 2096:
case 1570:
case 2492:
case 2030:
case 1621:
case 59:
case 1847:
case 3581:
case 2288:
case 727:
case 98:
case 1894:
case 400:
case 190:
case 1887:
case 3653:
case 2657:
case 1487:
case 1516:
case 3296:
case 1133:
case 1105:
case 3888:
case 3108:
case 2737:
case 549:
case 2419:
case 2823:
case 3822:
case 492:
case 3767:
case 4019:
case 1517:
case 120:
case 3773:
case 2728:
case 2107:
case 3679:
case 3429:
case 2432:
case 664:
case 3468:
case 3302:
case 3310:
case 2857:
case 3829:
case 428:
case 3483:
case 2233:
case 3287:
case 3241:
case 1387:
case 2268:
case 3893:
case 3797:
case 3156:
case 715:
case 2091:
case 655:
case 85:
case 1108:
case 3230:
case 2522:
case 10:
case 2196:
case 3815:
case 3850:
case 1356:
case 2822:
case 2350:
case 1211:
case 3982:
case 1080:
case 1954:
case 1017:
case 876:
case 3952:
case 1608:
case 3657:
case 3857:
case 618:
case 3407:
case 174:
case 2357:
case 2269:
case 998:
case 2460:
case 2309:
case 3227:
case 2189:
case 243:
case 698:
case 2944:
case 3847:
case 3390:
case 2682:
case 3017:
case 155:
case 2768:
case 2391:
case 819:
case 2683:
case 332:
case 2912:
case 2884:
case 1495:
case 849:
case 3175:
case 740:
case 3294:
case 1521:
case 66:
case 3430:
case 1669:
case 1923:
case 834:
case 1266:
case 939:
case 1668:
case 68:
case 1359:
case 1877:
case 2605:
case 1292:
case 1049:
case 1906:
case 2928:
case 991:
case 3599:
case 3080:
case 2545:
case 780:
case 458:
case 1853:
case 2844:
case 2562:
case 1315:
case 515:
case 2465:
case 1735:
case 1435:
case 1757:
case 1466:
case 251:
case 1926:
case 1081:
case 2665:
case 3976:
case 3604:
case 469:
case 2620:
case 4017:
case 3551:
case 1867:
case 923:
case 141:
case 193:
case 697:
case 586:
case 2287:
case 2649:
case 3521:
case 775:
case 3059:
case 3977:
case 2503:
case 3859:
case 1762:
case 2319:
case 3498:
case 2376:
case 97:
case 1200:
case 3376:
case 2216:
case 1328:
case 625:
case 1447:
case 1929:
case 2158:
case 3842:
case 1351:
case 1632:
case 1789:
case 3798:
case 2145:
case 407:
case 857:
case 1440:
case 1325:
case 1170:
case 3606:
case 3379:
case 765:
case 2050:
case 895:
case 2259:
case 3962:
case 3577:
case 2965:
case 1202:
case 1482:
case 1106:
case 2402:
case 1891:
case 871:
case 2527:
case 3072:
case 3247:
case 2992:
case 72:
case 3066:
case 2955:
case 328:
case 2166:
case 3029:
case 2014:
case 961:
case 3366:
case 888:
case 853:
case 3309:
case 1428:
case 593:
case 2246:
case 1937:
case 2908:
case 879:
case 306:
case 4054:
case 914:
case 3636:
case 935:
case 2399:
case 3506:
case 82:
case 2696:
case 2054:
case 2952:
case 963:
case 2062:
case 2130:
case 2855:
case 2556:
case 1120:
case 3753:
case 1768:
case 3549:
case 1611:
case 548:
case 2010:
case 1763:
case 1796:
case 402:
case 2959:
case 2880:
case 3894:
case 3733:
case 1722:
case 406:
case 1297:
case 2839:
case 3494:
case 1154:
case 3466:
case 39:
case 219:
case 744:
case 1046:
case 3069:
case 3523:
case 3112:
case 1050:
case 92:
case 527:
case 2773:
case 3001:
case 768:
case 433:
case 2610:
case 3627:
case 3959:
case 1806:
case 2118:
case 2975:
case 3432:
case 1550:
case 1602:
case 2018:
case 3157:
case 1057:
case 3394:
case 4023:
case 2639:
case 1283:
case 2846:
case 3853:
case 3129:
case 3133:
case 446:
case 3032:
case 2936:
case 800:
case 2662:
case 764:
case 2961:
case 185:
case 3464:
case 1142:
case 1277:
case 333:
case 3184:
case 3410:
case 2784:
case 770:
case 1293:
case 1347:
case 2481:
case 2498:
case 2693:
case 3197:
case 1783:
case 2691:
case 2923:
case 545:
case 1773:
case 2793:
case 570:
case 2286:
case 1225:
case 1026:
case 3222:
case 3446:
case 1251:
case 2864:
case 1212:
case 3382:
case 3304:
case 3246:
case 3886:
case 511:
case 2022:
case 151:
case 1441:
case 3244:
case 3409:
case 2758:
case 3504:
case 836:
case 3182:
case 2815:
case 3315:
case 3897:
case 3688:
case 3051:
case 1528:
case 3958:
case 1375:
case 695:
case 3708:
case 95:
case 3742:
case 2232:
case 495:
case 588:
case 2359:
case 1734:
case 642:
case 2136:
case 3327:
case 1828:
case 717:
case 2598:
case 3491:
case 2964:
case 3630:
case 3201:
case 1058:
case 37:
case 1752:
case 1676:
case 2087:
case 156:
case 301:
case 2028:
case 517:
case 3692:
case 912:
case 2075:
case 237:
case 176:
case 3447:
case 3354:
case 500:
case 3764:
case 2343:
case 3965:
case 890:
case 1083:
case 878:
case 2488:
case 2425:
case 3887:
case 2291:
case 3737:
case 683:
case 1628:
case 2049:
case 596:
case 1563:
case 817:
case 670:
case 3023:
case 2796:
case 2809:
case 2554:
case 2971:
case 277:
case 384:
case 3212:
case 1425:
case 2183:
case 2851:
case 3918:
case 3020:
case 1419:
case 1914:
case 4069:
case 371:
case 2548:
case 1391:
case 721:
case 3484:
case 2626:
case 1561:
case 1213:
case 1045:
case 3391:
case 1407:
case 2585:
case 1916:
case 3964:
case 2751:
case 2173:
case 2980:
case 2528:
case 2739:
case 3493:
case 2374:
case 3109:
case 158:
case 578:
case 345:
case 3600:
case 2123:
case 1386:
case 4094:
case 2320:
case 2036:
case 3954:
case 2252:
case 1699:
case 2194:
case 2007:
case 616:
case 2111:
case 913:
case 3010:
case 1507:
case 2543:
case 3078:
case 3444:
case 708:
case 3913:
case 846:
case 2390:
case 513:
case 1324:
case 1742:
case 2086:
case 868:
case 3500:
case 3834:
case 1427:
case 1217:
case 2895:
case 119:
case 112:
case 2254:
case 1063:
case 821:
case 979:
case 2627:
case 3426:
case 983:
case 3096:
case 1855:
case 3535:
case 1362:
case 1744:
case 3189:
case 2255:
case 2977:
case 168:
case 3852:
case 2297:
case 2155:
case 790:
case 524:
case 363:
case 2382:
case 1480:
case 2276:
case 3073:
case 3652:
case 2652:
case 3930:
case 1966:
case 540:
case 2674:
case 1817:
case 4093:
case 2095:
case 288:
case 488:
case 210:
case 2474:
case 2927:
case 442:
case 906:
case 2407:
case 110:
case 308:
case 3890:
case 3572:
case 3724:
case 3346:
case 1719:
case 2802:
case 1390:
case 3054:
case 2969:
case 632:
case 1799:
case 2265:
case 1919:
case 3226:
case 3148:
case 904:
case 1117:
case 3004:
case 706:
case 3284:
case 678:
case 494:
case 3883:
case 2065:
case 2517:
case 196:
case 3008:
case 1032:
case 3147:
case 1725:
case 1656:
case 1043:
case 3732:
case 1620:
case 3892:
case 731:
case 971:
case 4020:
case 3476:
case 3289:
case 937:
case 3748:
case 3025:
case 2298:
case 2629:
case 992:
case 1501:
case 718:
case 3550:
case 839:
case 2214:
case 3360:
case 2571:
case 3011:
case 139:
case 2781:
case 2808:
case 2472:
case 2323:
case 2373:
case 2780:
case 1713:
case 2852:
case 909:
case 3014:
case 3322:
case 2966:
case 2121:
case 3463:
case 805:
case 2736:
case 3862:
case 2361:
case 1072:
case 1346:
case 1433:
case 1791:
case 3761:
case 4003:
case 2530:
case 1697:
case 3585:
case 2653:
case 1584:
case 1821:
case 309:
case 137:
case 3381:
case 1182:
case 2163:
case 2439:
case 4035:
case 421:
case 2027:
case 574:
case 2723:
case 2420:
case 3901:
case 3580:
case 4012:
case 2089:
case 1207:
case 2352:
case 3208:
case 4041:
case 1285:
case 2687:
case 1355:
case 838:
case 245:
case 2676:
case 3876:
case 77:
case 377:
case 1952:
case 3676:
case 2552:
case 1694:
case 3741:
case 3351:
case 86:
case 555:
case 476:
case 2097:
case 2218:
case 3114:
case 3412:
case 1552:
case 966:
case 2169:
case 1681:
case 3869:
case 2817:
case 203:
case 1223:
case 1091:
case 2317:
case 2037:
case 2078:
case 1299:
case 485:
case 3680:
case 954:
case 2458:
case 656:
case 3860:
case 390:
case 1034:
case 1434:
case 443:
case 2998:
case 1657:
case 627:
case 1504:
case 187:
case 3183:
case 3617:
case 4014:
case 1071:
case 1478:
case 2174:
case 2236:
case 3849:
case 3910:
case 2471:
case 3345:
case 2431:
case 3050:
case 2762:
case 2874:
case 2348:
case 739:
case 369:
case 1930:
case 3723:
case 2812:
case 3827:
case 2519:
case 3839:
case 3186:
case 227:
case 2247:
case 3991:
case 3720:
case 1271:
case 1191:
case 1698:
case 781:
case 2334:
case 2370:
case 218:
case 3238:
case 3461:
case 3777:
case 1385:
case 1569:
case 1733:
case 60:
case 3068:
case 1968:
case 3772:
case 508:
case 2405:
case 3440:
case 877:
case 1378:
case 3471:
case 379:
case 842:
case 376:
case 3280:
case 2325:
case 1365:
case 24:
case 1712:
case 3665:
case 460:
case 2832:
case 3126:
case 3335:
case 3924:
case 638:
case 1784:
case 3026:
case 3598:
case 2993:
case 1530:
case 1732:
case 1759:
case 1548:
case 1116:
case 1811:
case 3343:
case 145:
case 915:
case 651:
case 1560:
case 2401:
case 535:
case 1150:
case 2673:
case 1414:
case 3785:
case 1338:
case 3770:
case 3224:
case 807:
case 2862:
case 2363:
case 3988:
case 36:
case 2860:
case 462:
case 3637:
case 2711:
case 3384:
case 130:
case 1718:
case 3150:
case 3808:
case 1717:
case 2140:
case 2296:
case 1754:
case 2015:
case 3644:
case 3063:
case 1265:
case 2403:
case 2289:
case 1769:
case 2576:
case 1878:
case 2940:
case 3854:
case 2294:
case 1344:
case 1166:
case 3868:
case 3417:
case 3646:
case 1535:
case 828:
case 3261:
case 1481:
case 3583:
case 663:
case 3836:
case 1905:
case 2397:
case 3999:
case 3736:
case 1339:
case 1314:
case 3702:
case 3076:
case 3562:
case 2887:
case 965:
case 3547:
case 967:
case 1671:
case 172:
case 1729:
case 1915:
case 1352:
case 3035:
case 2537:
case 3911:
case 259:
case 147:
case 2329:
case 2820:
case 1863:
case 296:
case 3649:
case 2558:
case 903:
case 4005:
case 3293:
case 134:
case 1361:
case 3946:
case 3111:
case 3022:
case 1685:
case 3229:
case 1642:
case 4013:
case 1485:
case 1888:
case 1168:
case 3408:
case 2650:
case 2443:
case 3557:
case 2717:
case 1976:
case 1377:
case 1838:
case 1239:
case 2604:
case 1104:
case 1777:
case 3539:
case 1660:
case 2699:
case 122:
case 3439:
case 952:
case 3928:
case 2456:
case 902:
case 466:
case 1175:
case 1015:
case 2962:
case 1343:
case 1753:
case 646:
case 4037:
case 117:
case 2204:
case 2960:
case 803:
case 1647:
case 1721:
case 1273:
case 1890:
case 2186:
case 183:
case 370:
case 1143:
case 2339:
case 125:
case 1727:
case 268:
case 3286:
case 2775:
case 3746:
case 847:
case 1430:
case 3628:
case 1883:
case 453:
case 150:
case 3768:
case 241:
case 396:
case 3559:
case 3300:
case 594:
case 3405:
case 1111:
case 2413:
case 1146:
case 3436:
case 1506:
case 3605:
case 4027:
case 2917:
case 1028:
case 258:
case 429:
case 4051:
case 3178:
case 2264:
case 589:
case 1090:
case 341:
case 3731:
case 3397:
case 2608:
case 2712:
case 2061:
case 3166:
case 3211:
case 179:
case 2506:
case 3378:
case 1638:
case 2869:
case 3486:
case 3840:
case 404:
case 1:
case 2197:
case 3098:
case 3266:
case 148:
case 3317:
case 1153:
case 2023:
case 232:
case 3809:
case 3427:
case 1553:
case 630:
case 3659:
case 3356:
case 452:
case 335:
case 3169:
case 3437:
case 603:
case 2322:
case 350:
case 2578:
case 4084:
case 3102:
case 551:
case 3205:
case 3191:
case 3462:
case 920:
case 870:
case 2854:
case 3398:
case 1457:
case 2301:
case 1459:
case 475:
case 558:
case 2151:
case 1912:
case 3312:
case 1218:
case 2153:
case 3232:
case 46:
case 265:
case 1076:
case 2989:
case 1454:
case 231:
case 3128:
case 3949:
case 3729:
case 3997:
case 38:
case 279:
case 747:
case 2427:
case 285:
case 143:
case 2518:
case 797:
case 1589:
case 6:
case 1416:
case 2814:
case 1536:
case 2332:
case 1691:
case 2600:
case 3268:
case 3097:
case 1178:
case 1943:
case 114:
case 2996:
case 2813:
case 2859:
case 1323:
case 142:
case 2833:
case 1422:
case 388:
case 1871:
case 61:
case 2589:
case 737:
case 3858:
case 294:
case 1403:
case 392:
case 2929:
case 3698:
case 2011:
case 135:
case 856:
case 2321:
case 3945:
case 2634:
case 4042:
case 2664:
case 3937:
case 2280:
case 798:
case 3018:
case 3137:
case 2001:
case 3495:
case 56:
case 2565:
case 1545:
case 575:
case 1588:
case 1996:
case 347:
case 2590:
case 1147:
case 4052:
case 3375:
case 1257:
case 164:
case 1761:
case 1305:
case 813:
case 1875:
case 2510:
case 2328:
case 21:
case 2563:
case 191:
case 2769:
case 3090:
case 3787:
case 1939:
case 2601:
case 3065:
case 2404:
case 1962:
case 307:
case 3386:
case 621:
case 1537:
case 435:
case 973:
case 3759:
case 3936:
case 3285:
case 2763:
case 791:
case 2360:
case 631:
case 1132:
case 1559:
case 200:
case 1319:
case 3167:
case 2546:
case 3678:
case 689:
case 132:
case 3033:
case 1295:
case 2226:
case 2306:
case 3228:
case 3844:
case 3726:
case 456:
case 1518:
case 1197:
case 1965:
case 3373:
case 534:
case 408:
case 561:
case 1004:
case 3575:
case 532:
case 3595:
case 1790:
case 1437:
case 553:
case 2827:
case 3781:
case 1596:
case 1420:
case 1137:
case 2203:
case 2724:
case 257:
case 2112:
case 1876:
case 3832:
case 1970:
case 3801:
case 3438:
case 3762:
case 459:
case 552:
case 1702:
case 677:
case 2378:
case 2901:
case 480:
case 988:
case 3861:
case 1368:
case 3158:
case 3833:
case 3420:
case 1607:
case 3802:
case 2774:
case 4015:
case 3579:
case 2586:
case 2807:
case 3775:
case 3306:
case 1244:
case 3973:
case 493:
case 313:
case 3831:
case 3529:
case 989:
case 3800:
case 1280:
case 2496:
case 3623:
case 707:
case 1268:
case 1327:
case 1740:
case 3012:
case 2290:
case 272:
case 2055:
case 796:
case 1520:
case 2670:
case 75:
case 1880:
case 2549:
case 4:
case 20:
case 340:
case 1384:
case 3947:
case 1097:
case 910:
case 3693:
case 1663:
case 2282:
case 502:
case 1014:
case 2012:
case 1990:
case 3874:
case 2631:
case 3909:
case 3738:
case 1566:
case 3107:
case 256:
case 752:
case 1431:
case 2156:
case 3399:
case 1673:
case 530:
case 3396:
case 1066:
case 567:
case 3766:
case 3542:
case 2797:
case 713:
case 2616:
case 2754:
case 1406:
case 1837:
case 1145:
case 2779:
case 3843:
case 3845:
case 2057:
case 1493:
case 3338:
case 1597:
case 831:
case 3292:
case 3045:
case 3273:
case 3428:
case 2422:
case 1228:
case 2941:
case 2053:
case 1599:
case 3414:
case 3534:
case 884:
case 1703:
case 1096:
case 1819:
case 3281:
case 2540:
case 1492:
case 945:
case 1714:
case 1767:
case 3620:
case 3040:
case 650:
case 3642:
case 1075:
case 233:
case 1208:
case 2393:
case 3110:
case 1774:
case 3670:
case 3077:
case 1479:
case 4021:
case 2310:
case 1272:
case 348:
case 3424:
case 2838:
case 3134:
case 3061:
case 1755:
case 866:
case 1415:
case 658:
case 1088:
case 2995:
case 3120:
case 1448:
case 3713:
case 2544:
case 4063:
case 886:
case 2035:
case 2263:
case 606:
case 3370:
case 648:
case 87:
case 1857:
case 1992:
case 1893:
case 3730:
case 2284:
case 947:
case 1793:
case 2047:
case 2440:
case 850:
case 1778:
case 1539:
case 889:
case 1226:
case 1995:
case 4075:
case 297:
case 3194:
case 672:
case 2850:
case 498:
case 1849:
case 1048:
case 3806:
case 2790:
case 1873:
case 3344:
case 197:
case 1320:
case 3725:
case 1382:
case 1098:
case 330:
case 2879:
case 1749:
case 1303:
case 1215:
case 35:
case 3540:
case 975:
case 2644:
case 907:
case 3130:
case 3104:
case 1008:
case 3200:
case 789:
case 5:
case 701:
case 3093:
case 26:
case 3925:
case 1661:
case 762:
case 3328:
case 1704:
case 2116:
case 3364:
case 1300:
case 3633:
case 427:
case 951:
case 2085:
case 1131:
case 1171:
case 3161:
case 786:
case 2893:
case 2024:
case 2826:
case 2098:
case 3969:
case 3030:
case 1822:
case 4038:
case 505:
case 1834:
case 1812:
case 3709:
case 626:
case 3553:
case 2505:
case 2242:
case 953:
case 1110:
case 3404:
case 2129:
case 3445:
case 221:
case 1802:
case 2520:
case 2229:
case 1486:
case 208:
case 885:
case 510:
case 3299:
case 919:
case 3127:
case 189:
case 793:
case 3651:
case 325:
case 1728:
case 3258:
case 2555:
case 327:
case 3037:
case 282:
case 583:
case 1658:
case 451:
case 3425:
case 1393:
case 3331:
case 3060:
case 1269:
case 2308:
case 4058:
case 702:
case 2625:
case 3290:
case 3889:
case 666:
case 2293:
case 1094:
case 2569:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667016001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,];
var gg_b = "1667016001/";

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
