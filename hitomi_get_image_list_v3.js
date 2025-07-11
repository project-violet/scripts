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
case 2770:
case 3377:
case 3108:
case 2431:
case 3920:
case 177:
case 3310:
case 2717:
case 136:
case 374:
case 446:
case 2287:
case 4067:
case 1891:
case 1894:
case 1347:
case 206:
case 1440:
case 2173:
case 981:
case 3432:
case 1509:
case 3240:
case 2047:
case 3165:
case 338:
case 244:
case 3417:
case 227:
case 471:
case 3470:
case 4031:
case 1027:
case 3659:
case 142:
case 2811:
case 432:
case 2036:
case 3579:
case 1533:
case 3861:
case 1549:
case 339:
case 1400:
case 2297:
case 2932:
case 535:
case 844:
case 1307:
case 623:
case 2050:
case 1195:
case 105:
case 806:
case 1881:
case 370:
case 943:
case 1884:
case 197:
case 2917:
case 1336:
case 2970:
case 3148:
case 3769:
case 1550:
case 710:
case 3182:
case 1111:
case 267:
case 359:
case 2719:
case 468:
case 3379:
case 3855:
case 1536:
case 2527:
case 2181:
case 2033:
case 2184:
case 3419:
case 1507:
case 555:
case 3126:
case 3235:
case 919:
case 2469:
case 1789:
case 156:
case 1989:
case 2560:
case 1799:
case 2009:
case 918:
case 2338:
case 2697:
case 3151:
case 2194:
case 469:
case 3600:
case 2329:
case 2152:
case 1459:
case 3969:
case 3259:
case 3843:
case 714:
case 2765:
case 4073:
case 1485:
case 416:
case 2313:
case 3285:
case 2228:
case 2612:
case 2606:
case 1739:
case 1586:
case 3504:
case 2131:
case 2398:
case 669:
case 1626:
case 2375:
case 1208:
case 1682:
case 2859:
case 3611:
case 3899:
case 463:
case 3170:
case 1098:
case 3566:
case 1955:
case 1140:
case 3045:
case 2664:
case 2167:
case 1265:
case 2473:
case 1013:
case 2502:
case 214:
case 1928:
case 1318:
case 3423:
case 767:
case 1755:
case 353:
case 3005:
case 1223:
case 2908:
case 3889:
case 1088:
case 1393:
case 2203:
case 3068:
case 652:
case 3:
case 1869:
case 2388:
case 3915:
case 668:
case 3448:
case 1703:
case 3544:
case 2093:
case 1574:
case 1651:
case 3295:
case 1946:
case 2096:
case 1706:
case 180:
case 3991:
case 2954:
case 485:
case 2951:
case 2264:
case 4084:
case 2261:
case 1737:
case 1518:
case 423:
case 2074:
case 975:
case 1411:
case 2071:
case 282:
case 735:
case 1820:
case 2643:
case 3214:
case 1226:
case 629:
case 3030:
case 2237:
case 2782:
case 2169:
case 2628:
case 632:
case 691:
case 2481:
case 2484:
case 1761:
case 3119:
case 3897:
case 2588:
case 3695:
case 2655:
case 1254:
case 3304:
case 1251:
case 3887:
case 2022:
case 3451:
case 671:
case 4052:
case 1016:
case 2476:
case 3752:
case 706:
case 2603:
case 2452:
case 1159:
case 3021:
case 3776:
case 3024:
case 2302:
case 926:
case 2316:
case 1292:
case 907:
case 2754:
case 2751:
case 1746:
case 4091:
case 1322:
case 4094:
case 3981:
case 1906:
case 3984:
case 546:
case 4047:
case 800:
case 3747:
case 34:
case 1367:
case 3599:
case 3907:
case 406:
case 504:
case 2183:
case 1777:
case 3936:
case 1710:
case 337:
case 1334:
case 891:
case 121:
case 832:
case 1198:
case 341:
case 2210:
case 528:
case 3387:
case 199:
case 2780:
case 246:
case 178:
case 1040:
case 3145:
case 3260:
case 3032:
case 198:
case 3105:
case 3844:
case 1000:
case 2407:
case 29:
case 682:
case 2980:
case 2535:
case 871:
case 102:
case 2436:
case 785:
case 232:
case 4036:
case 1977:
case 145:
case 500:
case 1057:
case 435:
case 87:
case 325:
case 804:
case 229:
case 2450:
case 4007:
case 723:
case 3490:
case 3660:
case 4033:
case 568:
case 1779:
case 3156:
case 3733:
case 3825:
case 3909:
case 2557:
case 2174:
case 2171:
case 161:
case 2500:
case 1893:
case 3130:
case 467:
case 2449:
case 1035:
case 150:
case 1142:
case 2433:
case 3019:
case 1680:
case 252:
case 763:
case 269:
case 1690:
case 3229:
case 1116:
case 2359:
case 3858:
case 3587:
case 4009:
case 3863:
case 3949:
case 1534:
case 3933:
case 868:
case 569:
case 3343:
case 2483:
case 769:
case 516:
case 2905:
case 2745:
case 1672:
case 31:
case 1085:
case 1245:
case 2644:
case 3065:
case 3213:
case 1160:
case 2641:
case 1576:
case 2838:
case 2385:
case 3918:
case 1413:
case 3328:
case 2953:
case 1594:
case 2015:
case 2263:
case 1475:
case 4083:
case 311:
case 3275:
case 960:
case 3783:
case 2768:
case 4093:
case 1488:
case 3512:
case 3983:
case 1584:
case 1624:
case 2753:
case 1621:
case 3288:
case 3718:
case 3405:
case 4018:
case 2601:
case 667:
case 1205:
case 115:
case 816:
case 2666:
case 1833:
case 2705:
case 1078:
case 2150:
case 2418:
case 2945:
case 3190:
case 768:
case 3453:
case 3616:
case 2493:
case 1963:
case 1725:
case 3561:
case 1253:
case 3468:
case 3303:
case 752:
case 635:
case 3675:
case 3337:
case 523:
case 1836:
case 700:
case 2663:
case 79:
case 2474:
case 3082:
case 1011:
case 1384:
case 1966:
case 3456:
case 2244:
case 585:
case 2133:
case 285:
case 3796:
case 389:
case 2756:
case 1272:
case 1901:
case 732:
case 1850:
case 791:
case 1744:
case 3771:
case 909:
case 1230:
case 4074:
case 482:
case 3430:
case 4071:
case 729:
case 1442:
case 1416:
case 1653:
case 908:
case 1573:
case 1352:
case 3971:
case 728:
case 1701:
case 771:
case 2091:
case 3543:
case 2094:
case 3051:
case 4086:
case 2266:
case 931:
case 3996:
case 2201:
case 1391:
case 947:
case 885:
case 186:
case 2486:
case 3346:
case 3722:
case 193:
case 3688:
case 1224:
case 3092:
case 3528:
case 3421:
case 3877:
case 3424:
case 2930:
case 3484:
case 2341:
case 1412:
case 2072:
case 2344:
case 3481:
case 1406:
case 3857:
case 3628:
case 1356:
case 2685:
case 1505:
case 1714:
case 2426:
case 887:
case 103:
case 770:
case 3169:
case 625:
case 930:
case 3992:
case 3237:
case 2952:
case 533:
case 1615:
case 998:
case 739:
case 233:
case 3643:
case 1330:
case 2482:
case 3071:
case 3342:
case 3074:
case 1762:
case 1372:
case 489:
case 3951:
case 2994:
case 1553:
case 2991:
case 3261:
case 2056:
case 902:
case 1673:
case 2784:
case 2781:
case 3639:
case 1464:
case 4051:
case 2366:
case 921:
case 4054:
case 488:
case 3751:
case 641:
case 3754:
case 2791:
case 1004:
case 3840:
case 1001:
case 3316:
case 1252:
case 1870:
case 3302:
case 999:
case 1962:
case 738:
case 2492:
case 3452:
case 1817:
case 2024:
case 1199:
case 287:
case 3476:
case 676:
case 2752:
case 934:
case 3982:
case 1276:
case 1911:
case 64:
case 70:
case 1914:
case 833:
case 1324:
case 1066:
case 3022:
case 3575:
case 2558:
case 2451:
case 3246:
case 3491:
case 2454:
case 637:
case 2563:
case 1446:
case 758:
case 314:
case 1785:
case 2465:
case 1995:
case 3664:
case 2045:
case 1439:
case 3661:
case 2132:
case 3473:
case 41:
case 1443:
case 3708:
case 2566:
case 3415:
case 2899:
case 117:
case 2611:
case 3083:
case 3134:
case 2662:
case 3398:
case 2715:
case 2363:
case 657:
case 2285:
case 2773:
case 1681:
case 3606:
case 1187:
case 3923:
case 1524:
case 1345:
case 1521:
case 3313:
case 1428:
case 3723:
case 3965:
case 1197:
case 3255:
case 1305:
case 553:
case 3646:
case 950:
case 2448:
case 3388:
case 2544:
case 2325:
case 2053:
case 1556:
case 3835:
case 96:
case 1353:
case 3203:
case 3908:
case 1368:
case 1795:
case 1778:
case 3542:
case 961:
case 1530:
case 862:
case 1631:
case 1137:
case 3049:
case 1269:
case 3687:
case 1112:
case 3878:
case 7:
case 4019:
case 2379:
case 1823:
case 3719:
case 1161:
case 1667:
case 3289:
case 753:
case 1735:
case 355:
case 1590:
case 1489:
case 2969:
case 1620:
case 3299:
case 2843:
case 2259:
case 15:
case 465:
case 3919:
case 2600:
case 1865:
case 3329:
case 611:
case 2510:
case 3338:
case 2657:
case 2154:
case 3885:
case 2577:
case 1146:
case 151:
case 3009:
case 558:
case 859:
case 3529:
case 2470:
case 3115:
case 2417:
case 201:
case 2734:
case 1892:
case 1267:
case 344:
case 1957:
case 590:
case 3047:
case 13:
case 3467:
case 1380:
case 306:
case 894:
case 2432:
case 1851:
case 3732:
case 1854:
case 108:
case 1487:
case 2080:
case 274:
case 20:
case 290:
case 2920:
case 3434:
case 1669:
case 688:
case 3538:
case 131:
case 1231:
case 3770:
case 2377:
case 822:
case 2108:
case 172:
case 689:
case 1826:
case 3862:
case 2720:
case 1497:
case 2806:
case 1700:
case 3932:
case 2257:
case 539:
case 3297:
case 1940:
case 2967:
case 3050:
case 1155:
case 120:
case 874:
case 733:
case 594:
case 340:
case 2200:
case 2123:
case 2579:
case 3811:
case 1882:
case 3036:
case 3924:
case 725:
case 796:
case 3311:
case 1382:
case 2771:
case 694:
case 143:
case 2242:
case 1683:
case 1037:
case 1890:
case 2986:
case 4056:
case 783:
case 3756:
case 2796:
case 1179:
case 2613:
case 589:
case 1064:
case 1444:
case 2312:
case 1296:
case 622:
case 1548:
case 3663:
case 3595:
case 2555:
case 3471:
case 2082:
case 1742:
case 1326:
case 3658:
case 2698:
case 1271:
case 3730:
case 1274:
case 2528:
case 2092:
case 3930:
case 2424:
case 1716:
case 2877:
case 2421:
case 2810:
case 588:
case 1508:
case 2346:
case 1401:
case 3860:
case 1354:
case 1351:
case 3201:
case 1880:
case 3956:
case 3422:
case 1466:
case 2786:
case 2051:
case 2543:
case 2202:
case 60:
case 4024:
case 2216:
case 4021:
case 487:
case 1392:
case 74:
case 3076:
case 3721:
case 776:
case 1177:
case 1674:
case 211:
case 1671:
case 2298:
case 2783:
case 3258:
case 2275:
case 1308:
case 1043:
case 3015:
case 1039:
case 316:
case 3385:
case 3073:
case 3838:
case 3641:
case 2339:
case 21:
case 1028:
case 1592:
case 956:
case 3905:
case 3829:
case 1365:
case 1283:
case 2642:
case 1775:
case 363:
case 511:
case 1988:
case 2561:
case 1788:
case 2468:
case 1998:
case 3493:
case 3511:
case 1582:
case 3418:
case 3150:
case 1055:
case 1323:
case 119:
case 2879:
case 3666:
case 1622:
case 1218:
case 3378:
case 2023:
case 2718:
case 81:
case 3562:
case 1526:
case 4068:
case 3753:
case 1003:
case 3225:
case 3136:
case 3768:
case 2506:
case 2512:
case 1233:
case 352:
case 3279:
case 6:
case 2172:
case 368:
case 2019:
case 1479:
case 2130:
case 3449:
case 1868:
case 3500:
case 1249:
case 1853:
case 113:
case 3069:
case 1089:
case 3171:
case 3174:
case 3610:
case 2909:
case 653:
case 3557:
case 3888:
case 2156:
case 166:
case 2660:
case 1144:
case 2238:
case 711:
case 565:
case 1845:
case 1607:
case 1101:
case 557:
case 2709:
case 2863:
case 2627:
case 1099:
case 2124:
case 2121:
case 1532:
case 71:
case 462:
case 1209:
case 3540:
case 458:
case 1738:
case 1517:
case 2229:
case 257:
case 1570:
case 265:
case 369:
case 3067:
case 3990:
case 346:
case 2950:
case 687:
case 40:
case 54:
case 3447:
case 825:
case 2017:
case 883:
case 1163:
case 2070:
case 237:
case 401:
case 1927:
case 3034:
case 788:
case 3031:
case 2747:
case 24:
case 328:
case 2907:
case 3679:
case 438:
case 148:
case 276:
case 329:
case 225:
case 2490:
case 296:
case 3118:
case 3450:
case 149:
case 1097:
case 2629:
case 2947:
case 1960:
case 1872:
case 1250:
case 332:
case 2168:
case 283:
case 2736:
case 422:
case 3193:
case 1727:
case 3436:
case 837:
case 1236:
case 300:
case 3407:
case 3535:
case 175:
case 470:
case 525:
case 633:
case 596:
case 2841:
case 2667:
case 1379:
case 264:
case 3617:
case 3111:
case 1769:
case 2489:
case 159:
case 413:
case 2269:
case 2959:
case 2848:
case 2631:
case 85:
case 1126:
case 3219:
case 3536:
case 564:
case 1855:
case 466:
case 860:
case 864:
case 251:
case 1577:
case 1151:
case 963:
case 55:
case 618:
case 2759:
case 25:
case 2499:
case 916:
case 1192:
case 1259:
case 3309:
case 1843:
case 3815:
case 158:
case 260:
case 1839:
case 717:
case 3873:
case 1600:
case 3038:
case 190:
case 174:
case 1080:
case 336:
case 2487:
case 2740:
case 3347:
case 2851:
case 3619:
case 68:
case 2231:
case 3852:
case 1734:
case 2077:
case 872:
case 1417:
case 1470:
case 2010:
case 531:
case 2143:
case 224:
case 1432:
case 2380:
case 23:
case 2139:
case 3060:
case 3232:
case 2957:
case 2267:
case 3509:
case 3350:
case 1123:
case 1200:
case 1864:
case 1861:
case 3400:
case 2220:
case 2103:
case 572:
case 3533:
case 122:
case 3336:
case 1720:
case 985:
case 1148:
case 2155:
case 1090:
case 2940:
case 923:
case 3307:
case 2700:
case 1257:
case 1806:
case 1812:
case 83:
case 305:
case 824:
case 194:
case 3457:
case 1482:
case 3411:
case 2330:
case 3518:
case 900:
case 2189:
case 3282:
case 1211:
case 443:
case 720:
case 2615:
case 1781:
case 2464:
case 2461:
case 2673:
case 4012:
case 4006:
case 2553:
case 1991:
case 3593:
case 2372:
case 2044:
case 2356:
case 4064:
case 2281:
case 3396:
case 4061:
case 772:
case 1072:
case 3764:
case 1344:
case 1525:
case 1341:
case 1952:
case 3371:
case 3042:
case 3608:
case 3135:
case 1030:
case 203:
case 649:
case 3462:
case 709:
case 928:
case 2276:
case 3648:
case 1752:
case 3831:
case 1304:
case 2291:
case 3254:
case 1301:
case 3386:
case 792:
case 1563:
case 971:
case 1454:
case 1451:
case 1887:
case 2066:
case 2001:
case 2004:
case 1791:
case 48:
case 3623:
case 1794:
case 3912:
case 1981:
case 3906:
case 1984:
case 3746:
case 3159:
case 2817:
case 724:
case 1776:
case 2199:
case 803:
case 2962:
case 2252:
case 2870:
case 626:
case 1363:
case 1408:
case 3743:
case 3586:
case 1504:
case 4043:
case 1662:
case 517:
case 3485:
case 2524:
case 2681:
case 1773:
case 1285:
case 3265:
case 75:
case 3013:
case 1132:
case 3955:
case 2439:
case 2273:
case 1465:
case 2785:
case 3728:
case 418:
case 2215:
case 760:
case 1611:
case 1117:
case 3075:
case 2058:
case 1566:
case 3692:
case 2572:
case 3088:
case 3318:
case 4055:
case 419:
case 3100:
case 3223:
case 1005:
case 3755:
case 153:
case 2455:
case 3495:
case 3574:
case 2305:
case 3651:
case 2694:
case 2819:
case 3596:
case 1068:
case 2556:
case 952:
case 1053:
case 1325:
case 817:
case 1541:
case 3943:
case 1544:
case 1915:
case 3869:
case 3703:
case 1597:
case 910:
case 2929:
case 2647:
case 1733:
case 266:
case 3779:
case 1019:
case 566:
case 2938:
case 1172:
case 3680:
case 213:
case 2853:
case 3893:
case 3142:
case 1389:
case 3035:
case 718:
case 1399:
case 2532:
case 3429:
case 2570:
case 866:
case 2166:
case 2738:
case 3690:
case 2650:
case 1933:
case 2845:
case 2607:
case 3059:
case 1124:
case 2099:
case 1863:
case 2370:
case 3777:
case 3710:
case 2317:
case 2087:
case 334:
case 1866:
case 3822:
case 875:
case 2332:
case 1907:
case 595:
case 43:
case 2760:
case 526:
case 424:
case 1599:
case 295:
case 3460:
case 1387:
case 226:
case 2247:
case 1260:
case 1032:
case 1801:
case 1804:
case 1145:
case 378:
case 2410:
case 321:
case 3334:
case 2163:
case 431:
case 141:
case 2821:
case 2477:
case 492:
case 1227:
case 2519:
case 3188:
case 472:
case 3874:
case 1638:
case 1841:
case 409:
case 3000:
case 1844:
case 2207:
case 3569:
case 2856:
case 2872:
case 603:
case 2250:
case 420:
case 743:
case 1629:
case 3057:
case 196:
case 895:
case 1153:
case 807:
case 183:
case 3977:
case 1922:
case 1306:
case 3256:
case 2061:
case 1613:
case 2271:
case 2902:
case 2916:
case 1698:
case 1675:
case 2326:
case 3014:
case 543:
case 1082:
case 373:
case 2683:
case 3062:
case 1774:
case 749:
case 1771:
case 1430:
case 672:
case 2179:
case 4041:
case 189:
case 2006:
case 1364:
case 3850:
case 3901:
case 1986:
case 2890:
case 1503:
case 3904:
case 3941:
case 3129:
case 1051:
case 3944:
case 1543:
case 3701:
case 188:
case 692:
case 1996:
case 631:
case 4004:
case 2618:
case 748:
case 2693:
case 3402:
case 3416:
case 1974:
case 1971:
case 3221:
case 944:
case 3224:
case 1421:
case 1424:
case 2716:
case 1877:
case 2702:
case 843:
case 1528:
case 2351:
case 3394:
case 58:
case 2354:
case 3391:
case 3605:
case 386:
case 1722:
case 2404:
case 707:
case 2508:
case 3672:
case 2365:
case 2713:
case 3552:
case 2028:
case 2592:
case 1339:
case 11:
case 3763:
case 4058:
case 417:
case 3758:
case 2283:
case 2458:
case 3475:
case 3591:
case 2554:
case 3594:
case 2043:
case 1275:
case 1298:
case 660:
case 2671:
case 1546:
case 2674:
case 2177:
case 3160:
case 1065:
case 1213:
case 3245:
case 3656:
case 3413:
case 1445:
case 955:
case 3205:
case 1355:
case 2686:
case 3584:
case 1983:
case 2348:
case 3488:
case 766:
case 3127:
case 1288:
case 3268:
case 1616:
case 1453:
case 3958:
case 2975:
case 1048:
case 2998:
case 4025:
case 3849:
case 2293:
case 2788:
case 3963:
case 3725:
case 2622:
case 713:
case 3833:
case 1879:
case 315:
case 2055:
case 3095:
case 2098:
case 1415:
case 2075:
case 1708:
case 3063:
case 3215:
case 317:
case 1502:
case 3785:
case 3273:
case 1239:
case 2728:
case 4085:
case 2013:
case 2140:
case 3995:
case 1661:
case 1612:
case 1228:
case 3681:
case 1606:
case 3684:
case 756:
case 1765:
case 2626:
case 812:
case 1375:
case 1134:
case 1083:
case 1131:
case 2943:
case 3676:
case 512:
case 2703:
case 2869:
case 3556:
case 1835:
case 2596:
case 66:
case 3305:
case 1723:
case 3691:
case 3197:
case 1965:
case 2939:
case 650:
case 1018:
case 1646:
case 2571:
case 2574:
case 2223:
case 3795:
case 2755:
case 3778:
case 2928:
case 110:
case 4078:
case 1203:
case 1120:
case 3353:
case 2393:
case 3572:
case 2088:
case 3403:
case 3652:
case 2692:
case 1169:
case 3437:
case 645:
case 3711:
case 705:
case 473:
case 2374:
case 1237:
case 630:
case 2608:
case 2226:
case 1588:
case 1857:
case 983:
case 2761:
case 3412:
case 2764:
case 3281:
case 3356:
case 1261:
case 2665:
case 3372:
case 1800:
case 3041:
case 1954:
case 3461:
case 0:
case 3464:
case 2706:
case 1639:
case 3673:
case 1096:
case 2946:
case 602:
case 2282:
case 4062:
case 698:
case 1074:
case 679:
case 2518:
case 3330:
case 699:
case 1926:
case 1302:
case 2159:
case 678:
case 2906:
case 284:
case 2746:
case 2322:
case 1840:
case 3004:
case 2867:
case 3001:
case 941:
case 1491:
case 777:
case 1022:
case 1575:
case 2251:
case 2254:
case 3291:
case 3446:
case 937:
case 2964:
case 486:
case 493:
case 2002:
case 62:
case 2016:
case 3324:
case 3276:
case 1982:
case 3914:
case 1513:
case 94:
case 3957:
case 2997:
case 1047:
case 2060:
case 2509:
case 536:
case 434:
case 805:
case 1467:
case 2440:
case 3139:
case 3380:
case 1115:
case 3010:
case 1529:
case 127:
case 577:
case 2852:
case 1689:
case 347:
case 1717:
case 1538:
case 421:
case 1431:
case 392:
case 331:
case 3740:
case 308:
case 1360:
case 3487:
case 3900:
case 499:
case 1732:
case 2894:
case 3854:
case 478:
case 236:
case 2185:
case 498:
case 2881:
case 4000:
case 309:
case 205:
case 3497:
case 2195:
case 3940:
case 1932:
case 479:
case 1297:
case 372:
case 1862:
case 542:
case 2336:
case 402:
case 1917:
case 1327:
case 780:
case 242:
case 1699:
case 877:
case 2400:
case 3757:
case 430:
case 140:
case 1007:
case 505:
case 673:
case 1687:
case 1184:
case 3106:
case 1895:
case 2536:
case 3137:
case 3634:
case 615:
case 3269:
case 461:
case 2999:
case 3735:
case 2670:
case 1289:
case 856:
case 4035:
case 167:
case 2111:
case 2617:
case 2114:
case 450:
case 2349:
case 2333:
case 3667:
case 3164:
case 3823:
case 1719:
case 2038:
case 3865:
case 1919:
case 454:
case 3620:
case 2815:
case 3935:
case 3499:
case 3580:
case 35:
case 1009:
case 2799:
case 3759:
case 1560:
case 91:
case 4059:
case 1697:
case 1885:
case 1073:
case 962:
case 2656:
case 815:
case 3039:
case 2576:
case 1644:
case 2160:
case 2245:
case 3463:
case 3308:
case 3674:
case 1968:
case 2498:
case 3110:
case 3043:
case 3551:
case 2594:
case 2591:
case 3283:
case 2758:
case 3775:
case 2315:
case 3988:
case 2925:
case 4075:
case 2763:
case 2373:
case 656:
case 2552:
case 2672:
case 1905:
case 1829:
case 3713:
case 2095:
case 3055:
case 2078:
case 1511:
case 3622:
case 3218:
case 319:
case 3293:
case 412:
case 2253:
case 2725:
case 1493:
case 4088:
case 2268:
case 3975:
case 3003:
case 1136:
case 2621:
case 2127:
case 1753:
case 3425:
case 2581:
case 1378:
case 1395:
case 1601:
case 515:
case 3526:
case 1562:
case 2744:
case 697:
case 2741:
case 3890:
case 2901:
case 2850:
case 1756:
case 1084:
case 3012:
case 1081:
case 3006:
case 886:
case 2442:
case 123:
case 893:
case 1314:
case 3382:
case 1921:
case 970:
case 573:
case 605:
case 745:
case 779:
case 2011:
case 1471:
case 1827:
case 1474:
case 4042:
case 1663:
case 273:
case 2836:
case 1578:
case 3916:
case 3902:
case 1362:
case 3742:
case 798:
case 3061:
case 2645:
case 1244:
case 1496:
case 3548:
case 3296:
case 2384:
case 3441:
case 2766:
case 1486:
case 3401:
case 901:
case 2391:
case 3286:
case 1201:
case 2394:
case 3351:
case 2605:
case 2847:
case 721:
case 1930:
case 3716:
case 381:
case 778:
case 4016:
case 2224:
case 799:
case 4002:
case 1625:
case 990:
case 2352:
case 593:
case 636:
case 1076:
case 2402:
case 3565:
case 3693:
case 3046:
case 484:
case 2944:
case 677:
case 2941:
case 1422:
case 3466:
case 2515:
case 2701:
case 3824:
case 2198:
case 3410:
case 1277:
case 477:
case 987:
case 845:
case 534:
case 3247:
case 2040:
case 1067:
case 146:
case 299:
case 104:
case 2460:
case 1447:
case 793:
case 326:
case 599:
case 3332:
case 1340:
case 348:
case 3633:
case 3087:
case 578:
case 22:
case 4060:
case 521:
case 2710:
case 3317:
case 802:
case 3370:
case 2777:
case 1816:
case 1034:
case 1183:
case 1031:
case 821:
case 502:
case 2910:
case 1450:
case 598:
case 230:
case 2290:
case 579:
case 1300:
case 3872:
case 349:
case 3960:
case 3097:
case 279:
case 375:
case 82:
case 100:
case 773:
case 545:
case 1407:
case 405:
case 1790:
case 298:
case 2569:
case 3207:
case 2874:
case 497:
case 3125:
case 3236:
case 2188:
case 250:
case 2142:
case 3868:
case 561:
case 1069:
case 3249:
case 1500:
case 715:
case 152:
case 1279:
case 2818:
case 3938:
case 3479:
case 1433:
case 168:
case 2779:
case 612:
case 1196:
case 56:
case 3319:
case 3805:
case 3929:
case 3144:
case 261:
case 1171:
case 1174:
case 1335:
case 1888:
case 550:
case 1610:
case 554:
case 3607:
case 3845:
case 1186:
case 3729:
case 2534:
case 2531:
case 2438:
case 3517:
case 3650:
case 2429:
case 3570:
case 2567:
case 1409:
case 2883:
case 254:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752253202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,];
var gg_b = "1752253202/";

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
