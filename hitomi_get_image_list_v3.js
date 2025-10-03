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
case 2363:
case 1029:
case 2909:
case 3820:
case 3806:
case 2158:
case 3724:
case 3374:
case 1143:
case 1199:
case 703:
case 2342:
case 4010:
case 3068:
case 1575:
case 2212:
case 1956:
case 1255:
case 3203:
case 3217:
case 1540:
case 3494:
case 3898:
case 3160:
case 3539:
case 1446:
case 541:
case 224:
case 1886:
case 435:
case 3764:
case 3294:
case 1122:
case 288:
case 3860:
case 1945:
case 3331:
case 3664:
case 1092:
case 838:
case 460:
case 1981:
case 2076:
case 2673:
case 1455:
case 2531:
case 3417:
case 1538:
case 459:
case 2988:
case 1899:
case 1843:
case 3090:
case 2977:
case 2944:
case 640:
case 1483:
case 2858:
case 2454:
case 1050:
case 1339:
case 2575:
case 777:
case 3725:
case 3014:
case 732:
case 3989:
case 118:
case 1719:
case 124:
case 3827:
case 1909:
case 1574:
case 131:
case 822:
case 1254:
case 2199:
case 2057:
case 2283:
case 586:
case 58:
case 3618:
case 2843:
case 1944:
case 2483:
case 1977:
case 3516:
case 3718:
case 380:
case 3338:
case 842:
case 1858:
case 3191:
case 920:
case 2316:
case 95:
case 2246:
case 956:
case 2122:
case 869:
case 4094:
case 3127:
case 2945:
case 1412:
case 2981:
case 2455:
case 1673:
case 195:
case 1076:
case 764:
case 3370:
case 1469:
case 861:
case 99:
case 996:
case 2581:
case 2570:
case 3345:
case 3017:
case 3620:
case 1055:
case 3606:
case 127:
case 3508:
case 2250:
case 4061:
case 3596:
case 3164:
case 1577:
case 3916:
case 1083:
case 1433:
case 1544:
case 3490:
case 1257:
case 723:
case 2819:
case 1786:
case 1622:
case 2396:
case 410:
case 890:
case 3811:
case 2873:
case 1429:
case 480:
case 139:
case 1233:
case 3864:
case 3468:
case 3290:
case 708:
case 1457:
case 2119:
case 2276:
case 2450:
case 3124:
case 2556:
case 1292:
case 1762:
case 2758:
case 3228:
case 1743:
case 3589:
case 1699:
case 1046:
case 3356:
case 3094:
case 2544:
case 3501:
case 2722:
case 3421:
case 2433:
case 2083:
case 2577:
case 2588:
case 2786:
case 1819:
case 819:
case 3572:
case 451:
case 3344:
case 3659:
case 3377:
case 3388:
case 2229:
case 3825:
case 3759:
case 104:
case 56:
case 57:
case 529:
case 183:
case 1308:
case 3118:
case 3214:
case 3497:
case 2055:
case 1570:
case 255:
case 1012:
case 1250:
case 370:
case 3297:
case 1658:
case 696:
case 2762:
case 1758:
case 1450:
case 3667:
case 360:
case 1975:
case 2743:
case 2269:
case 549:
case 113:
case 3939:
case 3414:
case 3818:
case 2643:
case 1873:
case 572:
case 900:
case 2974:
case 2509:
case 717:
case 3125:
case 2947:
case 2233:
case 178:
case 2751:
case 3452:
case 889:
case 391:
case 1119:
case 3095:
case 537:
case 518:
case 4038:
case 1915:
case 241:
case 665:
case 1968:
case 2952:
case 524:
case 3878:
case 2800:
case 2914:
case 828:
case 2439:
case 958:
case 814:
case 494:
case 186:
case 3653:
case 397:
case 3056:
case 1605:
case 1179:
case 531:
case 2961:
case 9:
case 445:
case 2223:
case 4075:
case 1879:
case 3992:
case 1928:
case 693:
case 425:
case 3081:
case 3431:
case 2732:
case 3070:
case 2866:
case 781:
case 4040:
case 2312:
case 1355:
case 354:
case 3303:
case 884:
case 1113:
case 3969:
case 11:
case 182:
case 2182:
case 3274:
case 2242:
case 3187:
case 1383:
case 2793:
case 2749:
case 588:
case 1072:
case 221:
case 2921:
case 1990:
case 2649:
case 1089:
case 1439:
case 3440:
case 3684:
case 1914:
case 2807:
case 3784:
case 286:
case 3880:
case 3648:
case 3871:
case 2346:
case 1961:
case 742:
case 2705:
case 1223:
case 769:
case 141:
case 2595:
case 3238:
case 209:
case 1463:
case 930:
case 72:
case 2968:
case 726:
case 3009:
case 1442:
case 867:
case 4047:
case 282:
case 1182:
case 3310:
case 975:
case 877:
case 3730:
case 1263:
case 1749:
case 1793:
case 3438:
case 3077:
case 3583:
case 1096:
case 746:
case 74:
case 3630:
case 1921:
case 2001:
case 1632:
case 1517:
case 3976:
case 1997:
case 134:
case 1503:
case 1312:
case 1866:
case 216:
case 6:
case 2113:
case 1903:
case 2023:
case 3687:
case 3778:
case 2408:
case 3841:
case 2682:
case 3445:
case 3885:
case 685:
case 808:
case 843:
case 3328:
case 3137:
case 4009:
case 1521:
case 166:
case 504:
case 2590:
case 1472:
case 1713:
case 129:
case 583:
case 176:
case 1707:
case 17:
case 2766:
case 1552:
case 864:
case 3635:
case 0:
case 874:
case 2515:
case 761:
case 149:
case 2666:
case 2995:
case 3368:
case 1779:
case 3837:
case 1357:
case 733:
case 3315:
case 3047:
case 2832:
case 3245:
case 2893:
case 2849:
case 2489:
case 615:
case 3185:
case 568:
case 823:
case 3270:
case 3281:
case 172:
case 2208:
case 3141:
case 790:
case 3456:
case 2333:
case 3321:
case 1132:
case 2016:
case 2613:
case 2401:
case 3671:
case 70:
case 3444:
case 3848:
case 3533:
case 2607:
case 1496:
case 266:
case 276:
case 229:
case 3038:
case 2707:
case 3602:
case 3771:
case 2713:
case 2917:
case 2597:
case 1023:
case 2903:
case 345:
case 1726:
case 3592:
case 1528:
case 915:
case 817:
case 1804:
case 1408:
case 3130:
case 3397:
case 1149:
case 394:
case 2392:
case 454:
case 4045:
case 3734:
case 998:
case 1849:
case 3361:
case 3040:
case 2514:
case 1350:
case 1489:
case 4070:
case 325:
case 272:
case 3075:
case 1104:
case 357:
case 3314:
case 3244:
case 1568:
case 1766:
case 1515:
case 249:
case 101:
case 2329:
case 1042:
case 3352:
case 2679:
case 2105:
case 2357:
case 3133:
case 1190:
case 1337:
case 3857:
case 3987:
case 1020:
case 668:
case 3655:
case 1603:
case 1703:
case 3755:
case 2610:
case 1549:
case 1593:
case 3436:
case 3683:
case 2465:
case 3169:
case 196:
case 2027:
case 19:
case 484:
case 2418:
case 2814:
case 3783:
case 1098:
case 403:
case 448:
case 3022:
case 2710:
case 927:
case 2059:
case 955:
case 1128:
case 947:
case 845:
case 683:
case 317:
case 2161:
case 1424:
case 3236:
case 894:
case 414:
case 3869:
case 1341:
case 791:
case 759:
case 2218:
case 2114:
case 428:
case 3051:
case 585:
case 192:
case 3129:
case 2384:
case 2505:
case 2821:
case 1794:
case 3833:
case 3746:
case 3548:
case 1115:
case 1694:
case 983:
case 2907:
case 29:
case 1027:
case 2549:
case 1610:
case 3971:
case 647:
case 323:
case 1710:
case 2098:
case 1814:
case 1059:
case 3176:
case 1197:
case 2224:
case 2128:
case 2190:
case 1121:
case 2868:
case 2464:
case 432:
case 3219:
case 3332:
case 374:
case 2411:
case 1900:
case 1926:
case 1091:
case 2532:
case 1225:
case 3612:
case 3273:
case 2211:
case 3058:
case 1384:
case 1505:
case 1425:
case 2890:
case 1152:
case 2264:
case 978:
case 3876:
case 436:
case 2828:
case 2424:
case 2979:
case 2504:
case 3541:
case 2385:
case 1795:
case 1265:
case 913:
case 627:
case 4036:
case 308:
case 3585:
case 3941:
case 710:
case 2259:
case 907:
case 805:
case 1194:
case 423:
case 1298:
case 1566:
case 3657:
case 530:
case 1715:
case 1668:
case 367:
case 2025:
case 240:
case 1206:
case 1220:
case 2291:
case 3462:
case 3534:
case 2614:
case 474:
case 593:
case 3499:
case 2714:
case 2810:
case 1378:
case 3243:
case 2895:
case 3669:
case 1387:
case 631:
case 1064:
case 220:
case 2267:
case 2932:
case 2797:
case 2697:
case 663:
case 4058:
case 2491:
case 3733:
case 3251:
case 1790:
case 2018:
case 3846:
case 2065:
case 2513:
case 1690:
case 2427:
case 256:
case 2621:
case 3486:
case 2507:
case 3036:
case 780:
case 2302:
case 3155:
case 618:
case 565:
case 33:
case 3650:
case 1025:
case 1334:
case 5:
case 152:
case 1661:
case 3854:
case 1291:
case 931:
case 2206:
case 1614:
case 973:
case 1195:
case 1810:
case 3948:
case 2335:
case 3366:
case 2817:
case 2803:
case 751:
case 4022:
case 348:
case 303:
case 2615:
case 2715:
case 4086:
case 1227:
case 854:
case 1018:
case 2790:
case 4051:
case 328:
case 2498:
case 2894:
case 3930:
case 607:
case 988:
case 1949:
case 1427:
case 2690:
case 1513:
case 995:
case 2117:
case 1371:
case 1380:
case 2103:
case 2378:
case 4043:
case 2387:
case 3776:
case 1797:
case 1932:
case 1267:
case 4062:
case 3258:
case 3154:
case 2526:
case 1491:
case 1697:
case 3676:
case 3073:
case 2406:
case 3906:
case 601:
case 1631:
case 1573:
case 3205:
case 2809:
case 97:
case 2144:
case 794:
case 1311:
case 976:
case 2284:
case 2188:
case 891:
case 389:
case 859:
case 860:
case 2318:
case 30:
case 1145:
case 3616:
case 3013:
case 2080:
case 2071:
case 2002:
case 1922:
case 1285:
case 3518:
case 1845:
case 835:
case 4093:
case 1485:
case 298:
case 1951:
case 3960:
case 1747:
case 1881:
case 1774:
case 1674:
case 1647:
case 2740:
case 949:
case 2844:
case 3801:
case 481:
case 2034:
case 1519:
case 1237:
case 2958:
case 3525:
case 4032:
case 3405:
case 757:
case 1365:
case 637:
case 3108:
case 2241:
case 1318:
case 1071:
case 1080:
case 1536:
case 2145:
case 3493:
case 469:
case 2922:
case 1002:
case 3889:
case 2285:
case 2573:
case 3991:
case 3511:
case 2364:
case 2631:
case 2731:
case 3082:
case 1809:
case 2078:
case 1144:
case 1248:
case 596:
case 2311:
case 3564:
case 1177:
case 1284:
case 3739:
case 1844:
case 1877:
case 2999:
case 1640:
case 1484:
case 1888:
case 1325:
case 629:
case 67:
case 1958:
case 390:
case 1675:
case 3319:
case 422:
case 666:
case 1230:
case 3293:
case 446:
case 253:
case 3663:
case 3066:
case 361:
case 3189:
case 198:
case 2881:
case 2747:
case 2870:
case 592:
case 3742:
case 2441:
case 2674:
case 3404:
case 158:
case 2140:
case 2551:
case 986:
case 2280:
case 3213:
case 32:
case 3207:
case 1:
case 2609:
case 3351:
case 1041:
case 3924:
case 2434:
case 2084:
case 2543:
case 2599:
case 2367:
case 2048:
case 342:
case 1656:
case 1147:
case 3399:
case 880:
case 3567:
case 4026:
case 2562:
case 621:
case 1756:
case 1781:
case 490:
case 810:
case 1487:
case 1037:
case 705:
case 982:
case 265:
case 3911:
case 2234:
case 2138:
case 1745:
case 3964:
case 1320:
case 1645:
case 55:
case 556:
case 3279:
case 2875:
case 520:
case 2327:
case 3386:
case 2688:
case 2840:
case 3701:
case 2644:
case 471:
case 3407:
case 2586:
case 130:
case 3689:
case 941:
case 682:
case 3789:
case 2174:
case 797:
case 2053:
case 3925:
case 2656:
case 3282:
case 2147:
case 3200:
case 2756:
case 3226:
case 2558:
case 2287:
case 3142:
case 3139:
case 2085:
case 1140:
case 4007:
case 40:
case 1280:
case 3004:
case 61:
case 338:
case 1609:
case 1175:
case 2831:
case 1875:
case 2398:
case 4079:
case 3123:
case 1327:
case 1744:
case 1522:
case 3266:
case 1777:
case 3918:
case 1586:
case 1788:
case 3049:
case 3965:
case 2936:
case 1480:
case 1359:
case 1030:
case 1471:
case 3482:
case 2781:
case 2770:
case 175:
case 165:
case 1973:
case 3708:
case 609:
case 381:
case 1138:
case 419:
case 1234:
case 3863:
case 2745:
case 2645:
case 754:
case 2320:
case 612:
case 3819:
case 964:
case 2490:
case 1010:
case 1421:
case 2164:
case 796:
case 2916:
case 974:
case 1825:
case 1659:
case 2111:
case 3396:
case 383:
case 1118:
case 1165:
case 1791:
case 2428:
case 2706:
case 3012:
case 2003:
case 1923:
case 3581:
case 1691:
case 2017:
case 1667:
case 3450:
case 3975:
case 1767:
case 3658:
case 313:
case 2356:
case 1414:
case 2589:
case 3940:
case 908:
case 943:
case 2811:
case 1942:
case 1309:
case 3119:
case 1095:
case 1221:
case 2468:
case 1370:
case 424:
case 2165:
case 3469:
case 1508:
case 1706:
case 1428:
case 885:
case 2497:
case 3931:
case 1620:
case 643:
case 1003:
case 2572:
case 3588:
case 1215:
case 1698:
case 463:
case 3622:
case 1798:
case 2421:
case 2010:
case 1268:
case 2252:
case 3433:
case 3083:
case 594:
case 2627:
case 1490:
case 2825:
case 3229:
case 431:
case 2388:
case 545:
case 2344:
case 2659:
case 3429:
case 3947:
case 3509:
case 525:
case 674:
case 2942:
case 1811:
case 2963:
case 2095:
case 1660:
case 3457:
case 259:
case 2309:
case 3651:
case 291:
case 3233:
case 3751:
case 2452:
case 1468:
case 1864:
case 2221:
case 2461:
case 3762:
case 917:
case 2297:
case 2767:
case 4076:
case 1589:
case 2818:
case 3699:
case 2939:
case 488:
case 1094:
case 2217:
case 455:
case 1725:
case 4055:
case 427:
case 3339:
case 3212:
case 3050:
case 1625:
case 1061:
case 3719:
case 903:
case 324:
case 1827:
case 2539:
case 63:
case 318:
case 984:
case 1375:
case 2898:
case 1891:
case 3158:
case 3254:
case 2820:
case 2806:
case 2542:
case 3574:
case 3547:
case 373:
case 4083:
case 1210:
case 2068:
case 2374:
case 299:
case 251:
case 2563:
case 363:
case 2347:
case 3944:
case 2901:
case 1410:
case 1516:
case 554:
case 3977:
case 1618:
case 1765:
case 2972:
case 3454:
case 2106:
case 2120:
case 1867:
case 180:
case 1338:
case 439:
case 2664:
case 344:
case 2764:
case 858:
case 388:
case 2523:
case 2611:
case 3076:
case 3673:
case 2711:
case 2028:
case 8:
case 967:
case 875:
case 210:
case 3283:
case 2210:
case 1563:
case 1015:
case 199:
case 151:
case 2859:
case 1217:
case 614:
case 740:
case 3575:
case 2061:
case 3956:
case 307:
case 4012:
case 2827:
case 3886:
case 3540:
case 2989:
case 3151:
case 3822:
case 2014:
case 1539:
case 2127:
case 1764:
case 1198:
case 3851:
case 413:
case 3246:
case 1611:
case 603:
case 2159:
case 1523:
case 3092:
case 2908:
case 720:
case 93:
case 936:
case 2665:
case 1090:
case 2021:
case 1901:
case 3483:
case 3636:
case 3033:
case 3538:
case 2618:
case 3899:
case 3843:
case 1120:
case 505:
case 2338:
case 280:
case 3132:
case 892:
case 1954:
case 2137:
case 1321:
case 1884:
case 409:
case 1780:
case 1602:
case 602:
case 3590:
case 2983:
case 1444:
case 1848:
case 1702:
case 1533:
case 3496:
case 3700:
case 3682:
case 2256:
case 3726:
case 2841:
case 2687:
case 145:
case 3626:
case 2955:
case 2031:
case 2470:
case 2481:
case 3600:
case 3782:
case 2328:
case 1130:
case 1397:
case 194:
case 3193:
case 2946:
case 971:
case 1634:
case 3489:
case 3350:
case 2185:
case 896:
case 1830:
case 1734:
case 3849:
case 2245:
case 41:
case 1075:
case 157:
case 3104:
case 2550:
case 606:
case 1314:
case 933:
case 125:
case 1184:
case 3063:
case 301:
case 2635:
case 1557:
case 4072:
case 753:
case 4001:
case 3766:
case 3568:
case 1277:
case 482:
case 3832:
case 2837:
case 990:
case 689:
case 1352:
case 2368:
case 1841:
case 1787:
case 3903:
case 245:
case 1031:
case 1470:
case 3369:
case 1576:
case 1885:
case 906:
case 4089:
case 2569:
case 3333:
case 2321:
case 715:
case 1137:
case 2954:
case 2780:
case 441:
case 376:
case 37:
case 3707:
case 2488:
case 2477:
case 2533:
case 535:
case 3607:
case 989:
case 2444:
case 421:
case 3272:
case 2184:
case 2288:
case 798:
case 3552:
case 3201:
case 2148:
case 919:
case 3357:
case 1047:
case 3679:
case 3779:
case 1368:
case 902:
case 785:
case 570:
case 3994:
case 591:
case 559:
case 2040:
case 2634:
case 2734:
case 257:
case 2314:
case 4008:
case 3561:
case 2075:
case 1281:
case 1270:
case 225:
case 372:
case 434:
case 1748:
case 551:
case 1546:
case 3439:
case 599:
case 3089:
case 1440:
case 2231:
case 2753:
case 938:
case 64:
case 646:
case 2653:
case 1475:
case 46:
case 911:
case 3952:
case 4016:
case 1238:
case 429:
case 2957:
case 1134:
case 3800:
case 2887:
case 3704:
case 3604:
case 2474:
case 2878:
case 1009:
case 1310:
case 2554:
case 2178:
case 3182:
case 2247:
case 1077:
case 650:
case 3096:
case 3693:
case 981:
case 2933:
case 3921:
case 1730:
case 3749:
case 1834:
case 1438:
case 105:
case 472:
case 2081:
case 2070:
case 2431:
case 3997:
case 2637:
case 334:
case 679:
case 2992:
case 62:
case 3008:
case 462:
case 3632:
case 1275:
case 2045:
case 2317:
case 1180:
case 254:
case 1171:
case 3312:
case 3239:
case 437:
case 1785:
case 3216:
case 2238:
case 793:
case 1685:
case 3595:
case 1741:
case 1887:
case 2009:
case 1929:
case 312:
case 820:
case 1474:
case 2395:
case 3813:
case 969:
case 2880:
case 85:
case 3807:
case 2784:
case 2440:
case 730:
case 92:
case 2748:
case 926:
case 1135:
case 1231:
case 1753:
case 3705:
case 2475:
case 1056:
case 197:
case 1394:
case 2950:
case 3346:
case 510:
case 1637:
case 765:
case 2976:
case 1070:
case 1431:
case 775:
case 1737:
case 638:
case 154:
case 3355:
case 3113:
case 1969:
case 316:
case 3107:
case 2102:
case 94:
case 4042:
case 1187:
case 3383:
case 1554:
case 852:
case 840:
case 1274:
case 1178:
case 3416:
case 2630:
case 2077:
case 3990:
case 2583:
case 3510:
case 2088:
case 2438:
case 401:
case 1458:
case 910:
case 4020:
case 4006:
case 1650:
case 3467:
case 3025:
case 340:
case 707:
case 352:
case 3661:
case 1948:
case 526:
case 1984:
case 2499:
case 232:
case 3259:
case 2855:
case 2629:
case 1812:
case 3579:
case 542:
case 3652:
case 816:
case 2757:
case 49:
case 184:
case 148:
case 1930:
case 886:
case 2036:
case 35:
case 3507:
case 114:
case 3993:
case 3427:
case 2733:
case 2251:
case 2422:
case 23:
case 2155:
case 2313:
case 546:
case 2183:
case 1326:
case 3110:
case 2769:
case 2299:
case 809:
case 1382:
case 980:
case 699:
case 1154:
case 2792:
case 2262:
case 1258:
case 651:
case 1073:
case 320:
case 2692:
case 812:
case 4059:
case 1855:
case 3803:
case 834:
case 3817:
case 1629:
case 1757:
case 284:
case 4027:
case 3715:
case 3566:
case 3298:
case 3194:
case 1222:
case 1985:
case 1146:
case 763:
case 1657:
case 2750:
case 3220:
case 1462:
case 4091:
case 538:
case 167:
case 3905:
case 951:
case 680:
case 724:
case 999:
case 2019:
case 2984:
case 718:
case 3387:
case 610:
case 1183:
case 2300:
case 744:
case 2326:
case 1243:
case 1299:
case 788:
case 3378:
case 841:
case 3011:
case 2676:
case 2258:
case 3728:
case 1792:
case 3526:
case 3628:
case 1692:
case 4067:
case 2578:
case 400:
case 1580:
case 3690:
case 1633:
case 228:
case 3894:
case 3498:
case 1422:
case 3790:
case 1502:
case 1846:
case 3117:
case 2112:
case 123:
case 2783:
case 1902:
case 2022:
case 3814:
case 3418:
case 935:
case 837:
case 3465:
case 2530:
case 3027:
case 1980:
case 2436:
case 4024:
case 3059:
case 1176:
case 3330:
case 849:
case 1332:
case 1219:
case 174:
case 2857:
case 164:
case 506:
case 2978:
case 727:
case 2829:
case 3225:
case 3982:
case 755:
case 3900:
case 1537:
case 2655:
case 2987:
case 3091:
case 1553:
case 3505:
case 3425:
case 4011:
case 3348:
case 87:
case 2584:
case 2157:
case 1934:
case 2099:
case 2043:
case 2746:
case 991:
case 2548:
case 3821:
case 866:
case 3152:
case 4064:
case 217:
case 1876:
case 2935:
case 108:
case 3966:
case 1304:
case 3695:
case 3114:
case 2869:
case 3265:
case 2236:
case 783:
case 1857:
case 3815:
case 704:
case 3190:
case 264:
case 3337:
case 1829:
case 4025:
case 3617:
case 1987:
case 2712:
case 3411:
case 659:
case 3006:
case 1655:
case 1783:
case 223:
case 670:
case 3549:
case 2971:
case 3913:
case 1683:
case 1436:
case 1169:
case 1530:
case 3907:
case 39:
case 2850:
case 187:
case 3128:
case 2349:
case 3979:
case 2541:
case 2150:
case 3385:
case 1892:
case 2876:
case 2304:
case 4018:
case 3341:
case 208:
case 1935:
case 45:
case 778:
case 392:
case 2553:
case 1062:
case 3211:
case 1157:
case 713:
case 1099:
case 1043:
case 3353:
case 3694:
case 3264:
case 786:
case 2816:
case 111:
case 3919:
case 1689:
case 1163:
case 3434:
case 3838:
case 3084:
case 1200:
case 3562:
case 4087:
case 1142:
case 2399:
case 2343:
case 2567:
case 2005:
case 1925:
case 279:
case 226:
case 22:
case 3271:
case 3280:
case 709:
case 3140:
case 269:
case 1823:
case 712:
case 567:
case 2924:
case 138:
case 654:
case 3609:
case 3327:
case 2559:
case 782:
case 905:
case 3875:
case 3788:
case 2407:
case 24:
case 3586:
case 3677:
case 1696:
case 2527:
case 2413:
case 697:
case 3471:
case 3359:
case 3644:
case 2601:
case 3480:
case 4035:
case 453:
case 1598:
case 1796:
case 3688:
case 365:
case 2591:
case 1842:
case 1520:
case 1608:
case 1032:
case 222:
case 2116:
case 716:
case 3234:
case 3138:
case 844:
case 4071:
case 12:
case 358:
case 741:
case 2466:
case 3085:
case 605:
case 3435:
case 4002:
case 2823:
case 415:
case 3831:
case 238:
case 1479:
case 1351:
case 2004:
case 1816:
case 2789:
case 2689:
case 3287:
case 2226:
case 2925:
case 3656:
case 3147:
case 3278:
case 3174:
case 150:
case 3037:
case 2842:
case 2506:
case 3487:
case 2520:
case 1591:
case 734:
case 1911:
case 2400:
case 3770:
case 3847:
case 831:
case 3874:
case 3478:
case 2608:
case 1964:
case 1116:
case 514:
case 3320:
case 2863:
case 528:
case 1386:
case 3131:
case 2123:
case 1322:
case 1279:
case 3398:
case 1413:
case 3936:
case 1601:
case 2696:
case 146:
case 2093:
case 2965:
case 2796:
case 2598:
case 818:
case 2918:
case 954:
case 2839:
case 4:
case 847:
case 1108:
case 945:
case 2336:
case 458:
case 3638:
case 77:
case 1889:
case 776:
case 2716:
case 729:
case 994:
case 2518:
case 76:
case 3071:
case 2565:
case 3738:
case 1927:
case 2007:
case 3536:
case 1493:
case 1082:
case 4053:
case 839:
case 587:
case 1623:
case 2906:
case 3284:
case 289:
case 2101:
case 3248:
case 1196:
case 3177:
case 219:
case 737:
case 3484:
case 3640:
case 3034:
case 3325:
case 1739:
case 3675:
case 190:
case 3109:
case 1967:
case 1319:
case 517:
case 3958:
case 3775:
case 2960:
case 1189:
case 749:
case 3230:
case 1763:
case 1524:
case 2079:
case 925:
case 827:
case 1742:
case 957:
case 3078:
case 3731:
case 2082:
case 1205:
case 3253:
case 3364:
case 1906:
case 3631:
case 1920:
case 2991:
case 430:
case 1172:
case 4084:
case 523:
case 189:
case 2564:
case 2196:
case 878:
case 4048:
case 3311:
case 3856:
case 3181:
case 1998:
case 3922:
case 1518:
case 3285:
case 106:
case 2493:
case 3986:
case 1013:
case 564:
case 1565:
case 3951:
case 1960:
case 353:
case 2663:
case 2066:
case 3324:
case 2763:
case 3845:
case 271:
case 4030:
case 2742:
case 3674:
case 3647:
case 233:
case 3156:
case 3881:
case 3747:
case 508:
case 3943:
case 3999:
case 3519:
case 2739:
case 1801:
case 102:
case 3453:
case 1405:
case 2967:
case 465:
case 3962:
case 3237:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759528802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,];
var gg_b = "1759528802/";

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
