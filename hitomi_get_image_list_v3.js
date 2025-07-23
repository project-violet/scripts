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
case 3959:
case 355:
case 3986:
case 1029:
case 1083:
case 3736:
case 2102:
case 2365:
case 660:
case 683:
case 2984:
case 82:
case 433:
case 2245:
case 3757:
case 195:
case 2378:
case 3017:
case 2079:
case 53:
case 3000:
case 201:
case 1541:
case 275:
case 2027:
case 1934:
case 1408:
case 2033:
case 2895:
case 1077:
case 704:
case 3286:
case 1484:
case 360:
case 602:
case 1103:
case 245:
case 3099:
case 3398:
case 3813:
case 89:
case 655:
case 3044:
case 109:
case 1609:
case 1839:
case 125:
case 2889:
case 1745:
case 3180:
case 2823:
case 3436:
case 1032:
case 3854:
case 3620:
case 1873:
case 2607:
case 3148:
case 2908:
case 2434:
case 2829:
case 3012:
case 3794:
case 1304:
case 3214:
case 2551:
case 3947:
case 3752:
case 3648:
case 2107:
case 589:
case 826:
case 779:
case 3680:
case 1879:
case 834:
case 2796:
case 3749:
case 3226:
case 3476:
case 1424:
case 3751:
case 536:
case 608:
case 3253:
case 181:
case 2594:
case 1109:
case 1095:
case 2474:
case 2224:
case 1960:
case 310:
case 2022:
case 2877:
case 3819:
case 1255:
case 1833:
case 956:
case 3914:
case 3451:
case 2601:
case 2831:
case 1846:
case 2774:
case 2916:
case 2039:
case 2338:
case 687:
case 437:
case 289:
case 1296:
case 1974:
case 1716:
case 3953:
case 610:
case 3926:
case 3452:
case 757:
case 1388:
case 2576:
case 3025:
case 1881:
case 749:
case 236:
case 2496:
case 2924:
case 2073:
case 1526:
case 3449:
case 968:
case 1955:
case 3574:
case 2373:
case 1616:
case 1040:
case 1337:
case 3501:
case 1901:
case 3136:
case 1356:
case 1323:
case 4019:
case 2701:
case 3502:
case 3405:
case 2339:
case 1850:
case 1403:
case 215:
case 1184:
case 72:
case 2315:
case 1902:
case 2401:
case 3818:
case 2548:
case 3705:
case 885:
case 2322:
case 1108:
case 1201:
case 3311:
case 3393:
case 506:
case 3143:
case 2903:
case 2402:
case 1530:
case 164:
case 804:
case 3694:
case 3649:
case 948:
case 769:
case 3312:
case 1202:
case 79:
case 1004:
case 2381:
case 2840:
case 3510:
case 3061:
case 186:
case 454:
case 20:
case 1645:
case 531:
case 2707:
case 927:
case 1332:
case 3643:
case 942:
case 3869:
case 3194:
case 2160:
case 1910:
case 640:
case 2050:
case 1608:
case 1838:
case 139:
case 2710:
case 3062:
case 3344:
case 2:
case 3098:
case 2266:
case 1331:
case 734:
case 3507:
case 482:
case 2346:
case 265:
case 2209:
case 857:
case 2333:
case 2174:
case 1766:
case 997:
case 2155:
case 2327:
case 4092:
case 4054:
case 231:
case 3300:
case 1210:
case 50:
case 849:
case 3176:
case 3317:
case 2379:
case 1207:
case 2990:
case 403:
case 332:
case 1329:
case 1564:
case 2407:
case 2804:
case 972:
case 1383:
case 1028:
case 3958:
case 891:
case 3420:
case 4091:
case 2966:
case 1433:
case 3200:
case 1782:
case 677:
case 2477:
case 1932:
case 2874:
case 1746:
case 2597:
case 591:
case 3532:
case 2731:
case 2233:
case 1824:
case 1650:
case 2008:
case 2981:
case 3370:
case 692:
case 3106:
case 1931:
case 794:
case 557:
case 1283:
case 3999:
case 3944:
case 3285:
case 549:
case 347:
case 80:
case 322:
case 2732:
case 3531:
case 3797:
case 4005:
case 3849:
case 1034:
case 3663:
case 2896:
case 789:
case 937:
case 1232:
case 2535:
case 579:
case 2933:
case 377:
case 1665:
case 456:
case 3894:
case 1500:
case 2281:
case 3497:
case 1678:
case 3086:
case 724:
case 1733:
case 249:
case 736:
case 831:
case 622:
case 1138:
case 2246:
case 1585:
case 2777:
case 3719:
case 3299:
case 152:
case 1446:
case 3042:
case 2084:
case 2390:
case 2431:
case 2979:
case 3851:
case 257:
case 105:
case 3735:
case 1727:
case 3618:
case 3026:
case 933:
case 2554:
case 1272:
case 1422:
case 1739:
case 628:
case 2495:
case 3537:
case 815:
case 3118:
case 1923:
case 3211:
case 158:
case 1956:
case 1638:
case 1808:
case 398:
case 3556:
case 2024:
case 3523:
case 3925:
case 1937:
case 2568:
case 373:
case 418:
case 1787:
case 2915:
case 3212:
case 3843:
case 3792:
case 3014:
case 2737:
case 2688:
case 643:
case 1421:
case 1271:
case 806:
case 2471:
case 775:
case 1845:
case 2756:
case 2604:
case 3492:
case 2834:
case 11:
case 1972:
case 2437:
case 3993:
case 673:
case 1289:
case 1256:
case 3857:
case 1721:
case 3454:
case 45:
case 3836:
case 204:
case 1593:
case 1060:
case 2771:
case 2423:
case 2456:
case 2489:
case 2215:
case 1971:
case 2287:
case 3047:
case 3491:
case 3330:
case 4020:
case 1150:
case 2239:
case 1884:
case 1512:
case 2303:
case 343:
case 1487:
case 427:
case 3504:
case 1622:
case 2131:
case 4043:
case 894:
case 2238:
case 2695:
case 1866:
case 3267:
case 1904:
case 1438:
case 2672:
case 3197:
case 2488:
case 680:
case 430:
case 7:
case 1621:
case 2704:
case 234:
case 226:
case 1181:
case 2671:
case 3706:
case 0:
case 2440:
case 2788:
case 2129:
case 3820:
case 3654:
case 497:
case 2938:
case 3692:
case 731:
case 2404:
case 2637:
case 2316:
case 519:
case 824:
case 2807:
case 765:
case 1179:
case 1002:
case 1204:
case 3314:
case 1127:
case 3135:
case 4057:
case 889:
case 3613:
case 3691:
case 2324:
case 111:
case 1639:
case 1809:
case 3588:
case 2810:
case 1988:
case 2177:
case 1687:
case 1615:
case 1738:
case 451:
case 3326:
case 903:
case 526:
case 1187:
case 478:
case 3619:
case 2677:
case 2250:
case 135:
case 3064:
case 1633:
case 3262:
case 1928:
case 1450:
case 3113:
case 3718:
case 3635:
case 1627:
case 3298:
case 3359:
case 3058:
case 706:
case 2189:
case 3261:
case 3168:
case 3880:
case 2123:
case 3341:
case 2683:
case 1173:
case 3154:
case 4076:
case 907:
case 569:
case 2137:
case 1765:
case 3192:
case 14:
case 2278:
case 1681:
case 3962:
case 988:
case 2345:
case 1598:
case 4051:
case 2632:
case 3998:
case 1562:
case 1478:
case 613:
case 2308:
case 2009:
case 3961:
case 1682:
case 4049:
case 667:
case 4094:
case 3418:
case 845:
case 2195:
case 1646:
case 1561:
case 1010:
case 1122:
case 3292:
case 2995:
case 3380:
case 3712:
case 2060:
case 1922:
case 2237:
case 3094:
case 864:
case 1489:
case 1456:
case 1273:
case 1771:
case 3254:
case 1423:
case 2972:
case 709:
case 1604:
case 2096:
case 21:
case 3522:
case 2721:
case 3268:
case 2289:
case 3348:
case 1772:
case 678:
case 2415:
case 2487:
case 3793:
case 3291:
case 4070:
case 3305:
case 1795:
case 2722:
case 3521:
case 1287:
case 3886:
case 2971:
case 3859:
case 2937:
case 3076:
case 2638:
case 1024:
case 2715:
case 467:
case 3411:
case 2074:
case 1495:
case 2739:
case 2272:
case 3975:
case 1554:
case 3573:
case 1592:
case 258:
case 2956:
case 2989:
case 3968:
case 1640:
case 1939:
case 3412:
case 3587:
case 266:
case 1756:
case 88:
case 3515:
case 2845:
case 623:
case 4058:
case 1789:
case 3991:
case 1471:
case 1221:
case 938:
case 413:
case 1513:
case 378:
case 1915:
case 1591:
case 2773:
case 2271:
case 2178:
case 393:
case 1188:
case 1432:
case 1783:
case 3919:
case 351:
case 3785:
case 191:
case 1519:
case 1140:
case 2034:
case 2779:
case 1628:
case 1896:
case 271:
case 1431:
case 229:
case 3700:
case 2446:
case 1084:
case 627:
case 2727:
case 3167:
case 940:
case 3847:
case 3579:
case 2138:
case 2733:
case 1366:
case 2482:
case 252:
case 2929:
case 417:
case 1233:
case 1731:
case 516:
case 3662:
case 3799:
case 2277:
case 3219:
case 1981:
case 1309:
case 1008:
case 970:
case 2824:
case 2310:
case 179:
case 121:
case 2782:
case 3744:
case 3853:
case 3997:
case 1477:
case 3826:
case 1227:
case 3698:
case 26:
case 1104:
case 1045:
case 697:
case 2599:
case 299:
case 552:
case 1279:
case 3661:
case 1732:
case 1483:
case 529:
case 3485:
case 2544:
case 2283:
case 3582:
case 2229:
case 2478:
case 2562:
case 2121:
case 3343:
case 1632:
case 27:
case 443:
case 1171:
case 1428:
case 1278:
case 3112:
case 428:
case 35:
case 983:
case 2122:
case 1801:
case 2010:
case 2561:
case 3762:
case 1195:
case 1009:
case 3111:
case 3193:
case 825:
case 1308:
case 19:
case 2682:
case 169:
case 3600:
case 3830:
case 261:
case 1066:
case 2139:
case 3462:
case 235:
case 3498:
case 1563:
case 1965:
case 2115:
case 1090:
case 2803:
case 1683:
case 2334:
case 24:
case 3918:
case 65:
case 1189:
case 3336:
case 902:
case 1728:
case 1156:
case 2679:
case 3685:
case 12:
case 3538:
case 1656:
case 1623:
case 4042:
case 312:
case 2204:
case 1740:
case 844:
case 3185:
case 2673:
case 908:
case 4059:
case 1637:
case 1807:
case 3206:
case 1316:
case 1938:
case 1404:
case 2567:
case 477:
case 2001:
case 1177:
case 2687:
case 1810:
case 2988:
case 4041:
case 3767:
case 2940:
case 1324:
case 3100:
case 546:
case 422:
case 881:
case 1506:
case 3858:
case 2866:
case 3005:
case 2438:
case 668:
case 2890:
case 612:
case 2146:
case 1238:
case 1695:
case 2622:
case 576:
case 714:
case 3048:
case 987:
case 874:
case 2396:
case 3352:
case 1132:
case 2621:
case 1488:
case 3080:
case 134:
case 716:
case 3726:
case 3158:
case 811:
case 1338:
case 1039:
case 3753:
case 1774:
case 189:
case 2514:
case 3844:
case 3013:
case 3091:
case 2190:
case 3516:
case 2846:
case 432:
case 303:
case 1755:
case 784:
case 1924:
case 1496:
case 3714:
case 3976:
case 2037:
case 2340:
case 3294:
case 2955:
case 2553:
case 752:
case 2526:
case 581:
case 771:
case 244:
case 1460:
case 3249:
case 1576:
case 440:
case 3068:
case 2089:
case 2056:
case 3306:
case 3817:
case 3414:
case 1021:
case 2304:
case 1760:
case 1829:
case 2416:
case 470:
case 1107:
case 1551:
case 1877:
case 544:
case 2960:
case 1224:
case 2603:
case 2255:
case 3952:
case 2996:
case 2424:
case 76:
case 2274:
case 2827:
case 799:
case 4061:
case 2109:
case 3949:
case 1594:
case 3800:
case 209:
case 3486:
case 607:
case 71:
case 1284:
case 2609:
case 3442:
case 1610:
case 1046:
case 2031:
case 3943:
case 145:
case 595:
case 13:
case 388:
case 1607:
case 1081:
case 3825:
case 1837:
case 3670:
case 87:
case 3508:
case 2234:
case 1102:
case 4067:
case 1365:
case 2559:
case 2586:
case 1378:
case 84:
case 3363:
case 967:
case 2542:
case 3786:
case 3664:
case 2077:
case 3019:
case 3318:
case 835:
case 3957:
case 2666:
case 3811:
case 2541:
case 3893:
case 3658:
case 861:
case 438:
case 2934:
case 2408:
case 1872:
case 175:
case 1027:
case 586:
case 4025:
case 1155:
case 3659:
case 3686:
case 2124:
case 2210:
case 2377:
case 1209:
case 165:
case 3018:
case 805:
case 1333:
case 2766:
case 514:
case 829:
case 3126:
case 3063:
case 1634:
case 2028:
case 2329:
case 1407:
case 1966:
case 337:
case 816:
case 2207:
case 1379:
case 3470:
case 3114:
case 2332:
case 3397:
case 3509:
case 390:
case 2910:
case 214:
case 286:
case 1381:
case 899:
case 4011:
case 620:
case 2645:
case 1196:
case 86:
case 1:
case 1266:
case 3867:
case 2608:
case 4012:
case 2570:
case 1710:
case 239:
case 2466:
case 1290:
case 746:
case 841:
case 3948:
case 1401:
case 3980:
case 2371:
case 1696:
case 2145:
case 2202:
case 460:
case 483:
case 1903:
case 633:
case 1505:
case 928:
case 264:
case 1660:
case 2323:
case 2356:
case 3248:
case 2901:
case 3375:
case 3614:
case 4000:
case 1373:
case 3354:
case 28:
case 866:
case 3392:
case 106:
case 3861:
case 2337:
case 2403:
case 115:
case 333:
case 3898:
case 2902:
case 1674:
case 3653:
case 3391:
case 3313:
case 1701:
case 1038:
case 973:
case 1339:
case 3186:
case 1041:
case 1497:
case 3977:
case 1169:
case 1894:
case 1852:
case 3665:
case 177:
case 2935:
case 2533:
case 3481:
case 496:
case 3034:
case 1663:
case 3779:
case 837:
case 1577:
case 641:
case 316:
case 1618:
case 305:
case 3727:
case 2499:
case 1917:
case 2167:
case 965:
case 329:
case 1985:
case 1529:
case 1042:
case 352:
case 1299:
case 3983:
case 1719:
case 2579:
case 820:
case 297:
case 2444:
case 699:
case 3482:
case 1059:
case 3231:
case 3277:
case 2219:
case 3427:
case 1435:
case 2799:
case 2400:
case 1532:
case 341:
case 2662:
case 2997:
case 2853:
case 3932:
case 2698:
case 9:
case 2581:
case 3433:
case 3307:
case 3816:
case 1217:
case 1797:
case 419:
case 1531:
case 754:
case 147:
case 36:
case 597:
case 3599:
case 399:
case 159:
case 605:
case 3283:
case 3544:
case 2582:
case 2043:
case 671:
case 3931:
case 4003:
case 227:
case 1370:
case 658:
case 1468:
case 2712:
case 3511:
case 3995:
case 3593:
case 2380:
case 1225:
case 3237:
case 1836:
case 2268:
case 3473:
case 49:
case 3289:
case 3972:
case 2275:
case 4009:
case 31:
case 1492:
case 248:
case 3096:
case 2198:
case 3487:
case 593:
case 2842:
case 2711:
case 3884:
case 1571:
case 1047:
case 3971:
case 1912:
case 3722:
case 2521:
case 666:
case 3787:
case 2493:
case 3055:
case 2411:
case 3937:
case 1925:
case 2076:
case 198:
case 3808:
case 3295:
case 2667:
case 3301:
case 3989:
case 1713:
case 1293:
case 2968:
case 42:
case 833:
case 3923:
case 3074:
case 1053:
case 3739:
case 2975:
case 915:
case 2573:
case 1163:
case 2991:
case 523:
case 2515:
case 1768:
case 4066:
case 906:
case 2412:
case 1775:
case 366:
case 3773:
case 3271:
case 1754:
case 2539:
case 3178:
case 293:
case 2725:
case 1014:
case 1792:
case 3165:
case 1843:
case 3302:
case 3002:
case 376:
case 1406:
case 1967:
case 2117:
case 4084:
case 3567:
case 1692:
case 1769:
case 1820:
case 3673:
case 936:
case 1353:
case 3133:
case 3738:
case 3615:
case 2969:
case 3001:
case 3988:
case 163:
case 1588:
case 2376:
case 3639:
case 2100:
case 989:
case 491:
case 1613:
case 2767:
case 1135:
case 2144:
case 3438:
case 568:
case 2611:
case 3866:
case 2693:
case 2351:
case 3622:
case 1504:
case 2199:
case 2864:
case 3396:
case 346:
case 3288:
case 2349:
case 3181:
case 2080:
case 3240:
case 3621:
case 1469:
case 421:
case 1197:
case 3465:
case 1070:
case 485:
case 3228:
case 3478:
case 3562:
case 2263:
case 1998:
case 2343:
case 1962:
case 93:
case 1463:
case 888:
case 3561:
case 3646:
case 562:
case 200:
case 3750:
case 3682:
case 2111:
case 2218:
case 2798:
case 2830:
case 2600:
case 975:
case 2578:
case 2462:
case 1635:
case 1718:
case 1805:
case 453:
case 4016:
case 3928:
case 67:
case 1262:
case 3633:
case 1342:
case 113:
case 335:
case 1619:
case 2498:
case 167:
case 1192:
case 218:
case 2357:
case 2125:
case 2461:
case 3334:
case 262:
case 500:
case 2918:
case 733:
case 2617:
case 55:
case 1763:
case 3839:
case 3609:
case 2459:
case 1362:
case 2486:
case 1105:
case 1242:
case 1813:
case 748:
case 1099:
case 3103:
case 183:
case 800:
case 3887:
case 3031:
case 723:
case 1743:
case 1241:
case 1361:
case 3873:
case 1875:
case 3032:
case 1436:
case 3234:
case 1868:
case 2508:
case 2257:
case 3745:
case 3586:
case 1942:
case 1757:
case 415:
case 862:
case 1736:
case 625:
case 2584:
case 2812:
case 3542:
case 2741:
case 609:
case 1986:
case 1959:
case 207:
case 818:
case 3445:
case 2019:
case 2318:
case 793:
case 2786:
case 2759:
case 3690:
case 406:
case 2035:
case 3541:
case 3784:
case 996:
case 2447:
case 2013:
case 2726:
case 674:
case 582:
case 2516:
case 856:
case 1367:
case 4065:
case 3190:
case 3724:
case 1914:
case 2899:
case 3553:
case 2054:
case 681:
case 431:
case 797:
case 3340:
case 3037:
case 3881:
case 1025:
case 2068:
case 3023:
case 2249:
case 3388:
case 2369:
case 3716:
case 465:
case 503:
case 934:
case 926:
case 3547:
case 3879:
case 2951:
case 2170:
case 3071:
case 1648:
case 3304:
case 1120:
case 4050:
case 1794:
case 1012:
case 2952:
case 2747:
case 1596:
case 2426:
case 2994:
case 1819:
case 2276:
case 110:
case 3095:
case 1011:
case 381:
case 2630:
case 1253:
case 1751:
case 3424:
case 1605:
case 1393:
case 68:
case 1651:
case 1818:
case 985:
case 3145:
case 2905:
case 1312:
case 1780:
case 1694:
case 2006:
case 904:
case 4046:
case 1748:
case 1143:
case 2375:
case 2141:
case 893:
case 4033:
case 3356:
case 3389:
case 2392:
case 2280:
case 475:
case 1157:
case 3040:
case 2861:
case 3616:
case 2354:
case 38:
case 3902:
case 2898:
case 762:
case 3184:
case 3403:
case 1067:
case 3624:
case 718:
case 2186:
case 1405:
case 2862:
case 2430:
case 2659:
case 2686:
case 768:
case 897:
case 4073:
case 220:
case 949:
case 424:
case 2335:
case 3684:
case 140:
case 3766:
case 712:
case 2153:
case 2126:
case 2319:
case 3116:
case 1270:
case 1420:
case 1958:
case 237:
case 3028:
case 2063:
case 991:
case 1964:
case 2470:
case 2114:
case 1385:
case 1636:
case 3207:
case 2566:
case 842:
case 827:
case 2509:
case 290:
case 314:
case 1869:
case 494:
case 2397:
case 2770:
case 830:
case 1258:
case 4021:
case 3490:
case 2867:
case 3709:
case 3466:
case 1062:
case 339:
case 2458:
case 537:
case 3838:
case 2147:
case 3608:
case 287:
case 2752:
case 2648:
case 3829:
case 2012:
case 3760:
case 3883:
case 2120:
case 2680:
case 3796:
case 1951:
case 1800:
case 1949:
case 1630:
case 2011:
case 3455:
case 2605:
case 2751:
case 3552:
case 414:
case 2596:
case 1453:
case 3110:
case 1426:
case 394:
case 1276:
case 2819:
case 3831:
case 3087:
case 2367:
case 3601:
case 2247:
case 103:
case 2776:
case 2914:
case 587:
case 1447:
case 1091:
case 1013:
case 911:
case 1844:
case 3774:
case 3039:
case 4028:
case 1726:
case 1158:
case 2452:
case 1369:
case 1249:
case 3576:
case 2555:
case 792:
case 3460:
case 510:
case 3602:
case 3832:
case 2926:
case 1252:
case 1294:
case 2025:
case 324:
case 1976:
case 1714:
case 3924:
case 208:
case 1092:
case 336:
case 94:
case 2959:
case 3871:
case 255:
case 3378:
case 2085:
case 560:
case 3245:
case 1035:
case 375:
case 961:
case 4040:
case 48:
case 2000:
case 1658:
case 1893:
case 1957:
case 3557:
case 1318:
case 1936:
case 3101:
case 935:
case 1786:
case 2099:
case 2398:
case 2259:
case 2286:
case 728:
case 1442:
case 502:
case 2813:
case 3543:
case 2891:
case 2362:
case 555:
case 2044:
case 1441:
case 97:
case 1508:
case 3856:
case 1670:
case 2180:
case 3837:
case 2892:
case 3434:
case 3908:
case 2241:
case 2743:
case 33:
case 481:
case 822:
case 30:
case 2510:
case 3840:
case 3888:
case 540:
case 1509:
case 859:
case 2643:
case 2152:
case 1458:
case 270:
case 3382:
case 2062:
case 1147:
case 1867:
case 3266:
case 2507:
case 3346:
case 3:
case 3520:
case 2098:
case 1126:
case 240:
case 1153:
case 3174:
case 4023:
case 1018:
case 971:
case 929:
case 365:
case 444:
case 331:
case 2176:
case 1764:
case 3327:
case 1335:
case 650:
case 3990:
case 2385:
case 984:
case 1114:
case 1470:
case 6:
case 780:
case 1641:
case 2270:
case 137:
case 570:
case 916:
case 3407:
case 3634:
case 1063:
case 2157:
case 306:
case 1280:
case 1392:
case 238:
case 2501:
case 1354:
case 3373:
case 1614:
case 2136:
case 4029:
case 1186:
case 1159:
case 2405:
case 2676:
case 767:
case 4083:
case 898:
case 3701:
case 2502:
case 1313:
case 1430:
case 1653:
case 3674:
case 1142:
case 495:
case 958:
case 3315:
case 1898:
case 133:
case 1980:
case 2705:
case 2818:
case 3322:
case 4032:
case 3401:
case 843:
case 606:
case 828:
case 2694:
case 2652:
case 615:
case 3903:
case 1905:
case 3828:
case 3696:
case 425:
case 2930:
case 2649:
case 409:
case 2537:
case 2118:
case 2713:
case 2211:
case 1667:
case 3592:
case 2293:
case 1573:
case 3495:
case 702:
case 528:
case 273:
case 44:
case 2556:
case 3024:
case 3568:
case 2523:
case 1076:
case 2925:
case 3222:
case 1539:
case 2754:
case 2792:
case 2212:
case 3915:
case 178:
case 2014:
case 1725:
case 3737:
case 3221:
case 3723:
case 3471:
case 461:
case 3789:
case 3128:
case 1587:
case 2775:
case 3939:
case 3640:
case 1348:
case 2911:
case 1161:
case 2595:
case 2993:
case 1268:
case 2454:
case 1522:
case 3834:
case 598:
case 148:
case 3437:
case 1425:
case 4010:
case 1254:
case 3771:
case 3273:
case 3456:
case 2606:
case 2475:
case 2836:
case 3922:
case 304:
case 228:
case 1712:
case 783:
case 1380:
case 760:
case 1292:
case 1886:
case 2413:
case 2047:
case 3215:
case 4007:
case 1305:
case 1793:
case 1213:
case 1711:
case 3303:
case 3921:
case 3239:
case 1051:
case 3772:
case 1235:
case 1826:
case 2419:
case 1997:
case 3874:
case 1853:
case 1744:
case 1581:
case 321:
case 379:
case 577:
case 446:
case 3008:
case 3309:
case 1219:
case 1799:
case 2435:
case 3597:
case 3855:
case 1662:
case 691:
case 657:
case 2999:
case 1814:
case 914:
case 2370:
case 142:
case 2106:
case 3483:
case 3732:
case 2531:
case 2217:
case 3279:
case 2797:
case 986:
case 2285:
case 3104:
case 1320:
case 3628:
case 1297:
case 1935:
case 3927:
case 3140:
case 2577:
case 3519:
case 1785:
case 2900:
case 3783:
case 3432:
case 3188:
case 2041:
case 3860:
case 1527:
case 3535:
case 832:
case 2852:
case 2299:
case 2719:
case 2086:
case 2059:
case 349:
case 708:
case 197:
case 3246:
case 547:
case 2851:
case 3979:
case 357:
case 2618:
case 292:
case 2042:
case 3084:
case 2529:
case 2364:
case 1700:
case 3431:
case 2583:
case 2342:
case 2528:
case 3090:
case 2262:
case 3563:
case 3677:
case 3978:
case 1462:
case 1578:
case 3066:
case 1830:
case 466:
case 2113:
case 2191:
case 2635:
case 2718:
case 162:
case 802:
case 32:
case 2175:
case 2261:
case 3156:
case 3728:
case 3189:
case 4074:
case 2848:
case 3137:
case 855:
case 4055:
case 2154:
case 3683:
case 3629:
case 1112:
case 2962:
case 1020:
case 3278:
case 2463:
case 3950:
case 3171:
case 2070:
case 3802:
case 1343:
case 513:
case 1761:
case 3172:
case 369:
case 1644:
case 39:
case 41:
case 909:
case 3195:
case 1762:
case 1699:
case 1351:
case 1906:
case 810:
case 3695:
case 3003:
case 1199:
case 517:
case 1005:
case 1144:
case 319:
case 2267:
case 3704:
case 334:
case 563:
case 580:
case 2469:
case 1352:
case 2706:
case 3440:
case 1612:
case 1269:
case 3404:
case 168:
case 808:
case 217:
case 3316:
case 3807:
case 619:
case 3129:
case 2820:
case 2654:
case 2406:
case 3740:
case 740:
case 1870:
case 3656:
case 429:
case 3689:
case 471:
case 3569:
case 396:
case 1100:
case 1376:
case 2588:
case 2691:
case 416:
case 2326:
case 2353:
case 263:
case 2540:
case 156:
case 3177:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753311602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,];
var gg_b = "1753311602/";

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
