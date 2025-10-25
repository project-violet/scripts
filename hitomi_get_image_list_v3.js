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
case 1875:
case 3419:
case 457:
case 2838:
case 3615:
case 470:
case 2537:
case 3002:
case 3705:
case 1211:
case 52:
case 3303:
case 875:
case 3909:
case 1488:
case 1970:
case 2102:
case 2194:
case 346:
case 2942:
case 929:
case 2601:
case 1853:
case 1440:
case 625:
case 524:
case 1326:
case 1863:
case 707:
case 2330:
case 345:
case 3771:
case 3:
case 3902:
case 1927:
case 2468:
case 3928:
case 2653:
case 312:
case 3723:
case 3501:
case 1914:
case 74:
case 1801:
case 1174:
case 3142:
case 1245:
case 639:
case 2663:
case 3412:
case 432:
case 1706:
case 2675:
case 3361:
case 1638:
case 587:
case 2479:
case 153:
case 1616:
case 2895:
case 828:
case 3637:
case 1070:
case 2883:
case 569:
case 2343:
case 977:
case 1433:
case 964:
case 852:
case 2533:
case 3360:
case 1687:
case 243:
case 3879:
case 134:
case 3483:
case 3350:
case 2476:
case 3699:
case 1308:
case 1274:
case 3242:
case 3770:
case 500:
case 3557:
case 2504:
case 3640:
case 3858:
case 2812:
case 3006:
case 2644:
case 3868:
case 3567:
case 1867:
case 1971:
case 1794:
case 3692:
case 3604:
case 3727:
case 4047:
case 2540:
case 285:
case 1923:
case 2600:
case 3872:
case 3191:
case 1572:
case 1384:
case 2331:
case 3906:
case 615:
case 4031:
case 268:
case 3438:
case 1210:
case 2294:
case 2347:
case 2599:
case 3416:
case 34:
case 712:
case 62:
case 889:
case 7:
case 2630:
case 2525:
case 2078:
case 1035:
case 3634:
case 87:
case 3422:
case 1407:
case 783:
case 1989:
case 1395:
case 2962:
case 1450:
case 1383:
case 526:
case 3713:
case 593:
case 1843:
case 311:
case 1460:
case 3178:
case 3266:
case 1785:
case 1793:
case 2448:
case 3661:
case 1739:
case 1338:
case 3337:
case 988:
case 1255:
case 3152:
case 3786:
case 291:
case 3651:
case 578:
case 1273:
case 2765:
case 3484:
case 3341:
case 2062:
case 2959:
case 1221:
case 2353:
case 2480:
case 3036:
case 1098:
case 1017:
case 966:
case 669:
case 2363:
case 1024:
case 3881:
case 2755:
case 3429:
case 462:
case 3426:
case 2218:
case 1165:
case 1434:
case 135:
case 2236:
case 2966:
case 16:
case 1580:
case 3880:
case 1155:
case 2139:
case 3660:
case 2664:
case 1173:
case 3607:
case 1913:
case 3848:
case 1319:
case 3985:
case 3547:
case 3717:
case 2720:
case 3650:
case 1121:
case 3993:
case 1608:
case 380:
case 3333:
case 2066:
case 3939:
case 238:
case 3564:
case 722:
case 1854:
case 3032:
case 3554:
case 1461:
case 284:
case 1986:
case 3735:
case 2777:
case 61:
case 3304:
case 2357:
case 3166:
case 1277:
case 1425:
case 3085:
case 28:
case 3782:
case 2631:
case 3093:
case 515:
case 2367:
case 1885:
case 1621:
case 3585:
case 1893:
case 925:
case 3593:
case 1122:
case 1513:
case 3813:
case 114:
case 1948:
case 3107:
case 773:
case 3477:
case 3225:
case 88:
case 141:
case 629:
case 2435:
case 993:
case 1478:
case 1345:
case 926:
case 3160:
case 1655:
case 3532:
case 2007:
case 1980:
case 838:
case 1459:
case 2050:
case 3931:
case 708:
case 2482:
case 1469:
case 2632:
case 2855:
case 650:
case 1730:
case 100:
case 1184:
case 3656:
case 3391:
case 3666:
case 2865:
case 2950:
case 2685:
case 66:
case 636:
case 2907:
case 1080:
case 3886:
case 1586:
case 3234:
case 2498:
case 2960:
case 534:
case 3539:
case 635:
case 2424:
case 3536:
case 2951:
case 1517:
case 3898:
case 1677:
case 3030:
case 370:
case 4094:
case 4002:
case 1229:
case 3824:
case 1897:
case 361:
case 3597:
case 2034:
case 3889:
case 2562:
case 2961:
case 2486:
case 3473:
case 1284:
case 1731:
case 3390:
case 3659:
case 2247:
case 3455:
case 2394:
case 817:
case 762:
case 1466:
case 1981:
case 2264:
case 2569:
case 4:
case 27:
case 1582:
case 916:
case 1208:
case 2559:
case 3342:
case 1374:
case 1222:
case 4009:
case 1456:
case 3207:
case 2636:
case 2903:
case 1620:
case 731:
case 2877:
case 2025:
case 483:
case 274:
case 1535:
case 2618:
case 2697:
case 3652:
case 1764:
case 801:
case 3662:
case 12:
case 3161:
case 529:
case 3410:
case 1238:
case 2275:
case 1763:
case 116:
case 2591:
case 115:
case 3140:
case 2811:
case 2904:
case 2992:
case 1321:
case 885:
case 3199:
case 480:
case 398:
case 3805:
case 1505:
case 2263:
case 2933:
case 1449:
case 2606:
case 1187:
case 886:
case 2339:
case 1072:
case 2201:
case 1068:
case 2385:
case 2795:
case 3646:
case 2092:
case 2004:
case 564:
case 1058:
case 3133:
case 3000:
case 665:
case 1283:
case 2332:
case 1442:
case 1295:
case 3215:
case 2470:
case 2100:
case 2033:
case 3944:
case 1972:
case 1701:
case 1523:
case 3192:
case 2157:
case 56:
case 4085:
case 536:
case 843:
case 1611:
case 2423:
case 1767:
case 3768:
case 3233:
case 3690:
case 2874:
case 3758:
case 3359:
case 2101:
case 653:
case 2542:
case 1570:
case 2941:
case 1757:
case 139:
case 1809:
case 2257:
case 3292:
case 3445:
case 3378:
case 444:
case 331:
case 178:
case 3115:
case 3001:
case 411:
case 497:
case 2405:
case 2336:
case 2244:
case 125:
case 1446:
case 770:
case 237:
case 2397:
case 3352:
case 3137:
case 1116:
case 1976:
case 941:
case 3196:
case 2175:
case 3053:
case 126:
case 2915:
case 1491:
case 2163:
case 276:
case 91:
case 2590:
case 275:
case 3528:
case 3075:
case 1674:
case 3814:
case 407:
case 3299:
case 1219:
case 2037:
case 3594:
case 2810:
case 4036:
case 927:
case 1468:
case 3910:
case 3467:
case 2174:
case 2801:
case 1653:
case 2404:
case 1206:
case 1663:
case 3400:
case 878:
case 709:
case 2706:
case 3815:
case 1479:
case 652:
case 1895:
case 1883:
case 628:
case 803:
case 3223:
case 1109:
case 348:
case 551:
case 1090:
case 3538:
case 1596:
case 567:
case 1838:
case 675:
case 1816:
case 2695:
case 3837:
case 1537:
case 4026:
case 938:
case 2027:
case 3676:
case 2499:
case 2211:
case 799:
case 2110:
case 3127:
case 57:
case 2970:
case 1102:
case 1194:
case 192:
case 825:
case 2853:
case 1601:
case 1128:
case 2440:
case 1330:
case 2863:
case 1472:
case 3463:
case 2794:
case 2702:
case 49:
case 2971:
case 3840:
case 355:
case 2329:
case 1600:
case 2441:
case 3380:
case 1667:
case 1091:
case 3587:
case 3888:
case 1588:
case 4084:
case 3011:
case 2210:
case 3227:
case 2496:
case 1819:
case 3348:
case 1294:
case 3519:
case 815:
case 1599:
case 1347:
case 2437:
case 330:
case 3833:
case 1106:
case 1946:
case 288:
case 2905:
case 2415:
case 143:
case 3270:
case 234:
case 991:
case 2322:
case 2709:
case 2308:
case 3892:
case 1504:
case 265:
case 3123:
case 1991:
case 1812:
case 3672:
case 1644:
case 2800:
case 23:
case 75:
case 2338:
case 2739:
case 763:
case 140:
case 2316:
case 3189:
case 1197:
case 1643:
case 2935:
case 1773:
case 3124:
case 191:
case 399:
case 1721:
case 1503:
case 3977:
case 1136:
case 3117:
case 2089:
case 1765:
case 2273:
case 3431:
case 887:
case 1480:
case 869:
case 2017:
case 1239:
case 2098:
case 2982:
case 2830:
case 1363:
case 1826:
case 2581:
case 4038:
case 2024:
case 1534:
case 552:
case 576:
case 985:
case 3766:
case 986:
case 4083:
case 689:
case 2626:
case 1525:
case 3681:
case 3825:
case 674:
case 101:
case 667:
case 482:
case 333:
case 2407:
case 537:
case 2383:
case 1232:
case 2450:
case 1962:
case 2843:
case 748:
case 1551:
case 2917:
case 2998:
case 2785:
case 2177:
case 3464:
case 2082:
case 219:
case 2793:
case 3282:
case 3778:
case 3807:
case 354:
case 3648:
case 1822:
case 371:
case 3522:
case 3113:
case 1550:
case 179:
case 1056:
case 3965:
case 814:
case 1357:
case 2312:
case 992:
case 3358:
case 890:
case 1631:
case 18:
case 3955:
case 2013:
case 1132:
case 755:
case 127:
case 3372:
case 1236:
case 1884:
case 26:
case 756:
case 3289:
case 2086:
case 2155:
case 2387:
case 1664:
case 2403:
case 406:
case 2913:
case 1654:
case 3186:
case 277:
case 730:
case 3055:
case 2173:
case 2548:
case 2622:
case 3752:
case 518:
case 2736:
case 1720:
case 2608:
case 2121:
case 3555:
case 455:
case 1131:
case 2184:
case 864:
case 877:
case 456:
case 1821:
case 3703:
case 3521:
case 2462:
case 310:
case 835:
case 1693:
case 1147:
case 2080:
case 1907:
case 3922:
case 706:
case 394:
case 430:
case 3305:
case 705:
case 3436:
case 3281:
case 2226:
case 3029:
case 3497:
case 1960:
case 543:
case 2839:
case 1424:
case 2621:
case 2885:
case 3751:
case 2108:
case 30:
case 568:
case 2893:
case 214:
case 2513:
case 2122:
case 2673:
case 2948:
case 241:
case 2478:
case 1639:
case 2980:
case 1007:
case 2459:
case 796:
case 3022:
case 21:
case 1050:
case 3984:
case 679:
case 1556:
case 3929:
case 975:
case 1482:
case 3371:
case 586:
case 1243:
case 795:
case 2981:
case 2466:
case 592:
case 3869:
case 1569:
case 2582:
case 3926:
case 3859:
case 2374:
case 2208:
case 1559:
case 3432:
case 224:
case 3370:
case 2222:
case 782:
case 189:
case 3698:
case 1708:
case 3577:
case 167:
case 1025:
case 1578:
case 3878:
case 1697:
case 1722:
case 151:
case 381:
case 2535:
case 174:
case 3689:
case 448:
case 3760:
case 1413:
case 2747:
case 1951:
case 269:
case 2598:
case 4010:
case 3026:
case 287:
case 463:
case 1552:
case 1034:
case 502:
case 3852:
case 2897:
case 2589:
case 1961:
case 1925:
case 1130:
case 1003:
case 2126:
case 320:
case 1729:
case 3314:
case 1302:
case 640:
case 1201:
case 1999:
case 1393:
case 3313:
case 3919:
case 460:
case 1988:
case 3409:
case 1795:
case 3605:
case 1092:
case 2058:
case 3715:
case 3987:
case 2283:
case 1167:
case 2295:
case 242:
case 643:
case 323:
case 396:
case 3168:
case 1470:
case 2523:
case 2972:
case 1157:
case 1414:
case 79:
case 3019:
case 2216:
case 1427:
case 3402:
case 216:
case 1275:
case 1144:
case 1591:
case 3912:
case 3087:
case 58:
case 1088:
case 3511:
case 1811:
case 3741:
case 306:
case 1253:
case 538:
case 686:
case 967:
case 3386:
case 951:
case 2373:
case 1716:
case 3846:
case 747:
case 2505:
case 1606:
case 2449:
case 1933:
case 3796:
case 1339:
case 685:
case 2645:
case 1244:
case 3272:
case 3398:
case 3317:
case 1609:
case 225:
case 137:
case 3324:
case 1719:
case 3849:
case 1549:
case 3995:
case 1041:
case 499:
case 2138:
case 1915:
case 1175:
case 293:
case 2491:
case 176:
case 1163:
case 2674:
case 3890:
case 1590:
case 2514:
case 3038:
case 2744:
case 2802:
case 2894:
case 1037:
case 3016:
case 4020:
case 3510:
case 2527:
case 1810:
case 720:
case 2767:
case 853:
case 3382:
case 3574:
case 152:
case 1712:
case 1101:
case 3095:
case 2570:
case 1694:
case 1602:
case 2610:
case 2076:
case 3279:
case 1200:
case 781:
case 3258:
case 433:
case 3406:
case 759:
case 3335:
case 3916:
case 278:
case 1267:
case 2195:
case 591:
case 313:
case 1996:
case 2965:
case 1392:
case 1304:
case 1166:
case 3629:
case 2358:
case 3425:
case 4079:
case 3684:
case 1093:
case 1782:
case 2680:
case 2955:
case 73:
case 2860:
case 1333:
case 788:
case 2443:
case 3864:
case 1564:
case 804:
case 2379:
case 2778:
case 1554:
case 2522:
case 2113:
case 2648:
case 2850:
case 260:
case 1259:
case 598:
case 983:
case 3387:
case 1789:
case 1388:
case 3403:
case 3173:
case 3913:
case 1724:
case 3319:
case 3622:
case 1848:
case 1798:
case 1399:
case 3736:
case 3847:
case 3608:
case 180:
case 1426:
case 2430:
case 894:
case 1252:
case 2224:
case 3434:
case 3220:
case 810:
case 2298:
case 1039:
case 2372:
case 2021:
case 336:
case 3831:
case 1531:
case 3580:
case 1880:
case 3273:
case 2431:
case 1341:
case 3017:
case 3098:
case 2526:
case 3982:
case 1530:
case 1881:
case 1625:
case 661:
case 2834:
case 1097:
case 657:
case 1018:
case 531:
case 1396:
case 958:
case 3316:
case 425:
case 1337:
case 3255:
case 2189:
case 426:
case 493:
case 2124:
case 3265:
case 1786:
case 3935:
case 2803:
case 299:
case 2198:
case 2117:
case 3120:
case 2861:
case 1256:
case 632:
case 3407:
case 233:
case 3395:
case 3450:
case 439:
case 3383:
case 2135:
case 111:
case 1713:
case 3924:
case 1997:
case 3460:
case 1178:
case 3177:
case 3917:
case 1603:
case 3998:
case 1936:
case 2464:
case 881:
case 14:
case 209:
case 4076:
case 2825:
case 403:
case 3035:
case 562:
case 1906:
case 944:
case 4080:
case 2945:
case 1146:
case 997:
case 2679:
case 750:
case 1438:
case 911:
case 2227:
case 2519:
case 2475:
case 2749:
case 549:
case 2899:
case 2214:
case 764:
case 1290:
case 230:
case 777:
case 1416:
case 3971:
case 94:
case 2463:
case 3794:
case 3702:
case 1727:
case 255:
case 3612:
case 3728:
case 3329:
case 1191:
case 1872:
case 3844:
case 1714:
case 3923:
case 806:
case 1544:
case 3441:
case 2668:
case 256:
case 2380:
case 76:
case 736:
case 1770:
case 41:
case 1557:
case 2892:
case 3857:
case 2171:
case 1858:
case 365:
case 2512:
case 1500:
case 2045:
case 3800:
case 1868:
case 366:
case 3568:
case 2401:
case 907:
case 1567:
case 3145:
case 1360:
case 3023:
case 158:
case 490:
case 1688:
case 3071:
case 608:
case 3905:
case 3579:
case 3415:
case 1307:
case 3322:
case 2270:
case 334:
case 1350:
case 561:
case 1361:
case 1696:
case 3616:
case 2595:
case 1876:
case 248:
case 980:
case 1771:
case 1902:
case 1:
case 1501:
case 3914:
case 112:
case 3801:
case 3245:
case 3492:
case 2457:
case 3404:
case 2400:
case 1412:
case 2127:
case 3110:
case 921:
case 146:
case 2974:
case 3853:
case 3863:
case 3326:
case 2444:
case 532:
case 1028:
case 3875:
case 2896:
case 662:
case 487:
case 4081:
case 3014:
case 2538:
case 1002:
case 2516:
case 3695:
case 2746:
case 1705:
case 3499:
case 469:
case 3027:
case 2010:
case 1487:
case 1303:
case 1909:
case 1291:
case 3488:
case 1288:
case 1411:
case 863:
case 1075:
case 162:
case 3744:
case 1814:
case 1901:
case 2038:
case 1299:
case 1594:
case 2016:
case 3219:
case 3802:
case 1141:
case 1827:
case 4017:
case 1063:
case 2324:
case 1240:
case 1352:
case 2995:
case 646:
case 2788:
case 1137:
case 2983:
case 1362:
case 949:
case 3138:
case 1196:
case 1053:
case 511:
case 393:
case 326:
case 3809:
case 1509:
case 3212:
case 1204:
case 1779:
case 2406:
case 1649:
case 131:
case 2176:
case 3183:
case 4082:
case 1115:
case 1975:
case 2733:
case 2938:
case 3767:
case 2382:
case 1963:
case 1359:
case 1758:
case 4035:
case 282:
case 507:
case 3570:
case 2279:
case 2792:
case 2083:
case 3079:
case 429:
case 1474:
case 3442:
case 342:
case 3295:
case 71:
case 622:
case 1215:
case 223:
case 295:
case 1823:
case 3112:
case 3523:
case 3701:
case 2158:
case 108:
case 1871:
case 3571:
case 658:
case 970:
case 2919:
case 580:
case 2409:
case 2012:
case 173:
case 1000:
case 1133:
case 3321:
case 1241:
case 3979:
case 450:
case 1805:
case 1188:
case 464:
case 3187:
case 205:
case 856:
case 700:
case 1237:
case 435:
case 2019:
case 3216:
case 1967:
case 3490:
case 3238:
case 521:
case 2494:
case 316:
case 830:
case 3958:
case 2912:
case 932:
case 2891:
case 1900:
case 315:
case 2623:
case 46:
case 436:
case 2741:
case 2511:
case 2617:
case 3620:
case 259:
case 3754:
case 2707:
case 2624:
case 281:
case 1652:
case 1835:
case 2493:
case 2689:
case 1662:
case 2760:
case 809:
case 1161:
case 1043:
case 611:
case 546:
case 833:
case 2926:
case 1930:
case 1882:
case 3208:
case 3374:
case 545:
case 1250:
case 703:
case 324:
case 1207:
case 512:
case 2181:
case 1669:
case 2682:
case 1465:
case 1659:
case 1390:
case 899:
case 908:
case 2327:
case 2520:
case 1536:
case 369:
case 1898:
case 3747:
case 1817:
case 3677:
case 1103:
case 3081:
case 3524:
case 157:
case 583:
case 3897:
case 1748:
case 161:
case 1518:
case 3589:
case 726:
case 2280:
case 1421:
case 3284:
case 3462:
case 2084:
case 2908:
case 558:
case 3080:
case 2613:
case 1954:
case 2573:
case 1886:
case 3586:
case 2922:
case 1964:
case 1346:
case 1234:
case 522:
case 2281:
case 1420:
case 2436:
case 2497:
case 3226:
case 1539:
case 3839:
case 2555:
case 1781:
case 2734:
case 2180:
case 680:
case 3184:
case 3730:
case 300:
case 29:
case 2565:
case 3311:
case 2725:
case 3655:
case 2022:
case 3459:
case 204:
case 31:
case 742:
case 2008:
case 1931:
case 962:
case 2929:
case 1064:
case 854:
case 466:
case 3621:
case 3885:
case 2751:
case 1585:
case 390:
case 1593:
case 1150:
case 20:
case 3513:
case 3122:
case 4023:
case 3743:
case 1813:
case 3948:
case 1477:
case 149:
case 621:
case 2761:
case 341:
case 434:
case 2660:
case 3139:
case 768:
case 3664:
case 2789:
case 2388:
case 2607:
case 3654:
case 1055:
case 3720:
case 2717:
case 2798:
case 2985:
case 69:
case 948:
case 2993:
case 2252:
case 2340:
case 596:
case 1224:
case 785:
case 523:
case 1529:
case 3829:
case 3966:
case 3344:
case 3481:
case 3236:
case 1217:
case 3884:
case 1584:
case 2531:
case 3956:
case 1289:
case 1073:
case 1235:
case 2392:
case 2304:
case 2166:
case 3300:
case 2085:
case 60:
case 1368:
case 2156:
case 2782:
case 1955:
case 1680:
case 1860:
case 963:
case 2939:
case 1443:
case 2564:
case 338:
case 506:
case 3507:
case 2032:
case 604:
case 1379:
case 1778:
case 1807:
case 2735:
case 154:
case 1973:
case 505:
case 171:
case 379:
case 1850:
case 3647:
case 3777:
case 160:
case 2422:
case 244:
case 2256:
case 1861:
case 2315:
case 1454:
case 2408:
case 1376:
case 2713:
case 297:
case 2543:
case 2918:
case 2936:
case 2603:
case 3551:
case 1920:
case 930:
case 832:
case 1464:
case 24:
case 1213:
case 3293:
case 955:
case 1766:
case 3301:
case 1182:
case 3630:
case 3525:
case 3078:
case 3765:
case 861:
case 1286:
case 3062:
case 476:
case 870:
case 2036:
case 1020:
case 2530:
case 4037:
case 3826:
case 3363:
case 2625:
case 3755:
case 2018:
case 3534:
case 582:
case 2429:
case 3375:
case 620:
case 340:
case 2337:
case 2152:
case 3118:
case 3643:
case 3978:
case 1124:
case 3721:
case 199:
case 1803:
case 1117:
case 1198:
case 3136:
case 59:
case 2640:
case 1892:
case 4050:
case 3991:
case 1512:
case 172:
case 2006:
case 3812:
case 1672:
case 1045:
case 4007:
case 873:
case 2868:
case 4060:
case 1833:
case 2360:
case 3946:
case 258:
case 3354:
case 547:
case 2307:
case 779:
case 2350:
case 999:
case 3476:
case 2483:
case 222:
case 2495:
case 2633:
case 1945:
case 1587:
case 933:
case 3887:
case 1888:
case 50:
case 368:
case 3588:
case 0:
case 2438:
case 1214:
case 3347:
case 1899:
case 2416:
case 130:
case 3228:
case 1463:
case 3046:
case 2249:
case 3540:
case 1840:
case 3710:
case 155:
case 1790:
case 727:
case 385:
case 605:
case 3600:
case 2191:
case 156:
case 909:
case 386:
case 3331:
case 898:
case 1127:
case 3194:
case 246:
case 3711:
case 1114:
case 392:
case 2553:
case 3128:
case 3601:
case 2190:
case 95:
case 3330:
case 1444:
case 3472:
case 1381:
case 3049:
case 245:
case 2419:
case 581:
case 3090:
case 2028:
case 740:
case 3596:
case 163:
case 1538:
case 3838:
case 2615:
case 1896:
case 1746:
case 3816:
case 1516:
case 3537:
case 2094:
case 559:
case 1676:
case 2705:
case 2487:
case 954:
case 862:
case 2291:
case 474:
case 3042:
case 1074:
case 467:
case 3515:
case 1595:
case 3895:
case 2637:
case 1583:
case 1271:
case 2351:
case 1223:
case 47:
case 2902:
case 2771:
case 2641:
case 1910:
case 4051:
case 3990:
case 1467:
case 2142:
case 613:
case 212:
case 2501:
case 701:
case 3206:
case 3663:
case 2325:
case 1400:
case 520:
case 4061:
case 751:
case 812:
case 774:
case 767:
case 1258:
case 2509:
case 2779:
case 2378:
case 2204:
case 1335:
case 2649:
case 994:
case 3267:
case 4069:
case 1733:
case 113:
case 3423:
case 883:
case 99:
case 1382:
case 3471:
case 2233:
case 1574:
case 2690:
case 1842:
case 3874:
case 2758:
case 2359:
case 3628:
case 3712:
case 2953:
case 1614:
case 4078:
case 3015:
case 1095:
case 2870:
case 1704:
case 3941:
case 904:
case 3163:
case 2411:
case 4062:
case 376:
case 1890:
case 375:
case 2299:
case 1670:
case 3037:
case 2594:
case 509:
case 1740:
case 2827:
case 3810:
case 3336:
case 1799:
case 3609:
case 440:
case 533:
case 846:
case 1849:
case 3397:
case 2352:
case 3719:
case 1389:
case 1788:
case 1995:
case 2137:
case 2053:
case 959:
case 656:
case 2241:
case 1386:
case 981:
case 1737:
case 560:
case 3716:
case 3546:
case 3040:
case 2188:
case 571:
case 554:
case 3263:
case 2044:
case 655:
case 1428:
case 1019:
case 2237:
case 3099:
case 630:
case 1402:
case 1891:
case 1172:
case 3144:
case 1912:
case 1087:
case 1671:
case 3088:
case 55:
case 3904:
case 3992:
case 3167:
case 858:
case 123:
case 2215:
case 3470:
case 2356:
case 822:
case 1158:
case 2944:
case 48:
case 2104:
case 2192:
case 3385:
case 3999:
case 3201:
case 1179:
case 2067:
case 4056:
case 2646:
case 1409:
case 1605:
case 318:
case 2057:
case 3092:
case 484:
case 2506:
case 1715:
case 2134:
case 3003:
case 2669:
case 699:
case 1682:
case 3729:
case 3328:
case 2390:
case 2659:
case 995:
case 2455:
case 1248:
case 1327:
case 3820:
case 2898:
case 1520:
case 737:
case 270:
case 2030:
case 257:
case 4090:
case 2518:
case 261:
case 3552:
case 3034:
case 2349:
case 2889:
case 2421:
case 1280:
case 3231:
case 3486:
case 3636:
case 1698:
case 3903:
case 1617:
case 3708:
case 563:
case 2835:
case 3722:
case 402:
case 2652:
case 84:
case 4042:
case 3143:
case 181:
case 1493:
case 905:
case 2161:
case 2043:
case 3264:
case 2125:
case 3934:
case 728:
case 2882:
case 2260:
case 844:
case 1926:
case 37:
case 2342:
case 633:
case 2250:
case 1370:
case 811:
case 3254:
case 752:
case 897:
case 3007:
case 654:
case 1725:
case 671:
case 555:
case 2261:
case 1856:
case 1929:
case 1866:
case 2251:
case 3566:
case 1371:
case 3482:
case 556:
case 2947:
case 65:
case 2585:
case 1751:
case 10:
case 2150:
case 2813:
case 1686:
case 2107:
case 3154:
case 821:
case 530:
case 3164:
case 249:
case 3306:
case 3435:
case 3639:
case 1084:
case 1521:
case 1908:
case 3693:
case 2954:
case 1613:
case 2964:
case 3498:
case 2420:
case 1029:
case 913:
case 3960:
case 2781:
case 1180:
case 1734:
case 3131:
case 2047:
case 4046:
case 2656:
case 982:
case 880:
case 2391:
case 2666:
case 3865:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761397202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,];
var gg_b = "1761397202/";

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
