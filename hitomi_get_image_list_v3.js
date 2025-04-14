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
case 1613:
case 2264:
case 3088:
case 1851:
case 1284:
case 466:
case 1032:
case 3330:
case 2119:
case 3023:
case 970:
case 1593:
case 1031:
case 3664:
case 3558:
case 2307:
case 793:
case 2319:
case 1183:
case 2363:
case 1745:
case 1036:
case 3289:
case 2079:
case 2708:
case 1244:
case 3284:
case 3032:
case 690:
case 3856:
case 3613:
case 2929:
case 2114:
case 4083:
case 3851:
case 1875:
case 571:
case 906:
case 3745:
case 1130:
case 298:
case 3852:
case 3036:
case 2765:
case 740:
case 1343:
case 2213:
case 3031:
case 428:
case 1558:
case 2498:
case 1664:
case 4028:
case 1367:
case 898:
case 3412:
case 3539:
case 1252:
case 2387:
case 484:
case 2555:
case 1495:
case 2723:
case 1534:
case 817:
case 596:
case 1256:
case 1204:
case 2617:
case 3008:
case 2690:
case 662:
case 3275:
case 2878:
case 837:
case 1470:
case 2347:
case 2992:
case 2732:
case 637:
case 420:
case 3167:
case 2027:
case 2813:
case 1290:
case 453:
case 3774:
case 3495:
case 601:
case 3303:
case 617:
case 371:
case 2604:
case 2147:
case 2748:
case 2656:
case 1705:
case 3103:
case 3252:
case 2576:
case 1412:
case 2325:
case 1779:
case 2996:
case 2736:
case 2045:
case 1411:
case 698:
case 477:
case 2731:
case 2652:
case 2125:
case 2572:
case 1416:
case 2434:
case 2975:
case 1067:
case 1829:
case 3472:
case 2650:
case 2615:
case 4008:
case 1714:
case 3277:
case 482:
case 2917:
case 1365:
case 286:
case 811:
case 807:
case 120:
case 2677:
case 2385:
case 1165:
case 3763:
case 831:
case 1455:
case 2595:
case 1410:
case 153:
case 3250:
case 3215:
case 384:
case 3471:
case 2557:
case 2909:
case 631:
case 972:
case 2956:
case 3714:
case 864:
case 2511:
case 2873:
case 2:
case 2728:
case 2127:
case 611:
case 2516:
case 1472:
case 3296:
case 580:
case 892:
case 4065:
case 1719:
case 2691:
case 2952:
case 1250:
case 184:
case 1308:
case 3497:
case 3410:
case 2025:
case 471:
case 2783:
case 3365:
case 1824:
case 756:
case 2512:
case 1108:
case 3388:
case 180:
case 1348:
case 1132:
case 2218:
case 2305:
case 1028:
case 3850:
case 3815:
case 3598:
case 775:
case 1747:
case 1148:
case 1913:
case 3188:
case 3787:
case 921:
case 226:
case 2179:
case 3618:
case 8:
case 2007:
case 1136:
case 1331:
case 3323:
case 860:
case 1083:
case 1891:
case 3030:
case 3123:
case 584:
case 1725:
case 1336:
case 1229:
case 686:
case 2063:
case 2019:
case 3913:
case 2014:
case 886:
case 916:
case 3148:
case 3747:
case 2629:
case 3892:
case 2703:
case 936:
case 1388:
case 2168:
case 1850:
case 2458:
case 328:
case 4031:
case 3553:
case 553:
case 3336:
case 3725:
case 1964:
case 3896:
case 520:
case 4032:
case 1323:
case 3331:
case 3136:
case 1030:
case 1043:
case 2273:
case 1811:
case 4035:
case 3037:
case 1653:
case 2000:
case 3722:
case 3698:
case 1812:
case 3449:
case 1740:
case 2524:
case 1993:
case 2359:
case 3958:
case 3721:
case 753:
case 3895:
case 850:
case 448:
case 2413:
case 2298:
case 2159:
case 3726:
case 623:
case 205:
case 1722:
case 57:
case 947:
case 3816:
case 3444:
case 1484:
case 1857:
case 2253:
case 2102:
case 1895:
case 1518:
case 239:
case 1726:
case 2760:
case 2302:
case 1449:
case 3489:
case 1958:
case 1135:
case 2094:
case 219:
case 3733:
case 1417:
case 3257:
case 2515:
case 2898:
case 839:
case 2550:
case 883:
case 2670:
case 780:
case 913:
case 819:
case 17:
case 1212:
case 3700:
case 989:
case 3452:
case 2955:
case 2138:
case 2737:
case 2342:
case 1934:
case 1794:
case 654:
case 1211:
case 4062:
case 3161:
case 805:
case 556:
case 2657:
case 2341:
case 2146:
case 1060:
case 2026:
case 3404:
case 1216:
case 2346:
case 2141:
case 2592:
case 3212:
case 493:
case 2616:
case 2971:
case 375:
case 3417:
case 223:
case 1939:
case 2611:
case 2976:
case 3060:
case 1361:
case 2120:
case 619:
case 1451:
case 658:
case 3211:
case 2972:
case 1754:
case 1706:
case 2038:
case 2610:
case 809:
case 2122:
case 3496:
case 1701:
case 1272:
case 2322:
case 548:
case 2517:
case 835:
case 1415:
case 652:
case 2858:
case 1450:
case 3297:
case 3066:
case 3759:
case 2126:
case 2380:
case 1160:
case 815:
case 1634:
case 3061:
case 1276:
case 2735:
case 81:
case 193:
case 2957:
case 2180:
case 98:
case 1360:
case 2504:
case 3272:
case 3701:
case 2556:
case 1496:
case 615:
case 2234:
case 1639:
case 544:
case 2911:
case 3706:
case 1491:
case 63:
case 1062:
case 2671:
case 2552:
case 2086:
case 1061:
case 3276:
case 475:
case 2672:
case 2133:
case 379:
case 393:
case 2081:
case 3415:
case 1297:
case 1210:
case 1255:
case 2893:
case 2340:
case 2333:
case 796:
case 1759:
case 3160:
case 2589:
case 771:
case 3998:
case 3810:
case 348:
case 2258:
case 1569:
case 3897:
case 1513:
case 3337:
case 1782:
case 540:
case 2766:
case 4037:
case 2473:
case 3578:
case 2761:
case 1786:
case 1693:
case 3564:
case 3746:
case 3569:
case 23:
case 3513:
case 2418:
case 1855:
case 2293:
case 148:
case 235:
case 2001:
case 3876:
case 2006:
case 1998:
case 3424:
case 579:
case 442:
case 1578:
case 209:
case 1658:
case 2394:
case 3872:
case 3720:
case 2834:
case 2002:
case 1190:
case 3945:
case 1718:
case 3096:
case 410:
case 1309:
case 2560:
case 3203:
case 2965:
case 176:
case 1390:
case 430:
case 1077:
case 1521:
case 2438:
case 3533:
case 3151:
case 806:
case 3304:
case 3773:
case 3092:
case 567:
case 1687:
case 3156:
case 2729:
case 1015:
case 3466:
case 2225:
case 2807:
case 1625:
case 376:
case 1883:
case 990:
case 3109:
case 3521:
case 3580:
case 3830:
case 2287:
case 4075:
case 512:
case 3718:
case 773:
case 870:
case 2908:
case 1096:
case 1267:
case 606:
case 1647:
case 100:
case 3375:
case 4090:
case 757:
case 1466:
case 1304:
case 4009:
case 3175:
case 1151:
case 1927:
case 132:
case 1979:
case 461:
case 3228:
case 1144:
case 2825:
case 1607:
case 3184:
case 1663:
case 2931:
case 2791:
case 497:
case 1619:
case 112:
case 3594:
case 1024:
case 3384:
case 1344:
case 3803:
case 2792:
case 2369:
case 994:
case 1189:
case 35:
case 438:
case 459:
case 687:
case 2073:
case 3283:
case 4084:
case 2113:
case 2948:
case 1905:
case 874:
case 3614:
case 500:
case 3029:
case 1594:
case 2454:
case 312:
case 674:
case 576:
case 3344:
case 901:
case 2164:
case 206:
case 887:
case 3979:
case 2630:
case 2643:
case 332:
case 3607:
case 1184:
case 1228:
case 3144:
case 2402:
case 414:
case 4044:
case 3389:
case 2988:
case 2715:
case 2750:
case 878:
case 2263:
case 2219:
case 2207:
case 167:
case 3189:
case 1803:
case 998:
case 1149:
case 1435:
case 1974:
case 2887:
case 3230:
case 402:
case 45:
case 467:
case 1808:
case 134:
case 102:
case 359:
case 3502:
case 318:
case 2636:
case 2274:
case 491:
case 4029:
case 3865:
case 2499:
case 361:
case 992:
case 2373:
case 2756:
case 3501:
case 510:
case 2648:
case 1605:
case 2013:
case 2827:
case 2069:
case 1223:
case 3506:
case 2632:
case 3329:
case 3554:
case 397:
case 3668:
case 1089:
case 3674:
case 1502:
case 1084:
case 236:
case 2118:
case 3044:
case 672:
case 931:
case 2790:
case 2943:
case 3907:
case 3324:
case 907:
case 24:
case 3808:
case 3963:
case 2205:
case 2064:
case 2318:
case 2535:
case 245:
case 2885:
case 2709:
case 3288:
case 1554:
case 2775:
case 412:
case 968:
case 2279:
case 1674:
case 1501:
case 432:
case 1129:
case 3223:
case 1231:
case 2665:
case 3396:
case 1778:
case 1177:
case 3925:
case 1546:
case 3052:
case 2422:
case 538:
case 3645:
case 518:
case 1090:
case 1017:
case 621:
case 1115:
case 1150:
case 3947:
case 2874:
case 3265:
case 3004:
case 3582:
case 836:
case 2868:
case 561:
case 1460:
case 1542:
case 3056:
case 2749:
case 1208:
case 1315:
case 845:
case 597:
case 1538:
case 1888:
case 1075:
case 3848:
case 4091:
case 330:
case 616:
case 1196:
case 1391:
case 3685:
case 2608:
case 514:
case 3017:
case 4050:
case 1831:
case 1581:
case 2744:
case 1520:
case 3090:
case 272:
case 636:
case 1191:
case 3177:
case 2561:
case 1836:
case 960:
case 3764:
case 9:
case 1052:
case 3546:
case 2789:
case 1627:
case 821:
case 3075:
case 2562:
case 1848:
case 4077:
case 2433:
case 751:
case 3888:
case 1947:
case 3115:
case 1713:
case 1056:
case 79:
case 1832:
case 4011:
case 1585:
case 702:
case 289:
case 1262:
case 1835:
case 3681:
case 3620:
case 233:
case 3112:
case 1641:
case 1357:
case 2565:
case 569:
case 3312:
case 2034:
case 3933:
case 595:
case 3071:
case 1097:
case 1266:
case 1010:
case 3311:
case 847:
case 1370:
case 2801:
case 4012:
case 3682:
case 2806:
case 1170:
case 3111:
case 3316:
case 1642:
case 2242:
case 2859:
case 923:
case 3195:
case 1793:
case 1686:
case 1933:
case 718:
case 3921:
case 3758:
case 3157:
case 4070:
case 3835:
case 3262:
case 1545:
case 2238:
case 647:
case 1112:
case 3926:
case 1681:
case 2666:
case 2039:
case 1316:
case 1111:
case 797:
case 1682:
case 3170:
case 2241:
case 3010:
case 4057:
case 1071:
case 3370:
case 1311:
case 1116:
case 3638:
case 761:
case 1579:
case 2536:
case 1861:
case 2206:
case 1659:
case 689:
case 457:
case 2881:
case 2531:
case 3994:
case 2093:
case 2772:
case 465:
case 2201:
case 633:
case 2463:
case 2882:
case 3606:
case 1900:
case 39:
case 954:
case 3568:
case 473:
case 3574:
case 2202:
case 3443:
case 2548:
case 229:
case 1483:
case 1862:
case 1505:
case 2353:
case 2776:
case 1999:
case 1994:
case 2841:
case 2523:
case 3428:
case 3579:
case 2846:
case 3659:
case 90:
case 3235:
case 3483:
case 2838:
case 1443:
case 1430:
case 3999:
case 2398:
case 3900:
case 19:
case 813:
case 1568:
case 710:
case 983:
case 1606:
case 195:
case 1574:
case 2198:
case 2937:
case 1432:
case 3860:
case 3694:
case 495:
case 603:
case 3488:
case 225:
case 1448:
case 3902:
case 2405:
case 776:
case 2393:
case 22:
case 1959:
case 952:
case 2479:
case 2711:
case 2528:
case 1600:
case 2053:
case 36:
case 357:
case 469:
case 365:
case 88:
case 1902:
case 3448:
case 91:
case 2821:
case 2200:
case 2358:
case 915:
case 1860:
case 2468:
case 1694:
case 93:
case 2826:
case 3519:
case 3563:
case 2795:
case 935:
case 199:
case 2935:
case 3600:
case 16:
case 1906:
case 2098:
case 803:
case 2637:
case 700:
case 3436:
case 1901:
case 909:
case 2822:
case 2770:
case 573:
case 1057:
case 704:
case 599:
case 1095:
case 3172:
case 1946:
case 1621:
case 3633:
case 4076:
case 3012:
case 3920:
case 3372:
case 2660:
case 2894:
case 1626:
case 2485:
case 2240:
case 3982:
case 2503:
case 1310:
case 3408:
case 28:
case 1465:
case 565:
case 3016:
case 2567:
case 3171:
case 56:
case 1938:
case 1110:
case 1012:
case 1372:
case 3941:
case 3626:
case 1981:
case 1920:
case 708:
case 641:
case 2427:
case 2961:
case 3946:
case 3621:
case 2226:
case 3110:
case 1376:
case 3622:
case 791:
case 1547:
case 755:
case 82:
case 3587:
case 3837:
case 2445:
case 2221:
case 2800:
case 1371:
case 3397:
case 767:
case 3310:
case 3486:
case 549:
case 2175:
case 1603:
case 2050:
case 1441:
case 187:
case 1225:
case 2687:
case 808:
case 1729:
case 891:
case 374:
case 2190:
case 2985:
case 2718:
case 178:
case 3287:
case 2843:
case 2830:
case 2109:
case 2077:
case 2580:
case 1247:
case 725:
case 3724:
case 276:
case 2317:
case 1965:
case 3807:
case 3225:
case 2466:
case 1420:
case 1481:
case 3729:
case 2104:
case 804:
case 200:
case 1486:
case 3446:
case 2092:
case 3667:
case 2304:
case 3814:
case 2356:
case 3247:
case 481:
case 2540:
case 3438:
case 2625:
case 2203:
case 3560:
case 2096:
case 3442:
case 1819:
case 2352:
case 2945:
case 527:
case 174:
case 445:
case 1847:
case 4078:
case 1073:
case 44:
case 1313:
case 1369:
case 3219:
case 170:
case 2599:
case 1459:
case 2389:
case 1113:
case 3750:
case 436:
case 1948:
case 3402:
case 2144:
case 204:
case 3364:
case 127:
case 2607:
case 3643:
case 232:
case 1683:
case 3164:
case 2344:
case 1791:
case 3406:
case 2663:
case 370:
case 1219:
case 2614:
case 1263:
case 1988:
case 3113:
case 1750:
case 3169:
case 587:
case 2283:
case 2974:
case 421:
case 149:
case 876:
case 1537:
case 25:
case 3313:
case 2968:
case 2149:
case 3792:
case 3628:
case 922:
case 2384:
case 106:
case 2594:
case 1923:
case 1406:
case 4013:
case 327:
case 3825:
case 578:
case 2228:
case 3796:
case 3683:
case 3936:
case 1643:
case 1630:
case 1069:
case 2223:
case 1704:
case 1756:
case 406:
case 1751:
case 1632:
case 2288:
case 572:
case 449:
case 121:
case 3535:
case 202:
case 3064:
case 316:
case 2963:
case 3205:
case 830:
case 2808:
case 234:
case 2324:
case 1268:
case 3943:
case 2044:
case 3790:
case 980:
case 1636:
case 2674:
case 610:
case 2236:
case 1494:
case 581:
case 2329:
case 3632:
case 3069:
case 3827:
case 630:
case 2231:
case 3013:
case 2501:
case 2129:
case 1688:
case 3373:
case 261:
case 3268:
case 924:
case 3983:
case 1717:
case 1118:
case 2502:
case 2084:
case 3636:
case 218:
case 1943:
case 1790:
case 1885:
case 1535:
case 145:
case 259:
case 3845:
case 321:
case 1078:
case 3400:
case 1623:
case 1064:
case 116:
case 3752:
case 1205:
case 3631:
case 953:
case 1903:
case 1426:
case 1868:
case 2115:
case 474:
case 1874:
case 1245:
case 2538:
case 3440:
case 729:
case 2075:
case 1749:
case 859:
case 2208:
case 1967:
case 2546:
case 2764:
case 516:
case 2778:
case 1665:
case 614:
case 536:
case 602:
case 861:
case 2090:
case 3566:
case 1227:
case 2541:
case 1784:
case 2823:
case 634:
case 977:
case 2685:
case 2377:
case 1285:
case 1433:
case 1440:
case 1562:
case 3245:
case 381:
case 1789:
case 802:
case 3967:
case 3749:
case 2056:
case 3426:
case 210:
case 2947:
case 3874:
case 478:
case 2769:
case 3784:
case 747:
case 2581:
case 1744:
case 1566:
case 3227:
case 638:
case 2645:
case 2586:
case 2836:
case 2191:
case 3665:
case 2638:
case 2922:
case 3662:
case 1220:
case 3425:
case 2010:
case 869:
case 963:
case 1854:
case 2642:
case 3246:
case 2261:
case 3039:
case 1286:
case 2395:
case 133:
case 2641:
case 3238:
case 721:
case 3447:
case 2835:
case 2585:
case 2921:
case 2758:
case 2646:
case 89:
case 1802:
case 3661:
case 2195:
case 895:
case 3859:
case 2467:
case 2316:
case 3806:
case 2076:
case 69:
case 3801:
case 2311:
case 2116:
case 651:
case 1425:
case 2527:
case 403:
case 3220:
case 2933:
case 3802:
case 3034:
case 2686:
case 736:
case 3565:
case 2072:
case 3282:
case 74:
case 2112:
case 48:
case 716:
case 333:
case 389:
case 745:
case 1238:
case 485:
case 3487:
case 3937:
case 3797:
case 3198:
case 3755:
case 1202:
case 3710:
case 1153:
case 1419:
case 1532:
case 1463:
case 1882:
case 2900:
case 3842:
case 2739:
case 1776:
case 3588:
case 441:
case 2483:
case 2862:
case 2235:
case 1206:
case 1254:
case 1536:
case 2861:
case 1201:
case 3635:
case 2866:
case 3058:
case 1820:
case 1881:
case 3776:
case 1398:
case 329:
case 2430:
case 425:
case 1588:
case 2574:
case 295:
case 1259:
case 3532:
case 3882:
case 3463:
case 3201:
case 3772:
case 1523:
case 2734:
case 3093:
case 2994:
case 1841:
case 513:
case 3820:
case 1414:
case 589:
case 3206:
case 3536:
case 2602:
case 3886:
case 2699:
case 3822:
case 1479:
case 3637:
case 1716:
case 3098:
case 4058:
case 1053:
case 3795:
case 2563:
case 2519:
case 3826:
case 1405:
case 3200:
case 3880:
case 3530:
case 1840:
case 1833:
case 2448:
case 125:
case 1583:
case 3716:
case 2954:
case 26:
case 3053:
case 2906:
case 4093:
case 1770:
case 2514:
case 585:
case 58:
case 3712:
case 1200:
case 3405:
case 3393:
case 3833:
case 2902:
case 1880:
case 2488:
case 429:
case 1530:
case 299:
case 1935:
case 3193:
case 503:
case 1757:
case 1826:
case 2860:
case 1299:
case 979:
case 1503:
case 993:
case 3139:
case 3800:
case 18:
case 2837:
case 3445:
case 2587:
case 2622:
case 2155:
case 2465:
case 3226:
case 873:
case 1567:
case 3899:
case 857:
case 2057:
case 2095:
case 865:
case 3966:
case 2626:
case 541:
case 940:
case 1962:
case 1339:
case 413:
case 4034:
case 2171:
case 2376:
case 1226:
case 2260:
case 1899:
case 2016:
case 1800:
case 2371:
case 665:
case 3233:
case 2011:
case 3485:
case 2547:
case 1280:
case 3660:
case 2372:
case 1966:
case 699:
case 525:
case 1222:
case 2640:
case 1427:
case 1924:
case 2593:
case 3213:
case 162:
case 3765:
case 1163:
case 1119:
case 431:
case 2383:
case 1107:
case 2036:
case 2852:
case 398:
case 1363:
case 1319:
case 4014:
case 2745:
case 2048:
case 2851:
case 1278:
case 301:
case 3929:
case 337:
case 2669:
case 1264:
case 1005:
case 2613:
case 468:
case 3314:
case 3068:
case 3074:
case 317:
case 2973:
case 2284:
case 671:
case 1689:
case 2727:
case 3649:
case 955:
case 3708:
case 3107:
case 426:
case 1684:
case 394:
case 967:
case 95:
case 2918:
case 2890:
case 3307:
case 1269:
case 1498:
case 3453:
case 1765:
case 3119:
case 991:
case 362:
case 2330:
case 4063:
case 4019:
case 543:
case 1649:
case 2244:
case 3278:
case 101:
case 137:
case 1609:
case 2204:
case 2065:
case 3572:
case 3125:
case 3652:
case 3045:
case 2251:
case 1878:
case 2470:
case 4:
case 3736:
case 1617:
case 1690:
case 537:
case 3576:
case 2252:
case 2103:
case 390:
case 3656:
case 976:
case 501:
case 2367:
case 1950:
case 1187:
case 1555:
case 2303:
case 143:
case 1510:
case 3869:
case 3571:
case 3813:
case 3027:
case 1675:
case 1387:
case 3992:
case 3347:
case 2411:
case 3085:
case 282:
case 709:
case 3690:
case 3864:
case 1736:
case 3617:
case 2416:
case 1572:
case 1731:
case 3977:
case 2844:
case 1991:
case 900:
case 2290:
case 1869:
case 622:
case 1571:
case 1813:
case 3597:
case 343:
case 1732:
case 735:
case 1347:
case 3387:
case 190:
case 2539:
case 2412:
case 71:
case 1576:
case 2889:
case 2209:
case 1604:
case 3915:
case 715:
case 1147:
case 3439:
case 568:
case 2292:
case 2365:
case 1917:
case 3696:
case 288:
case 1595:
case 3025:
case 253:
case 1909:
case 1557:
case 3345:
case 3952:
case 220:
case 1385:
case 1677:
case 3691:
case 2829:
case 2296:
case 277:
case 1434:
case 1975:
case 3728:
case 3951:
case 507:
case 3692:
case 3511:
case 4045:
case 1570:
case 628:
case 2714:
case 360:
case 2291:
case 2003:
case 2471:
case 284:
case 3557:
case 443:
case 3595:
case 3818:
case 1025:
case 1952:
case 3677:
case 1691:
case 1345:
case 386:
case 2476:
case 564:
case 2108:
case 1512:
case 1145:
case 666:
case 2824:
case 1696:
case 1783:
case 3087:
case 3570:
case 160:
case 4085:
case 1:
case 1904:
case 3650:
case 1956:
case 526:
case 1516:
case 1728:
case 1127:
case 3434:
case 3975:
case 2083:
case 3984:
case 2331:
case 2229:
case 2896:
case 1063:
case 2336:
case 417:
case 4074:
case 2553:
case 3174:
case 307:
case 2028:
case 3458:
case 3168:
case 3767:
case 1989:
case 3949:
case 884:
case 1105:
case 902:
case 3703:
case 126:
case 3374:
case 2892:
case 2747:
case 2148:
case 560:
case 934:
case 2913:
case 677:
case 3019:
case 3063:
case 877:
case 3379:
case 2123:
case 2030:
case 1273:
case 684:
case 2323:
case 364:
case 997:
case 168:
case 4005:
case 2618:
case 3179:
case 959:
case 3105:
case 326:
case 1014:
case 2224:
case 2850:
case 1458:
case 2598:
case 723:
case 1174:
case 3218:
case 107:
case 750:
case 1949:
case 1767:
case 888:
case 2740:
case 415:
case 1359:
case 4054:
case 2812:
case 2489:
case 786:
case 41:
case 1159:
case 435:
case 339:
case 383:
case 43:
case 1469:
case 1298:
case 1413:
case 0:
case 4002:
case 550:
case 1099:
case 3306:
case 2816:
case 3354:
case 67:
case 30:
case 1000:
case 3464:
case 2573:
case 3154:
case 305:
case 3106:
case 3478:
case 995:
case 2726:
case 3298:
case 3469:
case 99:
case 354:
case 183:
case 2518:
case 1253:
case 158:
case 3359:
case 2780:
case 1094:
case 119:
case 256:
case 1302:
case 2449:
case 875:
case 2722:
case 3000:
case 1301:
case 2870:
case 452:
case 7:
case 105:
case 863:
case 969:
case 1306:
case 1101:
case 1529:
case 3186:
case 1695:
case 1341:
case 1146:
case 1657:
case 764:
case 2211:
case 3591:
case 1577:
case 1346:
case 3612:
case 3181:
case 3120:
case 3386:
case 558:
case 3596:
case 1026:
case 539:
case 3611:
case 3182:
case 323:
case 2490:
case 1550:
case 275:
case 1910:
case 1955:
case 1342:
case 2409:
case 505:
case 1737:
case 27:
case 3592:
case 726:
case 4086:
case 1022:
case 1386:
case 1120:
case 1181:
case 2361:
case 2166:
case 3346:
case 554:
case 2404:
case 4042:
case 2456:
case 1596:
case 656:
case 3657:
case 1320:
case 1381:
case 1186:
case 3695:
case 842:
case 1591:
case 3080:
case 3577:
case 2270:
case 1033:
case 1040:
case 3342:
case 3997:
case 3910:
case 2162:
case 2452:
case 4046:
case 2799:
case 1611:
case 1976:
case 2939:
case 3515:
case 2257:
case 2295:
case 1853:
case 2160:
case 450:
case 1126:
case 1321:
case 1380:
case 3340:
case 1041:
case 2702:
case 1858:
case 3081:
case 2450:
case 293:
case 1735:
case 3672:
case 2360:
case 794:
case 1957:
case 1509:
case 1121:
case 1326:
case 2276:
case 1239:
case 1046:
case 1610:
case 3916:
case 1575:
case 644:
case 1038:
case 4040:
case 4033:
case 3551:
case 3911:
case 1322:
case 535:
case 1042:
case 3326:
case 3180:
case 3995:
case 1133:
case 1140:
case 2061:
case 1086:
case 4022:
case 3239:
case 1333:
case 1340:
case 1912:
case 3380:
case 3126:
case 2297:
case 3858:
case 1020:
case 1893:
case 3041:
case 2255:
case 1234:
case 3322:
case 2639:
case 717:
case 1082:
case 701:
case 1551:
case 3834:
case 2720:
case 679:
case 693:
case 1766:
case 3394:
case 2872:
case 3194:
case 1473:
case 405:
case 3054:
case 315:
case 1762:
case 3006:
case 31:
case 1839:
case 3549:
case 346:
case 1199:
case 3293:
case 743:
case 3418:
case 33:
case 244:
case 2513:
case 1300:
case 483:
case 4000:
case 2746:
case 2564:
case 352:
case 1194:
case 3473:
case 965:
case 3766:
case 1002:
case 2741:
case 1584:
case 1834:
case 1394:
case 96:
case 957:
case 2429:
case 973:
case 999:
case 2742:
case 2337:
case 13:
case 454:
case 248:
case 3399:
case 3762:
case 3100:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744671601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,];
var gg_b = "1744671601/";

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
