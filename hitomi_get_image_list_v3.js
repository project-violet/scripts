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
case 829:
case 799:
case 2561:
case 652:
case 3737:
case 3783:
case 76:
case 4038:
case 776:
case 2444:
case 2623:
case 150:
case 88:
case 3223:
case 1796:
case 1358:
case 2424:
case 654:
case 1890:
case 2528:
case 1050:
case 3369:
case 3509:
case 2429:
case 1966:
case 2262:
case 2371:
case 1029:
case 170:
case 3135:
case 628:
case 1943:
case 3690:
case 3688:
case 2957:
case 2103:
case 1596:
case 737:
case 2666:
case 3019:
case 3097:
case 3709:
case 1024:
case 3432:
case 2728:
case 1130:
case 2748:
case 1044:
case 3266:
case 3891:
case 3583:
case 3051:
case 416:
case 2288:
case 2290:
case 1036:
case 3774:
case 2813:
case 444:
case 3303:
case 2133:
case 3286:
case 2335:
case 173:
case 1611:
case 1882:
case 1100:
case 791:
case 3577:
case 2447:
case 1845:
case 3746:
case 3621:
case 418:
case 3739:
case 1654:
case 2542:
case 3472:
case 2920:
case 1170:
case 2427:
case 2221:
case 626:
case 3820:
case 20:
case 2686:
case 3373:
case 1620:
case 3017:
case 3099:
case 138:
case 3384:
case 2954:
case 1615:
case 2331:
case 109:
case 3610:
case 1516:
case 1841:
case 892:
case 722:
case 3763:
case 1047:
case 3682:
case 724:
case 894:
case 2893:
case 2581:
case 3645:
case 3171:
case 2722:
case 995:
case 2169:
case 3539:
case 3449:
case 3436:
case 2579:
case 515:
case 640:
case 2662:
case 3301:
case 3561:
case 2478:
case 3548:
case 2243:
case 3444:
case 144:
case 2574:
case 473:
case 1451:
case 1990:
case 1419:
case 1291:
case 2223:
case 1518:
case 1866:
case 2504:
case 341:
case 1414:
case 2:
case 3429:
case 3262:
case 3528:
case 3995:
case 2509:
case 647:
case 3103:
case 409:
case 485:
case 3957:
case 1152:
case 2135:
case 1718:
case 977:
case 2704:
case 3305:
case 1008:
case 1843:
case 1300:
case 2432:
case 1455:
case 2709:
case 202:
case 438:
case 3666:
case 3761:
case 3748:
case 2913:
case 1962:
case 1370:
case 2266:
case 970:
case 4047:
case 901:
case 3375:
case 3813:
case 3173:
case 1792:
case 3288:
case 453:
case 3781:
case 2105:
case 67:
case 2840:
case 1945:
case 457:
case 3940:
case 2621:
case 2746:
case 1693:
case 2739:
case 2402:
case 666:
case 3241:
case 2577:
case 3447:
case 507:
case 1254:
case 571:
case 2668:
case 2641:
case 1494:
case 349:
case 500:
case 3920:
case 3585:
case 861:
case 2472:
case 2507:
case 2367:
case 265:
case 1499:
case 1417:
case 2815:
case 1910:
case 710:
case 2373:
case 450:
case 973:
case 1580:
case 2101:
case 195:
case 1886:
case 2017:
case 1240:
case 598:
case 3742:
case 882:
case 2389:
case 401:
case 4029:
case 2094:
case 2610:
case 2854:
case 1356:
case 3581:
case 116:
case 3164:
case 3893:
case 985:
case 3225:
case 1002:
case 65:
case 477:
case 3210:
case 1712:
case 1158:
case 2546:
case 1215:
case 938:
case 2171:
case 94:
case 884:
case 1220:
case 2438:
case 2971:
case 1366:
case 1506:
case 2270:
case 2395:
case 25:
case 1958:
case 1605:
case 2416:
case 3007:
case 3799:
case 3717:
case 542:
case 196:
case 2042:
case 3801:
case 3077:
case 708:
case 243:
case 2022:
case 1233:
case 1287:
case 1141:
case 2753:
case 1168:
case 3154:
case 986:
case 2901:
case 2200:
case 2975:
case 3046:
case 820:
case 665:
case 790:
case 3115:
case 1269:
case 103:
case 3120:
case 3875:
case 3805:
case 159:
case 1485:
case 27:
case 3480:
case 827:
case 797:
case 1145:
case 266:
case 3987:
case 1343:
case 2658:
case 1182:
case 3517:
case 3191:
case 793:
case 823:
case 3973:
case 3009:
case 1724:
case 372:
case 2028:
case 1550:
case 1162:
case 4080:
case 3555:
case 2320:
case 100:
case 1729:
case 268:
case 3967:
case 2873:
case 171:
case 2340:
case 2803:
case 731:
case 3835:
case 1749:
case 2935:
case 1952:
case 1289:
case 2048:
case 3157:
case 374:
case 3903:
case 1549:
case 706:
case 3037:
case 6:
case 3083:
case 3551:
case 3492:
case 354:
case 2311:
case 247:
case 1190:
case 516:
case 3989:
case 1203:
case 3418:
case 3519:
case 3597:
case 3831:
case 1524:
case 1428:
case 2230:
case 198:
case 3984:
case 3755:
case 2354:
case 595:
case 2889:
case 1529:
case 2065:
case 3514:
case 151:
case 3395:
case 1080:
case 1098:
case 1858:
case 2969:
case 3193:
case 1772:
case 915:
case 848:
case 400:
case 83:
case 2717:
case 1633:
case 2964:
case 2871:
case 814:
case 2007:
case 3869:
case 550:
case 1388:
case 557:
case 1205:
case 1439:
case 407:
case 1012:
case 3901:
case 3753:
case 2258:
case 226:
case 2046:
case 2412:
case 867:
case 1271:
case 959:
case 780:
case 1738:
case 903:
case 3887:
case 2140:
case 3833:
case 787:
case 711:
case 1900:
case 2805:
case 1572:
case 1407:
case 1201:
case 1669:
case 3905:
case 2599:
case 3658:
case 3357:
case 2933:
case 366:
case 2498:
case 3496:
case 3028:
case 1689:
case 2719:
case 2797:
case 1310:
case 3867:
case 2973:
case 1123:
case 2191:
case 2967:
case 1684:
case 907:
case 1708:
case 2460:
case 3320:
case 479:
case 228:
case 1930:
case 2835:
case 1231:
case 1437:
case 2074:
case 3340:
case 415:
case 1778:
case 755:
case 274:
case 1345:
case 2079:
case 1143:
case 3935:
case 3256:
case 1479:
case 2393:
case 1321:
case 998:
case 403:
case 775:
case 1578:
case 951:
case 254:
case 3311:
case 347:
case 1474:
case 1603:
case 2492:
case 2083:
case 2551:
case 1956:
case 3884:
case 2519:
case 2831:
case 2418:
case 2989:
case 585:
case 1404:
case 3359:
case 2514:
case 538:
case 3065:
case 4016:
case 3230:
case 1409:
case 135:
case 3931:
case 719:
case 2296:
case 3879:
case 3791:
case 682:
case 1124:
case 312:
case 843:
case 1265:
case 2848:
case 3961:
case 2003:
case 2713:
case 3948:
case 3260:
case 1762:
case 3874:
case 3114:
case 111:
case 1338:
case 3035:
case 348:
case 2660:
case 1136:
case 85:
case 2073:
case 1918:
case 3696:
case 997:
case 1489:
case 2828:
case 530:
case 3809:
case 684:
case 1144:
case 314:
case 87:
case 1609:
case 1960:
case 1248:
case 2089:
case 431:
case 599:
case 866:
case 2399:
case 2317:
case 3965:
case 576:
case 1790:
case 3883:
case 3837:
case 493:
case 908:
case 3155:
case 1562:
case 2513:
case 2430:
case 2983:
case 939:
case 1639:
case 1721:
case 1646:
case 3922:
case 1127:
case 2470:
case 735:
case 3540:
case 906:
case 3863:
case 119:
case 3711:
case 1545:
case 788:
case 497:
case 3877:
case 2963:
case 1912:
case 3117:
case 3199:
case 1582:
case 1487:
case 3616:
case 2885:
case 1525:
case 1998:
case 2069:
case 2842:
case 3759:
case 490:
case 1510:
case 3071:
case 2400:
case 578:
case 3942:
case 1626:
case 3515:
case 1741:
case 3520:
case 3985:
case 2355:
case 1332:
case 408:
case 993:
case 2319:
case 1725:
case 840:
case 3826:
case 1464:
case 346:
case 1000:
case 2698:
case 558:
case 1568:
case 1308:
case 3715:
case 2033:
case 439:
case 1176:
case 1222:
case 2926:
case 1607:
case 3720:
case 2593:
case 1106:
case 3834:
case 183:
case 1285:
case 1677:
case 3740:
case 1242:
case 2946:
case 3839:
case 3846:
case 69:
case 533:
case 1745:
case 669:
case 847:
case 2934:
case 2197:
case 212:
case 2879:
case 1108:
case 3979:
case 1892:
case 1052:
case 2948:
case 3713:
case 759:
case 2260:
case 419:
case 980:
case 692:
case 3003:
case 1566:
case 1306:
case 1818:
case 1431:
case 911:
case 3909:
case 2595:
case 214:
case 1665:
case 513:
case 3828:
case 2809:
case 2151:
case 3067:
case 2696:
case 1743:
case 715:
case 3394:
case 260:
case 2557:
case 3618:
case 2292:
case 1996:
case 3084:
case 108:
case 589:
case 3399:
case 327:
case 4000:
case 320:
case 2218:
case 3692:
case 4070:
case 2591:
case 796:
case 2452:
case 483:
case 1209:
case 779:
case 1347:
case 2155:
case 1132:
case 1812:
case 3470:
case 2540:
case 1226:
case 411:
case 1172:
case 751:
case 3822:
case 4030:
case 2117:
case 2877:
case 564:
case 263:
case 2711:
case 1681:
case 2807:
case 2071:
case 3842:
case 1405:
case 3069:
case 562:
case 1058:
case 2985:
case 1880:
case 2520:
case 1898:
case 3355:
case 480:
case 3907:
case 919:
case 3400:
case 1239:
case 3153:
case 3064:
case 629:
case 3680:
case 1916:
case 3698:
case 2559:
case 246:
case 1324:
case 332:
case 2458:
case 1586:
case 3926:
case 2554:
case 3033:
case 1642:
case 3087:
case 4056:
case 983:
case 1685:
case 1138:
case 3314:
case 1277:
case 2005:
case 1329:
case 1622:
case 2740:
case 3946:
case 3939:
case 2834:
case 1336:
case 771:
case 3593:
case 955:
case 854:
case 193:
case 2298:
case 3612:
case 510:
case 645:
case 334:
case 1344:
case 2733:
case 1699:
case 28:
case 590:
case 3486:
case 2304:
case 2181:
case 3134:
case 1318:
case 3015:
case 424:
case 3202:
case 3627:
case 2468:
case 1010:
case 1694:
case 3139:
case 2672:
case 1253:
case 39:
case 841:
case 478:
case 1025:
case 2309:
case 2569:
case 3328:
case 2227:
case 3348:
case 1045:
case 3361:
case 3126:
case 3040:
case 930:
case 422:
case 1116:
case 2142:
case 12:
case 999:
case 4023:
case 3011:
case 742:
case 3575:
case 976:
case 1847:
case 433:
case 2482:
case 2587:
case 105:
case 3054:
case 3163:
case 2999:
case 2917:
case 1068:
case 2764:
case 1500:
case 1972:
case 539:
case 3059:
case 3817:
case 491:
case 3899:
case 2122:
case 3771:
case 3606:
case 458:
case 3177:
case 2769:
case 506:
case 1850:
case 1932:
case 2955:
case 1614:
case 2236:
case 3731:
case 2608:
case 2307:
case 667:
case 3183:
case 3342:
case 3278:
case 80:
case 3624:
case 456:
case 430:
case 1619:
case 1697:
case 2244:
case 3095:
case 922:
case 3535:
case 2165:
case 3644:
case 164:
case 924:
case 1312:
case 1196:
case 1651:
case 3636:
case 2377:
case 221:
case 3649:
case 660:
case 2462:
case 3208:
case 3322:
case 1530:
case 2678:
case 978:
case 2250:
case 1849:
case 3735:
case 3381:
case 110:
case 648:
case 1062:
case 2128:
case 3109:
case 614:
case 2339:
case 2346:
case 3232:
case 3091:
case 1824:
case 2161:
case 3819:
case 531:
case 4086:
case 2148:
case 2767:
case 46:
case 2632:
case 2914:
case 3466:
case 3814:
case 3650:
case 181:
case 2773:
case 476:
case 2589:
case 292:
case 933:
case 2997:
case 2015:
case 2705:
case 3304:
case 777:
case 2020:
case 2486:
case 3733:
case 1454:
case 345:
case 8:
case 3569:
case 2146:
case 2571:
case 3441:
case 2202:
case 2627:
case 632:
case 2501:
case 2272:
case 1976:
case 511:
case 587:
case 2647:
case 3227:
case 464:
case 701:
case 2775:
case 1217:
case 2040:
case 137:
case 3374:
case 1299:
case 1411:
case 2011:
case 3206:
case 1440:
case 804:
case 3142:
case 2953:
case 3383:
case 736:
case 905:
case 989:
case 3853:
case 1180:
case 4062:
case 2575:
case 1802:
case 3410:
case 3999:
case 1872:
case 2365:
case 3764:
case 1396:
case 2894:
case 417:
case 3587:
case 3533:
case 2238:
case 3994:
case 1420:
case 1086:
case 92:
case 1415:
case 2771:
case 2899:
case 2183:
case 2342:
case 2278:
case 620:
case 865:
case 3608:
case 178:
case 3784:
case 261:
case 3249:
case 1251:
case 1832:
case 413:
case 124:
case 3244:
case 1066:
case 2624:
case 3573:
case 709:
case 962:
case 3363:
case 3503:
case 1219:
case 1297:
case 2535:
case 627:
case 4082:
case 1160:
case 2208:
case 321:
case 3013:
case 1944:
case 394:
case 981:
case 3951:
case 2381:
case 3250:
case 133:
case 2735:
case 1023:
case 2091:
case 3346:
case 2109:
case 2466:
case 555:
case 1043:
case 3914:
case 2179:
case 2897:
case 2819:
case 2057:
case 2531:
case 3584:
case 282:
case 489:
case 3997:
case 392:
case 1924:
case 910:
case 1808:
case 2814:
case 4068:
case 1316:
case 1513:
case 803:
case 2562:
case 2302:
case 4075:
case 3132:
case 1937:
case 3209:
case 3661:
case 3523:
case 3204:
case 2150:
case 1692:
case 678:
case 2403:
case 3860:
case 1399:
case 1317:
case 3543:
case 2788:
case 308:
case 3327:
case 1394:
case 339:
case 3279:
case 1865:
case 2960:
case 2372:
case 1089:
case 2467:
case 2261:
case 2489:
case 390:
case 912:
case 1067:
case 3743:
case 2918:
case 2144:
case 726:
case 2588:
case 3431:
case 569:
case 1660:
case 879:
case 3566:
case 633:
case 2762:
case 287:
case 3376:
case 1003:
case 2129:
case 815:
case 93:
case 211:
case 914:
case 2992:
case 2265:
case 397:
case 2124:
case 1861:
case 2745:
case 3344:
case 1612:
case 393:
case 3336:
case 3349:
case 2285:
case 2106:
case 630:
case 2521:
case 3401:
case 1946:
case 2378:
case 2541:
case 2568:
case 582:
case 3329:
case 2607:
case 2469:
case 1087:
case 2176:
case 851:
case 4031:
case 132:
case 3324:
case 1397:
case 1319:
case 3916:
case 1680:
case 1907:
case 1153:
case 3239:
case 306:
case 1400:
case 2768:
case 2147:
case 3058:
case 800:
case 43:
case 3880:
case 3102:
case 871:
case 448:
case 2980:
case 123:
case 2998:
case 1069:
case 3350:
case 3786:
case 2487:
case 2510:
case 2634:
case 1216:
case 1963:
case 3475:
case 412:
case 2545:
case 1822:
case 807:
case 2639:
case 676:
case 2721:
case 1793:
case 1977:
case 2127:
case 662:
case 1353:
case 2347:
case 2132:
case 3403:
case 2204:
case 1452:
case 2523:
case 1883:
case 3674:
case 1591:
case 3790:
case 3788:
case 1292:
case 2996:
case 1557:
case 3604:
case 920:
case 2860:
case 3261:
case 2766:
case 3960:
case 3896:
case 1795:
case 239:
case 1809:
case 3588:
case 423:
case 1757:
case 58:
case 1696:
case 3918:
case 3149:
case 380:
case 545:
case 2306:
case 1928:
case 3484:
case 886:
case 2431:
case 2283:
case 13:
case 2892:
case 1035:
case 311:
case 3129:
case 77:
case 529:
case 387:
case 1874:
case 1948:
case 3637:
case 3124:
case 3265:
case 1197:
case 1119:
case 1879:
case 1791:
case 1981:
case 3782:
case 3663:
case 2344:
case 3070:
case 3242:
case 3378:
case 1740:
case 2207:
case 768:
case 3677:
case 2349:
case 3285:
case 613:
case 2642:
case 3176:
case 1554:
case 3568:
case 835:
case 2329:
case 2685:
case 91:
case 888:
case 592:
case 3000:
case 1559:
case 3464:
case 2916:
case 1212:
case 2263:
case 1826:
case 2586:
case 2324:
case 375:
case 1985:
case 2880:
case 2239:
case 2246:
case 3626:
case 1515:
case 2405:
case 4067:
case 1807:
case 3433:
case 2234:
case 3525:
case 747:
case 740:
case 2681:
case 3545:
case 163:
case 3634:
case 3912:
case 1001:
case 1877:
case 4003:
case 3127:
case 689:
case 319:
case 1863:
case 521:
case 1122:
case 36:
case 2500:
case 1276:
case 1769:
case 3086:
case 3927:
case 1425:
case 870:
case 1533:
case 1587:
case 2827:
case 2041:
case 376:
case 1917:
case 877:
case 606:
case 2021:
case 4091:
case 1142:
case 1337:
case 1638:
case 1206:
case 3217:
case 857:
case 631:
case 2392:
case 99:
case 3294:
case 1602:
case 2493:
case 2045:
case 2770:
case 969:
case 3976:
case 3653:
case 53:
case 1247:
case 1468:
case 548:
case 2025:
case 704:
case 3454:
case 2253:
case 3558:
case 836:
case 4095:
case 514:
case 213:
case 2806:
case 3459:
case 356:
case 2829:
case 1589:
case 3808:
case 3192:
case 1773:
case 281:
case 4054:
case 1919:
case 3924:
case 192:
case 2556:
case 1490:
case 1488:
case 1148:
case 697:
case 1161:
case 1584:
case 2908:
case 838:
case 4059:
case 84:
case 984:
case 1914:
case 1767:
case 3043:
case 2978:
case 1339:
case 4011:
case 3023:
case 982:
case 690:
case 3949:
case 2730:
case 210:
case 1334:
case 333:
case 2836:
case 1250:
case 2849:
case 3944:
case 853:
case 3878:
case 1703:
case 1229:
case 3214:
case 608:
case 3297:
case 264:
case 1224:
case 322:
case 2651:
case 2312:
case 2196:
case 639:
case 4040:
case 2619:
case 1244:
case 4015:
case 1573:
case 4020:
case 3457:
case 2756:
case 2398:
case 3832:
case 3950:
case 1608:
case 1955:
case 2090:
case 49:
case 1784:
case 1177:
case 299:
case 2420:
case 1817:
case 26:
case 2415:
case 1505:
case 276:
case 3041:
case 3827:
case 1894:
case 2758:
case 2112:
case 1575:
case 675:
case 4013:
case 2198:
case 1701:
case 1676:
case 32:
case 1953:
case 3116:
case 3876:
case 1775:
case 2299:
case 237:
case 421:
case 3770:
case 2653:
case 1348:
case 1361:
case 945:
case 818:
case 2294:
case 19:
case 1139:
case 1328:
case 1627:
case 1202:
case 2906:
case 169:
case 3694:
case 2459:
case 1705:
case 230:
case 1015:
case 3699:
case 2924:
case 687:
case 317:
case 2192:
case 994:
case 1814:
case 611:
case 532:
case 2808:
case 3655:
case 895:
case 1466:
case 725:
case 182:
case 1897:
case 2936:
case 2255:
case 3730:
case 51:
case 1091:
case 3978:
case 3844:
case 184:
case 70:
case 2944:
case 3062:
case 233:
case 1735:
case 534:
case 3836:
case 3849:
case 992:
case 680:
case 310:
case 3530:
case 429:
case 1208:
case 3312:
case 3651:
case 2552:
case 1535:
case 2297:
case 1644:
case 2491:
case 1095:
case 2832:
case 1855:
case 2251:
case 1443:
case 1624:
case 3697:
case 3619:
case 2066:
case 523:
case 1342:
case 921:
case 161:
case 3614:
case 3850:
case 278:
case 1731:
case 1173:
case 526:
case 3792:
case 2923:
case 1375:
case 1748:
case 1167:
case 902:
case 769:
case 1728:
case 2024:
case 2130:
case 4017:
case 805:
case 889:
case 270:
case 2029:
case 1565:
case 2596:
case 1450:
case 1103:
case 4094:
case 1957:
case 1995:
case 2890:
case 1528:
case 2050:
case 3414:
case 465:
case 2966:
case 3760:
case 1765:
case 2657:
case 342:
case 1424:
case 3032:
case 3990:
case 2796:
case 2358:
case 3419:
case 1189:
case 3451:
case 3257:
case 635:
case 2691:
case 1444:
case 1561:
case 9:
case 1449:
case 1436:
case 2640:
case 1722:
case 4051:
case 1169:
case 1210:
case 316:
case 1164:
case 253:
case 1225:
case 881:
case 3780:
case 3798:
case 3356:
case 209:
case 1282:
case 285:
case 552:
case 817:
case 2516:
case 3240:
case 3968:
case 2620:
case 402:
case 1331:
case 4019:
case 238:
case 3598:
case 3580:
case 3417:
case 3499:
case 572:
case 2810:
case 1915:
case 2293:
case 1427:
case 1920:
case 2825:
case 784:
case 2453:
case 2100:
case 125:
case 3254:
case 2882:
case 2845:
case 782:
case 1447:
case 1133:
case 2076:
case 1187:
case 864:
case 1781:
case 1335:
case 2352:
case 3982:
case 377:
case 1774:
case 78:
case 600:
case 3049:
case 2823:
case 1891:
case 1779:
case 2962:
case 1266:
case 3044:
case 745:
case 899:
case 2843:
case 57:
case 3130:
case 1857:
case 1097:
case 1019:
case 1709:
case 1387:
case 1333:
case 3596:
case 876:
case 2008:
case 1704:
case 1690:
case 301:
case 1014:
case 1135:
case 2152:
case 3943:
case 2718:
case 1:
case 2760:
case 55:
case 2414:
case 1369:
case 3050:
case 1223:
case 2032:
case 242:
case 2988:
case 40:
case 3796:
case 856:
case 830:
case 1504:
case 336:
case 2866:
case 1574:
case 244:
case 698:
case 2451:
case 2257:
case 651:
case 1662:
case 1737:
case 2613:
case 1579:
case 1131:
case 941:
case 218:
case 1811:
case 1546:
case 1539:
case 2220:
case 1171:
case 696:
case 2921:
case 353:
case 1534:
case 216:
case 3047:
case 2002:
case 3841:
case 3516:
case 3868:
case 1389:
case 2780:
case 1094:
case 615:
case 1610:
case 3615:
case 1526:
case 1384:
case 338:
case 1101:
case 34:
case 891:
case 858:
case 1099:
case 1017:
case 2240:
case 2968:
case 603:
case 1373:
case 3716:
case 2910:
case 3006:
case 2925:
case 2580:
case 794:
case 3659:
case 3825:
case 1726:
case 3293:
case 925:
case 3654:
case 165:
case 1507:
case 441:
case 878:
case 1577:
case 1621:
case 1746:
case 2693:
case 1739:
case 1402:
case 2330:
case 3453:
case 949:
case 90:
case 2038:
case 1105:
case 3611:
case 1303:
case 1563:
case 659:
case 2945:
case 792:
case 3076:
case 3664:
case 166:
case 2145:
case 712:
case 2800:
case 2343:
case 926:
case 3572:
case 3900:
case 3669:
case 3201:
case 2671:
case 1081:
case 1553:
case 203:
case 504:
case 3738:
case 3502:
case 3362:
case 2547:
case 2264:
case 2870:
case 2125:
case 454:
case 2323:
case 1391:
case 4083:
case 428:
case 2141:
case 887:
case 1200:
case 2576:
case 811:
case 3012:
case 1901:
case 760:
case 695:
case 4079:
case 2481:
case 2233:
case 143:
case 3434:
case 4009:
case 3388:
case 2958:
case 767:
case 1416:
case 2366:
case 1270:
case 1193:
case 1864:
case 616:
case 3426:
case 3080:
case 880:
case 279:
case 3732:
case 335:
case 2428:
case 3341:
case 251:
case 1889:
case 954:
case 2203:
case 1359:
case 3956:
case 2524:
case 618:
case 4026:
case 3603:
case 952:
case 426:
case 4046:
case 2273:
case 2190:
case 2188:
case 147:
case 3474:
case 2461:
case 642:
case 2448:
case 883:
case 2549:
case 3321:
case 1256:
case 746:
case 2830:
case 2952:
case 3382:
case 1061:
case 2744:
case 1048:
case 2289:
case 1803:
case 2749:
case 3483:
case 1320:
case 3532:
case 271:
case 168:
case 1873:
case 3018:
case 875:
case 3708:
case 200:
case 2631:
case 1867:
case 2465:
case 1028:
case 2724:
case 3182:
case 3343:
case 1599:
case 1517:
case 808:
case 1480:
case 1987:
case 1594:
case 359:
case 3671:
case 673:
case 4065:
case 3016:
case 2407:
case 1805:
case 2900:
case 2572:
case 3706:
case 3442:
case 2271:
case 1120:
case 2477:
case 1875:
case 2362:
case 2502:
case 3776:
case 3269:
case 1115:
case 2738:
case 3110:
case 966:
case 1258:
case 3125:
case 1412:
case 3264:
case 1046:
case 3870:
case 1063:
case 2446:
case 2702:
case 2439:
case 95:
case 3168:
case 1670:
case 3481:
case 3675:
case 1159:
case 4048:
case 64:
case 4061:
case 1964:
case 396:
case 1799:
case 2633:
case 2390:
case 720:
case 4028:
case 2080:
case 2858:
case 1794:
case 1600:
case 653:
case 3121:
case 351:
case 2732:
case 1755:
case 3428:
case 3096:
case 47:
case 398:
case 1831:
case 1597:
case 1519:
case 1252:
case 2235:
case 2673:
case 3386:
case 2404:
case 2060:
case 947:
case 893:
case 3544:
case 723:
case 154:
case 3273:
case 3190:
case 1083:
case 1551:
case 1492:
case 1393:
case 2479:
case 3549:
case 3536:
case 2578:
case 3461:
case 3267:
case 174:
case 3289:
case 443:
case 2143:
case 3952:
case 1079:
case 2382:
case 2483:
case 670:
case 601:
case 3736:
case 128:
case 2930:
case 1835:
case 968:
case 307:
case 525:
case 300:
case 3729:
case 3631:
case 549:
case 371:
case 1967:
case 2684:
case 3162:
case 45:
case 806:
case 1555:
case 2689:
case 1009:
case 3724:
case 1191:
case 3465:
case 1656:
case 4042:
case 2310:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743386401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,];
var gg_b = "1743386401/";

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
