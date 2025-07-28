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
case 452:
case 3258:
case 2879:
case 3412:
case 3620:
case 413:
case 3354:
case 2488:
case 951:
case 3477:
case 633:
case 1169:
case 3526:
case 3919:
case 3686:
case 2754:
case 3225:
case 2483:
case 3372:
case 1621:
case 2903:
case 3322:
case 411:
case 704:
case 3432:
case 1671:
case 953:
case 1995:
case 653:
case 3554:
case 2024:
case 3326:
case 2188:
case 3177:
case 2613:
case 1962:
case 2776:
case 3112:
case 1615:
case 2964:
case 1072:
case 617:
case 894:
case 1756:
case 1185:
case 3572:
case 188:
case 1037:
case 3609:
case 2183:
case 68:
case 942:
case 1381:
case 2052:
case 1635:
case 2800:
case 1054:
case 2645:
case 3144:
case 426:
case 3600:
case 2068:
case 2928:
case 865:
case 1239:
case 640:
case 3295:
case 3833:
case 3461:
case 3818:
case 19:
case 3690:
case 2809:
case 459:
case 2955:
case 2978:
case 3565:
case 1953:
case 2882:
case 3392:
case 2789:
case 554:
case 1096:
case 1065:
case 1704:
case 355:
case 1667:
case 3302:
case 1975:
case 3813:
case 586:
case 1794:
case 296:
case 910:
case 3161:
case 1911:
case 3306:
case 610:
case 1002:
case 1763:
case 76:
case 1850:
case 3:
case 1089:
case 430:
case 3365:
case 2094:
case 3930:
case 172:
case 439:
case 3910:
case 3851:
case 3629:
case 2870:
case 1768:
case 2941:
case 940:
case 3262:
case 2820:
case 335:
case 3502:
case 643:
case 3377:
case 3126:
case 2388:
case 3536:
case 453:
case 1282:
case 1016:
case 412:
case 2284:
case 3235:
case 3180:
case 3176:
case 1299:
case 417:
case 2839:
case 1734:
case 1385:
case 1742:
case 957:
case 3215:
case 3417:
case 2641:
case 2819:
case 2383:
case 968:
case 3929:
case 1181:
case 3248:
case 3783:
case 1036:
case 3069:
case 2046:
case 2678:
case 777:
case 2042:
case 3990:
case 2588:
case 941:
case 3577:
case 80:
case 1044:
case 613:
case 3426:
case 2628:
case 895:
case 2736:
case 668:
case 1746:
case 772:
case 3900:
case 3480:
case 3271:
case 1027:
case 266:
case 1967:
case 1991:
case 1220:
case 937:
case 1658:
case 3544:
case 3532:
case 431:
case 1077:
case 611:
case 2623:
case 3316:
case 2014:
case 943:
case 1286:
case 354:
case 2938:
case 1229:
case 3823:
case 3361:
case 1948:
case 2707:
case 1662:
case 1915:
case 3196:
case 555:
case 386:
case 2761:
case 2797:
case 959:
case 1935:
case 1360:
case 3999:
case 2933:
case 3492:
case 3489:
case 3855:
case 926:
case 104:
case 2887:
case 498:
case 440:
case 2810:
case 3406:
case 626:
case 3970:
case 3986:
case 3561:
case 449:
case 2608:
case 3619:
case 274:
case 659:
case 1007:
case 3192:
case 544:
case 171:
case 1695:
case 1200:
case 939:
case 1971:
case 1560:
case 2693:
case 3102:
case 1605:
case 1840:
case 930:
case 2603:
case 1963:
case 3688:
case 3113:
case 2025:
case 3555:
case 516:
case 1340:
case 2996:
case 2587:
case 1023:
case 2612:
case 106:
case 3256:
case 3451:
case 866:
case 2075:
case 4039:
case 3138:
case 425:
case 2470:
case 1184:
case 3710:
case 1028:
case 2109:
case 3341:
case 320:
case 3118:
case 1657:
case 1731:
case 3145:
case 1642:
case 20:
case 2387:
case 1540:
case 3378:
case 762:
case 3355:
case 2728:
case 3413:
case 2170:
case 2186:
case 758:
case 3438:
case 17:
case 767:
case 1753:
case 1860:
case 3151:
case 3787:
case 1041:
case 3224:
case 2778:
case 3541:
case 3252:
case 2723:
case 2409:
case 1904:
case 3373:
case 2482:
case 1758:
case 2773:
case 3897:
case 2616:
case 3323:
case 1775:
case 2992:
case 1150:
case 3040:
case 523:
case 2661:
case 64:
case 2400:
case 199:
case 1003:
case 481:
case 45:
case 3598:
case 2980:
case 2095:
case 2066:
case 2490:
case 793:
case 2926:
case 148:
case 1549:
case 322:
case 3263:
case 1869:
case 3503:
case 91:
case 483:
case 2179:
case 4010:
case 2937:
case 2100:
case 43:
case 508:
case 3832:
case 803:
case 264:
case 3294:
case 118:
case 3308:
case 2319:
case 2798:
case 3204:
case 1459:
case 2339:
case 1064:
case 2703:
case 2429:
case 1349:
case 2922:
case 1705:
case 3827:
case 1924:
case 2479:
case 2793:
case 4030:
case 2972:
case 1795:
case 682:
case 801:
case 2888:
case 2043:
case 2430:
case 2751:
case 1033:
case 2320:
case 2187:
case 3770:
case 2654:
case 2035:
case 1652:
case 584:
case 3084:
case 3538:
case 3128:
case 2370:
case 3351:
case 2269:
case 489:
case 191:
case 3518:
case 1674:
case 2048:
case 925:
case 2617:
case 3865:
case 2622:
case 480:
case 1624:
case 1350:
case 3533:
case 2015:
case 160:
case 763:
case 536:
case 1748:
case 2487:
case 2520:
case 1140:
case 2907:
case 3551:
case 3234:
case 2680:
case 3338:
case 2713:
case 3428:
case 3892:
case 2997:
case 718:
case 2570:
case 3214:
case 3799:
case 1384:
case 1743:
case 1288:
case 3141:
case 2309:
case 1051:
case 3318:
case 2733:
case 3423:
case 2718:
case 3333:
case 761:
case 4000:
case 1656:
case 2399:
case 797:
case 3198:
case 983:
case 3790:
case 3108:
case 792:
case 2119:
case 4082:
case 527:
case 1559:
case 3464:
case 706:
case 3059:
case 2692:
case 2139:
case 3880:
case 1767:
case 1791:
case 2579:
case 3826:
case 3103:
case 1701:
case 2500:
case 2927:
case 896:
case 44:
case 3817:
case 807:
case 3164:
case 2001:
case 167:
case 77:
case 2419:
case 158:
case 3408:
case 308:
case 3837:
case 1942:
case 3779:
case 2329:
case 3983:
case 3729:
case 3403:
case 1957:
case 3854:
case 265:
case 4020:
case 2263:
case 1846:
case 782:
case 1296:
case 4078:
case 1265:
case 3179:
case 227:
case 1505:
case 3539:
case 1401:
case 1981:
case 1595:
case 1566:
case 492:
case 1362:
case 125:
case 3066:
case 2364:
case 3607:
case 1039:
case 2508:
case 71:
case 4023:
case 845:
case 3697:
case 2816:
case 3661:
case 3764:
case 3400:
case 3980:
case 3793:
case 854:
case 3479:
case 1167:
case 2303:
case 2739:
case 1366:
case 1395:
case 3062:
case 969:
case 2827:
case 693:
case 1857:
case 3954:
case 3319:
case 2308:
case 3798:
case 1202:
case 1834:
case 1842:
case 3100:
case 364:
case 74:
case 2523:
case 594:
case 229:
case 3199:
case 1525:
case 3632:
case 395:
case 2573:
case 1685:
case 789:
case 3182:
case 2710:
case 2683:
case 220:
case 1575:
case 2341:
case 1226:
case 256:
case 1421:
case 4008:
case 3627:
case 2730:
case 448:
case 490:
case 4093:
case 1740:
case 2528:
case 1148:
case 3058:
case 1311:
case 658:
case 3281:
case 15:
case 662:
case 2688:
case 499:
case 1115:
case 2578:
case 3587:
case 1553:
case 3612:
case 1325:
case 1435:
case 2445:
case 3773:
case 376:
case 2433:
case 3992:
case 2541:
case 1375:
case 1254:
case 3723:
case 1531:
case 2807:
case 1358:
case 3011:
case 3902:
case 1511:
case 3755:
case 3186:
case 1448:
case 3031:
case 2787:
case 3778:
case 3387:
case 463:
case 3120:
case 3530:
case 1353:
case 13:
case 3636:
case 2274:
case 1105:
case 1391:
case 3579:
case 2826:
case 2103:
case 3689:
case 180:
case 783:
case 8:
case 1301:
case 1166:
case 2059:
case 124:
case 4038:
case 992:
case 2193:
case 2876:
case 491:
case 67:
case 493:
case 1029:
case 2464:
case 3300:
case 2198:
case 4033:
case 178:
case 1079:
case 2983:
case 1000:
case 2403:
case 365:
case 1567:
case 1591:
case 1207:
case 1405:
case 208:
case 3944:
case 1847:
case 1501:
case 3329:
case 97:
case 1297:
case 1466:
case 1162:
case 2408:
case 3606:
case 73:
case 3067:
case 3091:
case 3927:
case 697:
case 3260:
case 999:
case 182:
case 2533:
case 1543:
case 2123:
case 3269:
case 2246:
case 3509:
case 1750:
case 1175:
case 3582:
case 1158:
case 187:
case 3048:
case 2896:
case 2173:
case 3617:
case 394:
case 2538:
case 1216:
case 1082:
case 3386:
case 3370:
case 3637:
case 2351:
case 1153:
case 3320:
case 2178:
case 595:
case 3430:
case 285:
case 1099:
case 2786:
case 1868:
case 2709:
case 2423:
case 1681:
case 1335:
case 1784:
case 1227:
case 1571:
case 2345:
case 1086:
case 1070:
case 2799:
case 3745:
case 3382:
case 1212:
case 918:
case 1277:
case 1475:
case 1131:
case 2318:
case 3309:
case 3021:
case 82:
case 458:
case 1244:
case 2234:
case 2242:
case 3713:
case 648:
case 690:
case 1894:
case 576:
case 3570:
case 1348:
case 3961:
case 1111:
case 14:
case 961:
case 2889:
case 2313:
case 3626:
case 3130:
case 2478:
case 3285:
case 1453:
case 2050:
case 1315:
case 3520:
case 1815:
case 2813:
case 1568:
case 111:
case 1208:
case 3923:
case 1848:
case 307:
case 1394:
case 2838:
case 2392:
case 3789:
case 501:
case 3063:
case 1298:
case 4076:
case 2690:
case 1563:
case 3809:
case 808:
case 168:
case 3955:
case 3978:
case 719:
case 2987:
case 3882:
case 2205:
case 2600:
case 3899:
case 1835:
case 1843:
case 3249:
case 2497:
case 2833:
case 574:
case 4054:
case 3941:
case 141:
case 1504:
case 2262:
case 2502:
case 1264:
case 821:
case 2910:
case 375:
case 488:
case 3870:
case 3886:
case 1940:
case 3094:
case 2930:
case 823:
case 4017:
case 1821:
case 3706:
case 479:
case 2161:
case 3004:
case 143:
case 740:
case 1871:
case 3796:
case 2432:
case 2322:
case 3717:
case 1434:
case 3993:
case 1324:
case 1442:
case 4006:
case 2939:
case 751:
case 2116:
case 1949:
case 3772:
case 22:
case 671:
case 3903:
case 1457:
case 1278:
case 2253:
case 3754:
case 673:
case 2686:
case 2337:
case 2225:
case 49:
case 2580:
case 3998:
case 717:
case 405:
case 2081:
case 904:
case 3737:
case 2258:
case 2412:
case 2354:
case 2477:
case 150:
case 2275:
case 753:
case 2919:
case 3056:
case 3908:
case 3633:
case 2211:
case 1356:
case 1142:
case 2522:
case 604:
case 1134:
case 3052:
case 2144:
case 3800:
case 2699:
case 3645:
case 3240:
case 2682:
case 2517:
case 973:
case 3047:
case 1157:
case 747:
case 139:
case 3074:
case 2376:
case 2380:
case 472:
case 1547:
case 3638:
case 1801:
case 1241:
case 3024:
case 566:
case 4089:
case 1446:
case 742:
case 1552:
case 2326:
case 477:
case 3613:
case 1114:
case 1867:
case 1891:
case 4002:
case 2489:
case 2855:
case 18:
case 2909:
case 1853:
case 303:
case 1760:
case 2982:
case 2402:
case 2878:
case 3887:
case 1984:
case 3945:
case 1858:
case 3664:
case 759:
case 2196:
case 670:
case 3797:
case 286:
case 3761:
case 3913:
case 254:
case 3938:
case 2397:
case 750:
case 507:
case 2361:
case 679:
case 3707:
case 1825:
case 979:
case 4077:
case 2189:
case 2639:
case 1950:
case 1649:
case 1194:
case 4027:
case 3693:
case 988:
case 1831:
case 2841:
case 3608:
case 2267:
case 2465:
case 2291:
case 2507:
case 822:
case 575:
case 46:
case 3698:
case 2406:
case 2561:
case 142:
case 2597:
case 2986:
case 404:
case 1238:
case 2929:
case 711:
case 2516:
case 2783:
case 1785:
case 1156:
case 2979:
case 3744:
case 2417:
case 2808:
case 3819:
case 1213:
case 1474:
case 757:
case 2235:
case 836:
case 768:
case 1895:
case 1866:
case 2243:
case 3777:
case 2788:
case 2377:
case 1546:
case 2803:
case 752:
case 2536:
case 1452:
case 1218:
case 3727:
case 3284:
case 677:
case 977:
case 2544:
case 1088:
case 1534:
case 2122:
case 3623:
case 2316:
case 741:
case 3583:
case 1557:
case 471:
case 3673:
case 2117:
case 3250:
case 3628:
case 3736:
case 69:
case 1769:
case 149:
case 3057:
case 820:
case 737:
case 2271:
case 473:
case 2137:
case 856:
case 1083:
case 2480:
case 2476:
case 3678:
case 3588:
case 1152:
case 2990:
case 3034:
case 2577:
case 2154:
case 2221:
case 3655:
case 2643:
case 435:
case 2054:
case 1645:
case 549:
case 3524:
case 3134:
case 1052:
case 615:
case 2635:
case 3142:
case 2230:
case 3684:
case 893:
case 2185:
case 1240:
case 2037:
case 3574:
case 1183:
case 540:
case 1618:
case 598:
case 3157:
case 3781:
case 2072:
case 3547:
case 339:
case 1074:
case 2210:
case 2648:
case 774:
case 1726:
case 2017:
case 3552:
case 1613:
case 4:
case 3446:
case 1024:
case 279:
case 444:
case 1964:
case 1776:
case 2962:
case 945:
case 703:
case 3434:
case 1993:
case 100:
case 1717:
case 3556:
case 2995:
case 455:
case 3949:
case 2966:
case 1772:
case 3650:
case 954:
case 3374:
case 1903:
case 109:
case 510:
case 1483:
case 2076:
case 869:
case 1722:
case 2905:
case 2724:
case 2287:
case 2485:
case 1829:
case 3223:
case 1998:
case 359:
case 915:
case 1879:
case 3273:
case 326:
case 1056:
case 2169:
case 1488:
case 1941:
case 341:
case 175:
case 533:
case 542:
case 1870:
case 1886:
case 3940:
case 2092:
case 1706:
case 2763:
case 332:
case 343:
case 2911:
case 1796:
case 862:
case 3815:
case 2219:
case 3208:
case 3568:
case 1792:
case 2975:
case 2065:
case 107:
case 553:
case 1923:
case 1063:
case 3298:
case 551:
case 1955:
case 29:
case 58:
case 3563:
case 1809:
case 1978:
case 2884:
case 3835:
case 3293:
case 1249:
case 205:
case 352:
case 3843:
case 2239:
case 3542:
case 3534:
case 655:
case 2077:
case 3456:
case 3251:
case 2625:
case 2481:
case 2270:
case 2012:
case 2027:
case 530:
case 1716:
case 2675:
case 2658:
case 775:
case 3769:
case 1628:
case 4060:
case 3147:
case 1057:
case 2653:
case 434:
case 3514:
case 1678:
case 1655:
case 2044:
case 1042:
case 26:
case 340:
case 2369:
case 914:
case 415:
case 2757:
case 702:
case 3334:
case 559:
case 3424:
case 1744:
case 2385:
case 2742:
case 3213:
case 2631:
case 1641:
case 319:
case 2299:
case 1712:
case 1777:
case 2849:
case 644:
case 2209:
case 1388:
case 3959:
case 454:
case 3805:
case 6:
case 2282:
case 3314:
case 3104:
case 2605:
case 2097:
case 128:
case 3468:
case 899:
case 62:
case 3194:
case 3649:
case 271:
case 2666:
case 532:
case 2007:
case 3950:
case 543:
case 2971:
case 890:
case 541:
case 174:
case 273:
case 347:
case 1810:
case 333:
case 342:
case 3168:
case 1918:
case 204:
case 3984:
case 3760:
case 557:
case 3404:
case 1945:
case 2935:
case 513:
case 1933:
case 552:
case 2915:
case 1664:
case 2662:
case 317:
case 3875:
case 92:
case 1797:
case 353:
case 312:
case 2229:
case 861:
case 1707:
case 765:
case 3237:
case 3171:
case 1510:
case 2775:
case 2994:
case 176:
case 1723:
case 623:
case 1902:
case 2725:
case 2484:
case 3358:
case 27:
case 3448:
case 1170:
case 908:
case 2753:
case 1031:
case 3222:
case 1530:
case 1387:
case 2540:
case 3669:
case 2646:
case 2078:
case 2731:
case 427:
case 2450:
case 2634:
case 3135:
case 2642:
case 10:
case 86:
case 1182:
case 3558:
case 608:
case 2028:
case 422:
case 2184:
case 195:
case 3685:
case 2657:
case 3331:
case 921:
case 3740:
case 1075:
case 206:
case 923:
case 2073:
case 4049:
case 1470:
case 1906:
case 3148:
case 2711:
case 1025:
case 2963:
case 35:
case 2023:
case 1420:
case 297:
case 3553:
case 1330:
case 2340:
case 3115:
case 1587:
case 1965:
case 2614:
case 3167:
case 1793:
case 2766:
case 1972:
case 3395:
case 1319:
case 946:
case 218:
case 3289:
case 3202:
case 3562:
case 2947:
case 1937:
case 3292:
case 2869:
case 3846:
case 429:
case 2098:
case 985:
case 3491:
case 484:
case 3296:
case 420:
case 3019:
case 873:
case 3595:
case 1129:
case 3566:
case 3401:
case 1607:
case 3039:
case 1095:
case 325:
case 2159:
case 1926:
case 1519:
case 1490:
case 2093:
case 290:
case 524:
case 1005:
case 2762:
case 1980:
case 2003:
case 299:
case 589:
case 1399:
case 3960:
case 3571:
case 3335:
case 627:
case 2735:
case 1745:
case 3086:
case 408:
case 1309:
case 3521:
case 53:
case 1733:
case 2288:
case 3277:
case 3131:
case 1021:
case 269:
case 3232:
case 1961:
case 3111:
case 3894:
case 1570:
case 1586:
case 1738:
case 1626:
case 2748:
case 1907:
case 1285:
case 3371:
case 3125:
case 1622:
case 1015:
case 382:
case 3750:
case 3321:
case 1269:
case 291:
case 1617:
case 2584:
case 870:
case 2771:
case 3158:
case 922:
case 1386:
case 1370:
case 583:
case 3411:
case 888:
case 2018:
case 1637:
case 3009:
case 1320:
case 1187:
case 2440:
case 3099:
case 776:
case 3000:
case 2957:
case 3852:
case 2668:
case 3405:
case 805:
case 3591:
case 165:
case 3567:
case 1379:
case 2934:
case 446:
case 2449:
case 3297:
case 3495:
case 3261:
case 3501:
case 1329:
case 656:
case 1001:
case 3162:
case 2359:
case 1912:
case 1696:
case 1665:
case 2914:
case 1419:
case 3874:
case 1977:
case 262:
case 1091:
case 4050:
case 1260:
case 1500:
case 3759:
case 1927:
case 525:
case 2604:
case 3367:
case 3391:
case 1692:
case 636:
case 324:
case 2694:
case 3195:
case 1916:
case 3301:
case 3166:
case 416:
case 795:
case 2791:
case 872:
case 1936:
case 920:
case 1390:
case 3856:
case 929:
case 1300:
case 3079:
case 2881:
case 485:
case 1398:
case 1844:
case 851:
case 1294:
case 4031:
case 1308:
case 2289:
case 2857:
case 3459:
case 3885:
case 1564:
case 2366:
case 2395:
case 817:
case 4011:
case 2814:
case 853:
case 476:
case 567:
case 812:
case 1812:
case 3974:
case 3766:
case 2749:
case 3795:
case 1598:
case 3762:
case 785:
case 399:
case 1364:
case 2039:
case 3159:
case 2362:
case 225:
case 348:
case 1508:
case 1268:
case 390:
case 3093:
case 2660:
case 3008:
case 3956:
case 2019:
case 847:
case 495:
case 2566:
case 2401:
case 1263:
case 1836:
case 3098:
case 40:
case 833:
case 2505:
case 127:
case 842:
case 2296:
case 2265:
case 2467:
case 2491:
case 2217:
case 3540:
case 1378:
case 965:
case 1355:
case 1274:
case 2669:
case 3646:
case 23:
case 2272:
case 2448:
case 2511:
case 3041:
case 1151:
case 3753:
case 819:
case 136:
case 560:
case 1252:
case 1418:
case 1541:
case 2375:
case 3725:
case 2358:
case 4062:
case 3904:
case 2435:
case 2171:
case 2237:
case 3775:
case 3150:
case 1861:
case 2030:
case 591:
case 3711:
case 281:
case 25:
case 3963:
case 1688:
case 1113:
case 397:
case 2553:
case 3023:
case 2115:
case 306:
case 1256:
case 4095:
case 3073:
case 721:
case 4066:
case 1138:
case 2311:
case 3028:
case 2558:
case 3184:
case 156:
case 3657:
case 2575:
case 120:
case 849:
case 2087:
case 3731:
case 1523:
case 2471:
case 665:
case 129:
case 3055:
case 840:
case 362:
case 976:
case 1822:
case 1498:
case 811:
case 2759:
case 3914:
case 4021:
case 1408:
case 3663:
case 1988:
case 2874:
case 3934:
case 1837:
case 1493:
case 108:
case 2847:
case 857:
case 2495:
case 2297:
case 736:
case 2501:
case 1403:
case 3957:
case 1729:
case 1854:
case 518:
case 1983:
case 2852:
case 2405:
case 2207:
case 2985:
case 2856:
case 2079:
case 4043:
case 3946:
case 1108:
case 1700:
case 3559:
case 494:
case 1464:
case 2462:
case 4048:
case 720:
case 756:
case 3694:
case 224:
case 3791:
case 289:
case 599:
case 1193:
case 1880:
case 832:
case 729:
case 843:
case 2391:
case 2105:
case 280:
case 676:
case 784:
case 1103:
case 1889:
case 1257:
case 3748:
case 2804:
case 1050:
case 3140:
case 1802:
case 4067:
case 1551:
case 2232:
case 369:
case 2244:
case 2348:
case 2111:
case 4001:
case 1892:
case 1338:
case 2212:
case 2070:
case 2086:
case 1214:
case 1799:
case 1318:
case 1141:
case 3288:
case 2475:
case 2277:
case 859:
case 3743:
case 1333:
case 3550:
case 1709:
case 57:
case 2020:
case 2571:
case 826:
case 1345:
case 1782:
case 2227:
case 185:
case 3440:
case 2868:
case 664:
case 21:
case 1770:
case 1155:
case 2082:
case 393:
case 1084:
case 1538:
case 2411:
case 2863:
case 3674:
case 2321:
case 2750:
case 2175:
case 391:
case 3584:
case 287:
case 3771:
case 2371:
case 506:
case 830:
case 3013:
case 727:
case 2535:
case 2543:
case 282:
case 3721:
case 3350:
case 592:
case 1161:
case 144:
case 3089:
case 880:
case 2871:
case 377:
case 237:
case 1365:
case 4074:
case 889:
case 966:
case 2821:
case 372:
case 2363:
case 4047:
case 1910:
case 3160:
case 3768:
case 1592:
case 1629:
case 4052:
case 3931:
case 573:
case 1589:
case 2368:
case 1502:
case 2264:
case 878:
case 1679:
case 2504:
case 2835:
case 2293:
case 1600:
case 4056:
case 252:
case 2843:
case 3239:
case 2203:
case 1690:
case 2563:
case 3953:
case 1596:
case 2848:
case 666:
case 3460:
case 409:
case 3958:
case 3006:
case 2815:
case 3691:
case 3667:
case 211:
case 3794:
case 3219:
case 400:
case 3975:
case 1389:
case 1436:
case 3022:
case 2552:
case 1177:
case 1231:
case 230:
case 2114:
case 379:
case 3962:
case 2547:
case 1127:
case 3072:
case 239:
case 3017:
case 4094:
case 1682:
case 974:
case 2574:
case 388:
case 2781:
case 2157:
case 475:
case 1211:
case 1416:
case 81:
case 745:
case 1132:
case 3054:
case 1522:
case 2142:
case 3635:
case 1412:
case 2273:
case 3747:
case 3169:
case 754:
case 1919:
case 1526:
case 4068:
case 1686:
case 3752:
case 674:
case 2223:
case 2347:
case 1580:
case 259:
case 12:
case 4063:
case 1253:
case 2278:
case 3859:
case 3287:
case 2324:
case 1432:
case 84:
case 496:
case 1322:
case 1116:
case 628:
case 2650:
case 4034:
case 242:
case 1561:
case 1597:
case 1970:
case 1986:
case 1406:
case 134:
case 1841:
case 373:
case 1507:
case 1465:
case 1267:
case 371:
case 3695:
case 3666:
case 2811:
case 2194:
case 825:
case 609:
case 1192:
case 2950:
case 1639:
case 3560:
case 3605:
case 3840:
case 4014:
case 3097:
case 1102:
case 3921:
case 572:
case 1189:
case 3948:
case 253:
case 1361:
case 900:
case 2825:
case 1873:
case 1165:
case 3662:
case 2858:
case 2875:
case 2163:
case 186:
case 3360:
case 3935:
case 1828:
case 2494:
case 2168:
case 28:
case 59:
case 1909:
case 1489:
case 251:
case 115:
case 1402:
case 304:
case 2853:
case 2404:
case 2514:
case 588:
case 36:
case 1137:
case 1480:
case 975:
case 1527:
case 1172:
case 607:
case 2557:
case 3027:
case 2174:
case 3675:
case 2862:
case 3220:
case 1117:
case 3967:
case 3585:
case 881:
case 2542:
case 1122:
case 602:
case 3625:
case 1532:
case 1544:
case 3286:
case 3481:
case 3901:
case 1316:
case 696:
case 3209:
case 996:
case 401:
case 1377:
case 1126:
case 1454:
case 2546:
case 714:
case 1630:
case 3016:
case 3282:
case 2314:
case 2805:
case 902:
case 2640:
case 3714:
case 2447:
case 219:
case 1327:
case 1235:
case 1437:
case 1893:
case 1788:
case 907:
case 2895:
case 1215:
case 1417:
case 1979:
case 3631:
case 2213:
case 2357:
case 1808:
case 1783:
case 1248:
case 403:
case 3181:
case 3757:
case 755:
case 1069:
case 1422:
case 3036:
case 1344:
case 83:
case 1610:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753707601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,];
var gg_b = "1753707601/";

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
