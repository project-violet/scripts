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
var o = 1;
switch (g) {
case 1372:
case 2837:
case 2740:
case 3870:
case 483:
case 1460:
case 3928:
case 1031:
case 1608:
case 794:
case 1503:
case 2521:
case 3366:
case 1325:
case 3347:
case 3515:
case 3185:
case 3098:
case 1395:
case 2591:
case 1456:
case 141:
case 2757:
case 2026:
case 3887:
case 2368:
case 2135:
case 1214:
case 1852:
case 2902:
case 3350:
case 1259:
case 2926:
case 1238:
case 593:
case 2176:
case 254:
case 2032:
case 500:
case 1796:
case 449:
case 2932:
case 695:
case 2731:
case 2574:
case 3312:
case 2149:
case 2093:
case 88:
case 1208:
case 1040:
case 2615:
case 1283:
case 2807:
case 1957:
case 1453:
case 95:
case 3621:
case 1686:
case 966:
case 1001:
case 1726:
case 347:
case 324:
case 3178:
case 1057:
case 1614:
case 1533:
case 1702:
case 186:
case 3982:
case 1659:
case 3630:
case 1743:
case 2677:
case 2884:
case 1170:
case 709:
case 2790:
case 898:
case 2946:
case 2463:
case 2079:
case 21:
case 1861:
case 3397:
case 378:
case 2816:
case 285:
case 190:
case 808:
case 3241:
case 2067:
case 3471:
case 651:
case 2500:
case 1885:
case 792:
case 3818:
case 831:
case 3834:
case 1309:
case 3200:
case 2541:
case 3048:
case 1187:
case 1517:
case 2720:
case 2344:
case 586:
case 3948:
case 1767:
case 322:
case 1358:
case 3230:
case 3804:
case 3110:
case 3580:
case 3955:
case 3424:
case 2199:
case 4052:
case 717:
case 2269:
case 270:
case 2129:
case 103:
case 2280:
case 1542:
case 1020:
case 73:
case 252:
case 193:
case 3468:
case 1920:
case 636:
case 2009:
case 986:
case 107:
case 3287:
case 3953:
case 2607:
case 3457:
case 1944:
case 166:
case 1814:
case 2945:
case 2570:
case 2651:
case 1252:
case 514:
case 3270:
case 2237:
case 423:
case 230:
case 458:
case 1141:
case 2744:
case 1883:
case 3956:
case 391:
case 233:
case 420:
case 2465:
case 126:
case 1498:
case 3727:
case 1652:
case 1745:
case 2251:
case 301:
case 941:
case 761:
case 7:
case 3797:
case 3960:
case 463:
case 2058:
case 1130:
case 3507:
case 1529:
case 3060:
case 2142:
case 1210:
case 3319:
case 1808:
case 1994:
case 3186:
case 355:
case 3218:
case 2103:
case 1302:
case 3234:
case 3381:
case 2095:
case 3159:
case 526:
case 3420:
case 3114:
case 1968:
case 1094:
case 903:
case 2995:
case 343:
case 1535:
case 2925:
case 2284:
case 2454:
case 3911:
case 2136:
case 1024:
case 2518:
case 1261:
case 2662:
case 1924:
case 1285:
case 1455:
case 3841:
case 2301:
case 1174:
case 1505:
case 2122:
case 507:
case 3750:
case 1549:
case 2106:
case 3618:
case 114:
case 1278:
case 1448:
case 55:
case 597:
case 566:
case 2175:
case 2357:
case 389:
case 487:
case 1071:
case 382:
case 2684:
case 1725:
case 3747:
case 1772:
case 2213:
case 2724:
case 1971:
case 4038:
case 4059:
case 340:
case 2616:
case 4014:
case 1530:
case 2920:
case 627:
case 3151:
case 644:
case 152:
case 2878:
case 3356:
case 3748:
case 4037:
case 1280:
case 869:
case 1129:
case 3107:
case 170:
case 3360:
case 3054:
case 1043:
case 398:
case 3849:
case 779:
case 3617:
case 3805:
case 3425:
case 948:
case 159:
case 1466:
case 1943:
case 2339:
case 925:
case 2990:
case 2358:
case 2746:
case 3876:
case 173:
case 728:
case 1720:
case 3353:
case 1541:
case 829:
case 606:
case 2517:
case 2187:
case 418:
case 451:
case 753:
case 1500:
case 3217:
case 3642:
case 3755:
case 822:
case 290:
case 4051:
case 2861:
case 1079:
case 11:
case 1463:
case 1967:
case 4007:
case 1884:
case 2170:
case 1677:
case 3137:
case 3873:
case 3798:
case 1427:
case 286:
case 1851:
case 1923:
case 2702:
case 2614:
case 3445:
case 649:
case 2726:
case 4084:
case 864:
case 495:
case 2686:
case 2453:
case 3603:
case 3222:
case 1807:
case 3292:
case 774:
case 2040:
case 2506:
case 3113:
case 3583:
case 1093:
case 1149:
case 930:
case 1932:
case 1105:
case 1731:
case 3233:
case 642:
case 2796:
case 2575:
case 2940:
case 2104:
case 1497:
case 3636:
case 3728:
case 154:
case 1176:
case 4013:
case 552:
case 2536:
case 2238:
case 1394:
case 2259:
case 3981:
case 933:
case 3675:
case 4062:
case 1701:
case 1902:
case 2852:
case 2489:
case 1026:
case 3622:
case 1368:
case 1215:
case 1757:
case 3606:
case 3081:
case 824:
case 2588:
case 2118:
case 2395:
case 3311:
case 675:
case 2732:
case 2503:
case 2931:
case 1521:
case 1096:
case 3692:
case 3288:
case 3116:
case 3458:
case 3538:
case 3236:
case 2460:
case 2793:
case 559:
case 3184:
case 1837:
case 1173:
case 1996:
case 3559:
case 1262:
case 165:
case 1616:
case 1192:
case 3063:
case 3205:
case 2685:
case 1213:
case 2772:
case 2971:
case 1724:
case 1340:
case 3711:
case 1133:
case 1684:
case 1877:
case 3578:
case 4015:
case 2071:
case 3963:
case 937:
case 1768:
case 1175:
case 1504:
case 2448:
case 214:
case 2576:
case 2278:
case 2549:
case 3382:
case 2323:
case 3605:
case 2455:
case 2396:
case 1972:
case 2285:
case 2924:
case 3328:
case 148:
case 1025:
case 3066:
case 2261:
case 1188:
case 2191:
case 3047:
case 1216:
case 125:
case 3676:
case 3273:
case 1419:
case 1284:
case 1331:
case 3443:
case 44:
case 2678:
case 3364:
case 3050:
case 1995:
case 3235:
case 2968:
case 2094:
case 3950:
case 3115:
case 2121:
case 3299:
case 2808:
case 548:
case 525:
case 3169:
case 620:
case 2343:
case 2210:
case 2529:
case 1637:
case 3833:
case 36:
case 2428:
case 1251:
case 219:
case 2709:
case 2498:
case 1481:
case 1465:
case 3426:
case 133:
case 2464:
case 757:
case 79:
case 3806:
case 2599:
case 1744:
case 2883:
case 1207:
case 1587:
case 660:
case 954:
case 2758:
case 3699:
case 3888:
case 3760:
case 4080:
case 3836:
case 739:
case 2379:
case 297:
case 891:
case 1570:
case 3423:
case 1651:
case 623:
case 2859:
case 1909:
case 2482:
case 4069:
case 2944:
case 1607:
case 1815:
case 3629:
case 611:
case 801:
case 3803:
case 2886:
case 1009:
case 3027:
case 371:
case 849:
case 1650:
case 1571:
case 2375:
case 979:
case 415:
case 1718:
case 134:
case 748:
case 48:
case 950:
case 664:
case 2735:
case 1374:
case 1005:
case 59:
case 3308:
case 2392:
case 880:
case 1819:
case 3843:
case 968:
case 2904:
case 1212:
case 3672:
case 1076:
case 3913:
case 50:
case 2333:
case 2004:
case 4081:
case 188:
case 3761:
case 3962:
case 3338:
case 1035:
case 0:
case 883:
case 2918:
case 3314:
case 539:
case 1250:
case 3511:
case 1102:
case 1935:
case 2525:
case 3778:
case 3386:
case 2034:
case 2848:
case 3165:
case 1266:
case 1477:
case 1704:
case 305:
case 2211:
case 3016:
case 1612:
case 1196:
case 1973:
case 1247:
case 1663:
case 2776:
case 2595:
case 2388:
case 1391:
case 532:
case 1469:
case 1073:
case 2749:
case 953:
case 3272:
case 3879:
case 2131:
case 139:
case 974:
case 1929:
case 2558:
case 3051:
case 2486:
case 3007:
case 3560:
case 213:
case 2438:
case 2882:
case 3823:
case 27:
case 2190:
case 1697:
case 3893:
case 3119:
case 662:
case 1143:
case 2342:
case 132:
case 3488:
case 318:
case 3556:
case 351:
case 1999:
case 3406:
case 2:
case 498:
case 4019:
case 2656:
case 261:
case 867:
case 4054:
case 534:
case 2253:
case 2987:
case 3422:
case 2483:
case 1881:
case 3209:
case 1300:
case 376:
case 2689:
case 408:
case 616:
case 2970:
case 3433:
case 1341:
case 2317:
case 2509:
case 1146:
case 2828:
case 733:
case 1167:
case 777:
case 3658:
case 2408:
case 2070:
case 588:
case 10:
case 3710:
case 3667:
case 153:
case 1863:
case 3646:
case 1254:
case 1812:
case 1484:
case 2255:
case 1741:
case 2717:
case 202:
case 1139:
case 1158:
case 471:
case 2030:
case 3969:
case 4027:
case 773:
case 145:
case 1416:
case 1700:
case 3980:
case 209:
case 71:
case 1590:
case 3080:
case 785:
case 299:
case 2543:
case 2329:
case 1654:
case 1847:
case 3825:
case 1619:
case 172:
case 3267:
case 2041:
case 3197:
case 23:
case 1462:
case 168:
case 752:
case 3279:
case 1370:
case 2655:
case 3405:
case 3449:
case 823:
case 150:
case 1850:
case 2144:
case 1387:
case 179:
case 1145:
case 3127:
case 456:
case 934:
case 1109:
case 2546:
case 46:
case 2567:
case 770:
case 2478:
case 3293:
case 2860:
case 90:
case 34:
case 1092:
case 1437:
case 2305:
case 957:
case 3232:
case 3839:
case 1304:
case 1557:
case 568:
case 1033:
case 1992:
case 204:
case 2703:
case 1922:
case 2974:
case 1721:
case 550:
case 2664:
case 4047:
case 3786:
case 1906:
case 281:
case 3626:
case 2593:
case 3223:
case 3602:
case 579:
case 1681:
case 2698:
case 3759:
case 1975:
case 1540:
case 3598:
case 3385:
case 3296:
case 1088:
case 3166:
case 1125:
case 2733:
case 553:
case 1936:
case 3708:
case 2792:
case 3564:
case 545:
case 640:
case 2410:
case 2373:
case 1407:
case 2853:
case 1774:
case 2335:
case 4063:
case 2921:
case 1531:
case 3202:
case 2168:
case 3623:
case 2596:
case 2298:
case 3809:
case 2682:
case 1334:
case 2775:
case 1281:
case 1003:
case 939:
case 1265:
case 1318:
case 3015:
case 174:
case 3831:
case 2179:
case 719:
case 698:
case 1070:
case 1799:
case 110:
case 608:
case 257:
case 851:
case 818:
case 429:
case 1545:
case 1970:
case 4055:
case 1087:
case 3148:
case 2865:
case 422:
case 344:
case 1689:
case 3952:
case 3751:
case 631:
case 2227:
case 1898:
case 1729:
case 1483:
case 3244:
case 3474:
case 1253:
case 712:
case 1656:
case 161:
case 3052:
case 75:
case 4048:
case 3377:
case 707:
case 2770:
case 1342:
case 2143:
case 469:
case 3369:
case 17:
case 2697:
case 1190:
case 3380:
case 1459:
case 1120:
case 2627:
case 1438:
case 462:
case 2029:
case 946:
case 1486:
case 1558:
case 478:
case 876:
case 3644:
case 2415:
case 2929:
case 1539:
case 2787:
case 3421:
case 3224:
case 992:
case 1749:
case 3713:
case 1336:
case 2594:
case 714:
case 2073:
case 1776:
case 3085:
case 902:
case 1388:
case 1595:
case 424:
case 447:
case 2663:
case 3128:
case 57:
case 2704:
case 2973:
case 2196:
case 2247:
case 2126:
case 3268:
case 1525:
case 349:
case 2935:
case 3547:
case 3198:
case 3315:
case 1934:
case 2250:
case 2480:
case 1918:
case 521:
case 3294:
case 2035:
case 1004:
case 3716:
case 375:
case 510:
case 2905:
case 3441:
case 3271:
case 2949:
case 3624:
case 2647:
case 1904:
case 2854:
case 1611:
case 1773:
case 93:
case 2666:
case 1392:
case 2193:
case 464:
case 2123:
case 1322:
case 3668:
case 1735:
case 3512:
case 3182:
case 3820:
case 1306:
case 3978:
case 2718:
case 234:
case 561:
case 3694:
case 3400:
case 2734:
case 917:
case 482:
case 2318:
case 3938:
case 2003:
case 2265:
case 1021:
case 387:
case 1775:
case 2281:
case 3086:
case 1682:
case 1298:
case 2451:
case 3914:
case 599:
case 921:
case 2903:
case 3038:
case 1921:
case 1335:
case 2774:
case 3844:
case 1194:
case 509:
case 1706:
case 3014:
case 440:
case 3986:
case 2172:
case 3384:
case 97:
case 1792:
case 2988:
case 84:
case 2936:
case 3316:
case 592:
case 489:
case 1502:
case 1733:
case 3111:
case 2088:
case 3640:
case 1282:
case 2975:
case 9:
case 1452:
case 3083:
case 1593:
case 2665:
case 1074:
case 1856:
case 1664:
case 2075:
case 1703:
case 2721:
case 1974:
case 1376:
case 53:
case 3908:
case 2304:
case 2501:
case 3470:
case 1349:
case 910:
case 2437:
case 2092:
case 3313:
case 1628:
case 443:
case 594:
case 1000:
case 1478:
case 438:
case 117:
case 3620:
case 836:
case 2387:
case 2145:
case 4060:
case 581:
case 250:
case 3337:
case 2370:
case 1742:
case 2917:
case 793:
case 3769:
case 320:
case 13:
case 491:
case 268:
case 3690:
case 656:
case 2017:
case 272:
case 3777:
case 4056:
case 2730:
case 1811:
case 703:
case 3307:
case 3220:
case 3554:
case 1543:
case 199:
case 3519:
case 3189:
case 790:
case 109:
case 311:
case 3156:
case 3434:
case 700:
case 2158:
case 102:
case 2741:
case 1255:
case 2942:
case 1717:
case 62:
case 2812:
case 1399:
case 253:
case 3160:
case 192:
case 3900:
case 1153:
case 722:
case 1894:
case 3546:
case 3248:
case 3567:
case 412:
case 1868:
case 677:
case 2548:
case 2246:
case 2197:
case 1404:
case 419:
case 2643:
case 2825:
case 3742:
case 2279:
case 2449:
case 1824:
case 853:
case 120:
case 762:
case 158:
case 949:
case 111:
case 309:
case 879:
case 1189:
case 1519:
case 399:
case 2435:
case 3543:
case 3329:
case 1554:
case 1307:
case 778:
case 587:
case 123:
case 850:
case 466:
case 2977:
case 2243:
case 2310:
case 535:
case 4044:
case 2667:
case 1290:
case 2646:
case 3399:
case 2077:
case 160:
case 3030:
case 3717:
case 2679:
case 769:
case 3255:
case 1871:
case 2150:
case 1844:
case 1657:
case 2429:
case 3921:
case 967:
case 3853:
case 996:
case 1059:
case 1014:
case 558:
case 511:
case 187:
case 3021:
case 523:
case 2845:
case 1914:
case 2202:
case 1601:
case 3168:
case 346:
case 414:
case 2693:
case 135:
case 1640:
case 3091:
case 2598:
case 2385:
case 1111:
case 3502:
case 3410:
case 1231:
case 3124:
case 2708:
case 747:
case 2499:
case 3991:
case 560:
case 724:
case 2378:
case 381:
case 304:
case 944:
case 1983:
case 3974:
case 927:
case 3703:
case 3532:
case 1201:
case 3889:
case 3452:
case 2223:
case 3698:
case 394:
case 563:
case 2582:
case 3349:
case 2696:
case 4094:
case 1362:
case 2163:
case 3736:
case 4068:
case 3788:
case 764:
case 3376:
case 2232:
case 2867:
case 3776:
case 654:
case 2984:
case 1061:
case 960:
case 2016:
case 3211:
case 1550:
case 3749:
case 1985:
case 1224:
case 789:
case 3705:
case 295:
case 1762:
case 4001:
case 2084:
case 3336:
case 2314:
case 2359:
case 3934:
case 3572:
case 2338:
case 2386:
case 3034:
case 2295:
case 2778:
case 834:
case 740:
case 3848:
case 2181:
case 1198:
case 1315:
case 3018:
case 1547:
case 596:
case 1566:
case 149:
case 3303:
case 2625:
case 3904:
case 1890:
case 2308:
case 3392:
case 743:
case 3004:
case 2962:
case 2761:
case 2913:
case 1624:
case 3855:
case 1694:
case 3375:
case 963:
case 1078:
case 1820:
case 2383:
case 1512:
case 3735:
case 2695:
case 183:
case 1978:
case 3306:
case 1563:
case 4031:
case 791:
case 832:
case 3660:
case 659:
case 3317:
case 3970:
case 3545:
case 1527:
case 2896:
case 403:
case 2639:
case 670:
case 2553:
case 2710:
case 575:
case 784:
case 3408:
case 3070:
case 2422:
case 4090:
case 1474:
case 3987:
case 3483:
case 1707:
case 3:
case 2406:
case 1052:
case 3656:
case 3864:
case 583:
case 1597:
case 3087:
case 2209:
case 3898:
case 276:
case 2475:
case 1751:
case 839:
case 1952:
case 3689:
case 2589:
case 2119:
case 1737:
case 2154:
case 3190:
case 2436:
case 37:
case 1369:
case 2258:
case 218:
case 251:
case 2556:
case 935:
case 2239:
case 1377:
case 685:
case 2832:
case 2051:
case 321:
case 2403:
case 3653:
case 1421:
case 1644:
case 637:
case 2907:
case 3120:
case 3882:
case 3459:
case 2951:
case 2752:
case 2645:
case 3414:
case 673:
case 549:
case 167:
case 4095:
case 3304:
case 1858:
case 14:
case 1163:
case 2008:
case 3933:
case 3501:
case 1112:
case 2313:
case 3092:
case 3437:
case 715:
case 2083:
case 1738:
case 3540:
case 1759:
case 3681:
case 1714:
case 2201:
case 3006:
case 2487:
case 2715:
case 846:
case 2983:
case 4025:
case 1786:
case 3075:
case 976:
case 425:
case 3988:
case 1564:
case 1708:
case 1499:
case 1632:
case 2231:
case 3036:
case 3125:
case 918:
case 3088:
case 1147:
case 2640:
case 1385:
case 2565:
case 3936:
case 1361:
case 1693:
case 2316:
case 3334:
case 2914:
case 1623:
case 3451:
case 614:
case 1202:
case 1015:
case 1226:
case 1528:
case 2938:
case 2059:
case 3531:
case 3903:
case 2038:
case 2657:
case 1915:
case 2844:
case 3407:
case 1783:
case 1429:
case 536:
case 3139:
case 2871:
case 3942:
case 3741:
case 4009:
case 345:
case 3416:
case 260:
case 1969:
case 905:
case 4045:
case 1077:
case 3042:
case 1646:
case 83:
case 2290:
case 3863:
case 353:
case 2160:
case 1977:
case 3484:
case 1310:
case 3812:
case 995:
case 1473:
case 1069:
case 1080:
case 2220:
case 65:
case 1980:
case 2434:
case 211:
case 2156:
case 817:
case 2418:
case 607:
case 220:
case 368:
case 731:
case 2337:
case 1872:
case 1405:
case 3917:
case 1279:
case 612:
case 2777:
case 3866:
case 2404:
case 3847:
case 3017:
case 1548:
case 54:
case 372:
case 3145:
case 2868:
case 3387:
case 619:
case 1895:
case 4039:
case 798:
case 350:
case 899:
case 2780:
case 2153:
case 1352:
case 3850:
case 861:
case 8:
case 267:
case 3029:
case 1007:
case 2801:
case 1823:
case 1752:
case 3929:
case 3415:
case 4046:
case 2421:
case 485:
case 72:
case 1832:
case 690:
case 1239:
case 437:
case 118:
case 1488:
case 2491:
case 332:
case 810:
case 2010:
case 505:
case 2737:
case 2840:
case 3099:
case 3143:
case 3770:
case 459:
case 693:
case 2952:
case 3300:
case 2597:
case 3865:
case 244:
case 813:
case 470:
case 76:
case 756:
case 2707:
case 2474:
case 87:
case 1658:
case 1492:
case 1037:
case 1553:
case 94:
case 2831:
case 3179:
case 1639:
case 3544:
case 1896:
case 2527:
case 3167:
case 39:
case 3146:
case 2563:
case 2978:
case 3374:
case 3123:
case 576:
case 641:
case 2400:
case 3650:
case 334:
case 3718:
case 2694:
case 4026:
case 2271:
case 3076:
case 1672:
case 1962:
case 4002:
case 275:
case 3193:
case 3263:
case 3647:
case 1625:
case 1843:
case 1062:
case 3935:
case 3102:
case 1511:
case 2198:
case 2315:
case 2547:
case 4032:
case 686:
case 1386:
case 454:
case 1778:
case 1295:
case 2164:
case 1359:
case 3250:
case 4093:
case 1314:
case 3480:
case 551:
case 3594:
case 2961:
case 1084:
case 3469:
case 280:
case 1916:
case 195:
case 1272:
case 2224:
case 3973:
case 3247:
case 3196:
case 2430:
case 105:
case 3568:
case 2061:
case 1984:
case 3391:
case 242:
case 1867:
case 1846:
case 3663:
case 1355:
case 479:
case 2551:
case 3058:
case 915:
case 1496:
case 16:
case 2960:
case 450:
case 3390:
case 1299:
case 3939:
case 2354:
case 2507:
case 2431:
case 85:
case 897:
case 1806:
case 291:
case 2089:
case 468:
case 1822:
case 1753:
case 3207:
case 866:
case 3744:
case 617:
case 807:
case 1402:
case 472:
case 1426:
case 3465:
case 4017:
case 330:
case 1760:
case 2270:
case 3237:
case 1097:
case 3117:
case 812:
case 2891:
case 1888:
case 1699:
case 602:
case 2287:
case 2821:
case 826:
case 3607:
case 3815:
case 2457:
case 1756:
case 171:
case 445:
case 3009:
case 699:
case 4042:
case 751:
case 718:
case 3909:
case 2401:
case 1423:
case 1789:
case 2766:
case 3877:
case 3684:
case 3133:
case 2830:
case 2204:
case 2747:
case 1912:
case 4003:
case 1446:
case 1467:
case 1276:
case 474:
case 1578:
case 3869:
case 3192:
case 240:
case 3616:
case 2108:
case 3724:
case 1249:
case 1063:
case 1479:
case 1842:
case 2562:
case 3794:
case 2618:
case 3122:
case 3880:
case 2634:
case 2513:
case 2750:
case 4088:
case 3175:
case 3768:
case 1635:
case 289:
case 795:
case 2490:
case 4022:
case 3072:
case 1966:
case 2911:
case 3454:
case 1273:
case 2712:
case 2604:
case 3771:
case 1649:
case 1605:
case 3216:
case 4075:
case 3662:
case 908:
case 3025:
case 348:
case 1328:
case 3095:
case 1115:
case 1398:
case 2234:
case 1950:
case 1585:
case 2800:
case 4033:
case 2218:
case 2186:
case 255:
case 2516:
case 1364:
case 2138:
case 4092:
case 2420:
case 694:
case 2082:
case 4073:
case 3023:
case 1508:
case 3807:
case 1603:
case 2274:
case 3923:
case 3851:
case 1409:
case 2982:
case 3427:
case 2781:
case 1275:
case 247:
case 2765:
case 841:
case 2178:
case 3176:
case 3993:
case 1728:
case 1636:
case 2363:
case 1162:
case 4035:
case 1899:
case 2691:
case 3574:
case 3932:
case 3149:
case 3093:
case 1583:
case 3757:
case 1203:
case 2887:
case 2674:
case 1622:
case 1065:
case 3591:
case 2964:
case 1606:
case 3002:
case 1965:
case 3926:
case 3902:
case 3701:
case 1675:
case 2350:
case 2998:
case 2064:
case 1236:
case 3740:
case 3173:
case 3996:
case 508:
case 3521:
case 96:
case 2028:
case 2515:
case 1311:
case 2185:
case 1458:
case 2161:
case 1586:
case 1116:
case 956:
case 434:
case 1288:
case 1692:
case 2569:
case 661:
case 6:
case 40:
case 1389:
case 2577:
case 229:
case 1151:
case 2468:
case 216:
case 1748:
case 457:
case 131:
case 1356:
case 352:
case 2230:
case 3447:
case 1954:
case 2804:
case 1919:
case 3943:
case 3277:
case 359:
case 1876:
case 58:
case 198:
case 3199:
case 3269:
case 1360:
case 370:
case 2110:
case 2580:
case 1805:
case 1617:
case 610:
case 1849:
case 3813:
case 2424:
case 2048:
case 3680:
case 2818:
case 337:
case 373:
case 1353:
case 2152:
case 803:
case 3720:
case 4029:
case 3946:
case 3079:
case 3790:
case 736:
case 67:
case 2719:
case 3677:
case 3884:
case 439:
case 3046:
case 2241:
case 3979:
case 1642:
case 1755:
case 3067:
case 3816:
case 385:
case 501:
case 3094:
case 1584:
case 1114:
case 1138:
case 584:
case 2364:
case 2050:
case 1516:
case 1186:
case 3068:
case 591:
case 2561:
case 3326:
case 1381:
case 2115:
case 2398:
case 3121:
case 3261:
case 2066:
case 2328:
case 2047:
case 3191:
case 3455:
case 3285:
case 3924:
case 2649:
case 404:
case 1911:
case 1604:
case 1712:
case 2273:
case 2443:
case 2676:
case 780:
case 314:
case 674:
case 2382:
case 3549:
case 3505:
case 3174:
case 2205:
case 749:
case 2842:
case 2479:
case 2063:
case 2249:
case 3685:
case 962:
case 3393:
case 3071:
case 2276:
case 2578:
case 825:
case 848:
case 2446:
case 4021:
case 1204:
case 2673:
case 1830:
case 2912:
case 1747:
case 1766:
case 3332:
case 1401:
case 2789:
case 366:
case 3859:
case 3482:
case 1053:
case 3838:
case 397:
case 833:
case 492:
case 4030:
case 2027:
case 2348:
case 271:
case 3944:
case 3100:
case 1953:
case 1287:
case 1821:
case 3346:
case 767:
case 2888:
case 1891:
case 3367:
case 2097:
case 2432:
case 645:
case 796:
case 1440:
case 1270:
case 499:
case 3379:
case 706:
case 2493:
case 582:
case 22:
case 679:
case 184:
case 543:
case 101:
case 3745:
case 2402:
case 1727:
case 3709:
case 3883:
case 650:
case 2753:
case 1874:
case 2510:
case 3464:
case 555:
case 3599:
case 1956:
case 1089:
case 2806:
case 1319:
case 668:
case 3529:
case 1354:
case 1507:
case 727:
case 2299:
case 2892:
case 1960:
case 312:
case 3428:
case 138:
case 1797:
case 2496:
case 3130:
case 1670:
case 178:
case 1397:
case 3885:
case 2642:
case 2755:
case 632:
case 1754:
case 300:
case 940:
case 2873:
case 758:
case 413:
case 169:
case 524:
case 1948:
case 47:
case 547:
case 989:
case 1818:
case 639:
case 3187:
case 1327:
case 1834:
case 2849:
case 1424:
case 3779:
case 2805:
case 2617:
case 2054:
case 60:
case 2019:
case 461:
case 4087:
case 1055:
case 3746:
case 122:
case 2876:
case 885:
case 2919:
case 2954:
case 1230:
case 3878:
case 564:
case 393:
case 231:
case 116:
case 3920:
case 4070:
case 410:
case 2116:
case 215:
case 2586:
case 2692:
case 854:
case 1161:
case 2311:
case 938:
case 3325:
case 1366:
case 3732:
case 3503:
case 2184:
case 1870:
case 2559:
case 28:
case 3793:
case 2782:
case 1064:
case 1998:
case 1350:
case 3723:
case 3852:
case 3489:
case 991:
case 529:
case 3238:
case 3536:
case 2965:
case 341:
case 2606:
case 1964:
case 3286:
case 1674:
case 634:
case 2113:
case 1312:
case 3810:
case 3522:
case 2688:
case 1691:
case 3040:
case 787:
case 578:
case 1363:
case 2162:
case 3575:
case 3940:
case 4018:
case 1178:
case 3057:
case 3659:
case 2409:
case 2275:
case 386:
case 3702:
case 3533:
case 3614:
case 2445:
case 1621:
case 1274:
case 1444:
case 3283:
case 2829:
case 2508:
case 3001:
case 3592:
case 735:
case 2764:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761624001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,];
var gg_b = "1761624001/";

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
