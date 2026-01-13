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
case 880:
case 3718:
case 1234:
case 2203:
case 2451:
case 1938:
case 1372:
case 2772:
case 294:
case 3043:
case 1861:
case 1215:
case 1023:
case 1404:
case 2433:
case 537:
case 2121:
case 3604:
case 1835:
case 2333:
case 2083:
case 547:
case 398:
case 2476:
case 652:
case 1814:
case 2219:
case 325:
case 196:
case 2351:
case 3059:
case 1670:
case 201:
case 1318:
case 3108:
case 893:
case 3618:
case 3839:
case 3203:
case 1676:
case 3772:
case 2043:
case 656:
case 1139:
case 905:
case 192:
case 3433:
case 2604:
case 3704:
case 42:
case 3476:
case 1905:
case 669:
case 3841:
case 51:
case 1507:
case 1418:
case 3219:
case 225:
case 2135:
case 3351:
case 1821:
case 2059:
case 3417:
case 2561:
case 1274:
case 2095:
case 3062:
case 508:
case 2473:
case 533:
case 3632:
case 4018:
case 2336:
case 1736:
case 688:
case 97:
case 3200:
case 129:
case 461:
case 2373:
case 3521:
case 1026:
case 1432:
case 2910:
case 3791:
case 2022:
case 1107:
case 2206:
case 1630:
case 520:
case 722:
case 1202:
case 2535:
case 1617:
case 2417:
case 2508:
case 591:
case 3561:
case 3040:
case 3879:
case 1020:
case 2062:
case 1581:
case 1179:
case 1491:
case 4:
case 3436:
case 1042:
case 684:
case 2521:
case 3691:
case 471:
case 2046:
case 2807:
case 1391:
case 3206:
case 2175:
case 1717:
case 2080:
case 1730:
case 2330:
case 3535:
case 2328:
case 1728:
case 1488:
case 163:
case 4067:
case 2648:
case 1598:
case 3748:
case 2864:
case 924:
case 862:
case 2253:
case 834:
case 1245:
case 2184:
case 2158:
case 3013:
case 844:
case 3368:
case 320:
case 1668:
case 1388:
case 1354:
case 3292:
case 204:
case 1038:
case 2788:
case 3943:
case 343:
case 3688:
case 489:
case 3654:
case 3197:
case 2811:
case 2265:
case 2289:
case 3648:
case 900:
case 3077:
case 173:
case 1005:
case 1348:
case 3864:
case 3253:
case 3401:
case 3184:
case 2013:
case 1963:
case 4027:
case 2009:
case 2144:
case 2368:
case 3301:
case 709:
case 838:
case 1557:
case 803:
case 928:
case 25:
case 3788:
case 3754:
case 3428:
case 455:
case 995:
case 2197:
case 1448:
case 3265:
case 3811:
case 102:
case 1427:
case 337:
case 2387:
case 2037:
case 1787:
case 2010:
case 1999:
case 1564:
case 3946:
case 2922:
case 1960:
case 3494:
case 3767:
case 2898:
case 2667:
case 478:
case 713:
case 2544:
case 2995:
case 3016:
case 1511:
case 3962:
case 432:
case 464:
case 1157:
case 2256:
case 2487:
case 1647:
case 347:
case 1982:
case 1078:
case 2250:
case 237:
case 177:
case 640:
case 3010:
case 2946:
case 3922:
case 594:
case 1687:
case 2447:
case 757:
case 2494:
case 468:
case 3898:
case 2980:
case 2558:
case 2584:
case 3544:
case 1966:
case 501:
case 1467:
case 3940:
case 1794:
case 4088:
case 807:
case 2016:
case 31:
case 1524:
case 3256:
case 1012:
case 3986:
case 18:
case 247:
case 3727:
case 1747:
case 446:
case 3597:
case 2627:
case 1210:
case 1132:
case 3576:
case 1071:
case 513:
case 299:
case 2136:
case 2902:
case 668:
case 4039:
case 3475:
case 1906:
case 967:
case 798:
case 3607:
case 3212:
case 1056:
case 2891:
case 1307:
case 3375:
case 1817:
case 430:
case 2278:
case 3533:
case 646:
case 2779:
case 557:
case 2576:
case 851:
case 1050:
case 2093:
case 1836:
case 2832:
case 642:
case 98:
case 678:
case 1873:
case 2607:
case 2551:
case 2212:
case 3570:
case 3707:
case 3974:
case 1216:
case 2117:
case 3052:
case 2375:
case 632:
case 701:
case 1504:
case 1191:
case 1900:
case 1479:
case 2533:
case 3681:
case 811:
case 2176:
case 1277:
case 517:
case 3414:
case 1381:
case 1172:
case 3536:
case 3739:
case 860:
case 226:
case 3435:
case 4079:
case 3361:
case 427:
case 2308:
case 2934:
case 3085:
case 2151:
case 3335:
case 2530:
case 2517:
case 3170:
case 963:
case 3314:
case 1049:
case 1870:
case 1104:
case 124:
case 1614:
case 2238:
case 1721:
case 3029:
case 1481:
case 2641:
case 2681:
case 3176:
case 870:
case 3639:
case 128:
case 3781:
case 2536:
case 1089:
case 1339:
case 2435:
case 3069:
case 54:
case 2361:
case 195:
case 1876:
case 3308:
case 1761:
case 3090:
case 3934:
case 1735:
case 3530:
case 3408:
case 3517:
case 2804:
case 2170:
case 1833:
case 53:
case 1621:
case 3915:
case 3133:
case 1714:
case 222:
case 689:
case 1851:
case 2029:
case 3220:
case 4064:
case 708:
case 1457:
case 733:
case 1956:
case 24:
case 3266:
case 1295:
case 839:
case 1548:
case 253:
case 3798:
case 80:
case 6:
case 317:
case 445:
case 2187:
case 75:
case 484:
case 1894:
case 2260:
case 720:
case 1222:
case 209:
case 522:
case 435:
case 4011:
case 3993:
case 2226:
case 23:
case 1357:
case 858:
case 743:
case 2757:
case 1006:
case 3501:
case 2568:
case 849:
case 3657:
case 1847:
case 1887:
case 854:
case 2266:
case 791:
case 3867:
case 1000:
case 217:
case 488:
case 2528:
case 2147:
case 1498:
case 661:
case 33:
case 3002:
case 2501:
case 3985:
case 1003:
case 1424:
case 3444:
case 814:
case 737:
case 1567:
case 865:
case 456:
case 1965:
case 2128:
case 882:
case 2664:
case 1868:
case 3397:
case 1283:
case 62:
case 1931:
case 1154:
case 1324:
case 2611:
case 2724:
case 2484:
case 3888:
case 3854:
case 3263:
case 1953:
case 2594:
case 747:
case 3711:
case 1019:
case 2101:
case 3168:
case 3384:
case 3358:
case 3034:
case 2985:
case 1658:
case 2444:
case 1411:
case 3015:
case 599:
case 1364:
case 2497:
case 2764:
case 2255:
case 1992:
case 1243:
case 3664:
case 357:
case 2929:
case 1464:
case 2397:
case 71:
case 1989:
case 3611:
case 3724:
case 1925:
case 452:
case 1259:
case 3484:
case 992:
case 2854:
case 2624:
case 3594:
case 886:
case 3969:
case 3990:
case 3101:
case 2344:
case 457:
case 768:
case 3907:
case 1975:
case 256:
case 4015:
case 86:
case 4034:
case 2300:
case 736:
case 1700:
case 1577:
case 154:
case 3273:
case 2538:
case 2979:
case 352:
case 625:
case 1291:
case 3178:
case 1878:
case 774:
case 698:
case 1116:
case 2230:
case 2112:
case 3057:
case 540:
case 2907:
case 3810:
case 2774:
case 3837:
case 778:
case 3674:
case 1513:
case 1600:
case 149:
case 1137:
case 1110:
case 3300:
case 1232:
case 87:
case 279:
case 715:
case 139:
case 2273:
case 369:
case 3979:
case 581:
case 2178:
case 3602:
case 1509:
case 3230:
case 10:
case 1302:
case 2057:
case 245:
case 1603:
case 1935:
case 1113:
case 3303:
case 4074:
case 2615:
case 805:
case 3715:
case 1914:
case 118:
case 2105:
case 2064:
case 3981:
case 755:
case 1097:
case 3809:
case 212:
case 890:
case 2011:
case 1109:
case 235:
case 2270:
case 3319:
case 3512:
case 3403:
case 3251:
case 3024:
case 1619:
case 1805:
case 345:
case 288:
case 1334:
case 2734:
case 2303:
case 1921:
case 1272:
case 2715:
case 821:
case 931:
case 527:
case 3105:
case 2981:
case 3939:
case 789:
case 2233:
case 2809:
case 1204:
case 1415:
case 3011:
case 1719:
case 335:
case 3270:
case 1908:
case 2319:
case 2024:
case 2251:
case 384:
case 4090:
case 4045:
case 2350:
case 3555:
case 1393:
case 2895:
case 2840:
case 3371:
case 426:
case 7:
case 2523:
case 1882:
case 1267:
case 3456:
case 2886:
case 1162:
case 3957:
case 643:
case 3752:
case 1826:
case 1180:
case 3563:
case 151:
case 1493:
case 65:
case 3126:
case 3880:
case 2450:
case 771:
case 3471:
case 2247:
case 3199:
case 2998:
case 1583:
case 1543:
case 3793:
case 2555:
case 2862:
case 691:
case 2287:
case 1186:
case 3079:
case 3840:
case 1650:
case 2371:
case 919:
case 3166:
case 19:
case 2456:
case 3886:
case 3120:
case 2957:
case 1352:
case 3294:
case 2846:
case 422:
case 3652:
case 2356:
case 1756:
case 512:
case 3142:
case 1227:
case 2126:
case 2471:
case 3247:
case 2199:
case 2160:
case 4085:
case 3998:
case 710:
case 2155:
case 3228:
case 3081:
case 2039:
case 1143:
case 2389:
case 1631:
case 3465:
case 1997:
case 1248:
case 800:
case 1496:
case 223:
case 3353:
case 1540:
case 959:
case 1823:
case 499:
case 3745:
case 3566:
case 1061:
case 3790:
case 948:
case 2669:
case 3843:
case 240:
case 972:
case 1485:
case 3685:
case 3201:
case 3453:
case 2268:
case 170:
case 1035:
case 828:
case 1385:
case 938:
case 2425:
case 2163:
case 966:
case 1792:
case 1649:
case 895:
case 4052:
case 2392:
case 2526:
case 2489:
case 2729:
case 1665:
case 1329:
case 2560:
case 1396:
case 2041:
case 2964:
case 3365:
case 2599:
case 3155:
case 2228:
case 3039:
case 3492:
case 2465:
case 2123:
case 2449:
case 323:
case 2353:
case 556:
case 3911:
case 1753:
case 934:
case 1369:
case 1625:
case 4093:
case 1008:
case 962:
case 1390:
case 985:
case 2924:
case 2843:
case 3669:
case 2520:
case 3645:
case 1562:
case 1855:
case 1445:
case 160:
case 2685:
case 2453:
case 3883:
case 1469:
case 1984:
case 330:
case 1580:
case 111:
case 1863:
case 381:
case 2696:
case 2859:
case 3526:
case 569:
case 3729:
case 3796:
case 2349:
case 3560:
case 1749:
case 1546:
case 3964:
case 2629:
case 970:
case 3777:
case 2048:
case 103:
case 3904:
case 2677:
case 3438:
case 368:
case 1239:
case 336:
case 1313:
case 802:
case 3103:
case 166:
case 1574:
case 1409:
case 3208:
case 1970:
case 2235:
case 3609:
case 752:
case 1413:
case 1502:
case 2918:
case 2709:
case 52:
case 779:
case 148:
case 1638:
case 2405:
case 264:
case 1819:
case 232:
case 1241:
case 172:
case 374:
case 3221:
case 3088:
case 159:
case 1933:
case 1115:
case 1377:
case 342:
case 2500:
case 3305:
case 911:
case 2904:
case 1028:
case 1605:
case 3834:
case 699:
case 236:
case 2103:
case 3815:
case 2609:
case 246:
case 769:
case 3709:
case 3506:
case 315:
case 1976:
case 185:
case 3214:
case 364:
case 332:
case 1477:
case 806:
case 2338:
case 4016:
case 274:
case 2088:
case 2054:
case 162:
case 2874:
case 3710:
case 951:
case 716:
case 2991:
case 2610:
case 107:
case 3737:
case 4077:
case 2067:
case 5:
case 2312:
case 289:
case 571:
case 2519:
case 355:
case 622:
case 2275:
case 1047:
case 3378:
case 1806:
case 3027:
case 2802:
case 2710:
case 2478:
case 1310:
case 3991:
case 1337:
case 1973:
case 2737:
case 745:
case 3412:
case 3503:
case 433:
case 1174:
case 712:
case 443:
case 389:
case 1207:
case 2106:
case 3519:
case 1612:
case 3275:
case 510:
case 3716:
case 45:
case 784:
case 2932:
case 2378:
case 1410:
case 1778:
case 735:
case 1936:
case 3258:
case 4086:
case 1968:
case 2890:
case 3323:
case 2845:
case 1264:
case 2869:
case 4095:
case 1623:
case 3954:
case 3131:
case 2355:
case 2189:
case 2743:
case 1343:
case 1196:
case 3783:
case 3423:
case 3004:
case 193:
case 2948:
case 2683:
case 3885:
case 2455:
case 210:
case 3829:
case 555:
case 2363:
case 2759:
case 371:
case 918:
case 1865:
case 2244:
case 261:
case 986:
case 3896:
case 3659:
case 3463:
case 2:
case 141:
case 2284:
case 653:
case 727:
case 1190:
case 1723:
case 1076:
case 3571:
case 4062:
case 896:
case 965:
case 2643:
case 2954:
case 1825:
case 3297:
case 1383:
case 2783:
case 1033:
case 2004:
case 2165:
case 3683:
case 2885:
case 3455:
case 180:
case 1224:
case 1051:
case 3556:
case 131:
case 1892:
case 3244:
case 1663:
case 361:
case 1720:
case 2762:
case 3893:
case 3525:
case 2695:
case 1480:
case 3662:
case 1766:
case 494:
case 1569:
case 954:
case 3740:
case 1994:
case 2553:
case 3795:
case 1947:
case 1298:
case 3499:
case 1446:
case 2150:
case 1193:
case 3927:
case 2531:
case 3786:
case 1346:
case 1699:
case 2622:
case 1660:
case 1030:
case 4083:
case 2420:
case 2967:
case 546:
case 1017:
case 723:
case 1666:
case 3762:
case 2893:
case 3640:
case 657:
case 4043:
case 939:
case 829:
case 1340:
case 3553:
case 2795:
case 1422:
case 740:
case 2460:
case 90:
case 2032:
case 2171:
case 1782:
case 2589:
case 2426:
case 578:
case 2927:
case 542:
case 2786:
case 3442:
case 2482:
case 3746:
case 4059:
case 1642:
case 1760:
case 730:
case 2722:
case 1486:
case 425:
case 2646:
case 2326:
case 3622:
case 2592:
case 515:
case 3780:
case 498:
case 22:
case 1585:
case 1440:
case 1495:
case 2680:
case 1152:
case 3961:
case 2908:
case 857:
case 9:
case 46:
case 1138:
case 3510:
case 318:
case 971:
case 1715:
case 1276:
case 2315:
case 386:
case 1813:
case 2272:
case 3537:
case 2703:
case 1303:
case 4000:
case 1734:
case 3113:
case 707:
case 3603:
case 188:
case 365:
case 3434:
case 2838:
case 2619:
case 0:
case 813:
case 2961:
case 3719:
case 2044:
case 1270:
case 3908:
case 275:
case 382:
case 1011:
case 3415:
case 1578:
case 1939:
case 314:
case 2510:
case 1941:
case 1105:
case 910:
case 2914:
case 3315:
case 3177:
case 286:
case 3921:
case 1615:
case 2537:
case 3703:
case 3084:
case 3058:
case 2113:
case 1877:
case 1634:
case 145:
case 2218:
case 853:
case 748:
case 3606:
case 2509:
case 3116:
case 2706:
case 2474:
case 3291:
case 1816:
case 84:
case 152:
case 354:
case 83:
case 490:
case 3577:
case 2232:
case 2110:
case 2600:
case 249:
case 1236:
case 738:
case 2374:
case 809:
case 1406:
case 3975:
case 1774:
case 785:
case 30:
case 2606:
case 734:
case 1217:
case 2878:
case 3706:
case 1602:
case 2291:
case 1979:
case 3812:
case 4019:
case 1098:
case 2700:
case 2577:
case 3232:
case 4003:
case 358:
case 3600:
case 483:
case 3137:
case 1674:
case 3402:
case 156:
case 3513:
case 2975:
case 1810:
case 1365:
case 1349:
case 1542:
case 3665:
case 3329:
case 2863:
case 1859:
case 2288:
case 2021:
case 2254:
case 2580:
case 3159:
case 211:
case 2984:
case 370:
case 2958:
case 3035:
case 968:
case 2469:
case 2490:
case 1685:
case 1520:
case 3485:
case 1924:
case 3725:
case 2345:
case 3823:
case 4050:
case 1790:
case 667:
case 2369:
case 1449:
case 3248:
case 2689:
case 3631:
case 1123:
case 3997:
case 3789:
case 3586:
case 1228:
case 2731:
case 1041:
case 3765:
case 3546:
case 1964:
case 1599:
case 1796:
case 4056:
case 1560:
case 2396:
case 3749:
case 1729:
case 2665:
case 2329:
case 181:
case 2792:
case 3254:
case 1526:
case 3021:
case 3288:
case 1489:
case 3580:
case 68:
case 1425:
case 1163:
case 978:
case 270:
case 3958:
case 130:
case 50:
case 1883:
case 1268:
case 3469:
case 3445:
case 3490:
case 932:
case 2485:
case 2653:
case 4071:
case 1669:
case 964:
case 3008:
case 3390:
case 2944:
case 1911:
case 3753:
case 3625:
case 2540:
case 2248:
case 2496:
case 3689:
case 123:
case 2997:
case 1582:
case 1039:
case 2143:
case 2789:
case 1389:
case 915:
case 3731:
case 1160:
case 2122:
case 3583:
case 1199:
case 2227:
case 1126:
case 2756:
case 2842:
case 2559:
case 575:
case 3826:
case 1563:
case 3656:
case 899:
case 1007:
case 3860:
case 1957:
case 29:
case 1456:
case 3162:
case 2140:
case 2195:
case 2452:
case 1371:
case 4025:
case 2771:
case 1693:
case 1182:
case 1862:
case 1287:
case 2186:
case 3393:
case 606:
case 3750:
case 495:
case 1998:
case 3122:
case 514:
case 2583:
case 1247:
case 731:
case 3227:
case 1450:
case 4049:
case 3842:
case 3756:
case 582:
case 2180:
case 251:
case 4065:
case 2075:
case 1294:
case 602:
case 780:
case 1822:
case 39:
case 1120:
case 3452:
case 2267:
case 3866:
case 989:
case 1523:
case 1895:
case 1840:
case 3650:
case 2393:
case 3820:
case 3186:
case 3543:
case 2750:
case 127:
case 2936:
case 3678:
case 1027:
case 219:
case 593:
case 1932:
case 1378:
case 2778:
case 3806:
case 3047:
case 2612:
case 2207:
case 1616:
case 3712:
case 2102:
case 402:
case 624:
case 2174:
case 786:
case 3534:
case 4005:
case 473:
case 3930:
case 2337:
case 1737:
case 3515:
case 81:
case 2678:
case 1802:
case 3437:
case 600:
case 3410:
case 2806:
case 2047:
case 837:
case 1275:
case 531:
case 927:
case 1312:
case 2712:
case 3102:
case 2917:
case 541:
case 3174:
case 847:
case 1067:
case 463:
case 1412:
case 1503:
case 2930:
case 3973:
case 1991:
case 1100:
case 1874:
case 3310:
case 359:
case 1338:
case 174:
case 3241:
case 372:
case 348:
case 4012:
case 2976:
case 2001:
case 3068:
case 48:
case 754:
case 3502:
case 3413:
case 804:
case 1208:
case 1613:
case 3574:
case 244:
case 3803:
case 303:
case 3705:
case 2115:
case 2933:
case 2377:
case 1777:
case 1500:
case 362:
case 3738:
case 132:
case 272:
case 940:
case 248:
case 3976:
case 164:
case 739:
case 115:
case 1918:
case 2309:
case 1709:
case 2413:
case 923:
case 4078:
case 1235:
case 808:
case 1815:
case 1261:
case 266:
case 749:
case 981:
case 2574:
case 758:
case 2313:
case 376:
case 1713:
case 3605:
case 1677:
case 3028:
case 2803:
case 1305:
case 178:
case 2705:
case 142:
case 3115:
case 85:
case 930:
case 2152:
case 1680:
case 3462:
case 1156:
case 3030:
case 3380:
case 621:
case 2987:
case 3660:
case 548:
case 2486:
case 572:
case 3742:
case 397:
case 1646:
case 2322:
case 1360:
case 770:
case 1482:
case 2799:
case 2642:
case 3346:
case 3193:
case 2036:
case 503:
case 1426:
case 538:
case 1382:
case 3298:
case 1032:
case 3446:
case 2422:
case 3947:
case 2340:
case 2395:
case 1795:
case 1662:
case 979:
case 3871:
case 3590:
case 2620:
case 1525:
case 566:
case 3480:
case 3362:
case 2666:
case 3720:
case 952:
case 3152:
case 3440:
case 3495:
case 3585:
case 2462:
case 3257:
case 1420:
case 1780:
case 1622:
case 3987:
case 2660:
case 3529:
case 2699:
case 3322:
case 2626:
case 1549:
case 711:
case 562:
case 2346:
case 3799:
case 3386:
case 3036:
case 1150:
case 1686:
case 3340:
case 576:
case 3395:
case 2994:
case 1366:
case 2871:
case 2590:
case 3620:
case 1640:
case 1695:
case 3850:
case 3666:
case 2362:
case 969:
case 3070:
case 2663:
case 3849:
case 4042:
case 1896:
case 2892:
case 3763:
case 3359:
case 1829:
case 2928:
case 988:
case 751:
case 3196:
case 1149:
case 2033:
case 1550:
case 4066:
case 687:
case 1954:
case 3755:
case 1131:
case 507:
case 1323:
case 3968:
case 2190:
case 1153:
case 3831:
case 241:
case 1258:
case 2070:
case 161:
case 429:
case 4026:
case 2359:
case 3892:
case 110:
case 3224:
case 1455:
case 380:
case 3928:
case 2443:
case 1297:
case 2196:
case 66:
case 1189:
case 1743:
case 3825:
case 3593:
case 825:
case 3483:
case 2853:
case 984:
case 1890:
case 1845:
case 1571:
case 2968:
case 3145:
case 3190:
case 3901:
case 3169:
case 2831:
case 912:
case 1463:
case 3889:
case 2459:
case 4033:
case 3202:
case 1080:
case 1175:
case 2717:
case 724:
case 480:
case 917:
case 3060:
case 1791:
case 2673:
case 675:
case 1807:
case 431:
case 3875:
case 3026:
case 1521:
case 441:
case 3082:
case 563:
case 2491:
case 1632:
case 2581:
case 3539:
case 4076:
case 2912:
case 686:
case 2020:
case 1062:
case 618:
case 506:
case 3274:
case 1508:
case 2066:
case 1535:
case 3730:
case 2202:
case 614:
case 953:
case 493:
case 2630:
case 2060:
case 94:
case 1514:
case 1022:
case 3391:
case 700:
case 682:
case 2875:
case 1373:
case 2026:
case 665:
case 2773:
case 1436:
case 3042:
case 4070:
case 3636:
case 82:
case 1732:
case 3179:
case 2736:
case 1086:
case 2539:
case 795:
case 3912:
case 3020:
case 2274:
case 1879:
case 1095:
case 909:
case 2821:
case 396:
case 2770:
case 3814:
case 2507:
case 1370:
case 125:
case 4073:
case 2141:
case 198:
case 3733:
case 3579:
case 3861:
case 3404:
case 3023:
case 567:
case 3372:
case 2676:
case 3234:
case 1161:
case 1909:
case 2318:
case 1470:
case 1718:
case 3063:
case 296:
case 639:
case 2751:
case 1219:
case 1704:
case 3141:
case 1476:
case 2733:
case 58:
case 2472:
case 2835:
case 3633:
case 60:
case 2579:
case 871:
case 2404:
case 3808:
case 3139:
case 3676:
case 194:
case 1203:
case 1451:
case 1618:
case 2234:
case 658:
case 2747:
case 721:
case 1347:
case 28:
case 670:
case 3157:
case 1962:
case 434:
case 2794:
case 1394:
case 596:
case 3511:
case 3252:
case 462:
case 1558:
case 2198:
case 476:
case 2687:
case 1447:
case 367:
case 889:
case 3926:
case 2293:
case 783:
case 137:
case 277:
case 2078:
case 660:
case 1986:
case 611:
case 38:
case 705:
case 2647:
case 448:
case 3012:
case 1256:
case 472:
case 3920:
case 3794:
case 1940:
case 3467:
case 1995:
case 2511:
case 3966:
case 459:
case 999:
case 403:
case 1898:
case 1922:
case 790:
case 2960:
case 2564:
case 2926:
case 3293:
case 855:
case 2787:
case 592:
case 3942:
case 377:
case 1654:
case 3923:
case 1688:
case 143:
case 2296:
case 1824:
case 1943:
case 3388:
case 651:
case 2601:
case 15:
case 878:
case 1368:
case 1144:
case 3701:
case 3897:
case 2768:
case 2111:
case 922:
case 864:
case 4087:
case 3269:
case 1468:
case 1748:
case 2005:
case 2348:
case 2628:
case 3598:
case 787:
case 1289:
case 2858:
case 3728:
case 2923:
case 3296:
case 2844:
case 1249:
case 926:
case 76:
case 2388:
case 2038:
case 1754:
case 3955:
case 4047:
case 3601:
case 3557:
case 2701:
case 1301:
case 191:
case 1184:
case 1158:
case 407:
case 874:
case 2245:
case 2269:
case 1401:
case 846:
case 2598:
case 1077:
case 2454:
case 263:
case 1328:
case 1231:
case 1573:
case 3721:
case 3065:
case 122:
case 1096:
case 3049:
case 3870:
case 2833:
case 729:
case 1461:
case 2735:
case 823:
case 1335:
case 3708:
case 2876:
case 295:
case 1361:
case 881:
case 2761:
case 3053:
case 2608:
case 1435:
case 2213:
case 1739:
case 1536:
case 3031:
case 3172:
case 1205:
case 95:
case 830:
case 3277:
case 2532:
case 3851:
case 2481:
case 1641:
case 3092:
case 1321:
case 1238:
case 991:
case 2065:
case 2104:
case 451:
case 3341:
case 2591:
case 3621:
case 2870:
case 3833:
case 3209:
case 2635:
case 1517:
case 56:
case 2903:
case 300:
case 3735:
case 1151:
case 3876:
case 395:
case 2919:
case 1069:
case 904:
case 2053:
case 1421:
case 3089:
case 3339:
case 2381:
case 2172:
case 2031:
case 1781:
case 328:
case 3441:
case 1176:
case 2191:
case 2900:
case 796:
case 2504:
case 4021:
case 1117:
case 1375:
case 827:
case 648:
case 3056:
case 1212:
case 603:
case 1832:
case 3906:
case 4008:
case 3071:
case 3132:
case 1576:
case 2379:
case 2830:
case 1173:
case 3479:
case 1278:
case 470:
case 1707:
case 1570:
case 1891:
case 685:
case 2056:
case 662:
case 505:
case 590:
case 2518:
case 2407:
case 1902:
case 1136:
case 676:
case 3050:
case 2071:
case 3379:
case 91:
case 1344:
case 1168:
case 1624:
case 1711:
case 2259:
case 1854:
case 1888:
case 3644:
case 2925:
case 845:
case 2989:
case 3931:
case 3188:
case 3868:
case 2797:
case 2801:
case 3283:
case 925:
case 1255:
case 2364:
case 113:
case 1497:
case 3949:
case 1996:
case 884:
case 2658:
case 449:
case 3003:
case 458:
case 2828:
case 998:
case 767:
case 3784:
case 812:
case 1985:
case 1990:
case 1101:
case 3744:
case 2953:
case 454:
case 1484:
case 1458:
case 3259:
case 221:
case 2644:
case 3925:
case 3989:
case 2154:
case 2697:
case 1547:
case 816:
case 2868:
case 3464:
case 3801:
case 3243:
case 157:
case 1128:
case 3364:
case 2965:
case 901:
case 2949:
case 1015:
case 1223:
case 3411:
case 1848:
case 1358:
case 1384:
case 2758:
case 390:
case 693:
case 26:
case 3006:
case 1501:
case 1827:
case 2280:
case 37:
case 1993:
case 482:
case 2588:
case 2554:
case 3127:
case 2950:
case 3971:
case 465:
case 3894:
case 3286:
case 117:
case 706:
case 4084:
case 2398:
case 2000:
case 3548:
case 3295:
case 3240:
case 1266:
case 2167:
case 2887:
case 1220:
case 2262:
case 2006:
case 36:
case 680:
case 13:
case 3554:
case 3588:
case 475:
case 3950:
case 1260:
case 3246:
case 3498:
case 1698:
case 641:
case 1867:
case 3398:
case 2548:
case 153:
case 2956:
case 14:
case 2457:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1768316402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,];
var gg_b = "1768316402/";

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
