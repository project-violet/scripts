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
case 3497:
case 2035:
case 2272:
case 1369:
case 310:
case 1671:
case 610:
case 2234:
case 85:
case 223:
case 828:
case 3084:
case 2180:
case 903:
case 853:
case 1987:
case 3616:
case 3676:
case 401:
case 1587:
case 3914:
case 3763:
case 3183:
case 1851:
case 3301:
case 687:
case 1408:
case 323:
case 2717:
case 3850:
case 1520:
case 2165:
case 444:
case 2407:
case 2500:
case 2805:
case 3193:
case 3317:
case 1175:
case 433:
case 754:
case 1810:
case 615:
case 2839:
case 1926:
case 2646:
case 3570:
case 1826:
case 762:
case 3577:
case 771:
case 969:
case 1005:
case 1872:
case 1960:
case 3030:
case 3318:
case 3855:
case 2998:
case 1583:
case 2111:
case 993:
case 3208:
case 2881:
case 3701:
case 3337:
case 3314:
case 842:
case 1685:
case 487:
case 1362:
case 15:
case 396:
case 2420:
case 1546:
case 2677:
case 3242:
case 2540:
case 3274:
case 1332:
case 2075:
case 2157:
case 2215:
case 24:
case 1627:
case 1269:
case 530:
case 1580:
case 192:
case 83:
case 725:
case 3099:
case 632:
case 1539:
case 794:
case 921:
case 1651:
case 2151:
case 1263:
case 3769:
case 3792:
case 1480:
case 2912:
case 2072:
case 1440:
case 1854:
case 2051:
case 2870:
case 237:
case 2831:
case 20:
case 788:
case 1155:
case 3633:
case 1072:
case 3229:
case 1696:
case 3178:
case 591:
case 1798:
case 304:
case 2205:
case 2348:
case 1487:
case 3765:
case 1993:
case 1037:
case 2037:
case 1793:
case 2704:
case 124:
case 1366:
case 218:
case 467:
case 80:
case 3965:
case 2381:
case 2108:
case 1400:
case 2509:
case 2954:
case 3503:
case 1131:
case 2959:
case 3401:
case 1852:
case 1367:
case 4078:
case 2155:
case 1664:
case 3669:
case 1975:
case 2346:
case 2455:
case 1231:
case 3673:
case 1184:
case 3550:
case 835:
case 578:
case 4019:
case 2759:
case 3796:
case 1338:
case 2393:
case 691:
case 420:
case 945:
case 1788:
case 394:
case 1753:
case 1825:
case 3960:
case 1467:
case 2992:
case 2031:
case 1240:
case 1680:
case 766:
case 1637:
case 1602:
case 319:
case 216:
case 1632:
case 814:
case 604:
case 224:
case 2980:
case 2197:
case 949:
case 3290:
case 2299:
case 2656:
case 3703:
case 3948:
case 2021:
case 3894:
case 562:
case 629:
case 2004:
case 3006:
case 816:
case 1494:
case 3779:
case 3941:
case 1352:
case 389:
case 661:
case 332:
case 3205:
case 1119:
case 2382:
case 92:
case 4090:
case 3308:
case 3822:
case 3663:
case 106:
case 717:
case 1557:
case 2941:
case 1625:
case 646:
case 521:
case 3718:
case 204:
case 1929:
case 1695:
case 4061:
case 2629:
case 3279:
case 2271:
case 3436:
case 3758:
case 1689:
case 3819:
case 1703:
case 3409:
case 2641:
case 1055:
case 3475:
case 1544:
case 2625:
case 160:
case 2138:
case 2829:
case 668:
case 3594:
case 3224:
case 3641:
case 3923:
case 3591:
case 1213:
case 823:
case 2789:
case 3872:
case 1927:
case 1709:
case 2774:
case 2177:
case 1501:
case 2490:
case 404:
case 2247:
case 2698:
case 3892:
case 2728:
case 2929:
case 3453:
case 715:
case 3172:
case 1085:
case 1966:
case 796:
case 3370:
case 2542:
case 1715:
case 2658:
case 1456:
case 2815:
case 317:
case 3130:
case 1866:
case 3707:
case 3430:
case 1660:
case 2779:
case 234:
case 2699:
case 3711:
case 2010:
case 962:
case 2896:
case 1861:
case 3702:
case 1817:
case 1623:
case 1022:
case 2347:
case 3833:
case 3162:
case 1025:
case 102:
case 3411:
case 2989:
case 1693:
case 105:
case 3171:
case 2552:
case 3008:
case 78:
case 2154:
case 4067:
case 2605:
case 3405:
case 1409:
case 2662:
case 1208:
case 2872:
case 3615:
case 2627:
case 1867:
case 1434:
case 4005:
case 2223:
case 757:
case 3053:
case 1588:
case 598:
case 2878:
case 2683:
case 126:
case 1996:
case 3677:
case 2905:
case 140:
case 3154:
case 2362:
case 52:
case 144:
case 3044:
case 2167:
case 3803:
case 3157:
case 1028:
case 798:
case 2997:
case 3704:
case 1034:
case 2947:
case 2:
case 387:
case 812:
case 1510:
case 2435:
case 2706:
case 3922:
case 3474:
case 1419:
case 1191:
case 1864:
case 1453:
case 655:
case 1250:
case 2235:
case 392:
case 2468:
case 2442:
case 320:
case 4083:
case 1561:
case 2055:
case 2884:
case 1187:
case 28:
case 1897:
case 2032:
case 625:
case 1415:
case 4027:
case 3204:
case 1786:
case 3366:
case 942:
case 1120:
case 618:
case 194:
case 1065:
case 3152:
case 574:
case 3293:
case 3686:
case 2566:
case 1212:
case 489:
case 3793:
case 273:
case 1768:
case 1215:
case 1593:
case 2367:
case 1496:
case 1710:
case 2882:
case 3055:
case 3866:
case 2911:
case 824:
case 3733:
case 1287:
case 504:
case 1757:
case 2148:
case 3748:
case 652:
case 2752:
case 2613:
case 1820:
case 4058:
case 669:
case 3142:
case 3028:
case 2681:
case 3584:
case 2660:
case 1202:
case 4017:
case 493:
case 146:
case 2686:
case 2408:
case 3660:
case 1491:
case 1166:
case 1461:
case 1196:
case 4024:
case 2599:
case 1475:
case 4028:
case 4014:
case 1057:
case 2858:
case 1686:
case 2888:
case 3417:
case 1508:
case 916:
case 982:
case 2763:
case 2187:
case 819:
case 889:
case 4004:
case 3123:
case 2266:
case 708:
case 2479:
case 3828:
case 3852:
case 3262:
case 2968:
case 1674:
case 1589:
case 3973:
case 3720:
case 3010:
case 1482:
case 1999:
case 135:
case 545:
case 1844:
case 1519:
case 3360:
case 174:
case 3802:
case 1945:
case 3820:
case 1238:
case 3912:
case 2565:
case 296:
case 3760:
case 227:
case 1370:
case 3040:
case 3386:
case 2529:
case 4055:
case 858:
case 1194:
case 117:
case 375:
case 697:
case 3593:
case 3385:
case 3511:
case 2702:
case 902:
case 3313:
case 180:
case 274:
case 1848:
case 229:
case 3003:
case 1655:
case 2159:
case 847:
case 145:
case 371:
case 2470:
case 1252:
case 2598:
case 3578:
case 862:
case 98:
case 2359:
case 2324:
case 1617:
case 257:
case 3780:
case 87:
case 3382:
case 3319:
case 3580:
case 311:
case 4079:
case 2171:
case 3233:
case 3298:
case 1359:
case 602:
case 4073:
case 3451:
case 744:
case 1315:
case 2213:
case 3090:
case 1402:
case 2198:
case 1344:
case 3217:
case 3410:
case 888:
case 258:
case 1298:
case 101:
case 1447:
case 2278:
case 3464:
case 3058:
case 1531:
case 1570:
case 683:
case 666:
case 88:
case 3388:
case 1954:
case 520:
case 3882:
case 1961:
case 3275:
case 2564:
case 2248:
case 3953:
case 2861:
case 611:
case 3935:
case 2150:
case 2534:
case 2558:
case 806:
case 3495:
case 3990:
case 4:
case 736:
case 2612:
case 4071:
case 3049:
case 1190:
case 1220:
case 1574:
case 363:
case 3088:
case 3717:
case 3397:
case 477:
case 2902:
case 755:
case 3129:
case 3485:
case 2369:
case 540:
case 488:
case 3581:
case 4037:
case 3597:
case 2697:
case 930:
case 3630:
case 529:
case 3889:
case 1922:
case 45:
case 1228:
case 447:
case 1853:
case 539:
case 1189:
case 2422:
case 3468:
case 190:
case 582:
case 3572:
case 368:
case 289:
case 3305:
case 3371:
case 3600:
case 1142:
case 189:
case 3209:
case 791:
case 2781:
case 3392:
case 2543:
case 1705:
case 156:
case 3777:
case 589:
case 2692:
case 490:
case 2077:
case 1573:
case 3056:
case 2411:
case 2657:
case 57:
case 2618:
case 1838:
case 1858:
case 466:
case 1823:
case 46:
case 1063:
case 2246:
case 640:
case 498:
case 39:
case 3333:
case 2126:
case 2185:
case 3651:
case 2358:
case 2322:
case 248:
case 830:
case 3674:
case 1346:
case 1062:
case 208:
case 3269:
case 2665:
case 4002:
case 867:
case 3046:
case 596:
case 519:
case 663:
case 1841:
case 2038:
case 3984:
case 399:
case 2722:
case 2615:
case 3296:
case 2853:
case 951:
case 547:
case 2368:
case 3785:
case 1647:
case 2343:
case 1477:
case 316:
case 413:
case 2454:
case 3438:
case 1090:
case 3991:
case 2820:
case 2937:
case 3527:
case 2840:
case 1931:
case 2023:
case 1979:
case 1123:
case 907:
case 2915:
case 110:
case 2182:
case 1144:
case 1285:
case 1902:
case 728:
case 3355:
case 2104:
case 541:
case 1809:
case 759:
case 571:
case 892:
case 2375:
case 1911:
case 3766:
case 400:
case 3623:
case 3254:
case 837:
case 2277:
case 3849:
case 3257:
case 3164:
case 2995:
case 3196:
case 1165:
case 2562:
case 3433:
case 2397:
case 1630:
case 3236:
case 2866:
case 1758:
case 2122:
case 3364:
case 2744:
case 1361:
case 1207:
case 3287:
case 1161:
case 1834:
case 1747:
case 2475:
case 1706:
case 3351:
case 3812:
case 3775:
case 3762:
case 2402:
case 2783:
case 341:
case 2105:
case 1017:
case 2602:
case 1176:
case 600:
case 3893:
case 3568:
case 2944:
case 2814:
case 3629:
case 3494:
case 243:
case 2592:
case 895:
case 2308:
case 2336:
case 1251:
case 3937:
case 3791:
case 3435:
case 1423:
case 2746:
case 3384:
case 2708:
case 846:
case 1534:
case 772:
case 3565:
case 3445:
case 345:
case 1955:
case 4050:
case 3667:
case 3723:
case 2758:
case 2767:
case 2431:
case 2209:
case 2164:
case 986:
case 3788:
case 3831:
case 724:
case 41:
case 233:
case 1749:
case 2753:
case 3237:
case 3379:
case 2750:
case 3985:
case 2957:
case 2506:
case 2019:
case 2011:
case 2092:
case 1917:
case 512:
case 2471:
case 1666:
case 1796:
case 2514:
case 1242:
case 1382:
case 2593:
case 3191:
case 764:
case 3865:
case 704:
case 123:
case 3790:
case 3476:
case 1765:
case 75:
case 743:
case 1463:
case 2745:
case 1600:
case 3068:
case 1498:
case 1203:
case 3094:
case 4040:
case 2545:
case 1722:
case 5:
case 1412:
case 1694:
case 3969:
case 1216:
case 856:
case 3797:
case 1117:
case 164:
case 372:
case 63:
case 1333:
case 1575:
case 187:
case 2337:
case 3712:
case 2678:
case 3276:
case 3062:
case 3843:
case 3556:
case 3770:
case 926:
case 1836:
case 2694:
case 1815:
case 1038:
case 1180:
case 2568:
case 301:
case 4026:
case 2990:
case 2830:
case 2628:
case 1846:
case 576:
case 1078:
case 3562:
case 527:
case 807:
case 3989:
case 3091:
case 2588:
case 324:
case 210:
case 2040:
case 964:
case 2742:
case 405:
case 3628:
case 1471:
case 2208:
case 1678:
case 919:
case 4012:
case 3295:
case 2703:
case 2652:
case 1612:
case 150:
case 1436:
case 68:
case 3327:
case 2291:
case 3936:
case 1885:
case 2951:
case 1356:
case 1506:
case 748:
case 3519:
case 556:
case 1874:
case 1425:
case 970:
case 575:
case 2533:
case 43:
case 1319:
case 3465:
case 2427:
case 1995:
case 201:
case 29:
case 337:
case 397:
case 4052:
case 3428:
case 3173:
case 3096:
case 214:
case 3957:
case 1104:
case 3149:
case 3665:
case 61:
case 749:
case 1938:
case 2201:
case 2333:
case 876:
case 1571:
case 3576:
case 3256:
case 1900:
case 1564:
case 3176:
case 2807:
case 2857:
case 3243:
case 2724:
case 1690:
case 3457:
case 2701:
case 3659:
case 3289:
case 870:
case 2211:
case 2233:
case 2788:
case 1294:
case 1080:
case 1533:
case 4047:
case 918:
case 2125:
case 513:
case 96:
case 3878:
case 3097:
case 3838:
case 2139:
case 1555:
case 3794:
case 2289:
case 4062:
case 2996:
case 182:
case 2596:
case 1149:
case 3253:
case 2140:
case 3680:
case 3888:
case 2274:
case 1939:
case 1559:
case 500:
case 2819:
case 2173:
case 2214:
case 4066:
case 138:
case 2511:
case 3467:
case 1148:
case 3612:
case 3751:
case 1438:
case 183:
case 11:
case 1502:
case 3406:
case 1399:
case 866:
case 739:
case 3102:
case 3509:
case 342:
case 1586:
case 3285:
case 2922:
case 3694:
case 169:
case 2773:
case 1495:
case 775:
case 457:
case 2684:
case 1098:
case 277:
case 678:
case 3842:
case 978:
case 2175:
case 3590:
case 2123:
case 1284:
case 3595:
case 3940:
case 2555:
case 1665:
case 3643:
case 2191:
case 226:
case 168:
case 3992:
case 1270:
case 3281:
case 3997:
case 2926:
case 264:
case 783:
case 2889:
case 1894:
case 2169:
case 2624:
case 3918:
case 60:
case 344:
case 648:
case 3999:
case 1107:
case 1599:
case 1099:
case 2544:
case 1334:
case 3105:
case 3278:
case 891:
case 1163:
case 1488:
case 665:
case 1199:
case 1656:
case 3197:
case 276:
case 779:
case 2734:
case 2676:
case 3567:
case 197:
case 2664:
case 2983:
case 947:
case 2797:
case 1761:
case 1726:
case 1013:
case 1986:
case 564:
case 693:
case 3596:
case 2890:
case 3251:
case 2539:
case 1731:
case 380:
case 3924:
case 2057:
case 3848:
case 3539:
case 997:
case 31:
case 2258:
case 3693:
case 1079:
case 3799:
case 2792:
case 3299:
case 1042:
case 2800:
case 3561:
case 2325:
case 1341:
case 1481:
case 660:
case 630:
case 3429:
case 3238:
case 3908:
case 2387:
case 860:
case 1384:
case 643:
case 3540:
case 635:
case 3632:
case 1350:
case 3741:
case 1750:
case 2443:
case 3710:
case 3535:
case 1127:
case 3724:
case 2918:
case 3773:
case 707:
case 1663:
case 2864:
case 2837:
case 268:
case 3825:
case 1024:
case 1563:
case 2712:
case 4077:
case 2474:
case 1832:
case 750:
case 732:
case 4042:
case 2416:
case 882:
case 2192:
case 981:
case 2293:
case 3260:
case 1292:
case 1536:
case 1010:
case 3311:
case 228:
case 3050:
case 2548:
case 4092:
case 789:
case 1227:
case 841:
case 3930:
case 3018:
case 181:
case 2607:
case 3709:
case 1039:
case 612:
case 1770:
case 1226:
case 2553:
case 4011:
case 2412:
case 1342:
case 848:
case 2413:
case 453:
case 944:
case 868:
case 1358:
case 3650:
case 833:
case 49:
case 3950:
case 2071:
case 1855:
case 2630:
case 1340:
case 1948:
case 1265:
case 2948:
case 1427:
case 3395:
case 3732:
case 3715:
case 326:
case 2441:
case 2695:
case 4031:
case 473:
case 2748:
case 4059:
case 3222:
case 1737:
case 491:
case 2557:
case 1095:
case 2068:
case 3312:
case 1774:
case 1818:
case 2372:
case 3658:
case 3642:
case 1777:
case 756:
case 36:
case 1036:
case 2867:
case 3034:
case 1398:
case 269:
case 199:
case 2823:
case 1307:
case 2591:
case 1551:
case 738:
case 2404:
case 2891:
case 3639:
case 1697:
case 831:
case 2252:
case 2685:
case 3557:
case 3024:
case 285:
case 1222:
case 1667:
case 1105:
case 66:
case 1980:
case 2153:
case 1001:
case 800:
case 1903:
case 4003:
case 3390:
case 3546:
case 2160:
case 1629:
case 595:
case 302:
case 785:
case 3771:
case 2445:
case 1387:
case 4001:
case 3190:
case 1633:
case 3452:
case 1121:
case 407:
case 3081:
case 3271:
case 2241:
case 2935:
case 4075:
case 3516:
case 191:
case 2231:
case 2825:
case 1390:
case 3103:
case 943:
case 2771:
case 3860:
case 4051:
case 558:
case 2530:
case 1914:
case 3095:
case 3218:
case 2661:
case 3403:
case 3649:
case 3304:
case 601:
case 3147:
case 1147:
case 1264:
case 2282:
case 51:
case 1824:
case 1209:
case 3216:
case 1714:
case 2186:
case 3186:
case 793:
case 99:
case 1422:
case 2956:
case 3714:
case 3743:
case 1790:
case 2161:
case 1071:
case 3864:
case 1139:
case 1884:
case 532:
case 2179:
case 3332:
case 3188:
case 2390:
case 727:
case 4034:
case 1192:
case 1146:
case 1182:
case 2903:
case 3381:
case 2136:
case 3753:
case 3951:
case 2927:
case 2244:
case 2473:
case 1126:
case 1646:
case 952:
case 3427:
case 3742:
case 961:
case 3956:
case 2069:
case 1959:
case 597:
case 914:
case 1267:
case 2076:
case 2671:
case 470:
case 86:
case 2026:
case 3060:
case 2406:
case 2622:
case 1153:
case 1223:
case 3265:
case 2693:
case 2921:
case 2822:
case 3971:
case 1946:
case 16:
case 2714:
case 1094:
case 567:
case 1883:
case 1507:
case 134:
case 2817:
case 760:
case 1067:
case 2245:
case 3722:
case 3559:
case 2008:
case 2616:
case 859:
case 2525:
case 1649:
case 2808:
case 2156:
case 1221:
case 1114:
case 3002:
case 714:
case 369:
case 2115:
case 1530:
case 1492:
case 2302:
case 2571:
case 1324:
case 851:
case 1:
case 2349:
case 681:
case 2326:
case 987:
case 3553:
case 1700:
case 777:
case 580:
case 1397:
case 1168:
case 3212:
case 1443:
case 787:
case 813:
case 3734:
case 2294:
case 104:
case 3019:
case 347:
case 1569:
case 1445:
case 217:
case 2310:
case 3523:
case 2725:
case 3491:
case 484:
case 4010:
case 1850:
case 3248:
case 159:
case 3481:
case 3261:
case 3506:
case 172:
case 780:
case 3897:
case 474:
case 3187:
case 2249:
case 2131:
case 1288:
case 205:
case 203:
case 2332:
case 3020:
case 53:
case 2943:
case 2809:
case 54:
case 1030:
case 3949:
case 1066:
case 3023:
case 2953:
case 3175:
case 2453:
case 3945:
case 3051:
case 3077:
case 3085:
case 1260:
case 2242:
case 1998:
case 1645:
case 3227:
case 1880:
case 2787:
case 1890:
case 1951:
case 3606:
case 2304:
case 1584:
case 2395:
case 3644:
case 2296:
case 245:
case 523:
case 292:
case 2340:
case 449:
case 297:
case 2265:
case 200:
case 3619:
case 4082:
case 3963:
case 528:
case 977:
case 1863:
case 2094:
case 688:
case 2027:
case 3505:
case 1380:
case 3970:
case 3093:
case 2517:
case 1106:
case 538:
case 3856:
case 3179:
case 3675:
case 1565:
case 705:
case 3560:
case 3127:
case 3137:
case 1259:
case 662:
case 2611:
case 1769:
case 1458:
case 1097:
case 2799:
case 1426:
case 2212:
case 904:
case 2018:
case 1059:
case 1982:
case 3255:
case 1615:
case 1620:
case 3143:
case 3995:
case 3636:
case 3863:
case 331:
case 376:
case 4081:
case 3754:
case 3372:
case 1113:
case 2873:
case 446:
case 1702:
case 2086:
case 1609:
case 525:
case 3756:
case 1418:
case 745:
case 2373:
case 3931:
case 70:
case 3066:
case 2058:
case 627:
case 1472:
case 3544:
case 299:
case 3518:
case 136:
case 718:
case 232:
case 1136:
case 1159:
case 2206:
case 3207:
case 966:
case 3671:
case 2227:
case 3621:
case 3052:
case 3625:
case 763:
case 2691:
case 3131:
case 1548:
case 62:
case 638:
case 2751:
case 3473:
case 443:
case 698:
case 1089:
case 2838:
case 1970:
case 901:
case 863:
case 1302:
case 2492:
case 2043:
case 350:
case 2063:
case 2321:
case 3610:
case 2239:
case 3426:
case 3424:
case 2345:
case 1444:
case 1043:
case 1255:
case 3739:
case 515:
case 1101:
case 2914:
case 3109:
case 3498:
case 3620:
case 3264:
case 1795:
case 2491:
case 1459:
case 664:
case 1856:
case 844:
case 934:
case 682:
case 1371:
case 1262:
case 3757:
case 967:
case 2536:
case 1018:
case 412:
case 3240:
case 506:
case 91:
case 475:
case 1611:
case 1763:
case 723:
case 1210:
case 3705:
case 2020:
case 3431:
case 3786:
case 2955:
case 2852:
case 3887:
case 3122:
case 671:
case 1920:
case 1892:
case 2121:
case 1708:
case 849:
case 2269:
case 137:
case 3585:
case 1923:
case 3463:
case 549:
case 356:
case 3832:
case 3244:
case 2134:
case 2438:
case 3267:
case 1479:
case 3504:
case 815:
case 501:
case 3458:
case 1899:
case 2007:
case 2736:
case 3283:
case 2719:
case 280:
case 1542:
case 1273:
case 4068:
case 1952:
case 1976:
case 499:
case 2769:
case 606:
case 2315:
case 1585:
case 2120:
case 2570:
case 3114:
case 1152:
case 4091:
case 2910:
case 963:
case 1060:
case 1704:
case 3439:
case 37:
case 438:
case 3113:
case 2331:
case 3954:
case 2768:
case 1614:
case 293:
case 1070:
case 1365:
case 1205:
case 2818:
case 518:
case 4036:
case 2313:
case 3121:
case 2419:
case 585:
case 2522:
case 605:
case 424:
case 1247:
case 1100:
case 1433:
case 4074:
case 2066:
case 1318:
case 417:
case 3456:
case 761:
case 2070:
case 1636:
case 2046:
case 3155:
case 1532:
case 2498:
case 479:
case 551:
case 2250:
case 3185:
case 42:
case 2079:
case 2574:
case 2609:
case 238:
case 2721:
case 2025:
case 330:
case 2505:
case 3490:
case 3883:
case 1275:
case 2067:
case 1239:
case 3442:
case 1724:
case 3076:
case 2264:
case 3000:
case 406:
case 2900:
case 184:
case 167:
case 3223:
case 1936:
case 2065:
case 973:
case 1919:
case 3493:
case 1188:
case 3507:
case 2573:
case 881:
case 1579:
case 2087:
case 2936:
case 2899:
case 281:
case 215:
case 3089:
case 3747:
case 2259:
case 2594:
case 4076:
case 817:
case 2756:
case 250:
case 2848:
case 1087:
case 1395:
case 2711:
case 1762:
case 3213:
case 3462:
case 2351:
case 1186:
case 3609:
case 3092:
case 3571:
case 1064:
case 3328:
case 524:
case 946:
case 2930:
case 2262:
case 3144:
case 4063:
case 2217:
case 3259:
case 3964:
case 3877:
case 2757:
case 3725:
case 3789:
case 1381:
case 3226:
case 3528:
case 1306:
case 1842:
case 2028:
case 2286:
case 834:
case 2606:
case 1550:
case 569:
case 3231:
case 2845:
case 1618:
case 2846:
case 2015:
case 3268:
case 624:
case 4087:
case 1086:
case 747:
case 2254:
case 1478:
case 956:
case 2193:
case 722:
case 3064:
case 3110:
case 3120:
case 639:
case 1981:
case 2804:
case 654:
case 1881:
case 1921:
case 548:
case 1460:
case 2969:
case 1581:
case 3844:
case 3369:
case 3814:
case 1879:
case 2297:
case 374:
case 827:
case 3599:
case 1020:
case 1628:
case 2232:
case 2225:
case 2434:
case 3357:
case 2931:
case 1957:
case 3840:
case 2132:
case 2765:
case 349:
case 1000:
case 1428:
case 414:
case 1093:
case 3074:
case 3547:
case 1103:
case 3603:
case 959:
case 3425:
case 188:
case 2802:
case 839:
case 3167:
case 2102:
case 1394:
case 2423:
case 3329:
case 108:
case 1912:
case 1110:
case 2377:
case 2621:
case 3806:
case 2376:
case 592:
case 3946:
case 3826:
case 1379:
case 1547:
case 1157:
case 2920:
case 561:
case 3513:
case 3818:
case 2099:
case 3404:
case 1253:
case 550:
case 2222:
case 1200:
case 1732:
case 55:
case 3690:
case 657:
case 3543:
case 968:
case 820:
case 259:
case 1243:
case 2583:
case 1803:
case 2432:
case 1056:
case 2794:
case 795:
case 1675:
case 2482:
case 642:
case 2923:
case 633:
case 2309:
case 81:
case 2461:
case 428:
case 2370:
case 3942:
case 1483:
case 1528:
case 3302:
case 2559:
case 818:
case 1887:
case 1031:
case 1845:
case 1337:
case 2203:
case 2650:
case 1576:
case 509:
case 2688:
case 953:
case 1558:
case 1312:
case 573:
case 3195:
case 2380:
case 2080:
case 1904:
case 1281:
case 865:
case 939:
case 3054:
case 125:
case 2146:
case 634:
case 2166:
case 1699:
case 746:
case 1088:
case 1805:
case 3441:
case 2892:
case 729:
case 2088:
case 2162:
case 3728:
case 1092:
case 2284:
case 1158:
case 996:
case 3574:
case 3944:
case 459:
case 367:
case 1016:
case 1282:
case 3387:
case 653:
case 3272:
case 1833:
case 1154:
case 1376:
case 588:
case 3082:
case 3159:
case 3079:
case 3086:
case 3459:
case 3821:
case 3861:
case 3210:
case 3902:
case 148:
case 586:
case 2133:
case 2379:
case 300:
case 1277:
case 2329:
case 2034:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1669615201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,];
var gg_b = "1669615201/";

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
