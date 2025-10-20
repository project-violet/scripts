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
case 1135:
case 3064:
case 2184:
case 1938:
case 3848:
case 364:
case 3759:
case 1071:
case 1102:
case 1025:
case 2278:
case 3095:
case 646:
case 2830:
case 1078:
case 2225:
case 2271:
case 3280:
case 3356:
case 3673:
case 1160:
case 32:
case 4004:
case 3738:
case 1605:
case 385:
case 1488:
case 3610:
case 2592:
case 554:
case 869:
case 1351:
case 3173:
case 3923:
case 2800:
case 3305:
case 1580:
case 832:
case 73:
case 3158:
case 819:
case 1022:
case 3486:
case 1656:
case 15:
case 3609:
case 314:
case 2564:
case 1755:
case 3701:
case 877:
case 3936:
case 754:
case 3708:
case 1635:
case 4034:
case 342:
case 2299:
case 1339:
case 149:
case 625:
case 888:
case 2595:
case 958:
case 3029:
case 134:
case 3793:
case 68:
case 3819:
case 3894:
case 2673:
case 407:
case 1080:
case 2356:
case 947:
case 2360:
case 3497:
case 2651:
case 617:
case 2906:
case 2109:
case 22:
case 10:
case 2658:
case 3592:
case 2610:
case 493:
case 798:
case 1522:
case 3347:
case 1812:
case 2841:
case 1264:
case 2302:
case 448:
case 679:
case 704:
case 2095:
case 371:
case 2952:
case 820:
case 1384:
case 1413:
case 3576:
case 2335:
case 3463:
case 2917:
case 1454:
case 2708:
case 598:
case 176:
case 1553:
case 3684:
case 3595:
case 3214:
case 3299:
case 1571:
case 1525:
case 242:
case 435:
case 2923:
case 2110:
case 1292:
case 2332:
case 740:
case 543:
case 667:
case 504:
case 2955:
case 3707:
case 975:
case 3950:
case 517:
case 3911:
case 963:
case 3624:
case 2534:
case 464:
case 1315:
case 2043:
case 2433:
case 3966:
case 2805:
case 2983:
case 485:
case 3004:
case 2146:
case 42:
case 2742:
case 1630:
case 3282:
case 3:
case 1718:
case 2479:
case 640:
case 2646:
case 2220:
case 3330:
case 1020:
case 357:
case 698:
case 2348:
case 960:
case 1130:
case 1582:
case 792:
case 89:
case 3974:
case 1916:
case 3847:
case 1937:
case 3615:
case 4076:
case 3365:
case 442:
case 1961:
case 902:
case 1165:
case 1077:
case 2856:
case 3319:
case 1324:
case 3285:
case 2277:
case 414:
case 290:
case 3394:
case 3983:
case 393:
case 1648:
case 2362:
case 1839:
case 2612:
case 3590:
case 838:
case 1346:
case 1082:
case 3426:
case 2:
case 1496:
case 2950:
case 654:
case 1873:
case 2624:
case 471:
case 2911:
case 3043:
case 1810:
case 882:
case 3534:
case 952:
case 165:
case 3805:
case 1851:
case 725:
case 1783:
case 173:
case 2615:
case 2847:
case 2974:
case 2365:
case 2543:
case 1809:
case 1085:
case 2444:
case 2034:
case 2589:
case 2285:
case 2319:
case 1290:
case 1141:
case 1945:
case 2112:
case 3646:
case 496:
case 3504:
case 3802:
case 1475:
case 3348:
case 1421:
case 3341:
case 1390:
case 2825:
case 267:
case 4073:
case 2878:
case 1440:
case 707:
case 1030:
case 590:
case 3604:
case 3727:
case 4010:
case 1797:
case 1120:
case 4058:
case 793:
case 2853:
case 325:
case 912:
case 3770:
case 1927:
case 642:
case 2406:
case 4039:
case 2569:
case 2643:
case 748:
case 404:
case 3024:
case 1094:
case 614:
case 2515:
case 2294:
case 1334:
case 141:
case 2219:
case 3377:
case 2385:
case 790:
case 3754:
case 2143:
case 2455:
case 962:
case 2986:
case 3634:
case 2200:
case 507:
case 1304:
case 292:
case 217:
case 1062:
case 900:
case 828:
case 3057:
case 2512:
case 3690:
case 440:
case 3104:
case 2417:
case 4009:
case 2436:
case 3406:
case 1459:
case 1185:
case 2134:
case 2770:
case 225:
case 105:
case 3569:
case 1500:
case 2713:
case 2024:
case 2880:
case 3385:
case 2377:
case 3219:
case 3825:
case 2320:
case 7:
case 3230:
case 3878:
case 950:
case 1041:
case 2604:
case 1864:
case 2727:
case 392:
case 1257:
case 1829:
case 1182:
case 757:
case 3899:
case 2690:
case 1786:
case 2963:
case 3046:
case 2104:
case 3143:
case 671:
case 1408:
case 246:
case 1401:
case 3189:
case 3822:
case 3455:
case 4084:
case 1892:
case 1215:
case 1389:
case 1493:
case 3524:
case 1519:
case 1343:
case 809:
case 398:
case 3933:
case 3010:
case 2205:
case 1889:
case 1005:
case 1972:
case 3051:
case 833:
case 4012:
case 2450:
case 3796:
case 1779:
case 2232:
case 1442:
case 1032:
case 2411:
case 187:
case 1678:
case 3695:
case 3979:
case 1114:
case 1625:
case 4024:
case 343:
case 3314:
case 1329:
case 304:
case 3399:
case 596:
case 178:
case 425:
case 1921:
case 1125:
case 1975:
case 3195:
case 1614:
case 3629:
case 3676:
case 1178:
case 1364:
case 1928:
case 2202:
case 3998:
case 895:
case 1445:
case 3164:
case 830:
case 2084:
case 2539:
case 2235:
case 1395:
case 446:
case 3692:
case 2877:
case 1056:
case 2558:
case 2380:
case 1703:
case 2944:
case 796:
case 2256:
case 6:
case 2573:
case 1798:
case 2474:
case 1060:
case 3721:
case 3775:
case 2787:
case 956:
case 1502:
case 968:
case 690:
case 2176:
case 2926:
case 2695:
case 921:
case 764:
case 2772:
case 2399:
case 2584:
case 635:
case 1804:
case 2664:
case 124:
case 2449:
case 2039:
case 2010:
case 1251:
case 785:
case 1556:
case 3509:
case 2058:
case 1258:
case 3466:
case 822:
case 2051:
case 72:
case 1680:
case 3418:
case 467:
case 2073:
case 3450:
case 1560:
case 542:
case 3411:
case 1834:
case 3380:
case 2885:
case 3558:
case 564:
case 3877:
case 607:
case 3256:
case 1468:
case 1209:
case 240:
case 3551:
case 33:
case 3474:
case 693:
case 2247:
case 2721:
case 1180:
case 417:
case 2676:
case 918:
case 2629:
case 479:
case 648:
case 2998:
case 742:
case 3084:
case 585:
case 2378:
case 354:
case 1890:
case 714:
case 2903:
case 3820:
case 3778:
case 321:
case 2523:
case 3771:
case 1795:
case 2144:
case 3753:
case 356:
case 3633:
case 368:
case 2259:
case 1764:
case 629:
case 145:
case 2555:
case 4066:
case 27:
case 2517:
case 558:
case 2231:
case 2870:
case 1448:
case 3375:
case 2536:
case 1038:
case 3321:
case 531:
case 4011:
case 3191:
case 3240:
case 3679:
case 3995:
case 1067:
case 1175:
case 1971:
case 1303:
case 1696:
case 1925:
case 3198:
case 4018:
case 2267:
case 1978:
case 3722:
case 1326:
case 1379:
case 93:
case 2854:
case 3017:
case 3446:
case 1628:
case 1999:
case 1675:
case 1621:
case 1196:
case 3976:
case 3929:
case 1540:
case 2457:
case 3691:
case 1776:
case 1729:
case 954:
case 1093:
case 3372:
case 151:
case 2415:
case 1333:
case 318:
case 1008:
case 1172:
case 126:
case 2644:
case 758:
case 2964:
case 37:
case 2328:
case 3238:
case 2103:
case 3870:
case 3517:
case 2052:
case 2626:
case 1430:
case 1252:
case 2198:
case 221:
case 3523:
case 1494:
case 943:
case 2778:
case 904:
case 1980:
case 2725:
case 101:
case 2771:
case 2006:
case 1508:
case 602:
case 2881:
case 1897:
case 256:
case 1465:
case 1501:
case 444:
case 3259:
case 2633:
case 1206:
case 2799:
case 1400:
case 462:
case 3415:
case 1223:
case 2133:
case 1559:
case 3506:
case 218:
case 306:
case 827:
case 2055:
case 2992:
case 594:
case 1217:
case 2722:
case 1236:
case 2036:
case 1538:
case 289:
case 2691:
case 2126:
case 2179:
case 2929:
case 940:
case 1462:
case 2083:
case 203:
case 1545:
case 1249:
case 763:
case 3163:
case 468:
case 4006:
case 2439:
case 239:
case 3904:
case 3354:
case 2207:
case 421:
case 2896:
case 1363:
case 2574:
case 3242:
case 4052:
case 2458:
case 2943:
case 350:
case 2186:
case 2872:
case 967:
case 2989:
case 3697:
case 513:
case 3066:
case 1627:
case 3074:
case 2216:
case 2381:
case 1397:
case 2237:
case 647:
case 563:
case 1127:
case 2409:
case 1790:
case 2268:
case 4036:
case 4017:
case 917:
case 3934:
case 2686:
case 1061:
case 992:
case 1068:
case 760:
case 4055:
case 510:
case 3484:
case 1734:
case 713:
case 418:
case 3663:
case 3777:
case 3990:
case 3370:
case 2828:
case 80:
case 1113:
case 781:
case 2242:
case 3782:
case 1211:
case 2050:
case 2011:
case 177:
case 1432:
case 1218:
case 3410:
case 188:
case 849:
case 1833:
case 1568:
case 1681:
case 3451:
case 2697:
case 3989:
case 3872:
case 3186:
case 250:
case 2163:
case 3083:
case 2904:
case 3049:
case 2354:
case 925:
case 658:
case 397:
case 3896:
case 1826:
case 666:
case 752:
case 2583:
case 1435:
case 1045:
case 2990:
case 2245:
case 2777:
case 406:
case 1803:
case 2549:
case 616:
case 3821:
case 2370:
case 3875:
case 946:
case 362:
case 169:
case 1507:
case 2074:
case 3511:
case 552:
case 2327:
case 3381:
case 2720:
case 2197:
case 2934:
case 1456:
case 3566:
case 3261:
case 3666:
case 2859:
case 1027:
case 2748:
case 3097:
case 3288:
case 907:
case 1712:
case 494:
case 3281:
case 2227:
case 2741:
case 3611:
case 4079:
case 1137:
case 1116:
case 3368:
case 3174:
case 1480:
case 447:
case 3361:
case 618:
case 352:
case 2867:
case 948:
case 81:
case 712:
case 797:
case 1013:
case 2831:
case 2464:
case 2649:
case 739:
case 500:
case 2563:
case 275:
case 744:
case 4033:
case 408:
case 703:
case 1070:
case 2683:
case 1715:
case 202:
case 762:
case 2476:
case 329:
case 990:
case 3700:
case 1962:
case 122:
case 3307:
case 1769:
case 3063:
case 700:
case 539:
case 1581:
case 1668:
case 186:
case 260:
case 2801:
case 1661:
case 1350:
case 3166:
case 503:
case 1366:
case 2893:
case 1757:
case 3118:
case 824:
case 1616:
case 597:
case 1637:
case 606:
case 3495:
case 3867:
case 252:
case 1852:
case 1425:
case 1471:
case 2840:
case 1478:
case 375:
case 3649:
case 3270:
case 1941:
case 3831:
case 2765:
case 1453:
case 2097:
case 1081:
case 1806:
case 3859:
case 2316:
case 2281:
case 553:
case 1297:
case 2586:
case 2730:
case 2174:
case 2368:
case 130:
case 2611:
case 887:
case 1746:
case 3597:
case 1527:
case 2969:
case 3492:
case 2166:
case 3086:
case 1855:
case 67:
case 1513:
case 2700:
case 1499:
case 1414:
case 3476:
case 550:
case 313:
case 3254:
case 431:
case 1645:
case 4044:
case 458:
case 1263:
case 753:
case 3149:
case 1570:
case 3732:
case 1336:
case 2296:
case 2598:
case 3652:
case 1773:
case 1667:
case 3705:
case 1751:
case 1758:
case 3117:
case 1631:
case 872:
case 77:
case 1849:
case 899:
case 3393:
case 3606:
case 1905:
case 3489:
case 3155:
case 1072:
case 1193:
case 653:
case 3973:
case 1932:
case 3842:
case 3308:
case 2434:
case 3655:
case 2044:
case 258:
case 3106:
case 2533:
case 57:
case 706:
case 2868:
case 3735:
case 4063:
case 2816:
case 429:
case 3623:
case 1960:
case 2228:
case 1021:
case 3760:
case 996:
case 2275:
case 3287:
case 805:
case 3098:
case 3331:
case 1028:
case 2526:
case 3636:
case 3617:
case 1935:
case 2340:
case 1131:
case 2490:
case 1709:
case 3003:
case 208:
case 2033:
case 2958:
case 2443:
case 2544:
case 756:
case 1233:
case 475:
case 128:
case 161:
case 2301:
case 1818:
case 2842:
case 589:
case 3296:
case 247:
case 1226:
case 1640:
case 1279:
case 92:
case 2079:
case 1528:
case 3807:
case 2026:
case 2652:
case 985:
case 3598:
case 2705:
case 2117:
case 2152:
case 1087:
case 2338:
case 1298:
case 3228:
case 3526:
case 2331:
case 1140:
case 3579:
case 1596:
case 3221:
case 789:
case 568:
case 3340:
case 2636:
case 3984:
case 841:
case 1420:
case 2003:
case 2756:
case 3490:
case 2367:
case 612:
case 2909:
case 358:
case 3044:
case 3861:
case 331:
case 718:
case 1572:
case 2735:
case 644:
case 3837:
case 1874:
case 3816:
case 402:
case 2359:
case 2623:
case 2702:
case 3706:
case 2264:
case 936:
case 1848:
case 2470:
case 724:
case 1639:
case 51:
case 1841:
case 2295:
case 1095:
case 3967:
case 3071:
case 1952:
case 3160:
case 1673:
case 3752:
case 3309:
case 1280:
case 2824:
case 3632:
case 20:
case 862:
case 76:
case 1610:
case 3605:
case 1651:
case 3481:
case 3959:
case 12:
case 2427:
case 3310:
case 2815:
case 2647:
case 3132:
case 844:
case 3351:
case 1173:
case 3656:
case 35:
case 2869:
case 1609:
case 3105:
case 3022:
case 3901:
case 3736:
case 897:
case 524:
case 1158:
case 2292:
case 641:
case 1708:
case 3635:
case 911:
case 1139:
case 2553:
case 276:
case 114:
case 3723:
case 3099:
case 2276:
case 2229:
case 349:
case 142:
case 3080:
case 391:
case 3147:
case 1740:
case 1592:
case 30:
case 3427:
case 2156:
case 2959:
case 2053:
case 3470:
case 3264:
case 672:
case 2706:
case 2931:
case 2135:
case 778:
case 3940:
case 974:
case 787:
case 1529:
case 2078:
case 1576:
case 3413:
case 2071:
case 2102:
case 1278:
case 2846:
case 376:
case 3553:
case 2635:
case 415:
case 2755:
case 234:
case 3857:
case 605:
case 2099:
case 850:
case 2602:
case 1862:
case 2339:
case 1299:
case 3229:
case 3276:
case 2580:
case 2358:
case 1800:
case 2993:
case 2373:
case 2901:
case 2105:
case 470:
case 3869:
case 3292:
case 578:
case 2717:
case 1222:
case 2736:
case 4071:
case 599:
case 4025:
case 3100:
case 4078:
case 1950:
case 1707:
case 3665:
case 1169:
case 2783:
case 3289:
case 537:
case 1612:
case 2520:
case 2641:
case 3766:
case 2204:
case 1362:
case 2648:
case 3907:
case 3162:
case 995:
case 806:
case 572:
case 2346:
case 1090:
case 4022:
case 2945:
case 737:
case 2141:
case 270:
case 45:
case 505:
case 3884:
case 3130:
case 799:
case 3312:
case 1737:
case 3487:
case 3662:
case 2421:
case 449:
case 1365:
case 434:
case 1615:
case 1847:
case 4014:
case 87:
case 1124:
case 3119:
case 1589:
case 215:
case 3324:
case 1285:
case 1319:
case 2085:
case 2809:
case 3961:
case 1444:
case 3520:
case 1949:
case 3648:
case 193:
case 61:
case 2750:
case 1426:
case 2907:
case 2630:
case 107:
case 2711:
case 3942:
case 741:
case 2243:
case 3851:
case 365:
case 2289:
case 2315:
case 1043:
case 3577:
case 3858:
case 889:
case 624:
case 2119:
case 2916:
case 2194:
case 2968:
case 2324:
case 2961:
case 3085:
case 2077:
case 1856:
case 1504:
case 1403:
case 2020:
case 1220:
case 2884:
case 821:
case 3290:
case 3141:
case 1835:
case 2312:
case 2130:
case 3428:
case 856:
case 541:
case 66:
case 2487:
case 3440:
case 2562:
case 3913:
case 4032:
case 831:
case 2682:
case 988:
case 858:
case 784:
case 2212:
case 977:
case 2438:
case 3797:
case 1727:
case 1241:
case 2041:
case 4005:
case 2431:
case 1604:
case 1248:
case 515:
case 1012:
case 634:
case 2988:
case 765:
case 18:
case 2185:
case 2981:
case 3927:
case 1770:
case 3065:
case 478:
case 649:
case 1880:
case 2224:
case 2500:
case 1713:
case 1634:
case 4035:
case 355:
case 1069:
case 3677:
case 2685:
case 584:
case 1754:
case 2269:
case 146:
case 2565:
case 2343:
case 4002:
case 2215:
case 2594:
case 2493:
case 2829:
case 2876:
case 1057:
case 816:
case 4060:
case 2257:
case 3304:
case 3548:
case 4056:
case 573:
case 1690:
case 3620:
case 3246:
case 1643:
case 305:
case 1689:
case 2927:
case 2177:
case 1406:
case 3185:
case 241:
case 1294:
case 2334:
case 1219:
case 3224:
case 676:
case 2019:
case 167:
case 2390:
case 3682:
case 3467:
case 1452:
case 2797:
case 3438:
case 1853:
case 3212:
case 2970:
case 1788:
case 3864:
case 3431:
case 1899:
case 1814:
case 4047:
case 3876:
case 399:
case 3257:
case 808:
case 920:
case 117:
case 2954:
case 691:
case 1417:
case 2246:
case 41:
case 3892:
case 2677:
case 2763:
case 1189:
case 1455:
case 1822:
case 1986:
case 3401:
case 3565:
case 3269:
case 1143:
case 179:
case 3343:
case 3519:
case 2000:
case 3389:
case 527:
case 1423:
case 3889:
case 70:
case 3843:
case 1933:
case 1058:
case 2273:
case 3442:
case 3392:
case 1322:
case 4030:
case 1796:
case 3671:
case 4094:
case 3114:
case 1926:
case 2502:
case 860:
case 1664:
case 1449:
case 1772:
case 2239:
case 1399:
case 1584:
case 3329:
case 2535:
case 143:
case 1314:
case 810:
case 4000:
case 3928:
case 3178:
case 1676:
case 1991:
case 1195:
case 3699:
case 3171:
case 1353:
case 2987:
case 3921:
case 3002:
case 3395:
case 3153:
case 1903:
case 455:
case 1164:
case 3445:
case 627:
case 2468:
case 140:
case 3703:
case 1885:
case 1692:
case 1721:
case 3060:
case 1247:
case 863:
case 4062:
case 2047:
case 875:
case 3798:
case 2114:
case 615:
case 2996:
case 945:
case 287:
case 3804:
case 324:
case 3535:
case 405:
case 2376:
case 2329:
case 2653:
case 2889:
case 2972:
case 1466:
case 1509:
case 4048:
case 2442:
case 549:
case 3273:
case 2547:
case 1450:
case 2726:
case 2392:
case 2779:
case 31:
case 3209:
case 437:
case 1380:
case 1558:
case 2622:
case 982:
case 75:
case 852:
case 2791:
case 1787:
case 499:
case 1573:
case 3437:
case 1474:
case 3416:
case 2364:
case 2928:
case 673:
case 749:
case 926:
case 2125:
case 2002:
case 3987:
case 2699:
case 734:
case 881:
case 1820:
case 2284:
case 2153:
case 3744:
case 951:
case 1539:
case 1235:
case 154:
case 2035:
case 761:
case 1771:
case 4007:
case 2593:
case 2501:
case 29:
case 2206:
case 168:
case 3059:
case 2508:
case 1006:
case 1881:
case 2465:
case 1753:
case 156:
case 3672:
case 1103:
case 3448:
case 1375:
case 3391:
case 3441:
case 3031:
case 3398:
case 3978:
case 2430:
case 2040:
case 890:
case 1198:
case 3121:
case 3175:
case 3971:
case 1626:
case 1191:
case 1679:
case 3067:
case 1995:
case 96:
case 2538:
case 528:
case 3379:
case 2217:
case 1396:
case 2236:
case 4037:
case 3914:
case 3540:
case 1179:
case 91:
case 1976:
case 3621:
case 3196:
case 561:
case 2462:
case 3999:
case 3675:
case 536:
case 382:
case 3628:
case 2567:
case 3333:
case 1372:
case 1714:
case 3776:
case 3922:
case 3886:
case 118:
case 2559:
case 3008:
case 1133:
case 1231:
case 2391:
case 2448:
case 2953:
case 1387:
case 488:
case 1536:
case 1238:
case 580:
case 2031:
case 2441:
case 3252:
case 2978:
case 477:
case 4042:
case 2121:
case 2303:
case 419:
case 1424:
case 3593:
case 3419:
case 1523:
case 1259:
case 245:
case 633:
case 774:
case 609:
case 987:
case 1144:
case 3465:
case 3897:
case 1827:
case 3508:
case 3223:
case 2333:
case 2776:
case 3400:
case 469:
case 583:
case 1469:
case 1644:
case 2922:
case 2001:
case 2008:
case 1854:
case 3538:
case 3236:
case 630:
case 574:
case 2792:
case 2379:
case 2999:
case 3462:
case 2196:
case 1457:
case 2540:
case 1552:
case 3283:
case 2743:
case 232:
case 3249:
case 3545:
case 3007:
case 680:
case 1354:
case 2250:
case 730:
case 2218:
case 1018:
case 1050:
case 1066:
case 2568:
case 2681:
case 1697:
case 2688:
case 2561:
case 3704:
case 288:
case 2266:
case 4038:
case 3397:
case 1327:
case 3016:
case 3447:
case 3037:
case 1197:
case 871:
case 1720:
case 320:
case 1934:
case 3844:
case 3790:
case 2985:
case 2181:
case 3920:
case 972:
case 3734:
case 1549:
case 2435:
case 4001:
case 3654:
case 2045:
case 709:
case 3113:
case 674:
case 4093:
case 269:
case 2507:
case 2891:
case 733:
case 1887:
case 3218:
case 377:
case 3386:
case 3211:
case 4040:
case 3537:
case 1473:
case 1782:
case 814:
case 1574:
case 1186:
case 3681:
case 3568:
case 388:
case 1943:
case 1410:
case 842:
case 3561:
case 1049:
case 586:
case 332:
case 2154:
case 223:
case 139:
case 103:
case 1083:
case 2670:
case 3789:
case 3826:
case 2007:
case 197:
case 401:
case 1207:
case 319:
case 2170:
case 1785:
case 54:
case 661:
case 3435:
case 3507:
case 369:
case 885:
case 3898:
case 955:
case 162:
case 3402:
case 1875:
case 1821:
case 3891:
case 864:
case 1381:
case 3274:
case 1511:
case 1237:
case 1550:
case 2016:
case 1518:
case 100:
case 3188:
case 2068:
case 786:
case 3181:
case 2977:
case 3985:
case 3456:
case 2127:
case 1686:
case 3374:
case 1337:
case 788:
case 3712:
case 1586:
case 2088:
case 1097:
case 3965:
case 682:
case 3027:
case 1650:
case 181:
case 3480:
case 1368:
case 777:
case 854:
case 569:
case 1924:
case 1611:
case 3994:
case 230:
case 3013:
case 719:
case 1794:
case 1840:
case 3607:
case 2425:
case 2852:
case 152:
case 2471:
case 2554:
case 651:
case 638:
case 2948:
case 2453:
case 1765:
case 2941:
case 4072:
case 732:
case 322:
case 2513:
case 2499:
case 2383:
case 2414:
case 209:
case 577:
case 588:
case 2263:
case 2836:
case 2570:
case 1307:
case 1969:
case 1166:
case 2855:
case 3661:
case 532:
case 386:
case 3668:
case 3581:
case 1111:
case 3616:
case 1118:
case 3757:
case 3900:
case 970:
case 4028:
case 2823:
case 2724:
case 840:
case 3471:
case 1213:
case 3852:
case 1838:
case 3453:
case 3554:
case 163:
case 3941:
case 1831:
case 1649:
case 723:
case 1270:
case 1563:
case 428:
case 2712:
case 24:
case 2168:
case 1227:
case 2027:
case 2480:
case 3642:
case 2661:
case 1801:
case 2588:
case 2350:
case 3855:
case 720:
case 2318:
case 2668:
case 160:
case 286:
case 2286:
case 1597:
case 2616:
case 3142:
case 3823:
case 2900:
case 843:
case 2366:
case 1476:
case 222:
case 3513:
case 3349:
case 102:
case 898:
case 1946:
case 3645:
case 601:
case 2054:
case 2769:
case 113:
case 1026:
case 1079:
case 3773:
case 2521:
case 2575:
case 3587:
case 1732:
case 3317:
case 1136:
case 1939:
case 991:
case 3849:
case 3758:
case 3751:
case 1705:
case 3638:
case 1489:
case 3101:
case 3323:
case 3659:
case 1606:
case 3108:
case 1443:
case 4070:
case 1958:
case 817:
case 1544:
case 3932:
case 1842:
case 2811:
case 236:
case 3193:
case 701:
case 3244:
case 380:
case 1735:
case 3608:
case 1909:
case 3159:
case 1359:
case 3693:
case 623:
case 1702:
case 211:
case 3960:
case 1331:
case 2140:
case 2291:
case 1098:
case 3075:
case 1152:
case 1760:
case 501:
case 3352:
case 3138:
case 1003:
case 3709:
case 486:
case 1756:
case 1367:
case 3935:
case 1845:
case 1617:
case 1636:
case 2203:
case 3233:
case 2072:
case 116:
case 582:
case 336:
case 2193:
case 3818:
case 2096:
case 2667:
case 430:
case 538:
case 3640:
case 3279:
case 2587:
case 3575:
case 1296:
case 551:
case 846:
case 3521:
case 2758:
case 1404:
case 2631:
case 2710:
case 4081:
case 495:
case 283:
case 4088:
case 1275:
case 1747:
case 3596:
case 88:
case 782:
case 95:
case 3140:
case 2028:
case 2021:
case 3298:
case 677:
case 0:
case 2709:
case 2138:
case 3420:
case 545:
case 2935:
case 1868:
case 166:
case 2244:
case 3572:
case 3784:
case 1434:
case 131:
case 2601:
case 1044:
case 619:
case 158:
case 2956:
case 2960:
case 409:
case 2306:
case 632:
case 3874:
case 751:
case 3947:
case 738:
case 1837:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760947201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,];
var gg_b = "1760947201/";

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
