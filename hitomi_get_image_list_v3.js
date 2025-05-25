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
case 1023:
case 3697:
case 1656:
case 1485:
case 526:
case 3236:
case 3179:
case 3488:
case 4006:
case 2444:
case 2334:
case 416:
case 3401:
case 522:
case 289:
case 3467:
case 162:
case 3845:
case 3462:
case 651:
case 1420:
case 2338:
case 1848:
case 512:
case 3018:
case 903:
case 1015:
case 3136:
case 770:
case 2686:
case 171:
case 3484:
case 2455:
case 1029:
case 3692:
case 516:
case 1806:
case 706:
case 2315:
case 2329:
case 3604:
case 984:
case 2406:
case 2193:
case 4044:
case 1709:
case 575:
case 2672:
case 1116:
case 3035:
case 853:
case 2131:
case 3681:
case 4048:
case 2677:
case 668:
case 66:
case 2293:
case 2199:
case 1605:
case 2935:
case 3608:
case 475:
case 1384:
case 3006:
case 1146:
case 910:
case 2611:
case 2702:
case 2345:
case 3838:
case 1292:
case 981:
case 905:
case 1673:
case 2761:
case 339:
case 1192:
case 1297:
case 1636:
case 2707:
case 3778:
case 2721:
case 1327:
case 322:
case 920:
case 1775:
case 1246:
case 3190:
case 1920:
case 3962:
case 2027:
case 2414:
case 3616:
case 1054:
case 2067:
case 93:
case 473:
case 1960:
case 828:
case 3984:
case 2955:
case 3577:
case 1104:
case 81:
case 1551:
case 3105:
case 1204:
case 3726:
case 3869:
case 855:
case 199:
case 487:
case 1570:
case 3541:
case 375:
case 573:
case 3967:
case 654:
case 1058:
case 3766:
case 2588:
case 1267:
case 2527:
case 2739:
case 3120:
case 1554:
case 1397:
case 2791:
case 2145:
case 3160:
case 1122:
case 1288:
case 930:
case 1346:
case 1436:
case 3544:
case 2501:
case 3077:
case 2254:
case 2081:
case 3285:
case 820:
case 1284:
case 810:
case 2411:
case 2635:
case 3390:
case 1479:
case 2258:
case 1127:
case 1188:
case 2562:
case 1811:
case 3548:
case 3260:
case 1070:
case 2977:
case 2004:
case 3981:
case 1392:
case 3555:
case 1101:
case 3220:
case 1262:
case 604:
case 3946:
case 2370:
case 3899:
case 2092:
case 747:
case 1304:
case 91:
case 2618:
case 918:
case 3831:
case 2351:
case 1956:
case 3997:
case 1757:
case 2782:
case 677:
case 3771:
case 2046:
case 2986:
case 227:
case 3992:
case 1308:
case 928:
case 157:
case 838:
case 3305:
case 2097:
case 3742:
case 3416:
case 83:
case 2768:
case 2614:
case 3893:
case 756:
case 1099:
case 1660:
case 2238:
case 3684:
case 2655:
case 1620:
case 1538:
case 2753:
case 1789:
case 2648:
case 2890:
case 3379:
case 519:
case 3535:
case 1490:
case 803:
case 3717:
case 169:
case 3712:
case 797:
case 2644:
case 3446:
case 3336:
case 1534:
case 3667:
case 660:
case 2234:
case 2016:
case 532:
case 419:
case 3627:
case 146:
case 1093:
case 2911:
case 1316:
case 2263:
case 2805:
case 4086:
case 3408:
case 2393:
case 1563:
case 2477:
case 2223:
case 2115:
case 64:
case 648:
case 3851:
case 601:
case 3011:
case 2472:
case 685:
case 709:
case 2123:
case 2399:
case 3870:
case 1973:
case 953:
case 2269:
case 77:
case 2606:
case 1737:
case 2163:
case 1529:
case 1515:
case 2933:
case 67:
case 678:
case 3598:
case 1603:
case 2777:
case 3781:
case 4053:
case 1595:
case 3352:
case 228:
case 3430:
case 2976:
case 2832:
case 2365:
case 785:
case 465:
case 837:
case 1350:
case 15:
case 1342:
case 74:
case 324:
case 3704:
case 1437:
case 1347:
case 2741:
case 748:
case 255:
case 2195:
case 3033:
case 917:
case 2991:
case 3357:
case 125:
case 363:
case 2772:
case 565:
case 1266:
case 2939:
case 3082:
case 3175:
case 2096:
case 1853:
case 3950:
case 3417:
case 3942:
case 1178:
case 3024:
case 1013:
case 161:
case 1080:
case 1952:
case 3843:
case 2987:
case 2924:
case 1065:
case 2578:
case 511:
case 2810:
case 176:
case 1957:
case 3996:
case 3068:
case 1410:
case 2982:
case 230:
case 2042:
case 3797:
case 1278:
case 2459:
case 421:
case 1025:
case 2964:
case 2883:
case 3947:
case 3746:
case 3275:
case 3028:
case 524:
case 3053:
case 2424:
case 1824:
case 2017:
case 253:
case 3496:
case 2482:
case 3813:
case 414:
case 3209:
case 3103:
case 563:
case 4091:
case 1864:
case 777:
case 3447:
case 3450:
case 3865:
case 3917:
case 3442:
case 3332:
case 4033:
case 1049:
case 4076:
case 1868:
case 424:
case 1452:
case 3819:
case 1440:
case 3471:
case 463:
case 3059:
case 2840:
case 514:
case 2852:
case 2607:
case 2030:
case 79:
case 4024:
case 311:
case 704:
case 3383:
case 2661:
case 1773:
case 1675:
case 2491:
case 982:
case 2349:
case 1891:
case 2621:
case 2343:
case 4068:
case 3674:
case 1779:
case 2711:
case 3137:
case 2530:
case 3671:
case 2687:
case 3895:
case 667:
case 4002:
case 434:
case 443:
case 3303:
case 2714:
case 2668:
case 38:
case 534:
case 2718:
case 3466:
case 4021:
case 345:
case 1130:
case 4007:
case 2494:
case 2682:
case 144:
case 3132:
case 2243:
case 3110:
case 2517:
case 203:
case 3183:
case 3800:
case 3289:
case 331:
case 1112:
case 1475:
case 886:
case 393:
case 1212:
case 1909:
case 3478:
case 3283:
case 595:
case 2421:
case 2875:
case 2639:
case 1861:
case 2143:
case 1807:
case 2249:
case 2461:
case 343:
case 1150:
case 1142:
case 2809:
case 2280:
case 1247:
case 1975:
case 3002:
case 2596:
case 817:
case 3524:
case 3978:
case 1326:
case 3152:
case 3257:
case 1296:
case 1171:
case 76:
case 1637:
case 2706:
case 1000:
case 1366:
case 2961:
case 2119:
case 6:
case 3021:
case 2542:
case 23:
case 3252:
case 3157:
case 3568:
case 1271:
case 3061:
case 2265:
case 1403:
case 3630:
case 58:
case 2395:
case 606:
case 1250:
case 1242:
case 2180:
case 1147:
case 2659:
case 670:
case 3966:
case 3767:
case 593:
case 179:
case 3701:
case 3539:
case 3788:
case 1378:
case 3926:
case 194:
case 1785:
case 2994:
case 3591:
case 3576:
case 1374:
case 2755:
case 2300:
case 493:
case 281:
case 3533:
case 3094:
case 531:
case 3762:
case 2653:
case 1689:
case 1447:
case 1912:
case 1337:
case 73:
case 165:
case 2731:
case 1666:
case 1103:
case 525:
case 2847:
case 1209:
case 3910:
case 3457:
case 1496:
case 1626:
case 2089:
case 1053:
case 415:
case 3882:
case 55:
case 2871:
case 3887:
case 2943:
case 558:
case 967:
case 2083:
case 500:
case 3440:
case 3452:
case 2850:
case 3989:
case 1109:
case 3868:
case 3049:
case 2793:
case 2010:
case 1332:
case 1917:
case 1442:
case 1865:
case 4080:
case 180:
case 240:
case 1310:
case 3773:
case 2359:
case 576:
case 3312:
case 111:
case 720:
case 472:
case 4019:
case 2353:
case 561:
case 251:
case 4065:
case 2037:
case 1674:
case 1930:
case 476:
case 3432:
case 3342:
case 35:
case 3350:
case 1091:
case 4043:
case 2368:
case 300:
case 902:
case 1039:
case 9:
case 1708:
case 3126:
case 423:
case 315:
case 2387:
case 1430:
case 3371:
case 2328:
case 1352:
case 1781:
case 3603:
case 3166:
case 1598:
case 637:
case 2830:
case 513:
case 523:
case 3609:
case 2751:
case 325:
case 1594:
case 1357:
case 2364:
case 413:
case 1033:
case 2770:
case 1076:
case 1704:
case 3437:
case 2161:
case 2919:
case 1971:
case 3940:
case 3952:
case 2107:
case 3500:
case 1792:
case 2121:
case 1024:
case 3853:
case 1950:
case 3790:
case 1502:
case 2052:
case 1507:
case 1028:
case 3174:
case 1746:
case 2040:
case 1087:
case 1412:
case 1947:
case 2980:
case 3859:
case 2221:
case 1561:
case 2812:
case 3483:
case 372:
case 3019:
case 2575:
case 2102:
case 2391:
case 2207:
case 2449:
case 2339:
case 376:
case 3065:
case 1521:
case 856:
case 617:
case 544:
case 533:
case 2224:
case 1564:
case 3637:
case 3580:
case 335:
case 2282:
case 3409:
case 1978:
case 1524:
case 2557:
case 1582:
case 134:
case 753:
case 3147:
case 8:
case 3250:
case 2900:
case 1007:
case 1528:
case 2540:
case 1587:
case 2268:
case 3519:
case 978:
case 2398:
case 433:
case 444:
case 97:
case 802:
case 1061:
case 2182:
case 3271:
case 2228:
case 3196:
case 1157:
case 277:
case 3565:
case 2124:
case 806:
case 1021:
case 627:
case 591:
case 350:
case 1375:
case 870:
case 2754:
case 394:
case 1926:
case 1788:
case 1727:
case 1539:
case 1612:
case 2176:
case 2291:
case 3095:
case 2239:
case 1767:
case 2133:
case 2361:
case 3683:
case 1098:
case 2139:
case 2745:
case 1094:
case 2276:
case 2302:
case 2191:
case 204:
case 1617:
case 29:
case 2758:
case 997:
case 1784:
case 3374:
case 435:
case 18:
case 4000:
case 2665:
case 1642:
case 1650:
case 24:
case 2532:
case 248:
case 755:
case 1303:
case 3640:
case 1671:
case 2495:
case 718:
case 2763:
case 3898:
case 1132:
case 1237:
case 2826:
case 333:
case 2769:
case 1696:
case 2613:
case 535:
case 1426:
case 145:
case 2680:
case 1647:
case 285:
case 1474:
case 3217:
case 2400:
case 131:
case 1289:
case 1800:
case 2253:
case 3903:
case 494:
case 2159:
case 1183:
case 408:
case 450:
case 2009:
case 2738:
case 479:
case 2583:
case 1559:
case 550:
case 50:
case 579:
case 3549:
case 1189:
case 1283:
case 2878:
case 3821:
case 2510:
case 116:
case 3835:
case 449:
case 4063:
case 1320:
case 2286:
case 1838:
case 462:
case 782:
case 99:
case 4023:
case 1360:
case 112:
case 3322:
case 786:
case 3146:
case 2700:
case 2355:
case 1006:
case 1385:
case 307:
case 3775:
case 122:
case 3327:
case 4029:
case 471:
case 1778:
case 2434:
case 2344:
case 3297:
case 1256:
case 2186:
case 630:
case 126:
case 3367:
case 2795:
case 1044:
case 3104:
case 1984:
case 1205:
case 977:
case 1863:
case 3960:
case 3208:
case 1922:
case 2505:
case 27:
case 2085:
case 3281:
case 2277:
case 3814:
case 62:
case 2693:
case 1823:
case 628:
case 3920:
case 1829:
case 2060:
case 618:
case 61:
case 1967:
case 1815:
case 2415:
case 3570:
case 1541:
case 175:
case 1055:
case 2272:
case 399:
case 2429:
case 3818:
case 2177:
case 1988:
case 4034:
case 3108:
case 1726:
case 1869:
case 1048:
case 3985:
case 1572:
case 3204:
case 2469:
case 374:
case 854:
case 3045:
case 3844:
case 362:
case 507:
case 2801:
case 1401:
case 3063:
case 2536:
case 2867:
case 1646:
case 1854:
case 1488:
case 1273:
case 366:
case 1427:
case 2827:
case 2111:
case 1236:
case 3656:
case 1697:
case 3485:
case 2454:
case 2969:
case 3023:
case 3029:
case 1692:
case 2963:
case 371:
case 1484:
case 1858:
case 3015:
case 2211:
case 1136:
case 2458:
case 1279:
case 2884:
case 3855:
case 1018:
case 3460:
case 3690:
case 2445:
case 2862:
case 2923:
case 3848:
case 985:
case 1035:
case 3038:
case 3709:
case 599:
case 3531:
case 2934:
case 653:
case 3599:
case 3806:
case 2938:
case 187:
case 4045:
case 948:
case 3703:
case 94:
case 717:
case 3034:
case 3216:
case 2645:
case 3490:
case 2311:
case 1916:
case 1379:
case 1662:
case 2993:
case 3538:
case 2235:
case 1684:
case 603:
case 3099:
case 2743:
case 1622:
case 2658:
case 346:
case 4070:
case 3093:
case 1627:
case 2897:
case 860:
case 2654:
case 3710:
case 2135:
case 4051:
case 342:
case 1373:
case 940:
case 1336:
case 2931:
case 1601:
case 369:
case 3877:
case 96:
case 968:
case 557:
case 1730:
case 496:
case 2036:
case 2214:
case 848:
case 2808:
case 1514:
case 801:
case 684:
case 3515:
case 596:
case 1404:
case 737:
case 2804:
case 3973:
case 3569:
case 592:
case 2451:
case 2114:
case 1851:
case 1285:
case 546:
case 3184:
case 2155:
case 3346:
case 2970:
case 3288:
case 2244:
case 3201:
case 2951:
case 542:
case 3397:
case 129:
case 3554:
case 2148:
case 1120:
case 136:
case 3162:
case 3267:
case 3558:
case 3262:
case 3167:
case 2560:
case 1220:
case 3392:
case 1555:
case 446:
case 3070:
case 4093:
case 2520:
case 605:
case 1260:
case 3188:
case 1908:
case 3222:
case 681:
case 1390:
case 804:
case 89:
case 2255:
case 883:
case 2713:
case 1796:
case 3757:
case 2090:
case 3956:
case 2206:
case 392:
case 1831:
case 2499:
case 1086:
case 1506:
case 2629:
case 2615:
case 1899:
case 2341:
case 1946:
case 1893:
case 877:
case 3990:
case 1416:
case 2623:
case 1742:
case 2056:
case 357:
case 3308:
case 2493:
case 2663:
case 2106:
case 3381:
case 1771:
case 2:
case 202:
case 638:
case 975:
case 2978:
case 3165:
case 3921:
case 183:
case 234:
case 692:
case 1168:
case 2002:
case 3125:
case 3961:
case 3119:
case 2152:
case 3907:
case 1187:
case 2140:
case 3547:
case 3542:
case 1228:
case 2252:
case 2157:
case 1182:
case 2240:
case 3113:
case 3219:
case 1124:
case 1268:
case 1540:
case 3571:
case 2630:
case 2528:
case 2007:
case 3803:
case 764:
case 3180:
case 2061:
case 1398:
case 1164:
case 3744:
case 295:
case 922:
case 2612:
case 2098:
case 2966:
case 832:
case 1361:
case 2767:
case 829:
case 2375:
case 3994:
case 926:
case 2727:
case 2539:
case 1649:
case 2788:
case 2926:
case 1321:
case 3066:
case 2533:
case 503:
case 305:
case 1995:
case 3755:
case 3300:
case 2762:
case 1139:
case 3653:
case 19:
case 2617:
case 1302:
case 310:
case 1745:
case 1276:
case 2094:
case 2895:
case 53:
case 1619:
case 1625:
case 2303:
case 2232:
case 3530:
case 3687:
case 725:
case 1665:
case 148:
case 3714:
case 3668:
case 2650:
case 2642:
case 1866:
case 2647:
case 1715:
case 973:
case 3664:
case 2466:
case 2696:
case 3682:
case 1826:
case 1769:
case 2132:
case 2237:
case 3624:
case 2426:
case 384:
case 3402:
case 2110:
case 581:
case 3517:
case 505:
case 1589:
case 3149:
case 231:
case 1400:
case 3676:
case 776:
case 1159:
case 2800:
case 510:
case 1253:
case 2478:
case 1153:
case 3875:
case 3639:
case 1510:
case 160:
case 4066:
case 761:
case 481:
case 1878:
case 3143:
case 410:
case 3249:
case 1583:
case 2559:
case 646:
case 1734:
case 3407:
case 3017:
case 353:
case 873:
case 3694:
case 3482:
case 1413:
case 428:
case 1896:
case 42:
case 1509:
case 3424:
case 2337:
case 1480:
case 1847:
case 2103:
case 3464:
case 51:
case 1799:
case 52:
case 1793:
case 455:
case 2109:
case 528:
case 2203:
case 2450:
case 2332:
case 3468:
case 1010:
case 2716:
case 168:
case 735:
case 1503:
case 1425:
case 41:
case 3840:
case 418:
case 2819:
case 2471:
case 2825:
case 1359:
case 211:
case 666:
case 649:
case 4047:
case 3621:
case 1032:
case 741:
case 662:
case 3491:
case 2310:
case 750:
case 3476:
case 4042:
case 4050:
case 3343:
case 3433:
case 779:
case 671:
case 4071:
case 2389:
case 2781:
case 328:
case 1328:
case 1387:
case 1830:
case 3319:
case 4017:
case 2598:
case 3325:
case 453:
case 1194:
case 2091:
case 3832:
case 3365:
case 2039:
case 2708:
case 674:
case 2033:
case 3566:
case 1364:
case 224:
case 2704:
case 3380:
case 1770:
case 2076:
case 3195:
case 3313:
case 3939:
case 318:
case 3991:
case 190:
case 31:
case 263:
case 154:
case 1817:
case 2082:
case 2502:
case 3096:
case 2950:
case 3200:
case 2417:
case 1443:
case 1919:
case 1925:
case 812:
case 1161:
case 3786:
case 3047:
case 2792:
case 1107:
case 2843:
case 3987:
case 1376:
case 1207:
case 2849:
case 2068:
case 3982:
case 932:
case 2797:
case 3050:
case 2521:
case 3924:
case 822:
case 1913:
case 3810:
case 3100:
case 1980:
case 2412:
case 2087:
case 1040:
case 3071:
case 2275:
case 2028:
case 607:
case 1812:
case 2561:
case 3459:
case 1221:
case 3964:
case 3486:
case 707:
case 2492:
case 3134:
case 4008:
case 1743:
case 2622:
case 1892:
case 2379:
case 2667:
case 1846:
case 1999:
case 3759:
case 2712:
case 2601:
case 980:
case 1931:
case 1897:
case 3138:
case 2627:
case 2688:
case 893:
case 3234:
case 386:
case 1135:
case 1654:
case 2497:
case 4092:
case 888:
case 3805:
case 2408:
case 691:
case 3393:
case 527:
case 88:
case 3911:
case 1808:
case 3169:
case 3263:
case 1073:
case 1881:
case 417:
case 3129:
case 3477:
case 1114:
case 3215:
case 3472:
case 1451:
case 3123:
case 965:
case 1079:
case 4046:
case 3269:
case 3606:
case 845:
case 3441:
case 3331:
case 633:
case 2870:
case 2518:
case 3972:
case 229:
case 771:
case 1951:
case 2356:
case 1244:
case 3145:
case 170:
case 3588:
case 3739:
case 2544:
case 3501:
case 1155:
case 2077:
case 2285:
case 3081:
case 2904:
case 650:
case 586:
case 2160:
case 232:
case 60:
case 3258:
case 482:
case 3562:
case 2548:
case 1520:
case 1638:
case 749:
case 2072:
case 3154:
case 3635:
case 1248:
case 486:
case 4016:
case 766:
case 3522:
case 1144:
case 3245:
case 219:
case 963:
case 2831:
case 2946:
case 2899:
case 1341:
case 1431:
case 1615:
case 1629:
case 1780:
case 2747:
case 2086:
case 924:
case 3724:
case 317:
case 2997:
case 843:
case 834:
case 1090:
case 3728:
case 3787:
case 2771:
case 2992:
case 327:
case 1663:
case 1106:
case 1725:
case 102:
case 2750:
case 1056:
case 3097:
case 1623:
case 3768:
case 3614:
case 106:
case 1816:
case 1765:
case 3358:
case 212:
case 746:
case 3592:
case 2774:
case 2320:
case 1438:
case 216:
case 742:
case 1590:
case 3611:
case 3435:
case 3345:
case 769:
case 1286:
case 2838:
case 197:
case 2156:
case 239:
case 1186:
case 676:
case 1434:
case 3546:
case 152:
case 3761:
case 1556:
case 3597:
case 3354:
case 2385:
case 2778:
case 156:
case 3414:
case 1945:
case 1172:
case 1423:
case 2823:
case 3948:
case 615:
case 3508:
case 3955:
case 3001:
case 2577:
case 109:
case 1141:
case 1795:
case 2044:
case 2922:
case 3798:
case 3794:
case 3270:
case 1241:
case 2572:
case 1954:
case 3022:
case 934:
case 943:
case 1060:
case 3418:
case 1177:
case 2055:
case 3084:
case 1631:
case 3944:
case 275:
case 2179:
case 2427:
case 2273:
case 1969:
case 2697:
case 1827:
case 1801:
case 2646:
case 3334:
case 1915:
case 1923:
case 1445:
case 2462:
case 3338:
case 3860:
case 1963:
case 2018:
case 2279:
case 3641:
case 1670:
case 3315:
case 4027:
case 757:
case 865:
case 2604:
case 3406:
case 1318:
case 664:
case 3369:
case 273:
case 1651:
case 2035:
case 3231:
case 623:
case 3193:
case 4001:
case 3293:
case 796:
case 3131:
case 988:
case 2681:
case 3677:
case 98:
case 2608:
case 792:
case 287:
case 1938:
case 147:
case 4022:
case 3935:
case 1567:
case 2473:
case 2122:
case 2227:
case 1254:
case 1501:
case 2184:
case 976:
case 3634:
case 1941:
case 3970:
case 695:
case 1739:
case 2162:
case 80:
case 370:
case 1145:
case 3244:
case 894:
case 808:
case 2201:
case 3005:
case 3585:
case 1972:
case 2392:
case 2101:
case 1004:
case 3386:
case 2070:
case 841:
case 1522:
case 2167:
case 3560:
case 1635:
case 1154:
case 2051:
case 2284:
case 2905:
case 3520:
case 3638:
case 2811:
case 2479:
case 2127:
case 2757:
case 3090:
case 117:
case 2956:
case 3372:
case 3669:
case 296:
case 3713:
case 3780:
case 1092:
case 3629:
case 3615:
case 3341:
case 3431:
case 292:
case 3499:
case 925:
case 643:
case 467:
case 787:
case 2990:
case 1614:
case 3623:
case 567:
case 900:
case 3725:
case 127:
case 3106:
case 773:
case 2381:
case 2740:
case 1787:
case 1046:
case 2752:
case 726:
case 631:
case 1753:
case 1648:
case 2789:
case 739:
case 3645:
case 2490:
case 3311:
case 4005:
case 2660:
case 3892:
case 2099:
case 1134:
case 2685:
case 3654:
case 2456:
case 2710:
case 1234:
case 3749:
case 2093:
case 3897:
case 1856:
case 570:
case 2783:
case 1759:
case 3846:
case 3999:
case 716:
case 891:
case 688:
case 1129:
case 506:
case 3881:
case 2877:
case 3118:
case 913:
case 1263:
case 2732:
case 775:
case 2316:
case 2979:
case 5:
case 964:
case 3804:
case 1399:
case 2973:
case 2737:
case 2872:
case 3451:
case 833:
case 3929:
case 556:
case 249:
case 2063:
case 3536:
case 2844:
case 262:
case 189:
case 1918:
case 3827:
case 3111:
case 2656:
case 2485:
case 3454:
case 552:
case 719:
case 1885:
case 611:
case 3458:
case 621:
case 3884:
case 2855:
case 1686:
case 271:
case 729:
case 1455:
case 3822:
case 3211:
case 456:
case 1448:
case 1338:
case 732:
case 2690:
case 1820:
case 2069:
case 2848:
case 665:
case 2709:
case 1299:
case 1193:
case 2116:
case 864:
case 1231:
case 1369:
case 478:
case 47:
case 2806:
case 944:
case 4085:
case 1329:
case 3670:
case 1641:
case 3934:
case 823:
case 1935:
case 2593:
case 1131:
case 1293:
case 57:
case 578:
case 3286:
case 1435:
case 3590:
case 1702:
case 1611:
case 2362:
case 941:
case 1592:
case 2322:
case 356:
case 2327:
case 876:
case 207:
case 2246:
case 1761:
case 872:
case 994:
case 2367:
case 1546:
case 1906:
case 3186:
case 2960:
case 3958:
case 614:
case 1170:
case 815:
case 2104:
case 1955:
case 1088:
case 1948:
case 3505:
case 37:
case 3085:
case 2281:
case 800:
case 2054:
case 85:
case 3945:
case 3415:
case 3306:
case 1084:
case 1251:
case 3272:
case 1504:
case 2818:
case 447:
case 1418:
case 2058:
case 3699:
case 663:
case 825:
case 3954:
case 3469:
case 3241:
case 1062:
case 3723:
case 3532:
case 724:
case 348:
case 1668:
case 1714:
case 1530:
case 1628:
case 2652:
case 763:
case 2898:
case 1498:
case 3619:
case 2894:
case 1624:
case 184:
case 233:
case 244:
case 3769:
case 1682:
case 1494:
case 385:
case 583:
case 3715:
case 3680:
case 301:
case 3729:
case 714:
case 3253:
case 3159:
case 598:
case 3874:
case 1676:
case 2112:
case 3400:
case 1149:
case 2802:
case 3589:
case 971:
case 103:
case 1735:
case 1402:
case 966:
case 869:
case 3734:
case 1407:
case 3583:
case 404:
case 842:
case 1249:
case 498:
case 1143:
case 962:
case 360:
case 1691:
case 3510:
case 2475:
case 2549:
case 1421:
case 846:
case 2637:
case 2000:
case 2580:
case 3282:
case 235:
case 3128:
case 2296:
case 2366:
case 3224:
case 1961:
case 1596:
case 2975:
case 1809:
case 2326:
case 1921:
case 2409:
case 999:
case 501:
case 2525:
case 2242:
case 1180:
case 1803:
case 3900:
case 2250:
case 1571:
case 3540:
case 3268:
case 401:
case 1113:
case 765:
case 2271:
case 857:
case 138:
case 485:
case 2632:
case 13:
case 1542:
case 3649:
case 1994:
case 3754:
case 632:
case 20:
case 294:
case 3133:
case 629:
case 3361:
case 2683:
case 907:
case 636:
case 120:
case 3307:
case 2095:
case 3291:
case 110:
case 3745:
case 3302:
case 3191:
case 304:
case 711:
case 2689:
case 2720:
case 1300:
case 241:
case 2374:
case 105:
case 460:
case 780:
case 181:
case 1998:
case 1066:
case 3298:
case 1832:
case 2432:
case 2342:
case 25:
case 2350:
case 745:
case 1295:
case 200:
case 3194:
case 2603:
case 2166:
case 568:
case 957:
case 1325:
case 3830:
case 1933:
case 2371:
case 128:
case 12:
case 3751:
case 354:
case 4083:
case 390:
case 992:
case 874:
case 2396:
case 1991:
case 1939:
case 1313:
case 675:
case 3324:
case 2266:
case 1195:
case 1741:
case 899:
case 3198:
case 1566:
case 788:
case 1987:
case 3202:
case 1928:
case 2500:
case 261:
case 793:
case 3161:
case 3925:
case 440:
case 3919:
case 3333:
case 2853:
case 1889:
case 1200:
case 2274:
case 1096:
case 3057:
case 2013:
case 2489:
case 3965:
case 540:
case 2025:
case 3221:
case 1459:
case 3052:
case 2174:
case 2859:
case 1100:
case 3339:
case 1810:
case 451:
case 1924:
case 3261:
case 2065:
case 626:
case 731:
case 130:
case 1982:
case 807:
case 2957:
case 554:
case 3799:
case 2043:
case 590:
case 3847:
case 2983:
case 3480:
case 223:
case 2864:
case 3731:
case 1424:
case 3509:
case 3089:
case 3896:
case 1857:
case 3413:
case 2882:
case 2910:
case 1482:
case 1694:
case 2457:
case 153:
case 1017:
case 2824:
case 743:
case 734:
case 1012:
case 2440:
case 2330:
case 490:
case 1852:
case 1840:
case 2887:
case 3943:
case 454:
case 3083:
case 3425:
case 3010:
case 1468:
case 36:
case 213:
case 3850:
case 2868:
case 3793:
case 2675:
case 3032:
case 1621:
case 1349:
case 2891:
case 2937:
case 2312:
case 946:
case 2736:
case 1607:
case 849:
case 1030:
case 2773:
case 4057:
case 1661:
case 3353:
case 1433:
case 1343:
case 3600:
case 1476:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748167202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,];
var gg_b = "1748163601/";

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
