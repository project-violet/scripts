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
case 2957:
case 579:
case 2102:
case 1241:
case 3007:
case 3255:
case 3280:
case 2683:
case 3587:
case 1563:
case 1140:
case 495:
case 3287:
case 3580:
case 677:
case 2408:
case 1316:
case 2846:
case 1934:
case 574:
case 1452:
case 1263:
case 2528:
case 4066:
case 1921:
case 3369:
case 1190:
case 390:
case 4085:
case 205:
case 1541:
case 344:
case 3794:
case 2868:
case 3000:
case 1173:
case 23:
case 2879:
case 1498:
case 2915:
case 2753:
case 1884:
case 2631:
case 1142:
case 1559:
case 743:
case 2624:
case 699:
case 7:
case 867:
case 315:
case 2100:
case 3133:
case 1485:
case 2081:
case 2434:
case 686:
case 1259:
case 1908:
case 3111:
case 3002:
case 597:
case 652:
case 2501:
case 3210:
case 694:
case 1450:
case 3574:
case 218:
case 3669:
case 624:
case 769:
case 301:
case 26:
case 527:
case 2803:
case 3783:
case 2644:
case 1208:
case 1959:
case 1616:
case 2383:
case 764:
case 3164:
case 2552:
case 1088:
case 2694:
case 2441:
case 557:
case 2215:
case 1872:
case 2598:
case 2064:
case 363:
case 2250:
case 3653:
case 3731:
case 2266:
case 1604:
case 3912:
case 732:
case 3049:
case 1963:
case 3987:
case 1120:
case 1018:
case 3832:
case 1877:
case 2248:
case 2928:
case 308:
case 2585:
case 1534:
case 1127:
case 2826:
case 3980:
case 2548:
case 1665:
case 837:
case 2298:
case 3955:
case 1941:
case 706:
case 3099:
case 2566:
case 3678:
case 350:
case 4028:
case 3713:
case 2550:
case 1521:
case 3192:
case 770:
case 3259:
case 3304:
case 3908:
case 3485:
case 404:
case 1002:
case 3806:
case 946:
case 2058:
case 3448:
case 1582:
case 588:
case 3025:
case 252:
case 2040:
case 3466:
case 980:
case 1353:
case 1210:
case 2662:
case 673:
case 3386:
case 1282:
case 1974:
case 1378:
case 1217:
case 3884:
case 2704:
case 938:
case 530:
case 299:
case 79:
case 2073:
case 1133:
case 1580:
case 2656:
case 3147:
case 2919:
case 3934:
case 2660:
case 3316:
case 3190:
case 63:
case 747:
case 605:
case 1794:
case 931:
case 3173:
case 863:
case 466:
case 3541:
case 2092:
case 2474:
case 1181:
case 1007:
case 842:
case 1255:
case 850:
case 3415:
case 593:
case 1744:
case 1029:
case 1587:
case 149:
case 2738:
case 3140:
case 581:
case 3893:
case 849:
case 2519:
case 3870:
case 523:
case 3127:
case 560:
case 2022:
case 91:
case 1955:
case 2195:
case 3521:
case 87:
case 3762:
case 150:
case 890:
case 1653:
case 3843:
case 2362:
case 163:
case 844:
case 3963:
case 3234:
case 2219:
case 3604:
case 1724:
case 3877:
case 3036:
case 553:
case 72:
case 229:
case 402:
case 815:
case 448:
case 1274:
case 3872:
case 2289:
case 2136:
case 1051:
case 254:
case 3045:
case 2020:
case 1669:
case 66:
case 1574:
case 833:
case 618:
case 2027:
case 961:
case 3122:
case 2487:
case 3767:
case 2412:
case 2360:
case 2371:
case 3959:
case 3616:
case 1054:
case 4053:
case 1567:
case 3416:
case 2612:
case 1271:
case 2953:
case 1469:
case 1193:
case 293:
case 941:
case 3003:
case 1161:
case 2030:
case 674:
case 2851:
case 1389:
case 2876:
case 41:
case 3132:
case 577:
case 3283:
case 139:
case 2752:
case 1560:
case 1571:
case 347:
case 1556:
case 3628:
case 2849:
case 3404:
case 3385:
case 522:
case 3137:
case 2032:
case 1:
case 864:
case 2969:
case 3531:
case 3213:
case 143:
case 599:
case 1262:
case 2610:
case 230:
case 2682:
case 3398:
case 3994:
case 2750:
case 2899:
case 1562:
case 1721:
case 3357:
case 2617:
case 162:
case 902:
case 370:
case 2766:
case 869:
case 3224:
case 2785:
case 3026:
case 540:
case 3130:
case 2748:
case 2380:
case 3544:
case 909:
case 2829:
case 627:
case 524:
case 2674:
case 438:
case 3931:
case 1892:
case 1689:
case 3615:
case 35:
case 3294:
case 1106:
case 2807:
case 2355:
case 3913:
case 2269:
case 1962:
case 385:
case 3594:
case 3833:
case 3068:
case 1741:
case 2800:
case 592:
case 3780:
case 1039:
case 657:
case 3244:
case 2460:
case 2312:
case 554:
case 1842:
case 1759:
case 1967:
case 1873:
case 2168:
case 1114:
case 3079:
case 3035:
case 253:
case 3710:
case 3301:
case 3657:
case 1847:
case 672:
case 3717:
case 2578:
case 3666:
case 260:
case 3650:
case 223:
case 1840:
case 834:
case 3685:
case 3881:
case 1619:
case 1960:
case 2196:
case 1897:
case 1858:
case 3648:
case 1398:
case 1994:
case 2154:
case 362:
case 407:
case 170:
case 1513:
case 1805:
case 3478:
case 1357:
case 3721:
case 2093:
case 3734:
case 297:
case 2070:
case 1465:
case 1130:
case 3822:
case 2938:
case 1524:
case 1385:
case 3319:
case 2659:
case 1404:
case 1137:
case 2077:
case 573:
case 19:
case 1864:
case 82:
case 2043:
case 4038:
case 885:
case 2321:
case 4016:
case 343:
case 2888:
case 3389:
case 274:
case 1315:
case 2072:
case 2986:
case 2845:
case 955:
case 2494:
case 744:
case 3267:
case 3708:
case 53:
case 505:
case 147:
case 3560:
case 3571:
case 1583:
case 3809:
case 2308:
case 3260:
case 2904:
case 3567:
case 1438:
case 3256:
case 2663:
case 1774:
case 1003:
case 925:
case 3827:
case 749:
case 995:
case 2586:
case 623:
case 660:
case 3840:
case 1650:
case 2621:
case 708:
case 511:
case 1666:
case 742:
case 2359:
case 3960:
case 3897:
case 750:
case 3956:
case 2634:
case 1881:
case 306:
case 3123:
case 3759:
case 3967:
case 2504:
case 763:
case 2265:
case 1983:
case 3114:
case 1301:
case 1657:
case 2084:
case 332:
case 2431:
case 1710:
case 89:
case 1913:
case 1068:
case 3741:
case 1755:
case 12:
case 185:
case 1652:
case 2238:
case 2363:
case 2216:
case 3791:
case 1787:
case 701:
case 227:
case 2516:
case 56:
case 1328:
case 910:
case 1712:
case 2538:
case 1096:
case 3106:
case 2341:
case 1811:
case 1615:
case 2023:
case 1886:
case 1405:
case 2335:
case 1384:
case 1525:
case 1988:
case 2581:
case 997:
case 3422:
case 648:
case 2626:
case 3502:
case 1661:
case 1804:
case 2281:
case 2418:
case 1306:
case 3202:
case 2155:
case 2436:
case 1995:
case 3632:
case 1225:
case 383:
case 3735:
case 3010:
case 3853:
case 2396:
case 2905:
case 3207:
case 3055:
case 255:
case 411:
case 3637:
case 1323:
case 2211:
case 187:
case 3746:
case 1775:
case 4005:
case 2495:
case 2844:
case 4064:
case 3409:
case 2182:
case 1314:
case 979:
case 1838:
case 3101:
case 2346:
case 112:
case 2117:
case 3949:
case 1816:
case 641:
case 3796:
case 28:
case 3200:
case 2964:
case 3427:
case 2511:
case 225:
case 3630:
case 2933:
case 2264:
case 295:
case 3599:
case 972:
case 2505:
case 3440:
case 1021:
case 2174:
case 1034:
case 2085:
case 3497:
case 666:
case 1377:
case 3332:
case 4033:
case 43:
case 2048:
case 3458:
case 1606:
case 405:
case 1393:
case 717:
case 2824:
case 3929:
case 1518:
case 2732:
case 887:
case 1370:
case 3473:
case 1536:
case 2679:
case 2911:
case 2564:
case 2635:
case 2831:
case 3152:
case 1588:
case 604:
case 1925:
case 2303:
case 3551:
case 507:
case 3576:
case 3198:
case 1614:
case 1008:
case 957:
case 1595:
case 473:
case 3166:
case 927:
case 3150:
case 3703:
case 1411:
case 351:
case 2015:
case 1372:
case 2730:
case 3251:
case 2339:
case 858:
case 1409:
case 1949:
case 312:
case 3816:
case 3063:
case 625:
case 1796:
case 2723:
case 1507:
case 800:
case 655:
case 1500:
case 1637:
case 2476:
case 4022:
case 1768:
case 2451:
case 1080:
case 2922:
case 2714:
case 198:
case 531:
case 387:
case 1746:
case 3059:
case 2297:
case 3995:
case 4027:
case 1202:
case 236:
case 3464:
case 538:
case 4009:
case 1779:
case 459:
case 2547:
case 930:
case 1010:
case 3225:
case 183:
case 2920:
case 3945:
case 2191:
case 1976:
case 429:
case 3384:
case 2540:
case 3988:
case 3405:
case 2247:
case 851:
case 492:
case 2597:
case 988:
case 1502:
case 4020:
case 3865:
case 3661:
case 3670:
case 376:
case 580:
case 735:
case 2509:
case 3595:
case 209:
case 1150:
case 2121:
case 1166:
case 561:
case 3288:
case 1185:
case 1074:
case 2134:
case 3245:
case 151:
case 1703:
case 2527:
case 499:
case 1337:
case 2089:
case 1276:
case 1148:
case 2940:
case 713:
case 4058:
case 2227:
case 3433:
case 204:
case 3545:
case 1551:
case 1330:
case 883:
case 3295:
case 3614:
case 1902:
case 494:
case 575:
case 1442:
case 440:
case 2856:
case 452:
case 2860:
case 2675:
case 2997:
case 4040:
case 128:
case 3393:
case 1473:
case 2222:
case 2777:
case 1929:
case 3518:
case 3370:
case 3361:
case 1907:
case 3684:
case 568:
case 1900:
case 923:
case 695:
case 3021:
case 51:
case 1599:
case 477:
case 100:
case 4042:
case 3343:
case 3034:
case 158:
case 3481:
case 3606:
case 266:
case 2402:
case 1726:
case 3218:
case 3189:
case 1115:
case 2761:
case 1458:
case 3236:
case 2522:
case 3885:
case 1819:
case 2349:
case 378:
case 1658:
case 1939:
case 3406:
case 3968:
case 776:
case 3364:
case 994:
case 3866:
case 280:
case 1062:
case 3013:
case 2764:
case 3898:
case 922:
case 3996:
case 3031:
case 3484:
case 3857:
case 1690:
case 3749:
case 3024:
case 1736:
case 3226:
case 1673:
case 2532:
case 1322:
case 1718:
case 2439:
case 1309:
case 826:
case 1071:
case 977:
case 1056:
case 1642:
case 1788:
case 817:
case 184:
case 3751:
case 1327:
case 1745:
case 2874:
case 1692:
case 3935:
case 3611:
case 1889:
case 2351:
case 3503:
case 2530:
case 2607:
case 189:
case 3083:
case 2629:
case 1067:
case 856:
case 453:
case 1390:
case 4037:
case 21:
case 1622:
case 156:
case 3279:
case 2882:
case 1725:
case 2699:
case 3605:
case 1138:
case 3801:
case 2078:
case 1116:
case 3903:
case 3664:
case 203:
case 884:
case 2053:
case 2810:
case 3443:
case 2649:
case 896:
case 493:
case 3381:
case 126:
case 2302:
case 4030:
case 1432:
case 1358:
case 481:
case 3477:
case 1954:
case 607:
case 2329:
case 745:
case 2880:
case 313:
case 3828:
case 3153:
case 3546:
case 1392:
case 3296:
case 3094:
case 3700:
case 2307:
case 509:
case 3596:
case 2300:
case 1627:
case 3268:
case 30:
case 3333:
case 1165:
case 1430:
case 924:
case 335:
case 2932:
case 1609:
case 3044:
case 1186:
case 1239:
case 1342:
case 430:
case 1275:
case 2388:
case 2496:
case 1935:
case 1503:
case 1611:
case 3889:
case 3067:
case 3254:
case 1414:
case 2446:
case 3642:
case 1852:
case 3327:
case 1751:
case 3745:
case 2720:
case 1633:
case 2572:
case 93:
case 4006:
case 1776:
case 973:
case 3647:
case 1857:
case 1305:
case 2543:
case 1996:
case 2160:
case 2171:
case 2435:
case 1484:
case 1024:
case 1749:
case 2293:
case 783:
case 2577:
case 3673:
case 3322:
case 416:
case 2270:
case 2261:
case 646:
case 2593:
case 178:
case 3697:
case 1946:
case 1681:
case 2834:
case 2914:
case 2722:
case 2318:
case 2570:
case 3658:
case 1848:
case 2277:
case 1526:
case 4014:
case 1968:
case 2821:
case 1850:
case 3640:
case 835:
case 1013:
case 2243:
case 2792:
case 918:
case 510:
case 1333:
case 10:
case 96:
case 3186:
case 3609:
case 1729:
case 1044:
case 751:
case 2695:
case 2891:
case 3275:
case 2016:
case 2863:
case 2038:
case 3342:
case 1178:
case 4043:
case 113:
case 3575:
case 207:
case 2742:
case 675:
case 3392:
case 2688:
case 1472:
case 1311:
case 3437:
case 1568:
case 1094:
case 4070:
case 4061:
case 3620:
case 1664:
case 2747:
case 1535:
case 2584:
case 2325:
case 865:
case 2636:
case 326:
case 2206:
case 2618:
case 2773:
case 1169:
case 3390:
case 700:
case 61:
case 2506:
case 356:
case 1461:
case 1470:
case 474:
case 1702:
case 911:
case 2426:
case 3373:
case 3622:
case 2086:
case 2972:
case 1235:
case 1605:
case 1801:
case 2983:
case 471:
case 3146:
case 3278:
case 2657:
case 3553:
case 874:
case 3317:
case 1175:
case 353:
case 2079:
case 1139:
case 4083:
case 2698:
case 2650:
case 3578:
case 2666:
case 360:
case 84:
case 172:
case 919:
case 1565:
case 1006:
case 2648:
case 606:
case 1204:
case 1634:
case 1516:
case 127:
case 2328:
case 1538:
case 669:
case 2924:
case 897:
case 3829:
case 2544:
case 1341:
case 3807:
case 1023:
case 3569:
case 2096:
case 4024:
case 2833:
case 285:
case 2913:
case 3456:
case 1238:
case 2046:
case 4013:
case 3460:
case 3471:
case 792:
case 2244:
case 754:
case 3179:
case 2780:
case 2348:
case 2944:
case 1077:
case 1818:
case 2385:
case 1334:
case 1938:
case 2404:
case 1043:
case 2366:
case 2531:
case 2213:
case 3969:
case 6:
case 799:
case 2513:
case 3766:
case 816:
case 3617:
case 3899:
case 2805:
case 2486:
case 662:
case 2465:
case 3748:
case 1070:
case 1061:
case 4094:
case 827:
case 794:
case 197:
case 752:
case 3612:
case 912:
case 2583:
case 1444:
case 2003:
case 3715:
case 1789:
case 381:
case 872:
case 3953:
case 1072:
case 1641:
case 3978:
case 247:
case 3752:
case 3680:
case 2283:
case 1800:
case 2741:
case 830:
case 685:
case 1269:
case 62:
case 2075:
case 357:
case 1135:
case 1456:
case 3363:
case 2842:
case 1179:
case 3538:
case 2763:
case 3516:
case 327:
case 269:
case 888:
case 3483:
case 1829:
case 3023:
case 2689:
case 951:
case 1355:
case 1569:
case 2892:
case 1578:
case 1310:
case 881:
case 1462:
case 3825:
case 3413:
case 1701:
case 711:
case 508:
case 3586:
case 3565:
case 3006:
case 2956:
case 3634:
case 2619:
case 1196:
case 3204:
case 2890:
case 3424:
case 2759:
case 1278:
case 2847:
case 2114:
case 489:
case 3641:
case 1851:
case 853:
case 456:
case 1037:
case 2389:
case 3888:
case 1374:
case 544:
case 1752:
case 2143:
case 2556:
case 2267:
case 647:
case 3663:
case 2567:
case 2256:
case 2271:
case 3904:
case 1612:
case 417:
case 57:
case 3895:
case 379:
case 1687:
case 181:
case 860:
case 2827:
case 1030:
case 2161:
case 1715:
case 823:
case 1953:
case 549:
case 193:
case 1899:
case 2721:
case 262:
case 1617:
case 3154:
case 1682:
case 670:
case 3061:
case 1748:
case 3070:
case 2172:
case 1032:
case 3077:
case 3659:
case 3916:
case 983:
case 1757:
case 3321:
case 515:
case 1610:
case 130:
case 2453:
case 69:
case 991:
case 220:
case 2731:
case 3266:
case 1410:
case 3313:
case 3250:
case 917:
case 3064:
case 4087:
case 3248:
case 2832:
case 877:
case 532:
case 2987:
case 1219:
case 2724:
case 2912:
case 4055:
case 2980:
case 1022:
case 208:
case 3585:
case 3324:
case 772:
case 3928:
case 506:
case 1417:
case 3257:
case 250:
case 2713:
case 498:
case 1482:
case 1195:
case 124:
case 36:
case 840:
case 2669:
case 727:
case 318:
case 2910:
case 569:
case 1371:
case 2105:
case 3463:
case 716:
case 1487:
case 159:
case 3644:
case 1854:
case 2783:
case 564:
case 4017:
case 129:
case 2164:
case 667:
case 3383:
case 1136:
case 2837:
case 3215:
case 1289:
case 1020:
case 2051:
case 1455:
case 3901:
case 192:
case 2378:
case 3201:
case 373:
case 3835:
case 3631:
case 854:
case 2282:
case 3879:
case 451:
case 543:
case 3624:
case 829:
case 1704:
case 5:
case 186:
case 2002:
case 2111:
case 1097:
case 3952:
case 3081:
case 2419:
case 3613:
case 152:
case 1662:
case 2353:
case 140:
case 3129:
case 2007:
case 2255:
case 779:
case 3394:
case 2489:
case 1474:
case 3957:
case 3228:
case 2587:
case 3683:
case 74:
case 249:
case 400:
case 3528:
case 3846:
case 1656:
case 177:
case 1919:
case 1671:
case 1875:
case 3408:
case 774:
case 2580:
case 33:
case 3033:
case 2794:
case 3868:
case 305:
case 244:
case 458:
case 290:
case 3950:
case 913:
case 2508:
case 2771:
case 2760:
case 2428:
case 3367:
case 3480:
case 2045:
case 354:
case 1441:
case 1694:
case 1215:
case 873:
case 1149:
case 16:
case 90:
case 2122:
case 1515:
case 1803:
case 324:
case 601:
case 2638:
case 55:
case 3356:
case 1199:
case 1252:
case 1463:
case 2959:
case 2616:
case 2208:
case 2767:
case 3487:
case 3022:
case 2127:
case 4041:
case 2870:
case 1324:
case 3519:
case 2534:
case 1928:
case 2893:
case 1257:
case 2401:
case 1005:
case 3417:
case 2521:
case 1331:
case 3195:
case 650:
case 2109:
case 2686:
case 642:
case 2941:
case 2221:
case 1250:
case 1266:
case 2843:
case 2018:
case 2120:
case 3145:
case 2877:
case 1248:
case 2036:
case 1176:
case 753:
case 3219:
case 3660:
case 3671:
case 3875:
case 1528:
case 3042:
case 1985:
case 1846:
case 2147:
case 1344:
case 419:
case 2291:
case 1948:
case 690:
case 1033:
case 13:
case 1868:
case 2921:
case 2190:
case 1011:
case 2415:
case 2823:
case 2158:
case 1769:
case 1957:
case 1896:
case 649:
case 2563:
case 811:
case 3738:
case 2140:
case 237:
case 793:
case 2591:
case 1683:
case 3058:
case 2806:
case 445:
case 2908:
case 2304:
case 788:
case 1501:
case 2450:
case 2025:
case 3786:
case 1129:
case 1835:
case 1631:
case 2884:
case 322:
case 1201:
case 3047:
case 173:
case 1879:
case 3989:
case 2365:
case 1100:
case 399:
case 615:
case 3090:
case 730:
case 2153:
case 545:
case 107:
case 967:
case 213:
case 3880:
case 1970:
case 4026:
case 2311:
case 2568:
case 3676:
case 2094:
case 1645:
case 3651:
case 2700:
case 1688:
case 235:
case 2707:
case 2268:
case 709:
case 3069:
case 1943:
case 1792:
case 1016:
case 2178:
case 2246:
case 1977:
case 1891:
case 3454:
case 3932:
case 1506:
case 2702:
case 1426:
case 3781:
case 519:
case 3817:
case 2801:
case 3078:
case 2279:
case 3937:
case 1972:
case 2443:
case 514:
case 2535:
case 1747:
case 1325:
case 2477:
case 1618:
case 3302:
case 1206:
case 3194:
case 626:
case 1004:
case 1790:
case 3131:
case 696:
case 1720:
case 1572:
case 2633:
case 3600:
case 1468:
case 3537:
case 2776:
case 2203:
case 3124:
case 684:
case 3351:
case 2979:
case 1727:
case 2815:
case 1984:
case 3874:
case 4035:
case 937:
case 689:
case 3629:
case 1722:
case 2406:
case 1570:
case 1914:
case 3602:
case 485:
case 4068:
case 3232:
case 42:
case 2848:
case 3349:
case 278:
case 1593:
case 1834:
case 2681:
case 2850:
case 3705:
case 2799:
case 380:
case 1167:
case 2364:
case 1543:
case 3399:
case 1171:
case 2031:
case 2996:
case 2484:
case 1923:
case 736:
case 2226:
case 1270:
case 807:
case 2749:
case 2024:
case 217:
case 103:
case 3747:
case 920:
case 1810:
case 528:
case 3618:
case 1302:
case 226:
case 3206:
case 3636:
case 2954:
case 2358:
case 3859:
case 2397:
case 11:
case 2373:
case 3426:
case 795:
case 3758:
case 908:
case 950:
case 2138:
case 2725:
case 1817:
case 2116:
case 1937:
case 558:
case 3972:
case 1882:
case 3086:
case 3523:
case 2627:
case 3403:
case 1711:
case 2430:
case 2165:
case 3792:
case 710:
case 3943:
case 1069:
case 635:
case 551:
case 2275:
case 1812:
case 1454:
case 4:
case 3214:
case 462:
case 307:
case 838:
case 1307:
case 3645:
case 1855:
case 1651:
case 175:
case 2437:
case 3688:
case 2104:
case 3171:
case 3160:
case 3543:
case 875:
case 2647:
case 1764:
case 3270:
case 3261:
case 915:
case 2673:
case 2718:
case 2322:
case 3577:
case 2690:
case 1232:
case 3318:
case 3561:
case 1602:
case 2939:
case 3914:
case 3834:
case 1349:
case 2975:
case 3593:
case 2062:
case 3167:
case 1705:
case 933:
case 3625:
case 4039:
case 1376:
case 1530:
case 97:
case 3345:
case 3727:
case 3388:
case 81:
case 2067:
case 1113:
case 432:
case 868:
case 78:
case 3808:
case 2060:
case 1475:
case 2642:
case 3446:
case 2056:
case 2309:
case 2254:
case 944:
case 803:
case 3572:
case 598:
case 2788:
case 990:
case 221:
case 1227:
case 1772:
case 2330:
case 1520:
case 964:
case 4002:
case 645:
case 707:
case 3646:
case 2157:
case 2442:
case 1871:
case 836:
case 1997:
case 433:
case 1958:
case 1209:
case 1639:
case 2198:
case 1990:
case 310:
case 1429:
case 969:
case 1973:
case 848:
case 1220:
case 415:
case 2251:
case 2276:
case 2148:
case 3730:
case 251:
case 2492:
case 3696:
case 2074:
case 556:
case 3425:
case 3813:
case 2440:
case 3505:
case 841:
case 3066:
case 2599:
case 1862:
case 444:
case 166:
case 1770:
case 1522:
case 2458:
case 2115:
case 2249:
case 2497:
case 3174:
case 1793:
case 490:
case 2473:
case 4007:
case 517:
case 2929:
case 228:
case 3824:
case 614:
case 2549:
case 526:
case 3911:
case 449:
case 3098:
case 2907:
case 3533:
case 1476:
case 2637:
case 2768:
case 2055:
case 2999:
case 408:
case 3488:
case 3396:
case 1159:
case 3028:
case 3110:
case 450:
case 442:
case 2746:
case 584:
case 1922:
case 2229:
case 2012:
case 866:
case 463:
case 2101:
case 1339:
case 612:
case 2630:
case 325:
case 2507:
case 3603:
case 141:
case 3233:
case 4049:
case 2796:
case 1540:
case 3335:
case 2017:
case 1163:
case 3001:
case 2082:
case 1191:
case 4076:
case 3626:
case 1706:
case 1558:
case 1597:
case 809:
case 676:
case 1290:
case 148:
case 1573:
case 1909:
case 2632:
case 1258:
case 1141:
case 136:
case 2202:
case 1590:
case 2010:
case 2128:
case 2735:
case 943:
case 1240:
case 283:
case 1927:
case 9:
case 2518:
case 2370:
case 3222:
case 1326:
case 2393:
case 855:
case 3108:
case 1057:
case 1564:
case 1505:
case 1425:
case 2021:
case 825:
case 1813:
case 1050:
case 1264:
case 71:
case 1933:
case 195:
case 1048:
case 3770:
case 3761:
case 2236:
case 2189:
case 2377:
case 3402:
case 2218:
case 2606:
case 2481:
case 3793:
case 3867:
case 3121:
case 535:
case 2595:
case 3509:
case 3973:
case 2411:
case 3089:
case 3220:
case 2119:
case 3134:
case 2288:
case 1696:
case 304:
case 1737:
case 1303:
case 3400:
case 92:
case 1668:
case 4025:
case 3860:
case 2008:
case 3675:
case 3997:
case 1981:
case 3639:
case 3958:
case 2295:
case 3209:
case 3354:
case 3141:
case 336:
case 3909:
case 3573:
case 1436:
case 3258:
case 2677:
case 3297:
case 2804:
case 3449:
case 3590:
case 1281:
case 3240:
case 2643:
case 691:
case 683:
case 1180:
case 3499:
case 2405:
case 3247:
case 467:
case 302:
case 2384:
case 3191:
case 2945:
case 1187:
case 578:
case 3920:
case 810:
case 3273:
case 1626:
case 276:
case 2661:
case 4045:
case 780:
case 1581:
case 3597:
case 4088:
case 1346:
case 2063:
case 3242:
case 2838:
case 1117:
case 2936:
case 3654:
case 1844:
case 1182:
case 341:
case 125:
case 3723:
case 4018:
case 1603:
case 2041:
case 1445:
case 1894:
case 155:
case 2323:
case 1211:
case 1533:
case 2672:
case 3476:
case 3159:
case 287:
case 565:
case 3542:
case 1110:
case 731:
case 3714:
case 3922:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746802801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,];
var gg_b = "1746802801/";

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
