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
case 3387:
case 2225:
case 38:
case 674:
case 3814:
case 3114:
case 2713:
case 1387:
case 18:
case 3543:
case 11:
case 101:
case 1508:
case 1814:
case 3975:
case 2377:
case 174:
case 1533:
case 392:
case 4055:
case 2043:
case 570:
case 227:
case 730:
case 61:
case 265:
case 601:
case 585:
case 192:
case 515:
case 1452:
case 798:
case 2981:
case 3274:
case 1843:
case 2221:
case 35:
case 3654:
case 3108:
case 2924:
case 3971:
case 3779:
case 2232:
case 1808:
case 1274:
case 3143:
case 1108:
case 2782:
case 1133:
case 1833:
case 933:
case 1459:
case 2488:
case 2734:
case 2239:
case 3478:
case 3133:
case 2386:
case 20:
case 2242:
case 1376:
case 3459:
case 3907:
case 65:
case 496:
case 3772:
case 2014:
case 1193:
case 2901:
case 790:
case 2709:
case 1253:
case 1163:
case 4070:
case 2683:
case 2794:
case 2299:
case 1188:
case 3673:
case 3893:
case 493:
case 3163:
case 2878:
case 2269:
case 341:
case 2204:
case 2433:
case 3863:
case 2408:
case 1950:
case 3375:
case 472:
case 2262:
case 3227:
case 1375:
case 1563:
case 436:
case 1593:
case 3052:
case 3563:
case 3593:
case 3976:
case 2559:
case 3371:
case 2093:
case 320:
case 2414:
case 578:
case 2324:
case 972:
case 24:
case 176:
case 4056:
case 3078:
case 1371:
case 994:
case 2088:
case 120:
case 2552:
case 379:
case 1059:
case 897:
case 2612:
case 738:
case 1078:
case 1766:
case 3925:
case 3040:
case 3285:
case 96:
case 3392:
case 3766:
case 70:
case 1285:
case 2811:
case 1362:
case 2530:
case 2655:
case 3796:
case 2353:
case 197:
case 3399:
case 820:
case 1735:
case 3015:
case 3030:
case 222:
case 1710:
case 2540:
case 3735:
case 1030:
case 879:
case 1490:
case 1932:
case 3281:
case 905:
case 4038:
case 3729:
case 1949:
case 832:
case 2651:
case 2271:
case 3984:
case 3932:
case 3460:
case 2511:
case 2815:
case 3741:
case 3011:
case 4048:
case 3428:
case 2797:
case 3318:
case 1011:
case 3939:
case 2140:
case 3326:
case 2840:
case 3416:
case 2207:
case 1600:
case 1428:
case 1318:
case 2128:
case 337:
case 1761:
case 1969:
case 1904:
case 1440:
case 3999:
case 3904:
case 2017:
case 1430:
case 4068:
case 3517:
case 1325:
case 1992:
case 1680:
case 2860:
case 3962:
case 2927:
case 3415:
case 637:
case 3325:
case 3992:
case 4083:
case 2250:
case 1657:
case 2190:
case 3926:
case 1765:
case 3286:
case 1746:
case 3339:
case 3060:
case 2528:
case 1918:
case 1795:
case 4012:
case 3090:
case 801:
case 81:
case 3205:
case 1926:
case 2516:
case 3746:
case 1339:
case 1090:
case 3384:
case 290:
case 1028:
case 828:
case 892:
case 3349:
case 3117:
case 3332:
case 1384:
case 874:
case 3028:
case 1349:
case 1016:
case 1117:
case 3321:
case 3411:
case 2374:
case 3856:
case 2775:
case 293:
case 3080:
case 1296:
case 2070:
case 1302:
case 1057:
case 1856:
case 3706:
case 1156:
case 3785:
case 1913:
case 2523:
case 1245:
case 3023:
case 3235:
case 3394:
case 829:
case 3309:
case 3570:
case 826:
case 1235:
case 1023:
case 870:
case 2580:
case 272:
case 1210:
case 1364:
case 1309:
case 1570:
case 2958:
case 3241:
case 2771:
case 777:
case 236:
case 537:
case 3781:
case 2123:
case 2823:
case 239:
case 1556:
case 745:
case 2707:
case 3170:
case 3690:
case 3870:
case 4088:
case 855:
case 3231:
case 4063:
case 44:
case 1870:
case 2056:
case 2857:
case 4093:
case 1660:
case 2880:
case 1231:
case 3261:
case 1480:
case 3615:
case 3851:
case 1701:
case 3994:
case 1851:
case 1555:
case 3701:
case 3964:
case 1151:
case 981:
case 2750:
case 1777:
case 911:
case 427:
case 465:
case 3640:
case 2787:
case 3777:
case 4043:
case 2055:
case 3902:
case 2247:
case 233:
case 1640:
case 3423:
case 3155:
case 1705:
case 823:
case 3551:
case 3265:
case 3611:
case 1334:
case 1855:
case 1000:
case 1155:
case 3705:
case 3786:
case 1265:
case 1611:
case 3236:
case 927:
case 3389:
case 4014:
case 965:
case 824:
case 411:
case 951:
case 1236:
case 2500:
case 2051:
case 1344:
case 878:
case 2996:
case 678:
case 4017:
case 2213:
case 323:
case 2945:
case 624:
case 1598:
case 1119:
case 2725:
case 1347:
case 123:
case 1819:
case 3112:
case 2083:
case 3812:
case 1112:
case 990:
case 124:
case 520:
case 1812:
case 3520:
case 2361:
case 2391:
case 623:
case 3519:
case 3198:
case 3678:
case 1183:
case 2732:
case 2749:
case 2941:
case 2873:
case 938:
case 3868:
case 532:
case 2784:
case 2693:
case 1519:
case 3183:
case 2289:
case 1898:
case 3883:
case 2244:
case 1168:
case 2688:
case 2448:
case 1820:
case 3512:
case 2739:
case 2931:
case 1967:
case 1652:
case 2234:
case 3820:
case 2346:
case 2922:
case 490:
case 2019:
case 3120:
case 3967:
case 796:
case 2704:
case 2643:
case 2769:
case 930:
case 3848:
case 799:
case 2991:
case 2799:
case 3753:
case 1103:
case 3937:
case 2294:
case 2854:
case 355:
case 2468:
case 3838:
case 361:
case 2762:
case 155:
case 1473:
case 422:
case 2396:
case 2345:
case 161:
case 3947:
case 2366:
case 1727:
case 573:
case 2995:
case 2718:
case 1503:
case 3548:
case 3367:
case 2965:
case 2946:
case 2614:
case 51:
case 2038:
case 1397:
case 3503:
case 1548:
case 626:
case 2554:
case 1367:
case 733:
case 2331:
case 685:
case 2419:
case 2329:
case 170:
case 3538:
case 329:
case 574:
case 1054:
case 734:
case 126:
case 370:
case 1538:
case 592:
case 129:
case 922:
case 185:
case 3886:
case 3186:
case 3105:
case 3050:
case 1886:
case 2666:
case 2645:
case 1186:
case 2696:
case 1501:
case 2176:
case 3755:
case 1805:
case 946:
case 2876:
case 403:
case 2406:
case 888:
case 2485:
case 960:
case 700:
case 3475:
case 1217:
case 2610:
case 1407:
case 1959:
case 3101:
case 3505:
case 2228:
case 1978:
case 807:
case 3586:
case 3751:
case 2576:
case 1505:
case 446:
case 2993:
case 2216:
case 764:
case 2641:
case 449:
case 2622:
case 748:
case 4079:
case 858:
case 1952:
case 4058:
case 3177:
case 3697:
case 2260:
case 2187:
case 763:
case 23:
case 1667:
case 971:
case 1877:
case 1177:
case 3471:
case 1697:
case 2314:
case 2477:
case 909:
case 102:
case 3881:
case 2908:
case 1487:
case 444:
case 3450:
case 3124:
case 2575:
case 717:
case 1506:
case 2171:
case 787:
case 2943:
case 302:
case 2230:
case 1637:
case 2215:
case 252:
case 2780:
case 3075:
case 602:
case 1770:
case 468:
case 740:
case 2933:
case 1075:
case 443:
case 3885:
case 29:
case 409:
case 3185:
case 1524:
case 406:
case 2914:
case 3806:
case 3007:
case 3352:
case 847:
case 2211:
case 1185:
case 721:
case 3524:
case 2175:
case 2695:
case 3756:
case 2571:
case 1806:
case 1007:
case 2393:
case 2024:
case 562:
case 2405:
case 1476:
case 212:
case 2363:
case 810:
case 3378:
case 943:
case 1359:
case 2636:
case 2081:
case 1613:
case 3340:
case 2826:
case 2126:
case 248:
case 675:
case 147:
case 1553:
case 57:
case 4035:
case 680:
case 3613:
case 263:
case 1062:
case 2569:
case 2818:
case 347:
case 3553:
case 513:
case 1092:
case 4045:
case 380:
case 1527:
case 647:
case 3315:
case 3330:
case 3004:
case 180:
case 2592:
case 110:
case 1099:
case 3527:
case 1069:
case 2562:
case 1748:
case 3703:
case 1853:
case 4031:
case 3288:
case 3689:
case 1442:
case 2754:
case 3748:
case 2259:
case 1644:
case 2899:
case 3153:
case 2199:
case 2679:
case 3293:
case 4022:
case 553:
case 2869:
case 1689:
case 2658:
case 3442:
case 650:
case 2169:
case 3311:
case 1127:
case 2474:
case 3682:
case 1432:
case 1827:
case 3634:
case 3018:
case 350:
case 2862:
case 1311:
case 1421:
case 3960:
case 3432:
case 1682:
case 2162:
case 3026:
case 2252:
case 554:
case 2892:
case 891:
case 2192:
case 2672:
case 3738:
case 4029:
case 1018:
case 1492:
case 1768:
case 307:
case 1462:
case 782:
case 2821:
case 1243:
case 3208:
case 1915:
case 3694:
case 3492:
case 658:
case 2884:
case 1609:
case 3462:
case 1874:
case 2149:
case 1208:
case 1174:
case 2132:
case 1783:
case 2317:
case 1404:
case 1025:
case 3404:
case 3469:
case 2142:
case 495:
case 2139:
case 2842:
case 3233:
case 3499:
case 556:
case 257:
case 1602:
case 3042:
case 32:
case 3574:
case 2125:
case 3360:
case 2521:
case 1719:
case 842:
case 4036:
case 12:
case 1574:
case 2532:
case 1039:
case 3911:
case 3719:
case 1214:
case 4046:
case 3084:
case 1328:
case 388:
case 3032:
case 1084:
case 3328:
case 9:
case 589:
case 1316:
case 525:
case 1426:
case 2542:
case 188:
case 1032:
case 266:
case 519:
case 2074:
case 567:
case 3002:
case 2955:
case 3357:
case 2370:
case 1002:
case 2509:
case 2564:
case 1357:
case 52:
case 3625:
case 667:
case 625:
case 689:
case 4006:
case 3413:
case 386:
case 319:
case 4085:
case 1323:
case 1413:
case 186:
case 167:
case 452:
case 119:
case 588:
case 912:
case 125:
case 518:
case 189:
case 1482:
case 2778:
case 3763:
case 1203:
case 3248:
case 7:
case 2472:
case 3482:
case 206:
case 2194:
case 3621:
case 2254:
case 2894:
case 1649:
case 49:
case 656:
case 2809:
case 2864:
case 3434:
case 1444:
case 2752:
case 4081:
case 3639:
case 2458:
case 3444:
case 2802:
case 2356:
case 1639:
case 3489:
case 156:
case 4024:
case 3158:
case 3604:
case 3669:
case 3298:
case 1923:
case 3179:
case 1402:
case 2653:
case 1158:
case 2889:
case 1604:
case 2189:
case 3402:
case 654:
case 1268:
case 3692:
case 1464:
case 1957:
case 93:
case 271:
case 3662:
case 1220:
case 1013:
case 3733:
case 2627:
case 1494:
case 354:
case 1172:
case 653:
case 2134:
case 3464:
case 3409:
case 3957:
case 2834:
case 550:
case 2882:
case 3980:
case 3220:
case 203:
case 3013:
case 1733:
case 3494:
case 2182:
case 154:
case 2956:
case 3034:
case 3300:
case 249:
case 3558:
case 313:
case 1626:
case 2813:
case 383:
case 684:
case 1300:
case 614:
case 113:
case 3626:
case 1558:
case 37:
case 1219:
case 1082:
case 2589:
case 575:
case 4005:
case 3089:
case 3212:
case 314:
case 184:
case 2058:
case 1212:
case 1089:
case 2582:
case 1572:
case 735:
case 862:
case 408:
case 3895:
case 3195:
case 3675:
case 662:
case 3591:
case 3865:
case 2410:
case 3846:
case 3561:
case 1255:
case 1895:
case 1195:
case 1675:
case 2606:
case 1591:
case 1865:
case 940:
case 1146:
case 2685:
case 1561:
case 987:
case 2466:
case 1717:
case 917:
case 2:
case 884:
case 814:
case 1836:
case 362:
case 706:
case 2547:
case 709:
case 2431:
case 3861:
case 1467:
case 3161:
case 2716:
case 3595:
case 2624:
case 502:
case 3191:
case 1161:
case 1565:
case 2036:
case 2728:
case 2790:
case 3607:
case 2938:
case 854:
case 466:
case 591:
case 4074:
case 487:
case 2760:
case 3536:
case 744:
case 2441:
case 957:
case 2200:
case 2095:
case 2847:
case 2429:
case 1536:
case 2147:
case 3545:
case 1129:
case 2998:
case 3841:
case 900:
case 2715:
case 3566:
case 3973:
case 2968:
case 1141:
case 2010:
case 1545:
case 2983:
case 2035:
case 235:
case 4027:
case 760:
case 448:
case 749:
case 3650:
case 3510:
case 2461:
case 1122:
case 2740:
case 3131:
case 2197:
case 1270:
case 4053:
case 3822:
case 2066:
case 2867:
case 1687:
case 3437:
case 3097:
case 3676:
case 3541:
case 3067:
case 3866:
case 2436:
case 2919:
case 3166:
case 2022:
case 1256:
case 2338:
case 1097:
case 1896:
case 1196:
case 1541:
case 2686:
case 3529:
case 819:
case 867:
case 3835:
case 2446:
case 1522:
case 3135:
case 886:
case 1810:
case 2348:
case 1358:
case 396:
case 1379:
case 1500:
case 1051:
case 3358:
case 196:
case 3379:
case 598:
case 992:
case 199:
case 3051:
case 2000:
case 755:
case 2155:
case 973:
case 2246:
case 761:
case 2611:
case 845:
case 696:
case 91:
case 45:
case 699:
case 3750:
case 474:
case 1800:
case 133:
case 1247:
case 2640:
case 2777:
case 2902:
case 3800:
case 333:
case 726:
case 2261:
case 2615:
case 1237:
case 2291:
case 2851:
case 785:
case 2151:
case 473:
case 2480:
case 334:
case 2994:
case 2964:
case 2909:
case 770:
case 95:
case 2690:
case 3451:
case 1157:
case 1056:
case 2870:
case 476:
case 723:
case 639:
case 2231:
case 2660:
case 1267:
case 479:
case 1180:
case 1707:
case 4078:
case 3056:
case 2934:
case 3267:
case 4059:
case 3180:
case 136:
case 1823:
case 724:
case 139:
case 538:
case 2556:
case 2989:
case 2781:
case 2229:
case 805:
case 3823:
case 339:
case 2400:
case 2394:
case 2023:
case 976:
case 920:
case 372:
case 590:
case 693:
case 2302:
case 3775:
case 2266:
case 2080:
case 2245:
case 393:
case 694:
case 193:
case 527:
case 3419:
case 215:
case 2538:
case 894:
case 285:
case 229:
case 1048:
case 3341:
case 1936:
case 1329:
case 4011:
case 1038:
case 3995:
case 3965:
case 1554:
case 3322:
case 3946:
case 1331:
case 2503:
case 36:
case 1322:
case 3792:
case 2138:
case 1202:
case 1396:
case 3468:
case 3762:
case 261:
case 1345:
case 497:
case 3498:
case 4015:
case 1792:
case 2947:
case 1762:
case 1633:
case 3483:
case 1498:
case 3366:
case 3704:
case 3643:
case 3961:
case 1154:
case 1854:
case 2848:
case 2148:
case 3154:
case 3420:
case 3854:
case 3335:
case 3294:
case 2937:
case 836:
case 2803:
case 1991:
case 4040:
case 3209:
case 2103:
case 1403:
case 2652:
case 2272:
case 4028:
case 3931:
case 1922:
case 1346:
case 1365:
case 3403:
case 4016:
case 3395:
case 2997:
case 3282:
case 2120:
case 1742:
case 1289:
case 3732:
case 1929:
case 1721:
case 2198:
case 3749:
case 2168:
case 1244:
case 3873:
case 3438:
case 1688:
case 2279:
case 3784:
case 2868:
case 3012:
case 3289:
case 3721:
case 4090:
case 937:
case 1749:
case 1173:
case 4060:
case 1438:
case 3688:
case 834:
case 2337:
case 3083:
case 3935:
case 2112:
case 2812:
case 896:
case 3098:
case 1083:
case 1935:
case 1910:
case 2520:
case 3361:
case 177:
case 3391:
case 54:
case 2568:
case 3966:
case 1996:
case 145:
case 1573:
case 3725:
case 677:
case 1966:
case 1020:
case 3324:
case 3414:
case 1088:
case 3093:
case 2059:
case 2078:
case 1381:
case 1324:
case 1414:
case 3088:
case 1093:
case 279:
case 3381:
case 577:
case 3226:
case 1218:
case 2563:
case 1226:
case 3619:
case 64:
case 3218:
case 2976:
case 3559:
case 1443:
case 3977:
case 3702:
case 1152:
case 3443:
case 2987:
case 3385:
case 2227:
case 1977:
case 3292:
case 4023:
case 3306:
case 1702:
case 3152:
case 2188:
case 1159:
case 2888:
case 1269:
case 1878:
case 1698:
case 1178:
case 3683:
case 2193:
case 2673:
case 3859:
case 3299:
case 2253:
case 1901:
case 3269:
case 830:
case 1794:
case 3433:
case 1463:
case 10:
case 1305:
case 1493:
case 2478:
case 3239:
case 3463:
case 30:
case 2833:
case 2907:
case 2459:
case 2772:
case 1488:
case 681:
case 3603:
case 3744:
case 1284:
case 1924:
case 3789:
case 2108:
case 1249:
case 25:
case 838:
case 3648:
case 2779:
case 2971:
case 797:
case 3924:
case 4000:
case 1221:
case 1789:
case 1981:
case 2143:
case 3043:
case 1008:
case 2533:
case 351:
case 3008:
case 28:
case 3985:
case 2387:
case 665:
case 21:
case 2814:
case 56:
case 3906:
case 1906:
case 572:
case 1590:
case 2817:
case 2016:
case 924:
case 851:
case 3590:
case 2736:
case 732:
case 2060:
case 2205:
case 2090:
case 690:
case 3516:
case 2746:
case 2795:
case 593:
case 3656:
case 2680:
case 3747:
case 1287:
case 1927:
case 1160:
case 2517:
case 1250:
case 1670:
case 1190:
case 478:
case 2430:
case 2325:
case 3927:
case 424:
case 3250:
case 3890:
case 811:
case 3190:
case 1953:
case 3828:
case 237:
case 720:
case 138:
case 1816:
case 2623:
case 3737:
case 539:
case 1128:
case 2904:
case 776:
case 338:
case 3017:
case 1737:
case 2722:
case 701:
case 3767:
case 1207:
case 2428:
case 2731:
case 773:
case 3840:
case 2326:
case 1767:
case 4054:
case 3207:
case 426:
case 1651:
case 534:
case 130:
case 2729:
case 2921:
case 1830:
case 2281:
case 3651:
case 2490:
case 330:
case 3511:
case 3130:
case 774:
case 2741:
case 3353:
case 2399:
case 75:
case 970:
case 2015:
case 398:
case 461:
case 297:
case 926:
case 599:
case 2735:
case 915:
case 455:
case 2710:
case 985:
case 1111:
case 3417:
case 1811:
case 1655:
case 2392:
case 2206:
case 3111:
case 1327:
case 1417:
case 3515:
case 2766:
case 3811:
case 2796:
case 3655:
case 1582:
case 2089:
case 1079:
case 160:
case 1351:
case 2044:
case 3582:
case 3079:
case 360:
case 3534:
case 2618:
case 2579:
case 3956:
case 349:
case 1544:
case 660:
case 3813:
case 2558:
case 213:
case 3113:
case 1589:
case 2082:
case 1956:
case 3544:
case 149:
case 931:
case 1813:
case 1113:
case 3589:
case 2172:
case 1355:
case 2872:
case 604:
case 103:
case 254:
case 1182:
case 3627:
case 3134:
case 1970:
case 2464:
case 303:
case 2980:
case 2604:
case 2743:
case 2669:
case 1889:
case 2858:
case 3273:
case 603:
case 1844:
case 2179:
case 2268:
case 1144:
case 2879:
case 2708:
case 1513:
case 2923:
case 4050:
case 304:
case 2283:
case 1653:
case 2402:
case 3479:
case 1802:
case 609:
case 256:
case 1752:
case 3356:
case 1479:
case 2900:
case 2489:
case 4071:
case 3778:
case 1674:
case 106:
case 2632:
case 1164:
case 1109:
case 902:
case 508:
case 2684:
case 1778:
case 762:
case 2482:
case 3894:
case 4007:
case 3109:
case 3164:
case 309:
case 2203:
case 2434:
case 1472:
case 569:
case 2094:
case 216:
case 517:
case 168:
case 587:
case 1502:
case 219:
case 2009:
case 566:
case 368:
case 644:
case 2357:
case 1564:
case 2002:
case 344:
case 3370:
case 1955:
case 2625:
case 3594:
case 144:
case 540:
case 1041:
case 2354:
case 2110:
case 3465:
case 753:
case 3912:
case 975:
case 2135:
case 3495:
case 1597:
case 3303:
case 843:
case 1348:
case 3567:
case 980:
case 1465:
case 1029:
case 4018:
case 1446:
case 868:
case 3348:
case 844:
case 2896:
case 2256:
case 1686:
case 2866:
case 754:
case 2166:
case 3022:
case 2845:
case 1031:
case 3338:
case 1436:
case 3686:
case 1022:
case 1711:
case 53:
case 1197:
case 1096:
case 1045:
case 2831:
case 2687:
case 713:
case 2131:
case 2535:
case 1867:
case 1491:
case 3677:
case 3197:
case 3897:
case 3257:
case 4004:
case 1461:
case 410:
case 950:
case 2545:
case 447:
case 1010:
case 714:
case 1223:
case 784:
case 1035:
case 3998:
case 1983:
case 135:
case 3968:
case 2596:
case 1601:
case 2829:
case 2447:
case 3035:
case 2129:
case 3983:
case 4062:
case 871:
case 1319:
case 3441:
case 1065:
case 1790:
case 958:
case 803:
case 3095:
case 552:
case 3200:
case 488:
case 3319:
case 3429:
case 4084:
case 3046:
case 1441:
case 1312:
case 2546:
case 1837:
case 716:
case 2251:
case 3948:
case 2891:
case 1903:
case 1728:
case 2191:
case 719:
case 2671:
case 767:
case 2595:
case 3312:
case 3837:
case 3036:
case 2954:
case 2467:
case 42:
case 4042:
case 3728:
case 804:
case 2497:
case 1398:
case 2836:
case 1547:
case 1061:
case 3496:
case 1091:
case 395:
case 1466:
case 860:
case 1445:
case 1:
case 458:
case 2895:
case 759:
case 846:
case 2675:
case 2195:
case 3435:
case 2146:
case 2865:
case 756:
case 849:
case 2047:
case 2846:
case 3410:
case 92:
case 59:
case 3606:
case 3685:
case 1435:
case 1320:
case 1410:
case 3024:
case 1388:
case 3393:
case 707:
case 2359:
case 3486:
case 1081:
case 3388:
case 1393:
case 916:
case 2476:
case 3507:
case 986:
case 967:
case 3636:
case 1486:
case 112:
case 182:
case 3081:
case 989:
case 1665:
case 2885:
case 1646:
case 2581:
case 2106:
case 3914:
case 848:
case 1875:
case 2007:
case 2806:
case 3646:
case 3211:
case 1914:
case 3695:
case 612:
case 2524:
case 3175:
case 682:
case 863:
case 3780:
case 352:
case 1933:
case 1240:
case 1807:
case 3401:
case 1780:
case 959:
case 152:
case 419:
case 489:
case 3085:
case 3807:
case 3006:
case 1757:
case 486:
case 1171:
case 2506:
case 3477:
case 1871:
case 788:
case 1943:
case 1661:
case 718:
case 3723:
case 3171:
case 1477:
case 3691:
case 652:
case 2450:
case 2824:
case 2487:
case 1631:
case 2667:
case 13:
case 2877:
case 1005:
case 1424:
case 1481:
case 1622:
case 3260:
case 33:
case 3086:
case 3290:
case 3005:
case 2952:
case 3314:
case 954:
case 747:
case 47:
case 2101:
case 63:
case 2801:
case 1641:
case 535:
case 808:
case 953:
case 2959:
case 3576:
case 2751:
case 3993:
case 4082:
case 1228:
case 1629:
case 2978:
case 3641:
case 3963:
case 1001:
case 1550:
case 3406:
case 2577:
case 4013:
case 2217:
case 3343:
case 1610:
case 1308:
case 3001:
case 454:
case 3550:
case 914:
case 3587:
case 887:
case 869:
case 3610:
case 3308:
case 840:
case 750:
case 2805:
case 3645:
case 913:
case 3176:
case 453:
case 3696:
case 3876:
case 3077:
case 187:
case 568:
case 1542:
case 2426:
case 2316:
case 1074:
case 2032:
case 2328:
case 387:
case 317:
case 2712:
case 366:
case 3539:
case 3825:
case 22:
case 669:
case 617:
case 1584:
case 2719:
case 791:
case 1125:
case 3584:
case 140:
case 1839:
case 1139:
case 608:
case 2602:
case 1453:
case 462:
case 3839:
case 321:
case 2469:
case 2025:
case 2233:
case 3139:
case 3842:
case 2499:
case 83:
case 357:
case 1184:
case 1773:
case 506:
case 207:
case 1884:
case 2208:
case 1149:
case 1317:
case 1427:
case 2783:
case 509:
case 1849:
case 1132:
case 2694:
case 657:
case 3525:
case 2174:
case 2492:
case 3184:
case 2768:
case 4047:
case 3149:
case 2243:
case 2798:
case 1121:
case 3317:
case 3427:
case 3132:
case 2915:
case 1525:
case 2682:
case 3474:
case 2421:
case 1162:
case 600:
case 1892:
case 2018:
case 1672:
case 1192:
case 2634:
case 503:
case 1474:
case 2127:
case 3862:
case 2026:
case 2827:
case 3892:
case 2738:
case 3192:
case 2484:
case 1899:
case 2703:
case 504:
case 2288:
case 2928:
case 1518:
case 100:
case 2689:
case 1804:
case 1869:
case 3754:
case 2153:
case 3259:
case 3199:
case 3278:
case 3804:
case 1754:
case 3169:
case 2263:
case 2916:
case 812:
case 1592:
case 164:
case 2315:
case 3917:
case 1562:
case 2069:
case 2330:
case 1053:
case 364:
case 1917:
case 3562:
case 3027:
case 3826:
case 1504:
case 1569:
case 2062:
case 1818:
case 2092:
case 1118:
case 1826:
case 2613:
case 549:
case 3569:
case 1126:
case 148:
case 363:
case 247:
case 2553:
case 546:
case 3118:
case 3599:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759118401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,];
var gg_b = "1759118401/";

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
