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
case 2810:
case 1097:
case 1590:
case 1629:
case 3725:
case 867:
case 3535:
case 2711:
case 3189:
case 2764:
case 1807:
case 2837:
case 2302:
case 2303:
case 3561:
case 3710:
case 2612:
case 4064:
case 3514:
case 1999:
case 4011:
case 3903:
case 2558:
case 1582:
case 1583:
case 2546:
case 2124:
case 799:
case 2969:
case 3228:
case 2130:
case 3737:
case 3165:
case 1100:
case 3864:
case 3034:
case 382:
case 977:
case 676:
case 3417:
case 1359:
case 3297:
case 934:
case 1551:
case 3424:
case 735:
case 1316:
case 3430:
case 2465:
case 878:
case 272:
case 1749:
case 253:
case 398:
case 238:
case 612:
case 1718:
case 2431:
case 565:
case 1571:
case 1379:
case 1874:
case 201:
case 1234:
case 3108:
case 3645:
case 1028:
case 1042:
case 2606:
case 1636:
case 3916:
case 3774:
case 4018:
case 2551:
case 3077:
case 116:
case 2854:
case 3221:
case 2944:
case 51:
case 2495:
case 3849:
case 2086:
case 3959:
case 3979:
case 2028:
case 1204:
case 3138:
case 2234:
case 2175:
case 3057:
case 138:
case 748:
case 1837:
case 1764:
case 1277:
case 1985:
case 2438:
case 1711:
case 3505:
case 694:
case 1578:
case 3475:
case 1408:
case 63:
case 2629:
case 455:
case 2097:
case 2794:
case 3004:
case 4094:
case 321:
case 544:
case 1825:
case 457:
case 349:
case 687:
case 2582:
case 3932:
case 3933:
case 903:
case 1558:
case 2999:
case 796:
case 3399:
case 1257:
case 3684:
case 3894:
case 1613:
case 3195:
case 1612:
case 3632:
case 2730:
case 3633:
case 3046:
case 1504:
case 1474:
case 1912:
case 2271:
case 1801:
case 2831:
case 2061:
case 3110:
case 1669:
case 187:
case 194:
case 4017:
case 2164:
case 3789:
case 185:
case 2865:
case 1005:
case 3125:
case 2111:
case 3329:
case 3731:
case 2515:
case 74:
case 1454:
case 342:
case 4030:
case 1194:
case 1895:
case 1685:
case 536:
case 664:
case 13:
case 351:
case 714:
case 921:
case 3291:
case 3708:
case 1775:
case 949:
case 2282:
case 303:
case 2283:
case 1258:
case 672:
case 1345:
case 638:
case 2644:
case 2437:
case 1407:
case 1577:
case 3542:
case 1068:
case 1838:
case 2808:
case 1260:
case 411:
case 425:
case 1936:
case 2290:
case 3616:
case 917:
case 616:
case 2149:
case 2345:
case 3855:
case 2118:
case 650:
case 2050:
case 300:
case 1282:
case 1425:
case 584:
case 2936:
case 1290:
case 3586:
case 176:
case 4075:
case 57:
case 1098:
case 2260:
case 2070:
case 2068:
case 839:
case 2407:
case 2577:
case 96:
case 788:
case 2669:
case 120:
case 1717:
case 2801:
case 1271:
case 1027:
case 2913:
case 1534:
case 2474:
case 375:
case 1889:
case 1699:
case 3107:
case 3603:
case 3090:
case 23:
case 897:
case 2685:
case 2194:
case 3449:
case 792:
case 87:
case 2454:
case 3701:
case 1515:
case 3597:
case 1111:
case 3800:
case 294:
case 352:
case 922:
case 373:
case 3898:
case 1750:
case 893:
case 75:
case 1554:
case 3467:
case 1941:
case 1265:
case 1075:
case 225:
case 227:
case 2798:
case 1055:
case 283:
case 180:
case 1231:
case 1186:
case 2434:
case 2142:
case 1770:
case 109:
case 824:
case 2761:
case 910:
case 2510:
case 3758:
case 2017:
case 1923:
case 1680:
case 4035:
case 3835:
case 1000:
case 2878:
case 2860:
case 3746:
case 2238:
case 3134:
case 1208:
case 3275:
case 2537:
case 1791:
case 2727:
case 3120:
case 3861:
case 3319:
case 3609:
case 1693:
case 1882:
case 2956:
case 2167:
case 2525:
case 1705:
case 2663:
case 3778:
case 2735:
case 3827:
case 4061:
case 524:
case 3356:
case 3564:
case 2507:
case 2477:
case 1537:
case 2791:
case 305:
case 2208:
case 3805:
case 655:
case 2000:
case 4005:
case 2680:
case 3783:
case 3095:
case 2922:
case 590:
case 3323:
case 3322:
case 3891:
case 981:
case 1735:
case 1167:
case 1662:
case 3428:
case 1663:
case 1525:
case 2705:
case 1846:
case 1121:
case 2883:
case 2693:
case 326:
case 1948:
case 2692:
case 2197:
case 657:
case 307:
case 3639:
case 2457:
case 3341:
case 3870:
case 111:
case 1396:
case 2941:
case 2128:
case 3497:
case 3653:
case 890:
case 4070:
case 370:
case 209:
case 2768:
case 3673:
case 2770:
case 3177:
case 3751:
case 1647:
case 1143:
case 2404:
case 2340:
case 2871:
case 0:
case 280:
case 106:
case 3940:
case 1798:
case 127:
case 3850:
case 438:
case 1170:
case 3427:
case 2446:
case 3640:
case 2743:
case 926:
case 1786:
case 356:
case 627:
case 2458:
case 683:
case 3294:
case 1857:
case 2207:
case 1237:
case 2352:
case 1877:
case 416:
case 2353:
case 3952:
case 2460:
case 2478:
case 3953:
case 905:
case 860:
case 3842:
case 202:
case 1049:
case 313:
case 2641:
case 1018:
case 2820:
case 3025:
case 2992:
case 3939:
case 1804:
case 3160:
case 1105:
case 2767:
case 3393:
case 2274:
case 730:
case 1797:
case 1471:
case 2381:
case 243:
case 1676:
case 1191:
case 464:
case 3530:
case 2623:
case 3720:
case 2127:
case 531:
case 3867:
case 1451:
case 3734:
case 3010:
case 3821:
case 3158:
case 2254:
case 4067:
case 3218:
case 3249:
case 3498:
case 3517:
case 1595:
case 758:
case 2656:
case 240:
case 257:
case 3450:
case 1381:
case 2501:
case 1721:
case 3363:
case 2797:
case 3190:
case 733:
case 2105:
case 1767:
case 2804:
case 2309:
case 1834:
case 1589:
case 3909:
case 1992:
case 2648:
case 1011:
case 854:
case 973:
case 2595:
case 952:
case 1161:
case 1254:
case 1815:
case 3182:
case 3183:
case 563:
case 2451:
case 1623:
case 1565:
case 3470:
case 3468:
case 1127:
case 2191:
case 255:
case 3:
case 2947:
case 1373:
case 1372:
case 3347:
case 3555:
case 450:
case 3828:
case 447:
case 1743:
case 609:
case 359:
case 929:
case 554:
case 941:
case 3491:
case 2150:
case 1641:
case 3054:
case 2210:
case 2049:
case 3886:
case 445:
case 3171:
case 2490:
case 3988:
case 1460:
case 3405:
case 2728:
case 1508:
case 3575:
case 863:
case 2388:
case 1352:
case 1353:
case 2237:
case 1207:
case 3444:
case 2199:
case 3133:
case 3132:
case 3637:
case 1266:
case 3995:
case 2022:
case 978:
case 1930:
case 875:
case 2296:
case 384:
case 1924:
case 1169:
case 2713:
case 1365:
case 3300:
case 237:
case 738:
case 397:
case 753:
case 148:
case 1331:
case 2611:
case 3563:
case 1048:
case 2479:
case 834:
case 1185:
case 3812:
case 1694:
case 701:
case 3836:
case 764:
case 3745:
case 64:
case 3375:
case 2338:
case 3179:
case 889:
case 1552:
case 3938:
case 3040:
case 1403:
case 1573:
case 2845:
case 2433:
case 2432:
case 2144:
case 2526:
case 59:
case 1706:
case 3499:
case 2736:
case 196:
case 3219:
case 339:
case 430:
case 666:
case 3256:
case 534:
case 3116:
case 299:
case 4006:
case 2649:
case 3096:
case 3654:
case 1338:
case 42:
case 1041:
case 318:
case 3222:
case 3806:
case 433:
case 542:
case 3674:
case 336:
case 296:
case 1144:
case 1526:
case 1845:
case 669:
case 2402:
case 2573:
case 3087:
case 2365:
case 1713:
case 3330:
case 2924:
case 1416:
case 3829:
case 3324:
case 3965:
case 1296:
case 2930:
case 3580:
case 2076:
case 1459:
case 2917:
case 1395:
case 586:
case 3102:
case 2884:
case 3592:
case 2539:
case 2056:
case 1479:
case 2729:
case 1301:
case 2331:
case 1611:
case 842:
case 248:
case 747:
case 137:
case 1664:
case 2581:
case 1092:
case 1785:
case 428:
case 1129:
case 712:
case 2994:
case 817:
case 936:
case 2062:
case 2832:
case 1802:
case 1226:
case 3689:
case 3394:
case 1288:
case 2253:
case 2252:
case 2112:
case 2617:
case 2113:
case 1080:
case 2307:
case 849:
case 815:
case 1587:
case 821:
case 776:
case 2799:
case 3522:
case 3665:
case 3716:
case 3974:
case 1484:
case 3292:
case 266:
case 2879:
case 2239:
case 699:
case 1655:
case 3759:
case 188:
case 3026:
case 2744:
case 2281:
case 2816:
case 4044:
case 3280:
case 1596:
case 3318:
case 192:
case 2859:
case 3844:
case 2918:
case 3145:
case 24:
case 1281:
case 97:
case 2106:
case 1047:
case 882:
case 3072:
case 997:
case 288:
case 269:
case 2655:
case 2209:
case 1879:
case 1374:
case 166:
case 2484:
case 332:
case 1354:
case 2675:
case 898:
case 73:
case 2596:
case 984:
case 2802:
case 4069:
case 2803:
case 2226:
case 1832:
case 3548:
case 1833:
case 3311:
case 939:
case 3601:
case 2325:
case 2964:
case 2129:
case 114:
case 367:
case 3364:
case 3556:
case 3925:
case 2310:
case 3702:
case 3703:
case 2600:
case 4085:
case 1799:
case 365:
case 3406:
case 3576:
case 3937:
case 2587:
case 2080:
case 3695:
case 3885:
case 1113:
case 2337:
case 1253:
case 1252:
case 3184:
case 2288:
case 3726:
case 3536:
case 1668:
case 3423:
case 2747:
case 8:
case 2044:
case 3386:
case 44:
case 3285:
case 2698:
case 1942:
case 2888:
case 1852:
case 859:
case 1872:
case 2357:
case 1232:
case 2203:
case 2826:
case 522:
case 810:
case 630:
case 661:
case 3957:
case 191:
case 3328:
case 1650:
case 3788:
case 2997:
case 1148:
case 5:
case 2763:
case 3660:
case 3678:
case 1605:
case 1119:
case 1085:
case 725:
case 604:
case 1792:
case 3709:
case 711:
case 1496:
case 559:
case 1216:
case 2627:
case 2123:
case 1691:
case 1176:
case 2099:
case 706:
case 3646:
case 3032:
case 3863:
case 3033:
case 2440:
case 727:
case 2304:
case 2809:
case 1334:
case 4063:
case 1780:
case 3658:
case 1279:
case 3512:
case 3513:
case 2661:
case 3904:
case 1584:
case 2967:
case 2496:
case 2793:
case 3880:
case 2792:
case 1466:
case 4080:
case 2119:
case 1762:
case 15:
case 3244:
case 2148:
case 3781:
case 2584:
case 2320:
case 1661:
case 2780:
case 3683:
case 3187:
case 1809:
case 2334:
case 2839:
case 709:
case 2069:
case 3003:
case 513:
case 2881:
case 1122:
case 1627:
case 2852:
case 492:
case 2853:
case 1698:
case 2487:
case 1044:
case 90:
case 3651:
case 62:
case 3772:
case 3506:
case 360:
case 3456:
case 331:
case 1141:
case 3752:
case 3753:
case 3671:
case 813:
case 633:
case 1203:
case 1826:
case 1202:
case 2233:
case 308:
case 1357:
case 2872:
case 3448:
case 2579:
case 2409:
case 390:
case 3766:
case 2840:
case 870:
case 2371:
case 1481:
case 3350:
case 261:
case 133:
case 3841:
case 3368:
case 3370:
case 3229:
case 1686:
case 462:
case 3740:
case 2036:
case 1006:
case 12:
case 1346:
case 2013:
case 437:
case 2012:
case 3634:
case 1358:
case 570:
case 2382:
case 3447:
case 2722:
case 908:
case 1502:
case 1473:
case 3983:
case 2533:
case 474:
case 3982:
case 1914:
case 1776:
case 4023:
case 4022:
case 1453:
case 1452:
case 2905:
case 1935:
case 1360:
case 2621:
case 3305:
case 1887:
case 1697:
case 48:
case 2390:
case 2163:
case 435:
case 2667:
case 2162:
case 1719:
case 65:
case 826:
case 3823:
case 2776:
case 1533:
case 3848:
case 1532:
case 3958:
case 2472:
case 1723:
case 2503:
case 3361:
case 1722:
case 2473:
case 1383:
case 552:
case 573:
case 3314:
case 2927:
case 2346:
case 3084:
case 3946:
case 963:
case 2748:
case 1667:
case 1390:
case 3139:
case 2887:
case 2193:
case 3335:
case 2360:
case 2935:
case 3585:
case 4076:
case 2452:
case 3960:
case 3978:
case 104:
case 2029:
case 2756:
case 233:
case 130:
case 873:
case 1371:
case 1840:
case 3493:
case 496:
case 1579:
case 3212:
case 1741:
case 691:
case 3153:
case 1284:
case 3152:
case 3398:
case 3172:
case 1559:
case 2998:
case 1147:
case 1642:
case 2896:
case 1351:
case 1970:
case 954:
case 3480:
case 529:
case 1516:
case 1280:
case 3596:
case 1779:
case 734:
case 935:
case 232:
case 1145:
case 1608:
case 3675:
case 872:
case 1292:
case 1293:
case 3209:
case 1413:
case 636:
case 564:
case 3106:
case 369:
case 388:
case 2263:
case 431:
case 460:
case 1907:
case 2937:
case 3587:
case 2184:
case 3080:
case 962:
case 1436:
case 265:
case 2576:
case 3310:
case 1733:
case 1522:
case 538:
case 2702:
case 2703:
case 1523:
case 1665:
case 572:
case 2910:
case 553:
case 1631:
case 2311:
case 2601:
case 3325:
case 3785:
case 999:
case 3093:
case 2925:
case 3092:
case 1009:
case 789:
case 4002:
case 4003:
case 3803:
case 2548:
case 1394:
case 700:
case 1689:
case 1899:
case 2519:
case 2247:
case 3624:
case 550:
case 1910:
case 2522:
case 1702:
case 2665:
case 2523:
case 2733:
case 3630:
case 1576:
case 3799:
case 1695:
case 1885:
case 3113:
case 3252:
case 1937:
case 786:
case 2689:
case 703:
case 2394:
case 3273:
case 1548:
case 3832:
case 3833:
case 21:
case 1039:
case 1556:
case 4033:
case 1925:
case 519:
case 2631:
case 1311:
case 751:
case 742:
case 3566:
case 1638:
case 2318:
case 2608:
case 4016:
case 3918:
case 34:
case 132:
case 2844:
case 2541:
case 3816:
case 244:
case 2088:
case 1072:
case 3744:
case 2412:
case 639:
case 3239:
case 2292:
case 366:
case 3879:
case 2674:
case 1159:
case 1547:
case 876:
case 3403:
case 3572:
case 3573:
case 3402:
case 1499:
case 396:
case 1256:
case 493:
case 2469:
case 139:
case 721:
case 632:
case 812:
case 520:
case 2223:
case 1836:
case 1066:
case 678:
case 1745:
case 2096:
case 2908:
case 1563:
case 1562:
case 3331:
case 1901:
case 3581:
case 2931:
case 1813:
case 3389:
case 2989:
case 667:
case 966:
case 1995:
case 665:
case 3266:
case 3076:
case 1444:
case 2102:
case 2784:
case 2241:
case 1300:
case 2330:
case 2965:
case 184:
case 2829:
case 2324:
case 195:
case 894:
case 1592:
case 1593:
case 885:
case 579:
case 2813:
case 2812:
case 337:
case 3664:
case 1931:
case 2901:
case 988:
case 969:
case 2625:
case 83:
case 284:
case 1580:
case 3900:
case 2610:
case 3416:
case 335:
case 1103:
case 2133:
case 1317:
case 2637:
case 2444:
case 3199:
case 823:
case 782:
case 992:
case 585:
case 594:
case 239:
case 4045:
case 1469:
case 879:
case 490:
case 2248:
case 2499:
case 746:
case 3736:
case 2040:
case 3955:
case 3433:
case 2355:
case 2547:
case 1674:
case 136:
case 2179:
case 1654:
case 3287:
case 2375:
case 76:
case 3338:
case 3975:
case 3588:
case 1485:
case 2836:
case 1223:
case 1806:
case 587:
case 3697:
case 1305:
case 3360:
case 3378:
case 2139:
case 3756:
case 2585:
case 3452:
case 3748:
case 506:
case 527:
case 525:
case 2084:
case 2787:
case 3180:
case 1391:
case 2569:
case 1983:
case 1982:
case 2958:
case 3472:
case 1620:
case 2361:
case 3503:
case 3914:
case 2314:
case 1447:
case 1229:
case 224:
case 2480:
case 3896:
case 1841:
case 1126:
case 2398:
case 1740:
case 883:
case 3006:
case 827:
case 3439:
case 2492:
case 2493:
case 811:
case 2153:
case 436:
case 2152:
case 1971:
case 333:
case 1766:
case 358:
case 928:
case 1045:
case 1463:
case 1462:
case 3642:
case 880:
case 1398:
case 2368:
case 2951:
case 3516:
case 1480:
case 2229:
case 3351:
case 3840:
case 2045:
case 3371:
case 2462:
case 3950:
case 193:
case 2766:
case 2971:
case 2350:
case 1153:
case 1657:
case 663:
case 1492:
case 1493:
case 3579:
case 713:
case 3390:
case 580:
case 20:
case 1236:
case 2990:
case 2823:
case 495:
case 1960:
case 654:
case 3905:
case 3488:
case 1585:
case 1139:
case 2615:
case 1335:
case 3383:
case 3382:
case 1314:
case 2634:
case 1819:
case 3723:
case 3722:
case 3533:
case 2983:
case 3532:
case 2982:
case 2391:
case 497:
case 1327:
case 1787:
case 781:
case 2003:
case 467:
case 1862:
case 3881:
case 930:
case 502:
case 3176:
case 3584:
case 4081:
case 3839:
case 2920:
case 571:
case 2683:
case 2682:
case 843:
case 3605:
case 3259:
case 2321:
case 1678:
case 3119:
case 770:
case 2244:
case 2781:
case 3216:
case 3967:
case 3085:
case 465:
case 2739:
case 1709:
case 154:
case 1847:
case 3873:
case 693:
case 2299:
case 726:
case 2448:
case 707:
case 208:
case 1788:
case 3650:
case 2753:
case 231:
case 2456:
case 4072:
case 163:
case 391:
case 871:
case 1140:
case 543:
case 1386:
case 1536:
case 2476:
case 4053:
case 2773:
case 1422:
case 3668:
case 3670:
case 1423:
case 624:
case 1285:
case 3852:
case 3853:
case 904:
case 3942:
case 432:
case 2343:
case 2342:
case 1016:
case 1671:
case 555:
case 741:
case 1196:
case 1456:
case 263:
case 160:
case 3928:
case 2269:
case 3141:
case 3203:
case 1299:
case 3357:
case 2847:
case 2957:
case 3888:
case 2423:
case 1506:
case 2726:
case 2536:
case 2059:
case 3044:
case 2386:
case 2140:
case 1893:
case 1682:
case 41:
case 3809:
case 1934:
case 3122:
case 3123:
case 4009:
case 2863:
case 2033:
case 328:
case 1003:
case 254:
case 1367:
case 1880:
case 2441:
case 1915:
case 3997:
case 1781:
case 35:
case 1244:
case 752:
case 3466:
case 840:
case 2397:
case 3635:
case 3762:
case 1321:
case 899:
case 3068:
case 3260:
case 1659:
case 2235:
case 2174:
case 3577:
case 2336:
case 1306:
case 964:
case 4038:
case 3936:
case 2586:
case 289:
case 1411:
case 1291:
case 1464:
case 151:
case 2227:
case 3345:
case 2071:
case 2261:
case 2494:
case 3149:
case 58:
case 1679:
case 3258:
case 2154:
case 2214:
case 2945:
case 3050:
case 1125:
case 1824:
case 1329:
case 4095:
case 394:
case 3005:
case 1830:
case 277:
case 3895:
case 405:
case 2701:
case 916:
case 29:
case 837:
case 2597:
case 617:
case 3504:
case 3091:
case 3913:
case 562:
case 3912:
case 2602:
case 1765:
case 3700:
case 407:
case 2313:
case 1137:
case 2312:
case 1046:
case 275:
case 3669:
case 3801:
case 2731:
case 1597:
case 1701:
case 19:
case 1090:
case 1298:
case 242:
case 1800:
case 3035:
case 945:
case 2078:
case 2830:
case 744:
case 3164:
case 134:
case 2329:
case 66:
case 2824:
case 2125:
case 3111:
case 3831:
case 3061:
case 441:
case 2250:
case 947:
case 1083:
case 320:
case 3717:
case 3384:
case 1313:
case 2633:
case 3730:
case 1602:
case 1603:
case 3520:
case 3027:
case 4031:
case 3534:
case 2984:
case 3290:
case 3098:
case 682:
case 548:
case 3410:
case 2306:
case 2616:
case 1336:
case 1051:
case 1235:
case 1174:
case 2205:
case 2659:
case 2542:
case 3808:
case 1875:
case 452:
case 1945:
case 698:
case 1154:
case 3282:
case 286:
case 100:
case 312:
case 251:
case 2464:
case 189:
case 168:
case 84:
case 2754:
case 3571:
case 3401:
case 4074:
case 459:
case 920:
case 347:
case 3749:
case 1645:
case 3028:
case 689:
case 668:
case 3874:
case 3379:
case 2138:
case 2818:
case 3155:
case 3854:
case 3215:
case 1297:
case 182:
case 3086:
case 2344:
case 1598:
case 3495:
case 345:
case 2400:
case 2568:
case 1430:
case 866:
case 3551:
case 4054:
case 2267:
case 319:
case 2774:
case 1424:
case 3999:
case 54:
case 1514:
case 3583:
case 1902:
case 3332:
case 1710:
case 2195:
case 912:
case 1561:
case 736:
case 3100:
case 1527:
case 2707:
case 1369:
case 1864:
case 249:
case 1020:
case 976:
case 2101:
case 1131:
case 3590:
case 3629:
case 3794:
case 718:
case 3097:
case 1015:
case 1189:
case 1385:
case 566:
case 16:
case 3807:
case 814:
case 1535:
case 3438:
case 1725:
case 2505:
case 2243:
case 2020:
case 3546:
case 3124:
case 3969:
case 149:
case 115:
case 2864:
case 1591:
case 3257:
case 1399:
case 2561:
case 2710:
case 3117:
case 2902:
case 1455:
case 2903:
case 3558:
case 1933:
case 4025:
case 1243:
case 3578:
case 2725:
case 26:
case 3837:
case 3067:
case 3764:
case 3810:
case 569:
case 2015:
case 4037:
case 364:
case 2131:
case 642:
case 651:
case 1138:
case 301:
case 456:
case 2645:
case 372:
case 298:
case 987:
case 1057:
case 77:
case 1754:
case 1916:
case 2424:
case 413:
case 1077:
case 994:
case 3043:
case 985:
case 3042:
case 1568:
case 795:
case 869:
case 2598:
case 2417:
case 1849:
case 316:
case 1818:
case 417:
case 3451:
case 2704:
case 1146:
case 355:
case 724:
case 3191:
case 828:
case 1249:
case 1517:
case 2687:
case 2182:
case 2897:
case 1010:
case 1158:
case 1218:
case 3619:
case 1178:
case 3648:
case 2909:
case 3962:
case 607:
case 3963:
case 983:
case 449:
case 927:
case 3656:
case 793:
case 340:
case 626:
case 85:
case 421:
case 2362:
case 415:
case 1715:
case 1981:
case 1843:
case 2988:
case 3728:
case 1666:
case 3388:
case 3877:
case 528:
case 3210:
case 3018:
case 2757:
case 2171:
case 670:
case 3049:
case 2886:
case 2696:
case 3225:
case 259:
case 2828:
case 2491:
case 2074:
case 4057:
case 2:
case 3786:
case 1414:
case 1973:
case 1972:
case 1886:
case 1696:
case 302:
case 652:
case 673:
case 70:
case 3641:
case 1757:
case 110:
case 213:
case 3352:
case 371:
case 3207:
case 2952:
case 1405:
case 3460:
case 1575:
case 2953:
case 1555:
case 3458:
case 1347:
case 2414:
case 3373:
case 2294:
case 3198:
case 1074:
case 281:
case 1264:
case 1491:
case 1777:
case 498:
case 3743:
case 3742:
case 1151:
case 1211:
case 3446:
case 159:
case 2218:
case 46:
case 2010:
case 2821:
case 3254:
case 2249:
case 122:
case 2517:
case 3980:
case 2720:
case 591:
case 1470:
case 3622:
case 4015:
case 1704:
case 2524:
case 2037:
case 1190:
case 4034:
case 1363:
case 343:
case 1450:
case 980:
case 2939:
case 3589:
case 3820:
case 3011:
case 2025:
case 3993:
case 3992:
case 2393:
case 3274:
case 3339:
case 1814:
case 207:
case 2639:
case 475:
case 3883:
case 226:
case 3197:
case 1031:
case 3457:
case 1861:
case 2594:
case 2891:
case 2681:
case 141:
case 760:
case 731:
case 804:
case 129:
case 3680:
case 902:
case 2782:
case 3923:
case 561:
case 2095:
case 3922:
case 2486:
case 2323:
case 49:
case 3477:
case 477:
case 2805:
case 1835:
case 1134:
case 1275:
case 2104:
case 1746:
case 468:
case 3055:
case 380:
case 2673:
case 309:
case 4071:
case 504:
case 2771:
case 610:
case 2518:
case 4051:
case 3554:
case 2966:
case 270:
case 2653:
case 3750:
case 1898:
case 2230:
case 1008:
case 2341:
case 2038:
case 2868:
case 3851:
case 681:
case 1751:
case 3434:
case 2626:
case 1673:
case 486:
case 3420:
case 1672:
case 1850:
case 940:
case 451:
case 2467:
case 1870:
case 955:
case 325:
case 2008:
case 311:
case 754:
case 2996:
case 2688:
case 2898:
case 3295:
case 1217:
case 170:
case 1518:
case 613:
case 2421:
case 833:
case 1771:
case 3662:
case 1428:
case 3525:
case 3663:
case 2511:
case 1891:
case 3919:
case 1594:
case 1001:
case 2348:
case 2031:
case 1790:
case 2255:
case 2609:
case 107:
case 2746:
case 2134:
case 2275:
case 2835:
case 1805:
case 3878:
case 3537:
case 558:
case 3510:
case 2376:
case 1486:
case 2758:
case 533:
case 1782:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750838401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,];
var gg_b = "1750838401/";

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
