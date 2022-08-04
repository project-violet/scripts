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
case 1953:
case 3582:
case 3277:
case 505:
case 3821:
case 3218:
case 3334:
case 3685:
case 2155:
case 3019:
case 3389:
case 1318:
case 4008:
case 164:
case 1483:
case 3214:
case 3142:
case 2262:
case 2494:
case 2526:
case 617:
case 3448:
case 2833:
case 498:
case 1028:
case 3408:
case 1401:
case 3225:
case 3539:
case 3768:
case 3276:
case 71:
case 2071:
case 2470:
case 2261:
case 439:
case 3729:
case 201:
case 785:
case 2531:
case 1820:
case 1551:
case 3848:
case 1725:
case 2348:
case 1763:
case 2817:
case 1659:
case 1226:
case 1887:
case 1946:
case 1526:
case 954:
case 2816:
case 2598:
case 2136:
case 62:
case 2374:
case 155:
case 1851:
case 3573:
case 2847:
case 1395:
case 3914:
case 649:
case 3663:
case 916:
case 1640:
case 286:
case 2022:
case 218:
case 1169:
case 1572:
case 1105:
case 2363:
case 798:
case 226:
case 2658:
case 3726:
case 3876:
case 2006:
case 22:
case 3294:
case 1032:
case 3687:
case 1015:
case 1209:
case 268:
case 2685:
case 339:
case 1977:
case 3465:
case 3039:
case 2581:
case 390:
case 1524:
case 2039:
case 2111:
case 3140:
case 1739:
case 3245:
case 3272:
case 163:
case 3021:
case 2439:
case 2461:
case 1189:
case 944:
case 1059:
case 94:
case 1783:
case 862:
case 1278:
case 689:
case 253:
case 3293:
case 1070:
case 386:
case 2688:
case 3817:
case 695:
case 3788:
case 1888:
case 3255:
case 1715:
case 3626:
case 224:
case 2253:
case 825:
case 1097:
case 1768:
case 242:
case 1380:
case 232:
case 733:
case 3475:
case 1491:
case 3301:
case 48:
case 1938:
case 3312:
case 3407:
case 1437:
case 1878:
case 1009:
case 272:
case 4080:
case 2996:
case 1347:
case 681:
case 3239:
case 3224:
case 3749:
case 813:
case 2185:
case 812:
case 127:
case 4026:
case 3676:
case 2173:
case 850:
case 3644:
case 3030:
case 2828:
case 3070:
case 2836:
case 3751:
case 2225:
case 3620:
case 124:
case 2776:
case 4057:
case 3857:
case 740:
case 1965:
case 1752:
case 598:
case 2455:
case 482:
case 1237:
case 3194:
case 487:
case 3344:
case 534:
case 2896:
case 1481:
case 1633:
case 432:
case 2584:
case 3815:
case 2458:
case 128:
case 1047:
case 1944:
case 781:
case 3851:
case 2376:
case 3289:
case 1333:
case 1627:
case 777:
case 3587:
case 452:
case 3061:
case 2872:
case 25:
case 403:
case 1438:
case 1095:
case 3495:
case 3262:
case 1269:
case 3715:
case 1370:
case 672:
case 3302:
case 499:
case 3647:
case 2849:
case 2689:
case 2779:
case 2798:
case 2134:
case 3833:
case 540:
case 315:
case 426:
case 1880:
case 2277:
case 2553:
case 637:
case 926:
case 47:
case 3643:
case 1229:
case 636:
case 3849:
case 2312:
case 2282:
case 1648:
case 504:
case 1498:
case 1511:
case 1936:
case 714:
case 3376:
case 112:
case 1029:
case 134:
case 3054:
case 1382:
case 1547:
case 3869:
case 166:
case 2782:
case 2628:
case 2072:
case 1835:
case 1017:
case 912:
case 1482:
case 1850:
case 2819:
case 648:
case 2671:
case 3949:
case 2644:
case 3598:
case 1031:
case 2720:
case 2307:
case 330:
case 1442:
case 3052:
case 1808:
case 100:
case 1853:
case 2897:
case 1037:
case 3933:
case 292:
case 579:
case 306:
case 795:
case 3932:
case 667:
case 3188:
case 2035:
case 2012:
case 2137:
case 2366:
case 1517:
case 3662:
case 510:
case 2548:
case 3747:
case 883:
case 2102:
case 1439:
case 3908:
case 3730:
case 2430:
case 1414:
case 83:
case 2939:
case 608:
case 1011:
case 2989:
case 1359:
case 1719:
case 3456:
case 1842:
case 1522:
case 1074:
case 251:
case 3374:
case 3856:
case 3772:
case 3631:
case 839:
case 2034:
case 2727:
case 2951:
case 1929:
case 2211:
case 2521:
case 150:
case 1518:
case 3753:
case 2965:
case 2607:
case 2178:
case 1486:
case 1683:
case 1336:
case 2365:
case 3965:
case 2228:
case 1966:
case 1917:
case 4067:
case 3430:
case 533:
case 1753:
case 3165:
case 2662:
case 3074:
case 3027:
case 2026:
case 626:
case 642:
case 1297:
case 4086:
case 2415:
case 262:
case 3709:
case 624:
case 3900:
case 3134:
case 137:
case 3251:
case 446:
case 285:
case 1507:
case 3319:
case 574:
case 3398:
case 1084:
case 632:
case 525:
case 3174:
case 2046:
case 938:
case 3169:
case 2169:
case 1710:
case 1463:
case 2270:
case 3124:
case 1571:
case 507:
case 3529:
case 371:
case 1350:
case 625:
case 1508:
case 3471:
case 3648:
case 340:
case 1607:
case 1339:
case 2909:
case 2378:
case 3500:
case 827:
case 3623:
case 2492:
case 1536:
case 3079:
case 1462:
case 2058:
case 1612:
case 2953:
case 119:
case 1788:
case 477:
case 528:
case 981:
case 3007:
case 3314:
case 2838:
case 3154:
case 1175:
case 2127:
case 3380:
case 39:
case 3629:
case 896:
case 882:
case 3861:
case 3963:
case 952:
case 2695:
case 2508:
case 1904:
case 706:
case 2967:
case 2177:
case 1860:
case 3640:
case 3534:
case 752:
case 320:
case 4003:
case 1426:
case 3086:
case 1005:
case 1897:
case 3125:
case 3621:
case 3843:
case 26:
case 1909:
case 382:
case 770:
case 76:
case 3597:
case 3722:
case 3474:
case 1565:
case 3891:
case 1433:
case 925:
case 3501:
case 1242:
case 1941:
case 2691:
case 1247:
case 2857:
case 3947:
case 2769:
case 759:
case 429:
case 1976:
case 802:
case 3412:
case 1609:
case 4011:
case 3121:
case 3468:
case 3943:
case 3090:
case 2646:
case 2021:
case 3062:
case 1770:
case 577:
case 1906:
case 2854:
case 1960:
case 828:
case 3504:
case 1061:
case 2597:
case 3689:
case 1182:
case 972:
case 114:
case 3571:
case 1892:
case 4073:
case 1388:
case 2467:
case 1206:
case 3845:
case 2744:
case 3367:
case 1051:
case 4036:
case 1798:
case 561:
case 2533:
case 3854:
case 2583:
case 6:
case 2003:
case 2431:
case 1447:
case 2086:
case 496:
case 3227:
case 3520:
case 2791:
case 1532:
case 1287:
case 741:
case 3610:
case 3005:
case 91:
case 331:
case 596:
case 2948:
case 4006:
case 552:
case 368:
case 3828:
case 2511:
case 2097:
case 3115:
case 843:
case 3524:
case 1099:
case 3463:
case 1593:
case 2404:
case 2810:
case 2486:
case 93:
case 1202:
case 2759:
case 887:
case 735:
case 283:
case 3068:
case 433:
case 3614:
case 3385:
case 3167:
case 784:
case 519:
case 1215:
case 3046:
case 3038:
case 566:
case 2832:
case 583:
case 2054:
case 2094:
case 2311:
case 3459:
case 1895:
case 789:
case 274:
case 3710:
case 2795:
case 2944:
case 3278:
case 2009:
case 2052:
case 515:
case 796:
case 730:
case 2537:
case 1709:
case 2666:
case 3180:
case 738:
case 3375:
case 3229:
case 2566:
case 2045:
case 4055:
case 3393:
case 489:
case 1666:
case 3719:
case 3531:
case 2181:
case 1323:
case 2414:
case 1891:
case 3056:
case 344:
case 2477:
case 961:
case 2618:
case 2266:
case 2578:
case 822:
case 613:
case 2893:
case 3801:
case 856:
case 3160:
case 3480:
case 1417:
case 1022:
case 737:
case 923:
case 1340:
case 1184:
case 2790:
case 2146:
case 3256:
case 49:
case 2151:
case 2903:
case 1845:
case 2657:
case 1249:
case 2862:
case 1450:
case 266:
case 2884:
case 38:
case 1163:
case 2489:
case 3706:
case 3365:
case 1757:
case 578:
case 1981:
case 2014:
case 2191:
case 2011:
case 1720:
case 1082:
case 1270:
case 641:
case 1764:
case 3677:
case 3790:
case 3298:
case 1421:
case 2159:
case 3097:
case 2381:
case 4061:
case 2274:
case 1130:
case 3922:
case 1964:
case 3996:
case 3593:
case 2104:
case 2144:
case 3515:
case 1381:
case 544:
case 3036:
case 52:
case 180:
case 2163:
case 1230:
case 1777:
case 4078:
case 3928:
case 118:
case 3727:
case 139:
case 1758:
case 2322:
case 2475:
case 4033:
case 1358:
case 307:
case 7:
case 2811:
case 2207:
case 1521:
case 3472:
case 2:
case 4056:
case 2742:
case 1505:
case 2780:
case 2295:
case 1600:
case 2063:
case 1807:
case 2215:
case 974:
case 1729:
case 1131:
case 1187:
case 2457:
case 2630:
case 3956:
case 1341:
case 2098:
case 3432:
case 516:
case 946:
case 237:
case 1581:
case 2639:
case 3744:
case 111:
case 3369:
case 1346:
case 909:
case 3807:
case 1509:
case 154:
case 3387:
case 3873:
case 1867:
case 2926:
case 1062:
case 921:
case 1260:
case 709:
case 2538:
case 2393:
case 2767:
case 3966:
case 1343:
case 2621:
case 293:
case 156:
case 3903:
case 3483:
case 2615:
case 395:
case 4095:
case 1766:
case 2201:
case 3363:
case 2905:
case 179:
case 2517:
case 2357:
case 3461:
case 2403:
case 1915:
case 666:
case 3359:
case 28:
case 3674:
case 350:
case 3855:
case 1195:
case 3721:
case 1413:
case 3836:
case 1066:
case 2608:
case 1368:
case 2317:
case 607:
case 1797:
case 3967:
case 2325:
case 4058:
case 1671:
case 2255:
case 3942:
case 1098:
case 1120:
case 729:
case 790:
case 1869:
case 3438:
case 1077:
case 2850:
case 2291:
case 1884:
case 1540:
case 941:
case 2256:
case 988:
case 321:
case 3266:
case 3567:
case 2331:
case 1387:
case 1451:
case 1823:
case 1975:
case 2949:
case 1324:
case 590:
case 1589:
case 4094:
case 1863:
case 281:
case 1218:
case 2892:
case 4053:
case 175:
case 494:
case 1515:
case 3243:
case 304:
case 3012:
case 3491:
case 2284:
case 880:
case 3237:
case 3509:
case 2957:
case 2122:
case 3031:
case 2875:
case 3071:
case 2911:
case 2091:
case 3822:
case 1716:
case 3173:
case 1063:
case 4014:
case 3292:
case 2669:
case 936:
case 1590:
case 3798:
case 2835:
case 1847:
case 3391:
case 1637:
case 2390:
case 894:
case 1334:
case 976:
case 404:
case 1775:
case 1529:
case 744:
case 2405:
case 2416:
case 3197:
case 4046:
case 811:
case 3101:
case 78:
case 3698:
case 1628:
case 594:
case 891:
case 971:
case 2488:
case 1801:
case 1335:
case 824:
case 2959:
case 1594:
case 3416:
case 3602:
case 1232:
case 3172:
case 2265:
case 1460:
case 1124:
case 1473:
case 245:
case 895:
case 2050:
case 673:
case 1121:
case 142:
case 1038:
case 4089:
case 573:
case 687:
case 2434:
case 1933:
case 2168:
case 1824:
case 2260:
case 1132:
case 3025:
case 1428:
case 1363:
case 764:
case 3761:
case 623:
case 3713:
case 3915:
case 2587:
case 2714:
case 227:
case 1494:
case 2523:
case 551:
case 1243:
case 4037:
case 2367:
case 2257:
case 1604:
case 2681:
case 267:
case 1133:
case 3128:
case 68:
case 1296:
case 1033:
case 773:
case 296:
case 2834:
case 299:
case 4020:
case 3927:
case 2128:
case 554:
case 3830:
case 2536:
case 3946:
case 9:
case 1986:
case 541:
case 3437:
case 2936:
case 51:
case 2730:
case 3803:
case 2986:
case 3734:
case 1905:
case 992:
case 2314:
case 3419:
case 3852:
case 3342:
case 3328:
case 3089:
case 2465:
case 3015:
case 2616:
case 455:
case 2917:
case 3333:
case 297:
case 1168:
case 2654:
case 4013:
case 1048:
case 4079:
case 3519:
case 2899:
case 2867:
case 521:
case 2074:
case 570:
case 141:
case 2568:
case 1685:
case 2452:
case 1373:
case 975:
case 3628:
case 354:
case 2509:
case 1519:
case 3920:
case 3536:
case 997:
case 3473:
case 1664:
case 491:
case 3230:
case 1989:
case 2774:
case 3878:
case 1605:
case 4059:
case 1355:
case 1282:
case 2813:
case 2806:
case 3065:
case 3083:
case 3952:
case 1127:
case 919:
case 806:
case 1172:
case 2713:
case 1789:
case 1881:
case 3022:
case 893:
case 1164:
case 877:
case 133:
case 36:
case 474:
case 3240:
case 138:
case 1464:
case 2947:
case 173:
case 3639:
case 1495:
case 3584:
case 3486:
case 2030:
case 756:
case 3725:
case 647:
case 4028:
case 830:
case 1638:
case 2038:
case 3064:
case 3784:
case 2384:
case 3850:
case 2028:
case 1900:
case 1322:
case 1391:
case 2493:
case 3178:
case 2462:
case 3606:
case 3143:
case 2398:
case 50:
case 620:
case 407:
case 3714:
case 1021:
case 1271:
case 1006:
case 3252:
case 964:
case 1951:
case 1246:
case 1674:
case 1974:
case 767:
case 235:
case 3162:
case 3417:
case 3748:
case 890:
case 2637:
case 3216:
case 3205:
case 2915:
case 3937:
case 2928:
case 3458:
case 2981:
case 1241:
case 4081:
case 3282:
case 366:
case 1142:
case 3641:
case 2980:
case 341:
case 3373:
case 693:
case 2556:
case 2387:
case 2396:
case 3043:
case 3711:
case 3013:
case 1200:
case 1210:
case 2114:
case 2239:
case 3422:
case 358:
case 2785:
case 3426:
case 3824:
case 550:
case 2956:
case 3511:
case 1111:
case 4085:
case 10:
case 1921:
case 1465:
case 1821:
case 3403:
case 77:
case 2563:
case 1990:
case 2871:
case 1840:
case 2698:
case 874:
case 3995:
case 955:
case 2577:
case 1371:
case 3603:
case 473:
case 3717:
case 3260:
case 1257:
case 309:
case 633:
case 2354:
case 3557:
case 317:
case 1219:
case 2313:
case 2931:
case 11:
case 3381:
case 3793:
case 311:
case 4027:
case 3860:
case 1985:
case 3887:
case 1577:
case 2898:
case 2569:
case 3675:
case 782:
case 2940:
case 677:
case 3093:
case 2017:
case 99:
case 1926:
case 3445:
case 1125:
case 1369:
case 3428:
case 3082:
case 1711:
case 3248:
case 29:
case 3969:
case 2422:
case 3998:
case 362:
case 3219:
case 1792:
case 1399:
case 4019:
case 978:
case 2047:
case 1796:
case 717:
case 1734:
case 3066:
case 749:
case 4045:
case 2263:
case 3004:
case 316:
case 1899:
case 1367:
case 1668:
case 1661:
case 3318:
case 2864:
case 2988:
case 808:
case 901:
case 434:
case 143:
case 1601:
case 549:
case 1684:
case 3936:
case 3494:
case 845:
case 3988:
case 792:
case 3579:
case 258:
case 3765:
case 793:
case 2525:
case 1875:
case 2229:
case 2433:
case 1223:
case 1415:
case 271:
case 1623:
case 3736:
case 876:
case 2013:
case 3733:
case 543:
case 3327:
case 2355:
case 924:
case 1864:
case 867:
case 2716:
case 3684:
case 1617:
case 384:
case 3223:
case 59:
case 3791:
case 2339:
case 3175:
case 2922:
case 993:
case 2202:
case 3545:
case 1708:
case 412:
case 628:
case 3055:
case 2326:
case 44:
case 1093:
case 597:
case 2743:
case 3284:
case 1585:
case 2230:
case 1701:
case 4065:
case 301:
case 3075:
case 1773:
case 1634:
case 2750:
case 1670:
case 875:
case 1041:
case 3877:
case 1248:
case 1901:
case 1858:
case 591:
case 4092:
case 3161:
case 3120:
case 857:
case 3842:
case 2982:
case 1916:
case 450:
case 1422:
case 464:
case 3136:
case 1374:
case 1747:
case 241:
case 2781:
case 3236:
case 748:
case 4068:
case 1397:
case 4016:
case 684:
case 3290:
case 186:
case 392:
case 3377:
case 3632:
case 1484:
case 2611:
case 555:
case 2203:
case 560:
case 472:
case 513:
case 1394:
case 719:
case 696:
case 2803:
case 2278:
case 4044:
case 1970:
case 2453:
case 2503:
case 2763:
case 2212:
case 2703:
case 2937:
case 2120:
case 34:
case 2927:
case 1791:
case 3608:
case 2472:
case 2839:
case 713:
case 3270:
case 2524:
case 2141:
case 192:
case 3339:
case 2801:
case 2359:
case 1695:
case 2575:
case 4093:
case 2856:
case 1279:
case 2033:
case 183:
case 66:
case 567:
case 3635:
case 2349:
case 74:
case 3991:
case 75:
case 1826:
case 619:
case 1410:
case 3340:
case 3904:
case 2760:
case 1625:
case 768:
case 2400:
case 509:
case 854:
case 881:
case 2889:
case 3212:
case 3414:
case 1879:
case 1982:
case 2514:
case 3794:
case 171:
case 3449:
case 654:
case 2051:
case 2799:
case 2861:
case 2240:
case 1092:
case 181:
case 381:
case 1554:
case 1441:
case 3777:
case 4069:
case 3492:
case 327:
case 1613:
case 3844:
case 2890:
case 3354:
case 33:
case 559:
case 2053:
case 1183:
case 1552:
case 89:
case 2649:
case 2198:
case 3370:
case 415:
case 3308:
case 431:
case 939:
case 2830:
case 3776:
case 3288:
case 3470:
case 1523:
case 2217:
case 1166:
case 918:
case 1700:
case 3051:
case 3147:
case 2019:
case 1816:
case 2216:
case 53:
case 956:
case 213:
case 389:
case 2258:
case 3150:
case 1784:
case 3084:
case 13:
case 1930:
case 1636:
case 1152:
case 2126:
case 1389:
case 1516:
case 2112:
case 589:
case 1071:
case 3702:
case 3739:
case 852:
case 1141:
case 705:
case 3774:
case 3217:
case 2821:
case 1088:
case 2152:
case 1326:
case 3929:
case 3323:
case 3612:
case 2139:
case 2635:
case 1782:
case 771:
case 4040:
case 3384:
case 3883:
case 421:
case 153:
case 2614:
case 3372:
case 506:
case 3653:
case 1834:
case 3984:
case 270:
case 2765:
case 3802:
case 2979:
case 2221:
case 1102:
case 983:
case 2480:
case 1264:
case 2952:
case 3050:
case 3609:
case 1453:
case 2271:
case 3335:
case 2149:
case 2502:
case 2088:
case 859:
case 4034:
case 2055:
case 3708:
case 1652:
case 14:
case 2280:
case 1774:
case 2196:
case 123:
case 2726:
case 1922:
case 1014:
case 1639:
case 692:
case 569:
case 1317:
case 1984:
case 2292:
case 3286:
case 2466:
case 3192:
case 1174:
case 644:
case 3987:
case 1492:
case 2490:
case 92:
case 763:
case 2429:
case 1722:
case 1135:
case 1288:
case 1857:
case 1650:
case 3637:
case 109:
case 3362:
case 958:
case 2406:
case 3916:
case 1769:
case 1423:
case 2259:
case 844:
case 3535:
case 2594:
case 353:
case 960:
case 668:
case 1846:
case 1214:
case 3024:
case 2574:
case 585:
case 3267:
case 2902:
case 1496:
case 1420:
case 1923:
case 3944:
case 1546:
case 15:
case 3386:
case 4066:
case 3103:
case 835:
case 3819:
case 1503:
case 4047:
case 3892:
case 2768:
case 3797:
case 1499:
case 1549:
case 35:
case 2040:
case 2633:
case 3399:
case 884:
case 4022:
case 443:
case 1780:
case 1477:
case 2540:
case 1329:
case 1291:
case 826:
case 3738:
case 2876:
case 2728:
case 2724:
case 1849:
case 2226:
case 1718:
case 3974:
case 2731:
case 3420:
case 379:
case 1476:
case 860:
case 1843:
case 2115:
case 2593:
case 1302:
case 3261:
case 1794:
case 240:
case 2342:
case 3939:
case 898:
case 2029:
case 1008:
case 2227:
case 2383:
case 758:
case 2586:
case 279:
case 132:
case 2539:
case 1714:
case 2932:
case 3411:
case 920:
case 1855:
case 349:
case 3447:
case 940:
case 0:
case 1649:
case 3490:
case 294:
case 1128:
case 356:
case 868:
case 104:
case 2751:
case 823:
case 2682:
case 3213:
case 2663:
case 4021:
case 3291:
case 3879:
case 3429:
case 1578:
case 3:
case 1553:
case 2792:
case 3094:
case 55:
case 2140:
case 2610:
case 2362:
case 959:
case 701:
case 1039:
case 1138:
case 196:
case 3257:
case 3195:
case 2224:
case 1776:
case 3782:
case 2303:
case 2180:
case 1743:
case 2512:
case 621:
case 742:
case 1903:
case 797:
case 1662:
case 658:
case 332:
case 2955:
case 2651:
case 1705:
case 405:
case 2101:
case 3264:
case 3454:
case 172:
case 3743:
case 2855:
case 488:
case 661:
case 1533:
case 3870:
case 3496:
case 3450:
case 318:
case 1691:
case 1378:
case 2993:
case 3690:
case 1512:
case 1016:
case 1723:
case 1398:
case 732:
case 957:
case 526:
case 1726:
case 765:
case 1545:
case 3250:
case 1675:
case 27:
case 2891:
case 702:
case 1150:
case 322:
case 1068:
case 3453:
case 2929:
case 3858:
case 2124:
case 3607:
case 3652:
case 1818:
case 1560:
case 933:
case 1354:
case 2933:
case 1991:
case 3072:
case 1104:
case 3755:
case 734:
case 3834:
case 2297:
case 3482:
case 3925:
case 2044:
case 249:
case 2165:
case 1616:
case 375:
case 2844:
case 604:
case 3003:
case 373:
case 427:
case 2442:
case 3326:
case 2638:
case 1862:
case 671:
case 2015:
case 986:
case 398:
case 169:
case 1932:
case 2484:
case 1591:
case 3913:
case 703:
case 1479:
case 56:
case 57:
case 603:
case 904:
case 1319:
case 3493:
case 1238:
case 1641:
case 3404:
case 478:
case 2066:
case 1240:
case 3742:
case 2315:
case 2401:
case 592:
case 1103:
case 233:
case 500:
case 1786:
case 3546:
case 3366:
case 1167:
case 1564:
case 2460:
case 1109:
case 3968:
case 3181:
case 2440:
case 1749:
case 2487:
case 922:
case 3811:
case 2099:
case 365:
case 1656:
case 1844:
case 1696:
case 2912:
case 899:
case 438:
case 1056:
case 1902:
case 468:
case 3329:
case 1400:
case 563:
case 832:
case 4039:
case 4052:
case 1004:
case 2473:
case 3759:
case 3554:
case 454:
case 928:
case 931:
case 1475:
case 1672:
case 1258:
case 2591:
case 3590:
case 2220:
case 2938:
case 1968:
case 973:
case 865:
case 2281:
case 739:
case 2777:
case 98:
case 2794:
case 2392:
case 3911:
case 1698:
case 470:
case 2373:
case 710:
case 3616:
case 3119:
case 722:
case 1885:
case 1312:
case 367:
case 1348:
case 1856:
case 88:
case 508:
case 1054:
case 2943:
case 3881:
case 4:
case 760:
case 2770:
case 345:
case 622:
case 3971:
case 2788:
case 531:
case 2369:
case 3785:
case 3249:
case 3757:
case 2437:
case 1050:
case 2364:
case 1425:
case 2645:
case 818:
case 746:
case 151:
case 2715:
case 2519:
case 3069:
case 3451:
case 2620:
case 3604:
case 1952:
case 2426:
case 2740:
case 2910:
case 3045:
case 1252:
case 1228:
case 195:
case 3315:
case 645:
case 3871:
case 129:
case 302:
case 2135:
case 2625:
case 1455:
case 3010:
case 223:
case 1294:
case 2131:
case 2069:
case 2237:
case 1868:
case 1646:
case 2612:
case 1831:
case 1256:
case 2841:
case 278:
case 2288:
case 1574:
case 1828:
case 2334:
case 4015:
case 1762:
case 2901:
case 1405:
case 2148:
case 711:
case 1608:
case 2157:
case 3234:
case 1292:
case 236:
case 3898:
case 1602:
case 3117:
case 3686:
case 289:
case 712:
case 3955:
case 3481:
case 3209:
case 3080:
case 1785:
case 2269:
case 1328:
case 3787:
case 2602:
case 1283:
case 2293:
case 310:
case 3909:
case 2978:
case 817:
case 463:
case 2667:
case 725:
case 3994:
case 3341:
case 3350:
case 2934:
case 1443:
case 1303:
case 4077:
case 593:
case 2874:
case 990:
case 1461:
case 2471:
case 2118:
case 2236:
case 872:
case 1122:
case 1314:
case 30:
case 1497:
case 539:
case 1052:
case 4018:
case 1680:
case 869:
case 2377:
case 774:
case 747:
case 1338:
case 2624:
case 2622:
case 512:
case 3506:
case 2520:
case 2557:
case 1115:
case 2093:
case 1458:
case 1848:
case 2734:
case 3345:
case 260:
case 3638:
case 1259:
case 3439:
case 2294:
case 2395:
case 786:
case 2421:
case 3926:
case 2851:
case 2338:
case 3135:
case 2031:
case 2244:
case 221:
case 445:
case 419:
case 3758:
case 1332:
case 951:
case 211:
case 1205:
case 417:
case 2960:
case 2016:
case 3017:
case 177:
case 3418:
case 209:
case 2530:
case 453:
case 2732:
case 3182:
case 1514:
case 3040:
case 3297:
case 1760:
case 3666:
case 3978:
case 1424:
case 41:
case 2049:
case 1980:
case 2968:
case 775:
case 3114:
case 2060:
case 3825:
case 1349:
case 1959:
case 3561:
case 910:
case 2708:
case 3636:
case 3899:
case 447:
case 2778:
case 3993:
case 761:
case 3705:
case 2908:
case 1471:
case 3960:
case 2648:
case 2824:
case 1254:
case 3958:
case 967:
case 247:
case 680:
case 2729:
case 556:
case 2375:
case 2223:
case 2210:
case 1748:
case 2942:
case 3427:
case 584:
case 1203:
case 370:
case 650:
case 3586:
case 337:
case 3402:
case 4010:
case 1737:
case 3406:
case 145:
case 1308:
case 2336:
case 2515:
case 2420:
case 3029:
case 2147:
case 2823:
case 210:
case 3271:
case 3348:
case 3364:
case 2432:
case 3280:
case 2601:
case 708:
case 2206:
case 149:
case 160:
case 3664:
case 2661:
case 4082:
case 1208:
case 4083:
case 2954:
case 3691:
case 2825:
case 2564:
case 542:
case 2301:
case 444:
case 1268:
case 3867:
case 873:
case 1584:
case 3866:
case 1890:
case 2436:
case 2800:
case 248:
case 1010:
case 776:
case 2636:
case 2142:
case 3137:
case 3924:
case 3683:
case 2641:
case 984:
case 853:
case 3792:
case 906:
case 2096:
case 1311:
case 2619:
case 3541:
case 1454:
case 1147:
case 582:
case 757:
case 435:
case 2684:
case 1837:
case 3826:
case 17:
case 228:
case 3133:
case 255:
case 3081:
case 2863:
case 2827:
case 630:
case 117:
case 2672:
case 3132:
case 492:
case 3073:
case 3835:
case 1740:
case 1239:
case 1171:
case 3703:
case 2456:
case 1146:
case 2640:
case 778:
case 942:
case 2479:
case 3048:
case 1606:
case 95:
case 1619:
case 3694:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1659614401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,];
var gg_b = "1659614401/";

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
